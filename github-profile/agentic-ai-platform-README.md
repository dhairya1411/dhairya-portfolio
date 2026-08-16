# Agentic AI Platform

**AI workflow automation for software project management.** The platform ingests collaboration and
delivery signals (Jira, Slack), routes them through specialist agents coordinated by governed
LangGraph workflows, and executes auditable actions back in those systems.

> 🚧 **Work in progress.** The architecture, database schema, API specification and phased
> implementation plan are complete and documented. Runtime services are partially built. I'm
> publishing the design work openly because for this project the design *is* the interesting part.

---

## The problem

Project management tooling records what happened; it doesn't act on it. A blocker mentioned in Slack,
a ticket that's silently stalled, a decision made in a thread and never written to Jira — these are
visible to a human reading everything, and invisible to the system of record.

The obvious answer is "an AI that reads everything." The hard part is that an agent with write access
to your Jira is a liability unless every action is **governed and auditable**.

## The design decisions that matter

| Decision | Why |
|---|---|
| **Governed workflows over free-roaming agents** | LangGraph gives explicit state transitions. An agent can't take an action that isn't a defined edge in the graph. |
| **Auditable actions** | Every write to an external system is logged with the signal that triggered it — so a human can always answer "why did it do that?" |
| **Specialist agents, not one generalist** | Narrow agents with narrow tool access limit the blast radius of a bad decision. |
| **Vector memory (Qdrant)** | Context persists across sessions so the system understands a project's history, not just the current message. |

## Architecture

```
Signals (Jira · Slack)
        ↓
   Ingestion layer
        ↓
 LangGraph workflow engine ──→ specialist agents
        ↓                          ↓
   Memory (Qdrant)            Tool integrations
        ↓                          ↓
   Audit log  ←──────────  Actions (Jira · Slack)
```

**Stack:** Python · LangGraph · PostgreSQL · Redis · RabbitMQ · Qdrant · Docker Compose
**Observability:** Jaeger (tracing) · Prometheus + Grafana (metrics)

## Documentation

The design is documented in phases under [`docs/`](docs/):

- **[Architecture](docs/architecture/phase-1-architecture.md)** — system design and component boundaries
- **[Database schema](docs/architecture/database-schema.md)** — data model
- **[API specification](docs/api/api-specification.md)** — endpoint contracts
- **[Implementation roadmap](docs/architecture/implementation-roadmap.md)** — phased delivery plan
- **[Local development](docs/operations/local-development.md)** — setup and validation

Individual phase docs cover authentication, LLM integration, the agent framework, memory,
tool integrations, the workflow engine, and testing strategy.

## Quick start

```bash
cp .env.example .env
docker compose up -d postgres redis rabbitmq qdrant jaeger prometheus grafana
```

See the [local development guide](docs/operations/local-development.md) for prerequisites,
validation steps and service endpoints.

## Status & what's next

- ✅ Architecture, schema, API spec and roadmap documented
- ✅ Infrastructure (Postgres, Redis, RabbitMQ, Qdrant, observability stack) defined in Compose
- 🚧 Agent framework and workflow engine — in progress
- ⬜ End-to-end demo with a live Jira/Slack workspace

---

**Dhairya Rastogi** — [Portfolio](https://dhairya-portfolio-beta.vercel.app) · [LinkedIn](https://www.linkedin.com/in/dhairya-rastogi-a396b2220/)
