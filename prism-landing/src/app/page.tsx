import Link from "next/link";
import {
  Aperture,
  ArrowUpRight,
  BadgeCheck,
  CircuitBoard,
  Fingerprint,
  Globe2,
  Layers,
  Palette,
  ShieldCheck,
  Sparkles,
  Workflow,
} from "lucide-react";
import type { ComponentType, ReactNode } from "react";

type Feature = {
  title: string;
  description: string;
  icon: ComponentType<{ className?: string }>;
  accent: "cyan" | "pink" | "yellow";
};

type PipelinePhase = {
  id: string;
  title: string;
  summary: string;
  details: string;
  accent: string;
};

const heroStats = [
  { label: "Creators", value: "82K+" },
  { label: "Neural edits / day", value: "3.1M" },
  { label: "Latency p95", value: "122ms" },
];

const coreFeatures: Feature[] = [
  {
    title: "Adaptive Neural Gallery",
    description:
      "Prism auto-curates live galleries using sentiment clusters, creator identity, and real-time engagement volatility.",
    icon: Layers,
    accent: "cyan",
  },
  {
    title: "Face ID SafeShare",
    description:
      "Neural biometric guardrails gate sensitive frames with face-matched access tokens and audit trails.",
    icon: Fingerprint,
    accent: "pink",
  },
  {
    title: "Prism Burst Delivery",
    description:
      "Ultra-low latency global distribution with edge-compute stylization and adaptive contrast balancing.",
    icon: Globe2,
    accent: "yellow",
  },
];

const pipelinePhases: PipelinePhase[] = [
  {
    id: "01",
    title: "Capture + Intake",
    summary: "Ingest RAW, HDR, and volumetric captures simultaneously.",
    details:
      "Meta-tags, temporal fingerprints, and lens telemetry stream into Prism Core in under 180ms, preserving depth, grain, and POV context.",
    accent:
      "linear-gradient(135deg, rgba(74,242,234,0.55), rgba(239,169,182,0.35))",
  },
  {
    id: "02",
    title: "Neural Processing",
    summary: "Style, safety, and narrative threads fuse via multi-head AI.",
    details:
      "Our spectral transformer resolves lighting drift, removes noise, and composes narrative anchors using the Prism lore engine.",
    accent:
      "linear-gradient(135deg, rgba(243,230,143,0.65), rgba(74,242,234,0.35))",
  },
  {
    id: "03",
    title: "Signal Distribution",
    summary: "Deliver every frame with adaptive bandwidth negotiation.",
    details:
      "Edge shards stream cinematic content with predictive pre-loading, secure embed tokens, and fingerprinted share links.",
    accent:
      "linear-gradient(135deg, rgba(239,169,182,0.55), rgba(243,230,143,0.35))",
  },
];

const highlightReels = [
  {
    title: "Chromatic Threads",
    description:
      "Realtime cinematic sequences generated from live multi-cam sync with tone-mapped overlays.",
    tags: ["Cinematic Sync", "Realtime HDR"],
  },
  {
    title: "Vertex Relays",
    description:
      "Collaborative mood boards with neural annotations, motion prompts, and AI scene swaps.",
    tags: ["AI Annotations", "Mood Weaving"],
  },
  {
    title: "Signal Vaults",
    description:
      "Private vaults gated by Face ID SafeShare, featuring quantum-resistant watermarking.",
    tags: ["SafeShare", "Audit Ready"],
  },
];

const trustSignals = [
  {
    icon: ShieldCheck,
    label: "GDPR and SOC 2 aligned adaptive compliance mesh.",
  },
  {
    icon: BadgeCheck,
    label: "Quantum-resistant watermarking on every distributed signal.",
  },
  {
    icon: CircuitBoard,
    label: "Dedicated GPU inference lanes with zero data retention.",
  },
];

const accentMap: Record<Feature["accent"], string> = {
  cyan: "shadow-[0_0_45px_rgba(74,242,234,0.25)] border-cyan-400/50",
  pink: "shadow-[0_0_45px_rgba(239,169,182,0.3)] border-[#EFA9B6]/50",
  yellow: "shadow-[0_0_45px_rgba(243,230,143,0.25)] border-[#F3E68F]/40",
};

