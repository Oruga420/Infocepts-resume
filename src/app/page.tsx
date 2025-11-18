import Link from "next/link";
import LoadingOverlay from "@/components/LoadingOverlay";
import {
  advisoryFit,
  contact,
  education,
  languages,
  recentWins,
  skills,
  socialLinks,
  stats,
  timeline,
} from "@/data/profile";

type IconName = (typeof socialLinks)[number]["icon"];

const icons: Record<IconName, JSX.Element> = {
  github: (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5">
      <path
        fill="currentColor"
        d="M12 2C6.48 2 2 6.58 2 12.17c0 4.48 2.87 8.28 6.85 9.63.5.1.68-.22.68-.48l-.01-1.69c-2.78.62-3.37-1.36-3.37-1.36-.45-1.17-1.11-1.48-1.11-1.48-.91-.64.07-.63.07-.63 1 .07 1.52 1.07 1.52 1.07.9 1.57 2.36 1.12 2.94.86.09-.67.35-1.12.63-1.38-2.22-.26-4.56-1.15-4.56-5.11 0-1.13.39-2.06 1.03-2.78-.1-.26-.45-1.3.1-2.7 0 0 .84-.27 2.75 1.07a9.22 9.22 0 0 1 5 0c1.9-1.34 2.74-1.07 2.74-1.07.55 1.4.2 2.44.1 2.7.64.72 1.02 1.65 1.02 2.78 0 3.97-2.34 4.84-4.58 5.1.36.32.68.93.68 1.88 0 1.36-.01 2.46-.01 2.8 0 .27.18.59.69.48A10 10 0 0 0 22 12.17C22 6.58 17.52 2 12 2Z"
      />
    </svg>
  ),
  globe: (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5">
      <path
        fill="currentColor"
        d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Zm6.92 9h-3.08a15.1 15.1 0 0 0-1.07-5.07A8.01 8.01 0 0 1 18.92 11Zm-5.92 0H11V4.39c.35-.1.7-.15 1.05-.15.35 0 .7.05 1.05.15V11Zm0 2v6.61a6.74 6.74 0 0 1-2.1 0V13h2.1Zm2.84-2h3.08a8.02 8.02 0 0 1-4.15 5.07A13.08 13.08 0 0 0 15.84 11Zm-4.84 6.99c-.39-1.08-.64-2.33-.77-3.72H8.76a12.99 12.99 0 0 0 1.07 5.07c.45.9.96 1.6 1.5 2.04a8 8 0 0 1-4.9-7.39c0-.35.02-.7.06-1.04h3.08a15.1 15.1 0 0 0 1.07 5.04Z"
      />
    </svg>
  ),
  linkedin: (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5">
      <path
        fill="currentColor"
        d="M4.98 3.5a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5ZM3 9h4v12H3zM9 9h3.8v1.7h.06c.53-.95 1.82-1.95 3.75-1.95 4 0 4.74 2.3 4.74 5.3V21h-4v-5.3c0-1.27-.02-2.9-1.77-2.9-1.78 0-2.06 1.38-2.06 2.8V21H9z"
      />
    </svg>
  ),
};

function SocialButton({
  href,
  label,
  icon,
}: {
  href: string;
  label: string;
  icon: IconName;
}) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noreferrer"
      className="group relative inline-flex h-12 w-12 items-center justify-center overflow-hidden rounded-2xl border border-white/10 text-slate-200 transition-all duration-300 hover:-translate-y-1 hover:text-emerald-300"
      aria-label={label}
    >
      {icons[icon]}
      <span className="pointer-events-none absolute inset-0 -z-10 scale-0 rounded-2xl bg-emerald-400/20 blur-2xl transition-transform duration-300 group-hover:scale-125" />
    </Link>
  );
}

