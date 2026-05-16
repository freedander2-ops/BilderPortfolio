# AGENTS

## Orchestrator
Coordinates all agents.

Responsibilities:
- task decomposition
- validation
- workflow management

---

## Backend Agent
Responsible for:
- API
- database
- infrastructure
- scalability

Must:
- document endpoints
- validate schema
- follow security policy

---

## Analytics Agent
Responsible for:
- market research
- SEO
- trend analysis
- competitor analysis

Must:
- verify sources
- store evidence
- timestamp findings

---

## Design Agent
Responsible for:
- UI/UX
- accessibility
- user flows
- design systems

Must:
- provide wireframes
- maintain consistency

---

## Security Agent
Responsible for:
- threat analysis
- MCP permissions
- dependency audits
- sandbox policies

---

Analytics Agent:
- stores findings in /memory/research/

Architecture Agent:
- stores decisions in /memory/decisions/

Security Agent:
- stores audits in /memory/evidence/

---

## Current Agent State (Jules)
Operates in **Engineering Mode**.

Current focus:
- Architectural integrity
- Production-readiness
- Evolution support

Guidelines:
- Follow /docs/ARCHITECTURE.md
- Maintain /scripts/build.sh
- Ensure bilingual support for all documentation
