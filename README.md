## Alejandro Resume

Single-page profile for Alejandro De La Mora, built with Next.js 16, React 19, Tailwind CSS v4, and a structured data layer so copy changes never require layout rewrites. The latest iteration shifts to a white-forward palette and neutral, professional language fit for any advisory conversation.

### Content Highlights

- **Hero + quick signal**: Location, contact details, readiness, and KPI tiles surface at a glance—paired with a clean CTA stack.
- **Advisory focus**: Three-card narrative that explains how Alejandro partners with executive teams without referencing a specific requisition.
- **Impact grid**: Assent, Sesh, and OBS engagements with concrete LLM tooling, RAG, and Agentforce examples.
- **Timeline + skills**: Services pedigree, AI stack, certifications, and languages presented as modular cards.
- **Polished UX**: White-glass layout, subtle grid textures, and a lightweight loading overlay keep the experience premium.

### Local Development

```bash
npm install
npm run dev
```

Visit `http://localhost:3000` to preview. All profile content lives under `src/data/profile.ts`.

### Production Build

```bash
npm run build
npm run start
```

Deploy anywhere that supports Node 18+. The site is static-first with no backend dependencies, so Vercel/Netlify/Render deployments are straightforward.
