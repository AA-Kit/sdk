# Project Governance

## Overview

This document outlines the governance structure, decision-making processes, and contribution guidelines for the **Universal Account Abstraction SDK** project.

---

## Current Governance Structure

### Maintainers (as of February 2026)

| Name | Role | GitHub | Responsibilities |
|------|------|--------|------------------|
| [@sssvinosvin] | Lead Maintainer | [https://github.com/svinosvin] | Core development, releases, grant applications |

> **Note:** This is a single-maintainer project at launch. The governance model is designed to evolve as the community grows.

---

## Decision-Making Process

### Technical Decisions

| Decision Type | Process | Owner |
|---------------|---------|-------|
| **Bug fixes** | Direct commit to `main` after testing | Lead Maintainer |
| **Minor features** | PR → Review (24h) → Merge | Lead Maintainer |
| **Major features** | RFC (Request for Comments) → Community feedback → Decision | Lead Maintainer |
| **Breaking changes** | RFC + 7-day community review → Vote (if needed) | Lead Maintainer |
| **Dependency updates** | Automated (Dependabot) + manual review | Lead Maintainer |

### RFC (Request for Comments) Process

For significant changes (new architecture, major API changes, etc.):

1. Create an issue with `[RFC]` prefix
2. Describe the problem, proposed solution, alternatives
3. Community discussion period: **minimum 7 days**
4. Lead Maintainer makes final decision (considers community feedback)

---

## Contribution Workflow

### 1. Issues

- **Bugs**: Use template `[Bug] Description`
- **Features**: Use template `[Feature] Description`
- **Questions**: Use template `[Question] Description`

All issues are triaged weekly by the Lead Maintainer.

### 2. Pull Requests

**PR Requirements:**
- ✅ Passing CI checks (tests, linting, build)
- ✅ Updated documentation (if applicable)
- ✅ Clear description of changes
- ✅ Reference to related issue (if any)

**Review Timeline:**
- Simple PRs: reviewed within **48 hours**
- Complex PRs: reviewed within **7 days**

### 3. Code Review Standards

- All PRs require **at least 1 approval** before merge
- Breaking changes require **explicit approval** from Lead Maintainer
- Automated tests must pass

---

## Becoming a Maintainer

As the project grows, additional maintainers may be added.

### Path to Maintainership

1. **Active Contributor** (3+ months):
   - 10+ merged PRs
   - Regular participation in issues/discussions
   - Understanding of codebase architecture

2. **Trusted Contributor** (nomination):
   - Nominated by Lead Maintainer
   - Community feedback period (7 days)
   - No major objections

3. **Maintainer** (invitation):
   - Granted write access
   - Added to this document
   - Granted rights to review/merge PRs

### Maintainer Responsibilities

- Review PRs in a timely manner
- Participate in technical discussions
- Help triage issues
- Uphold project standards and values

### Stepping Down

Maintainers may step down voluntarily. If inactive for **6+ months**, access may be revoked with 30-day notice.

---

## Release Process

### Versioning

We follow **[Semantic Versioning 2.0.0](https://semver.org/)**:

- `MAJOR` version: breaking changes
- `MINOR` version: backward-compatible features
- `PATCH` version: backward-compatible bug fixes

### Release Cadence

| Release Type | Frequency | Process |
|--------------|-----------|---------|
| **Patch** | As needed | Bug fixes only |
| **Minor** | Every 4–6 weeks | New features, improvements |
| **Major** | As needed | Breaking changes (rare) |

### Release Checklist

- [ ] All tests passing
- [ ] Documentation updated
- [ ] Changelog updated (`CHANGELOG.md`)
- [ ] Version bumped in all `package.json` files
- [ ] Git tag created (`vX.Y.Z`)
- [ ] Published to npm
- [ ] Release notes posted on GitHub

---

## Conflict Resolution

1. **Discussion**: Open dialogue in relevant issue/PR
2. **Mediation**: Lead Maintainer facilitates resolution
3. **Decision**: Lead Maintainer makes final call if consensus not reached
4. **Appeal**: Community feedback considered, but final decision stands

---

## Code of Conduct

All participants must adhere to the **[Contributor Covenant Code of Conduct](CODE_OF_CONDUCT.md)**.

Violations should be reported to the Lead Maintainer.

---

## Communication Channels

| Channel | Purpose |
|---------|---------|
| **GitHub Issues** | Bug reports, feature requests, technical discussions |
| **GitHub Discussions** | General questions, ideas, community support |
| **Twitter/X** | [@your-project-handle] — Announcements, updates |
| **Discord** | (Future) Real-time community chat |

---

## License

This project is licensed under the **MIT License** — see [LICENSE](LICENSE) for details.

---

## Amendments

This governance document may be amended by the Lead Maintainer with **7-day community review period** for significant changes.

---

## History

| Date | Version | Changes |
|------|---------|---------|
| 2026-02-12 | 1.0.0 | Initial governance structure established |