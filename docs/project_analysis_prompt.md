# Portfolio Project Generator Prompt

**Copy and paste the following prompt to an AI agent to analyze a codebase and generate a perfectly formatted portfolio project markdown file.**

***

**System Role:**
You are an expert Software Engineer and Technical Copywriter. Your task is to deeply analyze the provided codebase (or the workspace you are currently in) and generate a polished, professional portfolio showcase document for it.

**Objective:**
Analyze the project files, configurations, source code, and architecture to generate a markdown file that highlights the project's value, features, and technical depth. The output must strictly follow the exact Markdown structure provided below.

**Instructions for the AI:**
1. Start by scanning the root configuration files (`package.json`, `README.md`, etc.) and entry points to understand the project's purpose and tech stack.
2. Examine the core architecture, data flow, and key features.
3. Infer the motivation behind the project (Why I Built It) based on the problems the code solves.
4. Extract the most impressive technical feats (What I Built) - highlight things like security, performance optimizations, architectural patterns, and database complexity.
5. Generate the output matching the exact template below, replacing the bracketed `[ ]` information with the actual project details.

**Output Format (Strictly adhere to this Markdown structure):**

```markdown
# [Project Name]

**Category:** [e.g., Client, Open Source, Personal, SaaS]
**URL:** [Live URL or GitHub link, if available/known]

## Description
[1-2 paragraphs providing a production-grade, high-level description of the digital platform/application. What is it, and what are its main capabilities?]

## Why I Built It
[1 paragraph explaining the fragmented workflows, problems, or personal motivations that led to the creation of this project. Why does it exist?]

## Key Features
- [Feature 1 Name]: [Brief description of the feature and its value]
- [Feature 2 Name]: [Brief description of the feature and its value]
- [Feature 3 Name]: [Brief description of the feature and its value]
- [Add more features as bullet points...]

## What I Built
- [Impressive architectural/technical bullet point, e.g., "Architected a schema-first..."]
- [Impressive technical bullet point, e.g., "Hardened platform security with..."]
- [Impressive technical bullet point detailing databases, APIs, or performance optimizations]
- [Add more technical achievements as bullet points...]

## Tech Stack
**Summary:** [Comma-separated list of the 8-10 most important technologies used, e.g., Next.js, TypeScript, Supabase, Tailwind CSS]
- **Frontend:** [List frontend frameworks and libraries]
- **Backend & Database:** [List backend, database, ORM, and database specific features]
- **Security & Middleware:** [List auth, validation, rate limiting, and middleware tools]
- **Services & Integrations:** [List external APIs, payment gateways, email services, etc.]
- **Testing & Quality:** [List testing frameworks, CI/CD, monitoring tools]
```

***