export default function Home() {
  return (
    <LoadingOverlay>
      <div className="relative isolate overflow-hidden bg-slate-950 px-4 pb-16 pt-12 text-slate-100 sm:px-6 lg:px-0">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-16 rounded-[40px] bg-white/5 p-8 backdrop-blur-xl lg:p-12">
          <header className="grid gap-10 lg:grid-cols-[2fr,1fr] lg:items-start">
            <div className="space-y-6">
              <p className="text-sm uppercase tracking-[0.4em] text-emerald-300">
                Tailored for the Infocepts AI Advisor brief (Nov 3, 2025)
              </p>
              <div>
                <h1 className="text-4xl font-semibold leading-tight text-white sm:text-5xl">
                  {contact.name}
                </h1>
                <p className="mt-3 text-xl text-slate-300">{contact.title}</p>
              </div>
              <p className="text-lg text-slate-200">{contact.focusLine}</p>
              <div className="flex flex-wrap gap-4 text-sm text-slate-300">
                <span>{contact.location}</span>
                <span>|</span>
                <span>{contact.phone}</span>
                <span>|</span>
                <Link
                  href={`mailto:${contact.email}`}
                  className="text-emerald-300 underline-offset-4 hover:text-emerald-200"
                >
                  {contact.email}
                </Link>
              </div>
              <div className="flex flex-wrap gap-4 text-sm text-slate-400">
                <span>{contact.availability}</span>
              </div>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="mailto:chuck_dll@outlook.com?subject=AI%20Advisor%20Conversation"
                  className="inline-flex items-center justify-center rounded-2xl bg-emerald-400 px-6 py-3 text-base font-medium text-slate-950 shadow-[0_0_35px_rgba(16,185,129,0.35)] transition hover:-translate-y-0.5 hover:bg-emerald-300"
                >
                  Book a working session
                </Link>
                <Link
                  href="https://www.eloruga.com"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-2xl border border-white/20 px-6 py-3 text-base font-medium text-white transition hover:-translate-y-0.5 hover:border-emerald-300 hover:text-emerald-200"
                >
                  Explore build logs
                </Link>
              </div>
              <div className="flex gap-3">
                {socialLinks.map((link) => (
                  <SocialButton key={link.label} {...link} />
                ))}
              </div>
            </div>
            <div className="rounded-3xl border border-white/10 bg-slate-900/50 p-6 shadow-2xl shadow-emerald-500/10">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-400">
                Quick signal
              </p>
              <div className="mt-6 grid gap-5">
                {stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-2xl border border-white/5 bg-white/5 px-4 py-5"
                  >
                    <p className="text-3xl font-semibold text-white">
                      {stat.value}
                    </p>
                    <p className="text-sm text-slate-400">{stat.label}</p>
                    <p className="text-sm text-slate-300">{stat.detail}</p>
                  </div>
                ))}
              </div>
            </div>
          </header>

          <section>
            <div className="flex flex-col gap-3">
              <p className="text-sm uppercase tracking-[0.3em] text-emerald-300">
                Fit check
              </p>
              <h2 className="text-3xl font-semibold text-white">
                Why this profile maps to the AI Advisor scorecard
              </h2>
            </div>
            <div className="mt-8 grid gap-6 lg:grid-cols-3">
              {advisoryFit.map((item) => (
                <div
                  key={item.title}
                  className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 via-slate-900/80 to-slate-950/90 p-6 shadow-[0_20px_60px_rgba(15,23,42,0.45)]"
                >
                  <p className="text-sm font-semibold text-emerald-300">
                    {item.title}
                  </p>
                  <p className="mt-3 text-sm text-slate-400">
                    {item.expectation}
                  </p>
                  <p className="mt-4 text-base text-slate-100">{item.proof}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="space-y-6">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-emerald-300">
                Recent impact
              </p>
              <h2 className="text-3xl font-semibold text-white">
                Hands-on GenAI delivery that keeps advisors billable
              </h2>
              <p className="mt-2 text-slate-300">
                Each engagement mixes proposal ownership, design, and
                production builds - exactly what the Infocepts transcript called
                out.
              </p>
            </div>
            <div className="grid gap-6 lg:grid-cols-3">
              {recentWins.map((win) => (
                <article
                  key={win.company}
                  className="flex h-full flex-col rounded-3xl border border-white/10 bg-white/[0.04] p-6"
                >
                  <div>
                    <p className="text-sm uppercase tracking-[0.2em] text-slate-400">
                      {win.period}
                    </p>
                    <h3 className="mt-2 text-2xl font-semibold text-white">
                      {win.company}
                    </h3>
                    <p className="text-sm text-emerald-300">{win.role}</p>
                    <p className="mt-3 text-base text-slate-200">{win.blurb}</p>
                  </div>
                  <ul className="mt-4 space-y-3 text-sm text-slate-300">
                    {win.bullets.map((bullet) => (
                      <li key={bullet} className="flex gap-2">
                        <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-300" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </section>

          <section className="grid gap-8 lg:grid-cols-[1.2fr,0.8fr]">
            <div className="rounded-3xl border border-white/10 bg-slate-900/60 p-6">
              <p className="text-sm uppercase tracking-[0.3em] text-emerald-300">
                Career foundation
              </p>
              <h2 className="mt-2 text-3xl font-semibold text-white">
                Services DNA that predates the GenAI wave
              </h2>
              <div className="mt-6 space-y-6 border-l border-white/10 pl-6">
                {timeline.map((item) => (
                  <div key={item.company} className="space-y-2">
                    <div className="flex items-center gap-2 text-sm text-slate-400">
                      <span className="h-2 w-2 rounded-full bg-emerald-300" />
                      {item.period}
                    </div>
                    <p className="text-lg font-semibold text-white">
                      {item.company}
                    </p>
                    <p className="text-sm text-emerald-200">{item.role}</p>
                    <p className="text-sm text-slate-300">{item.summary}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-6">
              <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6">
                <p className="text-sm uppercase tracking-[0.3em] text-emerald-300">
                  AI stack
                </p>
                <ul className="mt-4 space-y-3 text-sm text-slate-200">
                  {skills.aiStack.map((item) => (
                    <li key={item} className="rounded-xl bg-slate-900/60 px-4 py-3">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6">
                <p className="text-sm uppercase tracking-[0.3em] text-emerald-300">
                  Platforms & methods
                </p>
                <ul className="mt-4 space-y-3 text-sm text-slate-200">
                  {skills.platforms.map((item) => (
                    <li key={item} className="rounded-xl bg-slate-900/60 px-4 py-3">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          <section className="grid gap-8 lg:grid-cols-3">
            <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6">
              <p className="text-sm uppercase tracking-[0.3em] text-emerald-300">
                Operating model
              </p>
              <ul className="mt-4 space-y-3 text-sm text-slate-200">
                {skills.operatingModel.map((item) => (
                  <li key={item} className="rounded-xl bg-slate-900/60 px-4 py-3">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6">
              <p className="text-sm uppercase tracking-[0.3em] text-emerald-300">
                Credentials
              </p>
              <ul className="mt-4 space-y-3 text-sm text-slate-200">
                {skills.certifications.map((item) => (
                  <li key={item} className="rounded-xl bg-slate-900/60 px-4 py-3">
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-4 space-y-2 text-sm text-slate-300">
                <p>{education.school}</p>
                <p>{education.degree}</p>
                <p>{education.period}</p>
              </div>
            </div>
            <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6">
              <p className="text-sm uppercase tracking-[0.3em] text-emerald-300">
                Languages
              </p>
              <ul className="mt-4 space-y-3 text-sm text-slate-200">
                {languages.map((language) => (
                  <li key={language} className="rounded-xl bg-slate-900/60 px-4 py-3">
                    {language}
                  </li>
                ))}
              </ul>
              <div className="mt-6 rounded-2xl border border-emerald-400/40 bg-emerald-400/10 px-4 py-3 text-xs uppercase tracking-[0.3em] text-emerald-200">
                Services background | Retail + travel delivery | Ready for 25%+
                billable mix
              </div>
            </div>
          </section>
        </div>
      </div>
    </LoadingOverlay>
  );
}
