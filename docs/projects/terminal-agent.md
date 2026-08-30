# Terminal Agent (KRISH)

**Category:** Personal
**URL:** https://github.com/kr1shnac/my-first-terminal-agent

## Description
KRISH is a terminal-based AI coding agent built in Python that connects to Large Language Models via OpenRouter. It equips the model with a robust set of tools to interact with local project files, enabling it to read, write, and modify code, execute shell commands, and manage directories. The application uses a multi-step execution loop to handle complex developer tasks directly within a clean terminal interface.

## Why I Built It
I built this project to deeply understand how terminal AI agents work at the implementation level. I wanted to gain first-principles knowledge of API integration, tool calling, conversation history management, and multi-step agent workflows. By building this entirely by hand without using AI assistance, I was able to master the core architectural patterns behind modern autonomous agents.

## Key Features
- **Tool-Augmented LLM**: Grants the AI capabilities to read, write, edit files, list directories, and run shell commands directly on the host machine.
- **Multi-step Task Execution**: Features an inner agent loop that continuously processes tool calls and results until the user's task is successfully completed.
- **Conversation Memory**: Maintains consistent conversation state by persisting user messages, tool calls, and execution results throughout the session.
- **Surgical File Editing**: Includes a specialized `edit_file` tool to replace specific text segments safely without rewriting entire files.
- **Rich Terminal UI**: Utilizes the `rich` library to render formatted markdown, display execution previews, and present a clean conversational interface.

## What I Built
- Architected a multi-loop agentic workflow capable of parsing, dispatching, and executing sequential function calls from the LLM.
- Integrated the OpenRouter API and OpenAI Python SDK to communicate seamlessly with advanced models like `poolside/laguna-s-2.1`.
- Engineered a robust Tool Dispatcher that securely maps dynamic LLM function requests to local Python functions for file and system operations.
- Implemented robust error handling for API failures, file missing errors, and tool execution exceptions to ensure continuous agent operation.
- Designed a lightweight in-memory state management system to pass contextual history (user prompts, tool arguments, and results) back to the LLM.

## Tech Stack
**Summary:** Python, OpenAI SDK, OpenRouter, python-dotenv, Rich
- **Frontend:** Rich (Terminal User Interface)
- **Backend & Database:** Python (Core Logic & File System Operations)
- **Security & Middleware:** python-dotenv (Environment Variable Management)
- **Services & Integrations:** OpenRouter API, OpenAI Python SDK
- **Testing & Quality:** Subprocess (for local shell execution testing)
