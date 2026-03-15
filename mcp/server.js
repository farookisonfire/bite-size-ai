// MCP server for BiteSizeAI
//
// How MCP servers work:
//   1. Claude Code launches this process and connects over stdio
//   2. Claude sends JSON requests asking "what tools do you have?" and "call this tool"
//   3. This server responds with tool definitions and results
//   4. The MCP SDK handles all the JSON protocol — we just define tools and handlers

import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { registerRefreshArchive } from "./tools/refresh-archive.js";

// ─── MCP Server Setup ─────────────────────────────────────────────────────────

const server = new McpServer({
  name: "bitesize-mcp",
  version: "1.0.0",
});

// ─── Register Tools ───────────────────────────────────────────────────────────

registerRefreshArchive(server);

// ─── Start the Server ─────────────────────────────────────────────────────────
// StdioServerTransport connects the server to Claude Code via stdin/stdout.
// This is the standard transport for local MCP servers.

const transport = new StdioServerTransport();
await server.connect(transport);
