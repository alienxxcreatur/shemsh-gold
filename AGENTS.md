# Shemsh Project Instructions

This repository is the durable source of truth for redesigning Shemsh. Chat history is not a source of truth.

## Mandatory reading order

Before doing any work:

1. `START-HERE.md`
2. `00-project-management/shemsh-project-context.md`
3. `00-project-management/project-status.md`
4. `00-project-management/product-roadmap.md`
5. `00-project-management/decision-log.md`
6. The `README.md` and working documents of the active stage

Read `02-research-and-audit/current-product/shemsh-redesign-brief-inputs.md` only when detailed observations or evidence are needed.

## Shared goal

Redesign Shemsh into a trustworthy, everyday, slightly premium financial-gold product for small retail investors, large investors, and buyers of physical minted bullion.

The main differentiator is not merely online gold trading. Shemsh mints bullion and should connect digital investment to real, physically receivable gold.

## Working rules

- Continue from `project-status.md`; do not restart discovery from chat history.
- Work on one active stage and one concrete subtask at a time.
- Before moving to the next stage, evaluate the exit criteria in that stage's `README.md`.
- Use these labels consistently: `Observed fact`, `Business decision`, `Design assumption`, `Open question`, `Risk`.
- Never present an assumption or competitor behavior as a confirmed Shemsh rule.
- When a business decision changes, update both `decision-log.md` and `shemsh-project-context.md`.
- When work progresses, update `project-status.md` and the relevant stage checklist.
- Preserve raw research and source files. Derived documents may summarize them but must link back to evidence.
- Prefer clear Persian for product, UX, research, and strategy documents unless requested otherwise.

## Approval before structural change

When new user information materially changes an assumption, scope, method, stage order, roadmap, or next step:

1. Identify the documents and project steps affected.
2. Explain the proposed structural change and its consequences to the user briefly.
3. Get the user's explicit approval before changing any source-of-truth files or treating the new route as final.
4. After approval, update all affected sources of truth together, including `decision-log.md`, `shemsh-project-context.md`, `project-status.md`, `product-roadmap.md`, `open-questions.md`, and the active-stage documents as applicable.
5. Do not leave material direction changes only in chat history.
6. Do not announce a changed next step as final until the documents are synchronized.

## Important current decisions

- Current scope covers the Shemsh end-user experience only; internal admin, operations, and support tools are out of scope.
- The exact end-user capability list and release order are not yet final. Buy, sell, deposit, withdraw, wallets, gold transfer, physical delivery, gift card, installment purchase, transactions, referrals, support, and profile are candidates from the brief, not confirmed scope.
- PWA is the primary product and current redesign priority; Android is a WebView of that experience, native Android/iOS are out of scope, and the already-published public website is not a current priority.
- Trust should be built around minting, Bank Kargoshaei, licenses, transparent pricing and fees, traceable receipts, and support.
- Unresolved fees, limits, installment rules, and physical-delivery operations remain open until officially confirmed.

## Completion protocol

At the end of every meaningful task:

1. Save the output in the correct stage folder.
2. Update `00-project-management/project-status.md`.
3. Add new decisions to `decision-log.md`.
4. Add unresolved dependencies to `open-questions.md`.
5. State whether the current gate is `Complete`, `Sufficient to proceed`, `Needs revision`, or `Blocked by external decision`.
