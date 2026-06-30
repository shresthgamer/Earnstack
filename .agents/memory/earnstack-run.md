---
name: EarnStack run preference
description: User preference — "run website" always means the EarnStack Website, not any other service.
---

# EarnStack Run Preference

The rule: whenever the user says "run the website", "run it", "start the site", or similar, always run the **EarnStack Website**.

**Why:** The user explicitly asked this to be remembered permanently. There are two entries in the Replit preview picker — "Postiz Clone" (the EarnStack website) and "Start application" (also the EarnStack website, same thing). The user was confused by seeing both and wants only one to exist.

**How to apply:**
- Run command: `PORT=5000 BASE_PATH=/ pnpm --filter @workspace/postiz-clone run dev`
- Workflow name in Replit: "Start application" (this IS the EarnStack website)
- Canvas artifact name: "EarnStack Website"
- Never start the API Server unless the user explicitly asks for backend/API work.
- Never create a second canvas frame — keep only one: `artifact:v3:artifacts/postiz-clone`.
