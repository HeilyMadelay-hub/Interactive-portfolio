import imgAnalysis from '../../../assets/profesional_view/images/Subtextai/img/analysis.png';
import imgAudit from '../../../assets/profesional_view/images/Subtextai/img/audit.png';
import imgReplay from '../../../assets/profesional_view/images/Subtextai/img/replay.png';
import imgTelemetry from '../../../assets/profesional_view/images/Subtextai/img/telemetry.png';

// Static catalog for the sidebar "Proyectos" group. Each entry that is opened
// renders its README (if any) plus the regular chat input, the same way
// ChatGPT's Projects show a project's docs above its own chat thread.
export const PROJECTS = [
    {
        id: 'narek',
        title: 'Narek',
        subtitle: 'Enterprise AI Agent Platform',
        // No README yet — ProjectView falls back to a "coming soon" placeholder.
        readme: null,
        links: { code: 'https://github.com/HeilyMadelay-hub' },
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

## Project Status

🚧 **In active development** — architecture and design complete; backend implementation (policy engine, retrieval, reranking, traceability) in progress, targeting the production AWS deployment described below.

---

## Screenshots

---

## Overview

SubtextAI is a communication intelligence engine that analyzes ambiguous conversations across real-world contexts — **relationships, work, social settings, and negotiation** — and turns them into structured, evidence-based insights.

It detects intent shifts, emotional intensity, and the gap between what's said and what's meant. Every interpretation is grounded in documentary sources, scored with an objective confidence level, and fully auditable by \`trace_id\`.

---

## The Problem

Most misunderstandings aren't about what's said — they're about what's meant.

Unlike a conventional assistant, **SubtextAI is not a black box**: every interpretation is grounded in real documentary sources, calculated with an objective confidence level, and fully auditable. It's not an academic chatbot — it's a conversational behavior interpretation tool.

---

## Why SubtextAI?

Unlike traditional AI assistants, SubtextAI doesn't just generate answers.

It explains *why* a message may be interpreted in a certain way, grounds every conclusion on evidence, and helps users make better communication decisions.

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

---

## How It Works

\`\`\`
Paste a conversation
        ↓
AI understands the context
        ↓
Relevant evidence is retrieved
        ↓
Conversation is analysed
        ↓
Insights are generated
        ↓
Suggested response
\`\`\`

---

## Why SubtextAI is Different

| Principle | What it means |
|-|-|
| **Explainable AI** | Every interpretation is grounded in documentary sources. No evidence, no response. |
| **Enterprise Governance** | Security rules live in the pipeline, not in the prompt — the model never executes if a critical policy is violated. |
| **Full Traceability** | Every response is reconstructible via \`trace_id\`: documents, scores, prompt version, model, and policies evaluated. |
| **Privacy by Design** | Raw text and audit annotations are stored separately, so erasure requests and retention limits never break the audit trail. |

> Learn more in [docs/design-principles.md](docs/design-principles.md)

---

## Architecture

\`\`\`
  Frontend (React 19)             Backend — Amazon EC2 (t3.micro, Free Tier)          AI
 ┌──────────────────┐    ┌────────────────────────────────────────────┐    ┌──────────────────┐
 │ AWS Amplify      │    │ Docker (docker compose)                    │    │ OpenRouter       │
 │  Hosting (Vite   │───▶│ ┌──────────┐  Governance Pipeline          │───▶│  gpt-4.1         │
 │  static build)   │REST│ │  Nginx   │  ┌──────────────────┐         │    │  text-embed-3-lg │
 │ TypeScript       │API │ │ (reverse │  │ 1. Policy        │         │    └──────────────────┘
 │ Tailwind CSS     │    │ │  proxy,  │──▶ 2. Crisis ‖ RAG  │         │    │
 │ shadcn/ui        │    │ │  TLS)    │  │ 3. Rerank + gate │         │    │
 │ Recharts         │    │ └──────────┘  │ 4. Analysis      │         │    │
 │ Framer Motion    │    │      │        │ 5. Trace         │         │    │
 └──────────────────┘    │      ▼        └──────────────────┘         │
                         │ ┌──────────┐  LangGraph                    │
                         │ │ FastAPI  │  IAM instance profile +       │
                         │ │ (Docker  │  Secrets Manager (OpenRouter  │
                         │ │ container│  key only)                    │
                         │ │  )       │                               │
                         │ └────┬─────┘                               │
                         │      ├──────────────┐                      │
                         │      ▼              ▼                      │
                         │ ┌──────────┐   ┌──────────┐                │
                         │ │PostgreSQL│   │  Redis   │                │
                         │ │+ pgvector│   │ (Docker) │                │
                         │ │ (Docker) │   │ cache/   │                │
                         │ │HNSW+GIN  │   │ sessions │                │
                         │ └──────────┘   └──────────┘                │
                         └────────────────────────────────────────────┘
                                   │
                                   ▼
                          CloudWatch + AWS X-Ray + OpenTelemetry
\`\`\`

Everything above runs on AWS, sized to fit inside the Free Tier — a single EC2 instance runs the entire backend stack in Docker (FastAPI, PostgreSQL + pgvector, Redis, Nginx), with only the frontend, auth, storage, secrets, and observability handled by separate managed services. Steps 2a (crisis detection) and 2b (retrieval) run concurrently — crisis checking stays strictly blocking, but leaves the critical path of a successful request. The confidence gate at step 3 reads a calibrated cross-encoder score, so generation is blocked whenever no solid evidence was found.

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

SubtextAI deploys to AWS, sized to run within the **Free Tier**: a single **Amazon EC2** \`t3.micro\` instance runs the whole backend stack in Docker — **FastAPI**, **PostgreSQL + pgvector**, **Redis**, and **Nginx** as the reverse proxy — fronted by **Amplify Hosting** (frontend), **S3** for the document corpus, and **OpenRouter** for generation (\`gpt-4.1\`) and embeddings (\`text-embedding-3-large\`).

### Prerequisites

* Python 3.13+
* Node.js 18+ and npm
* Docker (for building the backend image)
* An AWS account with the AWS CLI configured, and an EC2 key pair
* An [OpenRouter](https://openrouter.ai) API key

### Build and push the backend image to ECR

\`\`\`bash
git clone https://github.com/<your-user>/subtextai.git
cd subtextai

docker build -f docker/Dockerfile.backend -t subtextai-api .
aws ecr get-login-password --region <region> | docker login --username AWS --password-stdin <account-id>.dkr.ecr.<region>.amazonaws.com
docker tag subtextai-api <account-id>.dkr.ecr.<region>.amazonaws.com/subtextai-api
docker push <account-id>.dkr.ecr.<region>.amazonaws.com/subtextai-api
\`\`\`

### Store the OpenRouter key

\`\`\`bash
aws secretsmanager create-secret \\
  --name subtextai/openrouter-api-key \\
  --secret-string '{"api_key":"<your-openrouter-key>"}'
\`\`\`

### Launch EC2 and run the stack with Docker Compose

\`\`\`bash
aws ec2 run-instances \\
  --image-id ami-0abcdef1234567890 \\
  --instance-type t3.micro \\
  --key-name subtextai-key \\
  --iam-instance-profile Name=subtextai-ec2-profile \\
  --security-group-ids <sg-id>

ssh -i subtextai-key.pem ec2-user@<instance-public-ip>
sudo yum install -y docker && sudo systemctl enable --now docker
aws ecr get-login-password --region <region> | docker login --username AWS --password-stdin <account-id>.dkr.ecr.<region>.amazonaws.com
docker pull <account-id>.dkr.ecr.<region>.amazonaws.com/subtextai-api

# docker-compose.yml runs api + postgres (pgvector) + redis + nginx together
docker compose up -d
cd backend && alembic upgrade head   # run against the local Postgres container
\`\`\`

### Deploy the frontend

\`\`\`bash
cd frontend
npm run build
aws amplify start-deployment --app-id <app-id> --branch-name main
\`\`\`

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
| **Current** | Architecture and governance pipeline fully designed; backend implementation (policy engine, retrieval, reranking, traceability) in progress, targeting production on AWS |
| **Next** | Specialized crisis classifier, multilingual support, semantic cache, audit panel |
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
