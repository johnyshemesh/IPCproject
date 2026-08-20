# AGENTS

## Purpose
This repository is a small Playwright Test project. Use this file to guide AI coding agents when editing tests, configuration, and project scaffolding.

## Key project facts
- Uses `@playwright/test` for browser automation and end-to-end test execution.
- Tests live under `./tests` and follow Playwright Test conventions with `test`, `expect`, and `page` helpers.
- Current Playwright config is `playwright.config.js`.
- `package.json` currently has no `scripts`; run tests with `npx playwright test` from the repository root.

## Important details for agents
- Keep changes aligned with Playwright Test behavior: `test`, `expect`, `page.goto`, `page.getByRole`, etc.
- Preserve or mirror the existing `tests/example.spec.js` style when adding new test cases.
- The Playwright config defines `fullyParallel: true`, `retry` behavior based on `CI`, `reporter: 'html'`, and `trace: 'on-first-retry'`.
- Confirm runtime format before changing module syntax: `package.json` is `type: "commonjs"`, while `playwright.config.js` currently uses ESM-style imports/exports.

## Useful commands
- `npx playwright test` — run all tests
- `npx playwright test --project=chromium` — run a single browser project
- `npx playwright show-report` — open the HTML test report

## Recommendations for inline suggestions
- Suggest minimal, idiomatic Playwright edits and avoid unrelated refactors.
- If adding config or new script entries, prefer explicit Playwright command usage rather than assuming existing npm scripts.
- Highlight any runtime format mismatch between `package.json` and `playwright.config.js` if it affects implementation.

## When in doubt
- Do not invent non-existent application code or test fixtures.
- Keep the repository focused on Playwright test authoring and config.