function PillButton({
  href,
  children,
  tone = "primary",
}: {
  href: string;
  children: ReactNode;
  tone?: "primary" | "secondary";
}) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-all duration-300";

  if (tone === "primary") {
    return (
      <Link
        href={href}
        className={`${base} bg-[#F3E68F] text-[#0E0E0E] shadow-[0_0_45px_rgba(243,230,143,0.35)] hover:bg-[#f5ebaa] hover:shadow-[0_0_55px_rgba(243,230,143,0.45)]`}
      >
        {children}
      </Link>
    );
  }

  return (
    <Link
      href={href}
      className={`${base} border border-white/15 bg-white/5 text-white hover:border-white/30 hover:bg-white/10`}
    >
      {children}
    </Link>
  );
}

function GlowCard({ feature }: { feature: Feature }) {
  const Icon = feature.icon;

  return (
    <div
      className={`group relative overflow-hidden rounded-[28px] border border-white/10 bg-gradient-to-br from-white/4 via-white/[0.02] to-transparent p-[1px]`}
    >
      <div className="relative h-full rounded-[26px] bg-[#121212]/90 p-6 backdrop-blur-xl">
        <div
          className={`absolute inset-[-40%] translate-y-[-40%] opacity-0 blur-3xl transition duration-700 group-hover:opacity-100`}
          style={{
            background:
              feature.accent === "cyan"
                ? "radial-gradient(circle at 50%, rgba(74,242,234,0.18), transparent 60%)"
                : feature.accent === "pink"
                ? "radial-gradient(circle at 50%, rgba(239,169,182,0.18), transparent 60%)"
                : "radial-gradient(circle at 50%, rgba(243,230,143,0.18), transparent 60%)",
          }}
        />
        <div
          className={`mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full border bg-white/5 text-white ${accentMap[feature.accent]}`}
        >
          <Icon className="h-5 w-5" />
        </div>
        <h3 className="text-lg font-semibold tracking-tight text-white">
          {feature.title}
        </h3>
        <p className="mt-3 text-sm leading-6 text-zinc-400">
          {feature.description}
        </p>
      </div>
    </div>
  );
}

function PhaseCard({ phase }: { phase: PipelinePhase }) {
  return (
    <div className="relative flex flex-col gap-3 rounded-[30px] border border-white/8 bg-[#111]/80 p-6 backdrop-blur-xl transition-all duration-500 hover:border-white/15 hover:shadow-[0_0_40px_rgba(243,230,143,0.15)] md:p-8">
      <span className="text-xs font-semibold uppercase tracking-[0.3em] text-zinc-500">
        {phase.id}
      </span>
      <div className="flex items-center justify-between gap-6">
        <h4 className="text-xl font-semibold tracking-tight text-white">
          {phase.title}
        </h4>
        <div
          className="hidden h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] md:flex"
          style={{ backgroundImage: phase.accent }}
        />
      </div>
      <p className="text-sm leading-6 text-[#A1A1AA]">{phase.summary}</p>
      <p className="text-sm leading-7 text-zinc-400">{phase.details}</p>
      <div
        className="pointer-events-none absolute inset-x-10 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-50"
        aria-hidden
      />
    </div>
  );
}

