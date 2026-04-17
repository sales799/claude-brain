// ssh-login-classifier.js
//
// Classifies SSH login events for the Talpro CTO Telegram bot.
// Drop this in alongside index.js, then:
//
//   const { classifyLogin, formatLoginAlert } = require('./ssh-login-classifier');
//
// and use classifyLogin({ fingerprint, sourceIp }) wherever the bot currently
// formats the `🔐 SSH login on ...` message.
//
// Update KEY_LABELS / NET_LABELS when you add a new key or a new trusted source.

'use strict';

// Known SSH key fingerprints → (label, human).
// human=false means "this is routine automation — don't wake the CTO".
const KEY_LABELS = {
  'SHA256:mfS7NXbHd8FORLjnCzaOkR0aBL7n/YVQrjKRZbx5XNM': { label: '🤖 CI Deploy (github-actions-talpro)',    human: false },
  'SHA256:hB/YLfb5yj7/aszaxVBFfBUkm+nEOHI5/CL4GDM8TYw': { label: '🤖 CI Deploy (github-actions-deploy)',     human: false },
  'SHA256:w/Ch2k+P3kUFxE6G+mxdvPl1jq+Q3I4VrMVPAVn6xT8': { label: '🤖 CI Deploy (github-actions)',            human: false },
  'SHA256:6TE5VzY0XSRVMWTB/O9MTiKYpEH1feMlX6USuorNpBQ': { label: '🤖 CI Deploy (hcitalks)',                  human: false },
  'SHA256:Ashy7es5SbVCilTVqgb+DvosZ/tlTlBXbaj6hpai0Gk': { label: '🤖 CI Deploy (hcitalks-deploy)',           human: false },
  'SHA256:FoVsN2p4imo8QU/iwI357R/UbqDfZqTwX3czTFMTLxE': { label: '🤖 CI Deploy (competeiq)',                 human: false },
  'SHA256:DTTFyk53yPqjt7DsNVdz6mdxP3PhmAyCg19krjIdB8A': { label: '🤖 Deploy key (talpro-hp)',                human: false },
  'SHA256:4Aavk2O5zGIfwlzDtstmO4pazs2OeN2+54kdJId6hZM': { label: '🤖 Deploy key (hr@ELOVIA)',                human: false },
  'SHA256:O6LKNRGynIwcDddHrO/XDI40BFW3mb/zE6SEmCZHaLw': { label: '⚙️  Local automation (bhaskar@talpro.in)', human: false },
  'SHA256:2n/+PgMK2W/XibXqFTutu0PuERaOf2skIipqtN3vMQQ': { label: '🛠️  Hostinger panel',                      human: false },

  'SHA256:KjLq6+We+YvOivSFBYqNOv0jRF1s3gh2VSb6AV6LKCo': { label: '👤 CEO (macmini@talpro)',                 human: true },
  'SHA256:avBNxcogddYOFs0lAOVju4lSEUs5hBbeDigtVOW9plw': { label: '👤 CEO (Talpros-Mac-mini, RSA)',          human: true },
  'SHA256:zEBjajHFhA+Ya3pva+J+ViVvO7YqbCnoS0QWC5UqGEI': { label: '👤 Bhaskar (MacBook Air)',                human: true },
};

// IP → label fallback when the key isn't in the map. Still firing, just labelled.
const NET_LABELS = [
  { test: (ip) => ip === '169.254.0.1',     label: '🛠️  Hostinger panel (loopback)', human: false },
  { test: (ip) => ip === '127.0.0.1',       label: '🛠️  Loopback',                    human: false },
  { test: (ip) => ip.startsWith('100.'),    label: '🔗 Tailscale',                    human: false },
];

function classifyLogin({ fingerprint, sourceIp }) {
  if (fingerprint && KEY_LABELS[fingerprint]) return KEY_LABELS[fingerprint];
  for (const rule of NET_LABELS) {
    if (rule.test(sourceIp || '')) return { label: rule.label, human: rule.human };
  }
  return { label: '❗ UNKNOWN KEY — investigate', human: true };
}

// Drop-in replacement for the current alert formatter.
// evt must contain: { host, user, ip, time, keyFingerprint }
function formatLoginAlert(evt) {
  const { label, human } = classifyLogin({
    fingerprint: evt.keyFingerprint,
    sourceIp: evt.ip,
  });
  const header = human ? '🔐 SSH login' : '✅ SSH login (routine)';
  return {
    human,
    text: [
      `${header} on ${evt.host}`,
      `Who:  ${label}`,
      `User: ${evt.user}`,
      `From: ${evt.ip}`,
      `Time: ${evt.time}`,
      `Key:  ${evt.keyFingerprint}`,
    ].join('\n'),
  };
}

module.exports = { classifyLogin, formatLoginAlert, KEY_LABELS };
