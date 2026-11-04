# Working rules for this repository

## Who this is for

Owner: Tiago Castro, data analyst and financial controller based in Portugal. This repository is part of a public GitHub portfolio. Recruiters, colleagues and ordinary people will read it, and some will use the result. It has to work, be honest, and sound like a person wrote it.

## How we work

1. Read docs/BRIEF.md first. It is the source of truth for scope. If something is not in the brief, ask before building it.
2. Propose a short plan (steps, files, risks) and wait for approval before writing code.
3. Build in small steps. One commit per step, and each commit leaves the project working.
4. Before calling anything done, run `npm test`, open the site in a browser at phone width (about 400 px) and try it by hand.
5. Run the reviewer subagent before every pull request. When laws, regulations or official figures are involved, also run the fact-checker subagent.

## Technical defaults

- Plain HTML, CSS and JavaScript (ES modules). No framework and no build step unless the brief asks for one.
- The site lives in site/. Pure logic lives in site/lib/ so it can be tested without a browser. Tests live in tests/ and use node:test, with no dependencies.
- Mobile first. Installable as a PWA and usable offline. Light and dark theme.
- Everything runs in the browser. No accounts, no analytics, no trackers, no servers. User data stays on the device (localStorage or IndexedDB).
- Ask before adding a dependency or an external API. Explain the limits and terms of the API first.

## Facts, rules and numbers

- Never invent legal rules, figures, thresholds or API behavior. Take them from the official text and keep the source URL and the date you checked it next to each rule.
- Keep rules as data in site/data/*.json, with an effective-from date and a source field, not buried in code.
- Show the date the rules were last checked in the interface.
- If a source is unclear or has changed, stop and tell the owner instead of guessing.

## Privacy and safety

- Example data is always fictional, and the README says so.
- Never commit real personal data, secrets, API keys, tokens or .env files.
- Never mention an employer's internal systems, project names, colleagues or client data.

## Writing style (README, comments, commit messages, interface text)

- Plain American English in code and README. Interface in English and European Portuguese when the brief says so.
- Short sentences. Prose over bullet lists. No em dashes, no emojis in headings, no closing summary.
- No marketing words such as robust, powerful, seamless, comprehensive or leverage.
- Say what the project does not do. Every README ends with its real limitations.
- The section "Why I built this" is for the owner to write. Leave the placeholder, never fill it in.
- Commit messages are short and in the imperative, for example: add delay calculator.
- Commits and pull requests carry no automatic signatures, trailers or footers.
