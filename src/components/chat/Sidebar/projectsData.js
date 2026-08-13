import imgAnalysis from '../../../assets/profesional_view/images/Subtextai/img/analysis.png';
import imgAudit from '../../../assets/profesional_view/images/Subtextai/img/audit.png';
import imgReplay from '../../../assets/profesional_view/images/Subtextai/img/replay.png';
import imgTelemetry from '../../../assets/profesional_view/images/Subtextai/img/telemetry.png';
import imgNarekDashboard from '../../../assets/profesional_view/images/Narek/img/Dashboard.png';
import imgNarekAgentConfig from '../../../assets/profesional_view/images/Narek/img/AgentDetail_Configuration.png';
import imgNarekExecTrace from '../../../assets/profesional_view/images/Narek/img/RunDetails_ExecutionTrace.png';

export const PROJECTS = [
    {
        id: 'narek',
        title: 'Narek',
        subtitle: 'Enterprise AI Agent Platform',
        caseStudy: {
            tagline: 'Infrastructure for building, orchestrating, and governing enterprise AI agents.',
            description: 'A platform for running, orchestrating, and governing AI agents — built for engineering teams that need agent behavior backed by real infrastructure: a runtime, retrieval and memory layers, tool execution, and policy-based governance.',
            tags: ['AI', 'Spring Boot', 'Full-stack', 'Docker'],
            github: 'https://github.com/HeilyMadelay-hub/Narek',
            heroScreenshotIndex: 0,

            problem: {
                headline: 'Building an AI agent is easy. Operating one is not.',
                description: 'Runtime orchestration, retrieval, prompt versioning, tool execution, conversation memory, access control, and execution traceability are all required before an agent can be trusted with a real workload. Most teams end up building fragile, one-off versions of each, tied to a single project and a single model provider.',
                flow: ['Agent logic', 'Infrastructure gap', 'Fragile one-offs'],
            },

            capabilities: [
                {
                    title: 'Agent Runtime & Orchestration',
                    description: 'Executes AI agents and coordinates their workflows end to end — with retrieval, memory, tool access, and policy enforcement built into the execution layer.',
                    screenshotIndex: 0,
                },
                {
                    title: 'RAG & Knowledge Management',
                    description: 'Document ingestion and vector search over PostgreSQL + pgvector to ground agent responses in retrieved knowledge. Agents retrieve from an organized knowledge base, not raw files.',
                    screenshotIndex: 1,
                },
                {
                    title: 'Execution Traceability',
                    description: 'Every agent run is recorded end to end — from retrieval to response — for audit and debugging. Full traces, logs, and metrics for every execution.',
                    screenshotIndex: 2,
                },
            ],

            insight: {
                message: '"Configure an agent, trigger it, inspect the result."',
                analysis: {
                    'Runtime': 'Spring AI + Ollama',
                    'Retrieval': 'pgvector HNSW',
                    'Governance': 'Policy Engine',
                    'Trace': 'Full execution log',
                },
                evidence: 'The platform abstracts agent execution behind a runtime that handles retrieval, memory, tool access, and policy enforcement. Each run is fully traceable — the user configures an agent from the dashboard, triggers it, and inspects the complete execution trace afterward.',
                isIllustrative: true,
            },

            philosophy: {
                headline: 'Build AI agents, not chatbots.',
                description: 'Narek provides the infrastructure layer underneath AI applications: agent execution, knowledge retrieval, prompt management, memory, tool access, and governance — so teams can build applications on top without reimplementing them for every project.',
                pillars: [
                    { label: 'Provider-agnostic', description: 'No hard dependency on a single model vendor — Spring AI decouples agent logic from the LLM backend.' },
                    { label: 'Governed', description: 'Access control and observability are part of the platform, not an afterthought.' },
                    { label: 'Modular', description: 'Runtime, memory, retrieval, and tools are separable services, not a monolith.' },
                ],
            },

            decisions: [
                {
                    number: '01',
                    title: 'Agent-first architecture',
                    description: 'Built to run and govern agents as first-class units, not to wrap a single conversational assistant.',
                    why: 'Enterprise AI needs orchestration, governance, and traceability — not just a chat interface.',
                },
                {
                    number: '02',
                    title: 'Provider abstraction',
                    description: 'Agent logic sits behind Spring AI\'s model abstraction, not a specific vendor SDK, so the LLM backend can change without touching agent code.',
                    why: 'No vendor lock-in — agents run on Ollama locally today, with OpenRouter planned for multi-provider access.',
                },
                {
                    number: '03',
                    title: 'Governance built in',
                    description: 'A dedicated policy engine controls agent access and actions, instead of relying on prompt-level rules.',
                    why: 'Policy enforcement belongs in the infrastructure, not in the prompt.',
                },
                {
                    number: '04',
                    title: 'Full execution traceability',
                    description: 'Every agent run is recorded end to end, from retrieval to response, for audit and debugging.',
                    why: 'When an agent makes a decision, you need to know exactly how it got there.',
                },
            ],
            decisionsScreenshotIndex: 2,
            decisionsScreenshotCaption: 'Execution trace — full agent run recorded from retrieval to response, with timing and step details',

            architecture: {
                pipeline: ['Dashboard', 'Spring Boot API', 'Agent Runtime', 'Policy Engine', 'Knowledge Retrieval', 'Model Router', 'AI Provider', 'Execution Trace'],
                stack: [
                    { name: 'Java 21' },
                    { name: 'Spring Boot 3' },
                    { name: 'Spring AI 1.0' },
                    { name: 'Angular 20' },
                    { name: 'PostgreSQL + pgvector' },
                    { name: 'RabbitMQ' },
                    { name: 'Docker' },
                ],
                detail: 'The Angular dashboard talks to a Spring Boot API, which fans out to three core services: the Agent Runtime, the Policy Engine, and the Model Router. The Agent Runtime coordinates execution and delegates to the Memory Service and Tool Registry; the Knowledge Service handles retrieval against a pgvector-backed vector store. The Model Router dispatches requests to the configured AI Provider — Ollama for local execution today, with OpenRouter planned for multi-provider access. All communication is asynchronous via RabbitMQ where appropriate.',
            },

            status: 'Core stack is built: Spring Boot, Spring AI, Ollama, Angular dashboard, agent runtime, RAG with pgvector, memory, and observability basics. Currently building the policy engine, tool registry, and workflow engine.',

            suggestions: [
                'How does the agent runtime work?',
                'What makes Narek provider-agnostic?',
                'How does the policy engine govern agents?',
                'What\'s the current status?',
            ],
        },
        readme: `# Narek

> Infrastructure for building, orchestrating, and governing enterprise AI agents.

Narek is a platform for running, orchestrating, and governing AI agents — built for engineering teams that need agent behavior backed by real infrastructure: a runtime, retrieval and memory layers, tool execution, and policy-based governance, rather than a single conversational assistant.

\`Java 21\` · \`Spring Boot 3\` · \`Spring AI 1.0\` · \`Angular 20\` · \`PostgreSQL + pgvector\` · \`Redis\` · \`RabbitMQ\` · \`Docker\`

---

## Screenshots

---

## Overview

Narek provides the infrastructure layer required to build and operate AI agents beyond a simple chat interface. It manages agent execution, knowledge retrieval, memory, tool access, and policy enforcement, while keeping each execution traceable and auditable.

The platform is designed around a provider-agnostic architecture: agents can run locally with Docker and Ollama today, while the same core components can be extended to managed infrastructure and additional AI providers as the platform evolves.

---

## The Problem

Building an AI agent is easy. Operating one in production is not.

Runtime orchestration, retrieval, prompt versioning, tool execution, conversation memory, access control, and execution traceability are all required before an agent can be trusted with a real workload. Most teams end up building fragile, one-off versions of each, tied to a single project and a single model provider.

---

## Why Narek?

Narek is not a chatbot or an LLM provider. It doesn't train models, and it isn't a general-purpose workflow automation platform.

It provides the infrastructure layer underneath AI applications: agent execution, knowledge retrieval, prompt management, memory, tool access, and governance — so teams can build applications on top of these capabilities without reimplementing them for every project.

---

## Philosophy

- Build AI agents, not chatbots.
- Stay provider agnostic — no hard dependency on a single model vendor.
- Keep the architecture cloud-agnostic — a local Docker/Ollama setup and a future cloud deployment share the same design.
- Govern by default — access control and observability are part of the platform, not an afterthought.
- Modular over monolithic — runtime, memory, retrieval, and tools are separable services.

---

## Key Features

**Agent Runtime** — Executes AI agents and coordinates their workflows end to end.

**Retrieval-Augmented Generation (RAG)** — Document ingestion and vector search over PostgreSQL + pgvector to ground agent responses in retrieved knowledge.

**Prompt Management** — Stores and versions prompts used across agents.

**Tool Registry** — Connects agents to external tools and APIs.

**Memory** — Persists conversation and execution context across agent runs.

**Knowledge Management** — Ingests and organizes the documents agents retrieve from.

**Policy Engine** — Governs what agents are allowed to do and access.

**Observability** — Traces, logs, and metrics for every agent execution.

**Management Dashboard** — Angular UI for configuring agents, running them, and inspecting execution history.

**Model Abstraction** — Spring AI decouples agent logic from the model layer; agents run locally via Ollama today, with OpenRouter integration planned for multi-provider access.

---

## How It Works

\`\`\`
User
  |
Dashboard
  |
Spring Boot API
  |
Agent Runtime
  +-- Policy Engine
  +-- Memory
  +-- Knowledge Retrieval
  +-- Tool Registry
          |
     Model Router
          |
     AI Provider
          |
   Execution Trace
\`\`\`

A user configures and triggers an agent from the dashboard. The runtime retrieves relevant knowledge from the vector store, builds the prompt, sends it to the configured AI provider — Ollama for local execution — and records the full execution for later inspection.

---

## Why Narek Is Different

| Principle | What it means |
|-|-|
| **Agent-First Architecture** | Built to run and govern agents as first-class units, not to wrap a single conversational assistant. |
| **Provider Abstraction** | Agent logic sits behind Spring AI's model abstraction, not a specific vendor SDK, so the LLM backend can change without touching agent code. |
| **Governance Built In** | A dedicated policy engine controls agent access and actions, instead of relying on prompt-level rules. |
| **Full Execution Traceability** | Every agent run is recorded end to end, from retrieval to response, for audit and debugging. |
| **Cloud-Agnostic Architecture** | The same design runs on a local Docker Compose stack today and is built to extend onto managed cloud infrastructure. |

---

## Architecture

The Angular dashboard talks to a Spring Boot API, which fans out to three core services: the **Agent Runtime**, the **Policy Engine**, and the **Model Router**. The Agent Runtime coordinates execution and delegates to the **Memory Service** and **Tool Registry**; the **Knowledge Service** handles retrieval against a **pgvector**-backed vector store. The Model Router dispatches requests to the configured **AI Provider** — **Ollama** for local execution today, with **OpenRouter** planned for multi-provider access.

---

## Tech Stack

| Layer | Technology |
|-|-|
| **Frontend** | Angular 20, TypeScript, Angular Material, Angular Signals, RxJS |
| **Backend** | Java 21, Spring Boot 3, Spring Data JPA / Hibernate |
| **AI** | Spring AI 1.0, Ollama (local execution) — OpenRouter *(planned)* |
| **Data / RAG** | PostgreSQL + pgvector, document ingestion pipeline |
| **Messaging** | RabbitMQ |
| **Security** | Spring Security — Enterprise RBAC *(planned)* |
| **Infrastructure** | Docker / Docker Compose |

---

## Quick Start

\`\`\`bash
git clone https://github.com/yourusername/narek.git
cd narek
docker compose up -d
./mvnw spring-boot:run
\`\`\`

\`\`\`bash
cd frontend
npm install
ng serve
\`\`\`

Open the dashboard at http://localhost:4200. The API runs on http://localhost:8080.

On first run, pull a local model for Ollama:

\`\`\`bash
docker exec -it ollama ollama pull llama3.2
\`\`\`

**Requirements:** Java 21+, Node.js 20+, Docker and Docker Compose.

---

## Roadmap

| Phase | Focus |
|-|-|
| **MVP** | Core stack (Spring Boot, Spring AI, Ollama, Angular), agent runtime, RAG with pgvector, memory, and observability basics |
| **v0.5** | Policy engine, tool registry, workflow engine |
| **v1.0** | Plugin SDK, multi-agent workflows, cost analytics |
| **v2** | AWS deployment, OpenRouter integration, enterprise RBAC |


`,
        screenshots: [imgNarekDashboard, imgNarekAgentConfig, imgNarekExecTrace],
        screenshotLabels: ['Dashboard', 'Agent Configuration', 'Execution Trace'],
        links: { code: 'https://github.com/HeilyMadelay-hub/Narek' },
    },
    {
        id: 'subtextai',
        title: 'SubtextAI',
        subtitle: 'AI-Powered Communication Intelligence Platform',
        caseStudy: {
            tagline: 'Communication intelligence for ambiguous conversations.',
            description: 'An AI engine that analyzes conversations to surface intent, emotional shifts, and hidden meaning — with every interpretation grounded in evidence, scored with calibrated confidence, and fully traceable.',
            tags: ['AI', 'RAG', 'Full-stack', 'AWS'],
            github: 'https://github.com/HeilyMadelay-hub/SubtextAI',
            heroScreenshotIndex: 0,

            problem: {
                headline: 'Conversations are easy to misread.',
                description: 'The problem isn\'t what someone says — it\'s what they might actually mean. Most AI tools answer with the same confidence whether they have real evidence or not. In a domain where the answer shapes personal decisions, that unearned confidence is the problem.',
                flow: ['What was said', 'What might be meant', 'Why'],
            },

            capabilities: [
                {
                    title: 'Conversation Analysis',
                    description: 'Paste any ambiguous message with its context and get a complete pragmatic analysis: overall tone, emotional signals, hidden meaning, key behavioral insights, and a suggested response — all grounded in documentary evidence.',
                    screenshotIndex: 0,
                },
                {
                    title: 'Replay Mode',
                    description: 'Transform any analyzed conversation into an interactive timeline of emotion, intent, and tension — like a replay of human decisions. Includes autoplay with a tension heatmap and per-message subtext explanations.',
                    screenshotIndex: 1,
                },
                {
                    title: 'Live Session Telemetry',
                    description: 'Real-time panel tracking emotional velocity, conflict acceleration, and conversational friction as the conversation unfolds, message by message. Metrics update live as messages are exchanged.',
                    screenshotIndex: 2,
                },
            ],

            insight: {
                message: '"Yeah, whatever. If you want."',
                analysis: {
                    Intent: 'Defensive / Withdrawal',
                    Emotion: 'Frustration',
                    'Hidden meaning': 'Possible disengagement',
                    Confidence: '82%',
                },
                evidence: 'The phrase "whatever" combined with the curt phrasing signals emotional withdrawal. The use of minimal agreement ("if you want") without enthusiasm indicates frustration rather than genuine consent. Linguistic markers suggest the speaker feels unheard.',
                isIllustrative: true,
            },

            philosophy: {
                headline: 'AI shouldn\'t be a black box.',
                description: 'SubtextAI is designed so that every interpretation is defensible. The system doesn\'t just generate answers — it explains why, shows its sources, and knows when to stay silent.',
                pillars: [
                    { label: 'Grounded', description: 'Every interpretation backed by retrieved documentary evidence.' },
                    { label: 'Scored', description: 'Confidence calculated objectively by a cross-encoder, not assumed.' },
                    { label: 'Traceable', description: 'Every response reconstructible by trace_id — documents, scores, model, prompt version.' },
                ],
            },

            decisions: [
                {
                    number: '01',
                    title: 'Evidence before generation',
                    description: 'The model never generates unless relevant documents were retrieved first. No evidence, no response.',
                    why: 'In a domain where answers shape personal decisions, ungrounded confidence is worse than no answer.',
                },
                {
                    number: '02',
                    title: 'Confidence as a gate',
                    description: 'A cross-encoder reranker scores retrieved evidence. If the score falls below a calibrated threshold, generation is blocked entirely.',
                    why: 'The system knows when it doesn\'t know — and says so instead of guessing.',
                },
                {
                    number: '03',
                    title: 'Traceable responses',
                    description: 'Every response carries a trace_id linking to the retrieved documents, reranker scores, prompt version, model used, and policies evaluated.',
                    why: 'Full auditability — any interpretation can be reconstructed and verified after the fact.',
                },
                {
                    number: '04',
                    title: 'Privacy by design',
                    description: 'Raw conversation text and audit annotations are stored in separate data stores, so erasure requests and retention limits never break the audit trail.',
                    why: 'Compliance as architecture, not afterthought.',
                },
            ],
            decisionsScreenshotIndex: 3,
            decisionsScreenshotCaption: 'Full trace audit — documents, scores, latency breakdown, and model version, all linked by trace_id',

            architecture: {
                pipeline: ['Conversation', 'Policy validation', 'Crisis detection', 'Hybrid retrieval', 'Cross-encoder reranking', 'Confidence gate', 'Analysis', 'Response + Trace'],
                stack: [
                    { name: 'React 19' },
                    { name: 'FastAPI' },
                    { name: 'PostgreSQL + pgvector' },
                    { name: 'LangGraph' },
                    { name: 'OpenRouter' },
                    { name: 'AWS' },
                    { name: 'Docker' },
                ],
                detail: 'FastAPI orchestrates the pipeline with LangGraph. Policy validation and crisis classification run first (crisis detection is blocking but parallel to retrieval). Hybrid search combines pgvector HNSW cosine similarity with tsvector/GIN lexical search, fused via Reciprocal Rank Fusion. A cross-encoder reranker acts as the confidence gate — if no retrieved fragment scores above the calibrated threshold, generation is blocked. Inference runs through OpenRouter (GPT-4.1 for analysis, text-embedding-3-large for embeddings). The full stack deploys on a single AWS EC2 t3.micro instance via Docker Compose (FastAPI + PostgreSQL/pgvector + Redis + Nginx), with Amplify Hosting for the frontend and Secrets Manager for the single external credential.',
            },

            status: 'Architecture and product design are done. Right now I\'m building the backend: policy engine, retrieval, reranking, and traceability — targeting a production AWS deployment.',

            suggestions: [
                'Why RAG?',
                'How does the confidence gate work?',
                'What makes the architecture interesting?',
                'What\'s the current status?',
            ],
        },
        readme: `# SubtextAI

> Understand what people really mean.

AI-powered communication intelligence platform that helps people understand intent, emotions, and hidden meaning behind ambiguous conversations.

\`Python\` · \`FastAPI\` · \`React 19\` · \`AWS\` · \`OpenRouter\` · \`PostgreSQL + pgvector\` · \`Docker\`

---

## Screenshots

---

## Overview

SubtextAI is a communication intelligence engine that analyzes ambiguous conversations across real-world contexts — **relationships, work, social settings, and negotiation** — and turns them into structured insights about what was said, what may have been intended, and what evidence supports that interpretation.

It detects intent shifts and emotional intensity, retrieves the evidence supporting each interpretation, scores it with a confidence level, and keeps it fully auditable by \`trace_id\`.

---

## The Problem

Most misunderstandings aren't about what's said — they're about what's meant.

Tone, intent, and emotional subtext get lost in text-based communication, and by the time a conflict escalates, it's hard to pinpoint where the interpretation diverged from the intention. Generic AI assistants don't help here: they generate plausible-sounding answers without explaining why, and without any way to verify the reasoning behind them.

For high-stakes or emotionally sensitive conversations, plausibility is not enough — users need context, evidence, uncertainty, and a way to reconstruct how an interpretation was produced.

---

## Why SubtextAI?

Unlike a general-purpose assistant, SubtextAI is not a black box. It doesn't just generate an answer — it explains why a message may be interpreted a certain way, points to the evidence behind that interpretation, and helps the user decide how to respond.

---

## Philosophy

AI should improve human communication, not replace it.

Every insight should be explainable.

Every response should be grounded.

Every decision should be auditable.

No interpretation should be presented as absolute truth.

This system does not replace professional advice, therapy, or legal counsel.

---

## Key Features

**Conversation Analysis** — Paste any ambiguous message with its context and get a complete pragmatic analysis: what was said vs. what was meant.

**Intent Detection** — Identifies intent transitions throughout the conversation (e.g., \`neutral → defensive → aggressive\`).

**Emotion Detection** — Tracks emotional intensity per message (low / medium / high) and detects escalation patterns.

**Hidden Meaning** — Surfaces the gap between explicit and implicit meaning — the subtext that drives miscommunication.

**Response Evaluation** — Scores a response the user already wrote: success probability, strengths, areas for improvement, and an evidence-based alternative.

**Reply Drafting** — When the user doesn't know what to say, the system writes the reply itself — grounded in the same sources as the original analysis, with a chosen tone and goal.

**Replay Mode** — Transforms any analyzed conversation into an interactive timeline of emotion, intent, and tension — like a replay of human decisions. Includes autoplay demo with pre-recorded conversations.

**Live Session Telemetry** — Real-time panel tracking emotional velocity, conflict acceleration, and accumulated tension as the conversation unfolds, message by message.

**Evidence & Confidence Gate** — Every interpretation is evaluated against retrieved evidence and a confidence threshold; when the evidence is insufficient, generation is blocked rather than producing an unsupported interpretation.

---

## How It Works

\`\`\`
Conversation Input
        ↓
Context & Safety Analysis
        ↓
Parallel Retrieval + Policy Checks
        ↓
Hybrid Search + Reranking
        ↓
Confidence Gate
        ↓
Structured Analysis
        ↓
Response Generation
        ↓
Trace & Audit
\`\`\`

---

## Why SubtextAI is Different

| Principle | What it means |
|-|-|
| **Explainable AI** | Every interpretation is grounded in documentary sources — the confidence gate is designed to block generation when no solid evidence is found. |
| **Policy-Governed AI** | Security and safety policies are enforced in the execution pipeline rather than delegated to the model prompt. |
| **Full Traceability** | Every response is reconstructible via \`trace_id\`: documents, scores, prompt version, model, and policies evaluated. |
| **Privacy by Design** | Raw text and audit annotations are stored separately, so erasure requests and retention limits never break the audit trail. |

---

## Architecture

A request enters through the API and is checked for crisis signals while relevant evidence is retrieved from the document corpus in parallel. The retrieved evidence is scored and evaluated against a confidence gate — if it doesn't clear the threshold, no response is generated. Applicable policies are checked alongside retrieval, and once a response is accepted for generation, it's produced and logged with full trace metadata (documents used, scores, prompt version, model, policies evaluated) for later audit.

The current deployment is intentionally lightweight: a single EC2 instance runs the backend stack in Docker (FastAPI, PostgreSQL + pgvector, Redis, Nginx), with the frontend, auth, storage, secrets, and observability handled by separate managed services.

---

## Tech Stack

| Layer | Technology |
|-|-|
| **Frontend** | React 19, TypeScript, Vite, Tailwind CSS, shadcn/ui, Recharts, Framer Motion |
| **Backend** | Python 3.13, FastAPI, Pydantic v2, SQLAlchemy 2.0, Alembic |
| **AI** | OpenRouter (\`gpt-4.1\`, \`text-embedding-3-large\`), LangGraph, Structured Outputs |
| **RAG** | PostgreSQL + pgvector (HNSW), lexical search, RRF fusion, cross-encoder reranking |
| **Data** | PostgreSQL + pgvector and Redis, both in Docker containers on the same Amazon EC2 instance |
| **Security** | Amazon Cognito (OAuth2 + IAM), rate limiting, prompt injection detection |
| **Observability** | Amazon CloudWatch, AWS X-Ray, OpenTelemetry |
| **DevOps** | Docker, Amazon EC2 (Free Tier \`t3.micro\`), Nginx, Amazon ECR, AWS Amplify Hosting, GitHub Actions (OIDC to AWS), Ruff, Pytest |

---

## Deployment

SubtextAI deploys to AWS with a lightweight architecture designed to fit within the **AWS Free Tier**: a single **Amazon EC2** \`t3.micro\` instance runs the whole backend stack in Docker — **FastAPI**, **PostgreSQL + pgvector**, **Redis**, and **Nginx** as the reverse proxy — fronted by **Amplify Hosting** (frontend), **S3** for the document corpus, and **OpenRouter** for generation (\`gpt-4.1\`) and embeddings (\`text-embedding-3-large\`).

### Quick Start

1. Build the backend image and push it to Amazon ECR.
2. Store the OpenRouter API key in AWS Secrets Manager.
3. Launch the EC2 instance and run \`docker compose up -d\` to start API + PostgreSQL + Redis + Nginx together.
4. Run \`alembic upgrade head\` against the Postgres container to apply migrations.
5. Build the frontend and deploy it to Amplify Hosting.

### Prerequisites

* Python 3.13+
* Node.js 18+ and npm
* Docker (for building the backend image)
* An AWS account with the AWS CLI configured, and an EC2 key pair
* An OpenRouter API key

---

## Documentation

- [Architecture](docs/architecture.md)
- [AI Pipeline](docs/ai-pipeline.md)
- [Design Principles](docs/design-principles.md)
- [Technology Stack](docs/tech-stack.md)
- [Testing Strategy](docs/testing-strategy.md)
- [Deployment Guide](docs/deployment.md)
- [API Reference](docs/api-reference.md)
- [Screenshots](docs/screenshots.md)
- [Roadmap](docs/roadmap.md)
- [Cloud Deployment (AWS)](docs/cloud-deployment-aws.md)

---

## Roadmap

### Vision

Become the communication intelligence platform for personal and enterprise conversations.

| Phase | Description |
|-|-|
| **Current** | Core analysis pipeline, retrieval, reranking, policy enforcement, and traceability. |
| **Next** | Specialized crisis classifier, multilingual support, semantic caching, and expanded audit tooling. |
| **Future** | Real-time streaming analysis, predictive trajectory engine |


`,
        // Rendered as a carousel where the "## Screenshots" heading sits in the
        // README, instead of the cramped 4-column markdown table it replaced.
        screenshots: [imgAnalysis, imgReplay, imgTelemetry, imgAudit],
        screenshotLabels: ['Analysis', 'Replay Mode', 'Live Telemetry', 'Audit'],
        links: { code: 'https://github.com/HeilyMadelay-hub/SubtextAI' },
    },
];

export default PROJECTS;