export default function Home() {
  return (
    <div className="relative">
      <div className="absolute inset-x-0 top-0 z-0 h-[420px] bg-[radial-gradient(circle_at_top,rgba(243,230,143,0.18),transparent_60%)] blur-3xl" />
      <main className="relative z-10 mx-auto flex min-h-screen max-w-6xl flex-col gap-28 px-6 pb-32 pt-12 sm:px-10 lg:px-14">
        <header className="flex items-center justify-between gap-6 rounded-full border border-white/10 bg-black/40 px-6 py-4 backdrop-blur-lg">
          <div className="flex items-center gap-3">
            <div className="relative flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/[0.04]">
              <div className="absolute inset-2 rounded-full bg-[conic-gradient(from_120deg_at_50%_50%,rgba(74,242,234,0.6),rgba(239,169,182,0.6),rgba(243,230,143,0.7),rgba(74,242,234,0.6))]" />
              <span className="relative text-sm font-semibold uppercase tracking-[0.2em] text-black">
                P
              </span>
            </div>
            <div>
              <p className="text-sm uppercase tracking-[0.4em] text-zinc-400">
                Prism
              </p>
              <p className="text-xs text-zinc-500">AI photo intelligence</p>
            </div>
          </div>
          <nav className="hidden items-center gap-8 text-sm text-zinc-400 md:flex">
            <Link href="#stack" className="hover:text-white">
              Stack
            </Link>
            <Link href="#pipeline" className="hover:text-white">
              Pipeline
            </Link>
            <Link href="#gallery" className="hover:text-white">
              Showcase
            </Link>
            <Link href="#security" className="hover:text-white">
              Security
            </Link>
          </nav>
          <div className="flex items-center gap-2">
            <PillButton href="#waitlist">
              Join private beta
              <ArrowUpRight className="h-4 w-4" />
            </PillButton>
          </div>
        </header>

        <section className="flex flex-col gap-10 text-center">
          <div className="mx-auto max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-[#4AF2EA]/30 bg-[#4AF2EA]/10 px-4 py-2 text-xs font-medium uppercase tracking-[0.3em] text-[#4AF2EA]">
              <Sparkles className="h-4 w-4" />
              Intelligent photo sharing
            </span>
            <h1 className="mt-6 text-balance text-4xl font-semibold leading-tight text-white sm:text-5xl md:text-6xl">
              Build visual narratives that self-optimize in real time.
            </h1>
            <p className="mt-6 text-pretty text-base leading-7 text-[#A1A1AA] sm:text-lg">
              Prism is the tech-noir command center for creators. Train custom
              styles, secure identities with neon-grade biometrics, and stream
              cinematic stories that evolve with every interaction.
            </p>
          </div>
          <div className="mx-auto flex flex-col items-center gap-4 sm:flex-row">
            <PillButton href="#waitlist">
              Enter the prism
              <ArrowUpRight className="h-4 w-4" />
            </PillButton>
            <PillButton href="#stack" tone="secondary">
              Explore the stack
            </PillButton>
          </div>
          <div className="relative mt-14 overflow-hidden rounded-[34px] border border-white/10 bg-white/[0.03] p-1">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(74,242,234,0.18),transparent_55%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(239,169,182,0.15),transparent_60%)]" />
            <div className="relative rounded-[32px] bg-[#121212]/90 p-10 backdrop-blur-xl md:p-12">
              <div className="grid gap-10 md:grid-cols-[1.4fr_1fr] md:items-center">
                <div className="space-y-6 text-left">
                  <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-black/50 px-4 py-2 text-xs uppercase tracking-[0.4em] text-white/80">
                    Signal Core
                    <span className="h-1.5 w-1.5 rounded-full bg-[#F3E68F]" />
                    Gen-Z Pro
                  </div>
                  <p className="text-lg text-[#A1A1AA]">
                    Prism threads Face ID SafeShare, AI tone mapping, and
                    adaptive contrast into a single cinematic signal. Every
                    share is signed, stylized, and safeguarded.
                  </p>
                  <div className="grid gap-4 sm:grid-cols-3">
                    {heroStats.map((stat) => (
                      <div
                        key={stat.label}
                        className="rounded-[26px] border border-white/10 bg-white/[0.03] px-4 py-5 text-left"
                      >
                        <p className="text-2xl font-semibold text-white">
                          {stat.value}
                        </p>
                        <p className="mt-1 text-xs uppercase tracking-[0.3em] text-zinc-500">
                          {stat.label}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="relative flex h-full flex-col justify-between rounded-[30px] border border-white/10 bg-black/70 p-6">
                  <div className="flex items-center justify-between text-xs uppercase tracking-[0.35em] text-zinc-500">
                    <span>AI SIGNAL SCAN</span>
                    <span className="flex items-center gap-2 text-[#4AF2EA]">
                      Live
                      <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#4AF2EA]" />
                    </span>
                  </div>
                  <div className="mt-8 space-y-6">
                    <div className="flex items-center justify-between rounded-[24px] border border-[#4AF2EA]/30 bg-[#4AF2EA]/10 px-4 py-3 text-xs uppercase tracking-[0.25em] text-[#4AF2EA]">
                      Edge Render
                      <span>002.18</span>
                    </div>
                    <div className="flex items-center justify-between rounded-[24px] border border-[#EFA9B6]/30 bg-[#EFA9B6]/10 px-4 py-3 text-xs uppercase tracking-[0.25em] text-[#EFA9B6]">
                      Face ID SafeShare
                      <span>Auth: granted</span>
                    </div>
                    <div className="flex items-center justify-between rounded-[24px] border border-[#F3E68F]/40 bg-[#F3E68F]/10 px-4 py-3 text-xs uppercase tracking-[0.25em] text-[#F3E68F]">
                      Dynamic Contrast
                      <span>Pulse: 98%</span>
                    </div>
                  </div>
                  <div className="mt-10 flex items-center justify-between rounded-[20px] border border-white/10 bg-white/[0.04] px-4 py-4 text-xs uppercase tracking-[0.35em] text-white/70">
                    <span>SIGNAL MATCHED</span>
                    <span className="inline-flex items-center gap-2 text-[#EFA9B6]">
                      Neon Pink
                      <Fingerprint className="h-4 w-4" />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="stack" className="flex flex-col gap-10">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.4em] text-[#4AF2EA]">
                Stack
              </p>
              <h2 className="mt-2 text-3xl font-semibold text-white sm:text-4xl">
                Engineered for zero-friction visual intelligence.
              </h2>
            </div>
            <p className="max-w-xl text-sm text-[#A1A1AA]">
              Prism synchronizes adaptive neural galleries, neon-grade identity
              security, and global delivery rails in one utilitarian workspace.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {coreFeatures.map((feature) => (
              <GlowCard key={feature.title} feature={feature} />
            ))}
          </div>
        </section>

        <section
          id="pipeline"
          className="relative overflow-hidden rounded-[40px] border border-white/10 bg-white/[0.03] p-1"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(74,242,234,0.15),transparent_55%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_10%,rgba(243,230,143,0.12),transparent_60%)]" />
          <div className="relative rounded-[38px] bg-[#111]/90 px-6 py-12 backdrop-blur-xl sm:px-10 md:px-14 md:py-16">
            <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="inline-flex items-center gap-3 text-xs uppercase tracking-[0.4em] text-[#F3E68F]">
                  <Workflow className="h-4 w-4" />
                  Neural pipeline
                </p>
                <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">
                  Every frame is rewritten in the Prism core.
                </h2>
              </div>
              <p className="max-w-md text-sm leading-6 text-zinc-400">
                Capture inputs, process through spectral transformers, and
                deliver adaptive stories all in a single orbit.
              </p>
            </div>
            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {pipelinePhases.map((phase) => (
                <PhaseCard key={phase.id} phase={phase} />
              ))}
            </div>
          </div>
        </section>

        <section id="gallery" className="flex flex-col gap-10">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.4em] text-[#EFA9B6]">
                Highlight Reels
              </p>
              <h2 className="mt-2 text-3xl font-semibold text-white sm:text-4xl">
                Tech-noir galleries curated by AI instincts.
              </h2>
            </div>
            <PillButton href="#waitlist" tone="secondary">
              Leak a reel
              <ArrowUpRight className="h-4 w-4" />
            </PillButton>
          </div>
          <div className="grid gap-6 lg:grid-cols-3">
            {highlightReels.map((reel, index) => (
              <div
                key={reel.title}
                className="group relative overflow-hidden rounded-[32px] border border-white/10 bg-black/60 p-[1px] backdrop-blur-xl"
              >
                <div className="relative flex h-full flex-col gap-6 rounded-[30px] bg-[#111]/90 p-7">
                  <div
                    className="absolute inset-0 transition-opacity duration-700 group-hover:opacity-100"
                    style={{
                      opacity: 0.45,
                      background:
                        index === 0
                          ? "radial-gradient(circle at 20% 15%, rgba(74,242,234,0.2), transparent 55%)"
                          : index === 1
                          ? "radial-gradient(circle at 80% -5%, rgba(239,169,182,0.22), transparent 60%)"
                          : "radial-gradient(circle at 50% 10%, rgba(243,230,143,0.2), transparent 55%)",
                    }}
                    aria-hidden
                  />
                  <div className="relative flex items-center justify-between">
                    <div className="flex flex-col gap-2 text-left">
                      <h3 className="text-xl font-semibold text-white">
                        {reel.title}
                      </h3>
                      <p className="text-sm text-zinc-400">
                        {reel.description}
                      </p>
                    </div>
                    <Aperture className="relative h-10 w-10 text-white/40" />
                  </div>
                  <div className="relative mt-auto flex flex-wrap gap-3">
                    {reel.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-white/10 bg-white/[0.06] px-4 py-2 text-xs uppercase tracking-[0.25em] text-white/70"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section
          id="security"
          className="relative overflow-hidden rounded-[40px] border border-white/10 bg-white/[0.03] p-1"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_30%,rgba(239,169,182,0.2),transparent_55%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(74,242,234,0.15),transparent_60%)]" />
          <div className="relative flex flex-col gap-10 rounded-[38px] bg-[#111]/90 px-6 py-12 backdrop-blur-xl md:flex-row md:items-center md:gap-16 md:px-12">
            <div className="flex-1 space-y-6">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.06] px-4 py-2 text-xs uppercase tracking-[0.3em] text-white/80">
                <ShieldCheck className="h-4 w-4 text-[#EFA9B6]" />
                SafeShare protocol
              </span>
              <h2 className="text-3xl font-semibold text-white sm:text-4xl">
                Neon-pink biometric perimeters on every share.
              </h2>
              <p className="max-w-lg text-sm leading-6 text-zinc-400">
                Face ID SafeShare deploys biometric signatures with neon pink
                confirmation pulses. Every viewport is verified, watermarking is
                quantum-resistant, and audit logs compile in real time.
              </p>
              <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
                {trustSignals.map((signal) => (
                  <div
                    key={signal.label}
                    className="flex items-start gap-3 rounded-[24px] border border-white/10 bg-white/[0.04] px-4 py-4 text-sm text-zinc-300"
                  >
                    <signal.icon className="mt-1 h-5 w-5 text-[#F3E68F]" />
                    <span>{signal.label}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative flex-1">
              <div className="absolute inset-6 rounded-[32px] border border-[#EFA9B6]/40" />
              <div className="relative overflow-hidden rounded-[38px] border border-white/10 bg-black/70 p-7">
                <div className="flex items-center justify-between">
                  <span className="text-xs uppercase tracking-[0.35em] text-zinc-500">
                    Face ID Confirm
                  </span>
                  <Palette className="h-5 w-5 text-[#EFA9B6]" />
                </div>
                <div className="mt-10 grid gap-6">
                  <div className="rounded-[28px] border border-[#EFA9B6]/30 bg-[#EFA9B6]/10 px-4 py-5 text-xs uppercase tracking-[0.25em] text-[#EFA9B6]">
                    Neon Pink pulse verified
                  </div>
                  <div className="rounded-[28px] border border-[#4AF2EA]/30 bg-[#4AF2EA]/10 px-4 py-5 text-xs uppercase tracking-[0.25em] text-[#4AF2EA]">
                    Live retina fallback
                  </div>
                  <div className="rounded-[28px] border border-[#F3E68F]/30 bg-[#F3E68F]/10 px-4 py-5 text-xs uppercase tracking-[0.25em] text-[#F3E68F]">
                    Signal watermark synced
                  </div>
                </div>
                <div className="mt-10 rounded-[28px] border border-white/10 bg-white/[0.04] p-5">
                  <p className="text-xs uppercase tracking-[0.3em] text-white/70">
                    Audit feed
                  </p>
                  <div className="mt-4 space-y-3 text-sm text-zinc-400">
                    <p>↳ User prism.wraith authenticated • 0.9s</p>
                    <p>↳ Vault 09 watermark embedded • 2.1s</p>
                    <p>↳ Share link encrypted + dispatched • 2.5s</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          id="waitlist"
          className="relative flex flex-col items-center gap-8 overflow-hidden rounded-[38px] border border-white/10 bg-white/[0.03] px-6 py-16 text-center backdrop-blur-xl sm:px-10"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(243,230,143,0.15),transparent_60%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_15%,rgba(74,242,234,0.1),transparent_50%)]" />
          <div className="relative flex flex-col items-center gap-6">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.08] px-4 py-2 text-xs uppercase tracking-[0.3em] text-white">
              <Sparkles className="h-4 w-4 text-[#F3E68F]" />
              Launch Window: Q3
            </span>
            <h2 className="max-w-3xl text-balance text-3xl font-semibold text-white sm:text-4xl">
              Prism is invite-only while the neural co-pilot trains on creator
              collectives.
            </h2>
            <p className="max-w-xl text-sm text-[#A1A1AA]">
              Request your spot in the private beta to unlock tech-noir
              storytelling, biometric safeguards, and AI-curated collaboration.
            </p>
            <form className="relative flex w-full max-w-xl flex-col gap-4 sm:flex-row">
              <input
                type="email"
                placeholder="neon@yourstudio.io"
                className="h-14 flex-1 rounded-full border border-white/15 bg-black/70 px-6 text-sm text-white placeholder:text-zinc-500 focus:border-[#F3E68F]/60 focus:outline-none focus:ring-2 focus:ring-[#F3E68F]/40"
              />
              <button
                type="submit"
                className="flex h-14 items-center justify-center rounded-full bg-[#F3E68F] px-8 text-sm font-medium text-black transition-all duration-300 hover:bg-[#f5ebaa]"
              >
                Request access
              </button>
            </form>
            <p className="text-xs uppercase tracking-[0.35em] text-zinc-500">
              11 slots remain for creator collectives
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}
