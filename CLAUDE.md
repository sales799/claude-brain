# Claude Brain

Central configuration and context repository for the Talpro Universe projects.

## MCP Servers

### Hostinger API (`hostinger-mcp`)

Provides access to the Hostinger API via the `hostinger-api-mcp` MCP server. This enables Claude Code to manage Hostinger resources (domains, DNS, hosting, emails, etc.) directly through tool calls.

**Configuration:** `.mcp.json`

**How it works:**
- On session start, Claude Code prompts you for your Hostinger API token
- The token is passed as an environment variable to the MCP server process
- The token is never stored in the repository — it lives only in the running session

**Getting your API token:**
1. Log in to your Hostinger account
2. Navigate to Account > API Tokens
3. Generate or copy your token
4. Paste it when Claude Code prompts at session start

## Files

| File | Purpose |
|------|---------|
| `.mcp.json` | MCP server configuration (Hostinger API) |
| `context.md` | Auto-synced project context (do not edit manually) |
| `CLAUDE.md` | This file — repo documentation for Claude Code |
