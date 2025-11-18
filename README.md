## Infocepts Resume

Tailored site for Alejandro De La Mora that positions his profile against the Infocepts AI Advisor search (Nov 3, 2025 transcript). Built with Next.js 16, React 19, Tailwind CSS v4, and a custom data layer so content changes never require layout rewrites.

### Content Highlights

- **Fit-first hero**: Signals location, availability, quick stats, plus CTA and hover-animated buttons for GitHub / site / LinkedIn.
- **Role alignment section**: Maps experience to the “one-person AI front line” requirement pulled from the hiring call.
- **Impact grid**: Assent, Sesh, and OBS engagements with concrete LLM tooling, RAG, and Agentforce examples.
- **Timeline + skills**: Services pedigree, AI stack, certifications, and languages shown as modular cards.
- **Micro-interactions**: Gradient grid background, glassmorphism containers, animated loader, and glowing icon hovers.

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
