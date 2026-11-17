import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Link } from "@tanstack/react-router";

import { Button } from "@/components/ui/button";

export function Eyebrow({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return (
    <p className={`flex items-center gap-3 text-xs font-semibold uppercase tracking-wide ${light ? "text-on-brand/80" : "text-brand-blue"}`}>
      <span aria-hidden="true" className="h-px w-8 bg-brand-orange" />{children}
    </p>
  );
}

export function PageIntro({
  eyebrow,
  title,
  description,
  side,
}: {
  eyebrow: string;
  title: React.ReactNode;
  description?: string;
  side?: React.ReactNode;
}) {
  return (
    <div className="grid gap-7 border-b border-line pb-9 md:grid-cols-[1fr_0.65fr] md:items-end md:gap-12">
      <div>
        <Eyebrow>{eyebrow}</Eyebrow>
        <h1 className="type-display mt-5 max-w-3xl text-4xl leading-[1.08] text-brand-navy sm:text-5xl lg:text-6xl">
          {title}
        </h1>
      </div>
      <div className="md:justify-self-end md:pb-1">
        {description && <p className="max-w-md text-[0.96rem] leading-7 text-ink-soft">{description}</p>}
        {side}
      </div>
    </div>
  );
}

export function PageFrame({ children }: { children: React.ReactNode }) {
  return (
    <main id="main-content" className="mx-auto min-h-[65vh] max-w-7xl px-5 pb-20 pt-12 sm:px-8 sm:pt-16 lg:px-12 lg:pb-24 lg:pt-20">
      {children}
    </main>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  action,
}: {
  eyebrow: string;
  title: React.ReactNode;
  action?: { label: string; to: "/about" | "/team" | "/projects" | "/blog" | "/contact" };
}) {
  return (
    <div className="mb-8 flex flex-col gap-5 sm:mb-10 sm:flex-row sm:items-end sm:justify-between">
      <div>
        <Eyebrow>{eyebrow}</Eyebrow>
        <h2 className="type-display mt-4 max-w-3xl text-3xl leading-tight text-brand-navy sm:text-4xl">{title}</h2>
      </div>
      {action && (
        <Button variant="outline" asChild className="w-fit shrink-0 border-brand-blue/25 bg-transparent text-brand-blue hover:bg-brand-blue hover:text-on-brand">
          <Link to={action.to}>{action.label} <ArrowRight aria-hidden="true" /></Link>
        </Button>
      )}
    </div>
  );
}

export function ContactStrip({
  heading = "Let’s make the next step a practical one.",
  text = "Share the challenge you’re working on. Our team will be glad to hear about it.",
}: {
  heading?: string;
  text?: string;
}) {
  return (
    <section className="bg-brand-blue text-on-brand">
      <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-7 px-5 py-10 sm:px-8 sm:py-12 md:flex-row md:items-center lg:px-12">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-on-brand/75">A good place to begin</p>
          <h2 className="type-display mt-2 max-w-2xl text-3xl leading-tight sm:text-4xl">{heading}</h2>
          <p className="mt-2 max-w-2xl text-sm leading-6 text-on-brand/75">{text}</p>
        </div>
        <Button asChild variant="secondary" className="shrink-0 bg-brand-orange text-brand-navy hover:bg-brand-orange/90">
          <Link to="/contact">Contact our team <ArrowUpRight aria-hidden="true" /></Link>
        </Button>
      </div>
    </section>
  );
}