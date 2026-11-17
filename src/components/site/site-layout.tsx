import { useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight, Leaf, Menu, MapPin, Phone, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { company, navigation } from "@/lib/company-content";
import logo from "@/assets/drs-logo.jpg.asset.json";

export function SiteHeader() {
  const pathname = useRouterState({ select: (state) => state.location.pathname });
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-background/95 backdrop-blur-md">
      <div className="mx-auto flex h-[4.5rem] max-w-7xl items-center justify-between gap-5 px-5 sm:px-8 lg:px-12">
        <Link to="/" aria-label="DRS home" className="flex shrink-0 items-center gap-3">
          <img src={logo.url} alt="" width={56} height={38} className="h-[2.4rem] w-14 object-contain" />
          <span className="hidden border-l border-line pl-3 text-sm font-semibold leading-tight text-brand-navy sm:block">
            Diverse Resilience
            <span className="mt-0.5 block text-xs font-normal text-ink-soft">Systems Limited</span>
          </span>
        </Link>

        <nav aria-label="Main navigation" className="hidden items-center gap-1 xl:flex">
          {navigation.map((item) => {
            const active = pathname === item.to;
            return (
              <Link
                key={item.to}
                to={item.to}
                aria-current={active ? "page" : undefined}
                className={`relative px-3 py-2 text-[0.81rem] font-medium transition-colors ${
                  active ? "text-brand-blue" : "text-ink-soft hover:text-brand-navy"
                }`}
              >
                {item.label}
                {active && <span className="absolute inset-x-3 bottom-0 h-0.5 bg-brand-orange" />}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <Button asChild size="sm" className="hidden gap-2 sm:inline-flex">
            <Link to="/contact">
              Let’s talk <ArrowUpRight aria-hidden="true" />
            </Link>
          </Button>

          <Sheet open={menuOpen} onOpenChange={setMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="xl:hidden" aria-label="Open navigation">
                {menuOpen ? <X /> : <Menu />}
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="flex w-[min(86vw,24rem)] flex-col border-line bg-background">
              <SheetHeader className="border-b border-line pb-5 text-left">
                <div className="flex items-center gap-3">
                  <img src={logo.url} alt="" width={56} height={38} className="h-[2.35rem] w-14 object-contain" />
                  <SheetTitle className="max-w-[13rem] text-left text-sm font-semibold leading-snug">
                    {company.name}
                  </SheetTitle>
                </div>
                <SheetDescription className="text-left">{company.region}</SheetDescription>
              </SheetHeader>
              <nav aria-label="Mobile navigation" className="flex flex-col">
                {navigation.map((item, index) => {
                  const active = pathname === item.to;
                  return (
                    <SheetClose asChild key={item.to}>
                      <Link
                        to={item.to}
                        aria-current={active ? "page" : undefined}
                        onClick={() => setMenuOpen(false)}
                        className={`flex items-center justify-between border-b border-line py-4 font-medium ${
                          active ? "text-brand-blue" : "text-brand-navy"
                        }`}
                      >
                        <span className="flex items-center gap-4">
                          <span className="font-mono text-xs text-brand-orange">0{index + 1}</span>
                          {item.label}
                        </span>
                        <ArrowRight aria-hidden="true" className="size-4" />
                      </Link>
                    </SheetClose>
                  );
                })}
              </nav>
              <div className="mt-auto space-y-3 border-t border-line pt-5 text-sm text-ink-soft">
                <p className="flex items-center gap-2"><MapPin aria-hidden="true" className="size-4 text-brand-green" />{company.region}</p>
                <a className="flex items-center gap-2 hover:text-brand-navy" href={`tel:${company.telephone}`}>
                  <Phone aria-hidden="true" className="size-4 text-brand-green" />{company.displayTelephone}
                </a>
                <Button asChild className="mt-2 w-full">
                  <Link to="/contact" onClick={() => setMenuOpen(false)}>Start a conversation <ArrowRight aria-hidden="true" /></Link>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="bg-brand-navy text-on-brand">
      <div className="mx-auto max-w-7xl px-5 pb-8 pt-14 sm:px-8 lg:px-12">
        <div className="grid gap-12 border-b border-on-brand/20 pb-12 md:grid-cols-[1.3fr_0.7fr_1fr]">
          <div>
            <Link to="/" className="inline-flex items-center gap-3" aria-label="DRS home">
              <span className="grid size-11 place-items-center bg-on-brand">
                <img src={logo.url} alt="" width={48} height={38} className="h-8 w-10 object-contain" />
              </span>
              <span className="max-w-56 text-sm font-semibold leading-snug">{company.name}</span>
            </Link>
            <p className="mt-5 max-w-sm text-sm leading-7 text-on-brand/70">
              Building resilient systems. Enabling sustainable development. Creating lasting impact.
            </p>
          </div>

          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-wide text-brand-orange">Explore</p>
            <nav aria-label="Footer navigation" className="grid grid-cols-2 gap-x-6 gap-y-3">
              {navigation.map((item) => (
                <Link key={item.to} to={item.to} className="text-sm text-on-brand/75 transition-colors hover:text-on-brand">
                  {item.label}
                </Link>
              ))}
              <Link to="/contact" className="text-sm text-on-brand/75 transition-colors hover:text-on-brand">Contact</Link>
            </nav>
          </div>

          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-wide text-brand-orange">Find us</p>
            <p className="flex items-start gap-2 text-sm leading-6 text-on-brand/80">
              <MapPin aria-hidden="true" className="mt-1 size-4 shrink-0 text-brand-green" />
              {company.address}
            </p>
            <a href={`tel:${company.telephone}`} className="mt-3 flex items-center gap-2 text-sm text-on-brand/80 hover:text-on-brand">
              <Phone aria-hidden="true" className="size-4 text-brand-green" />{company.displayTelephone}
            </a>
            <a href={`mailto:${company.email}`} className="mt-3 inline-flex items-center gap-2 break-all text-sm text-on-brand/80 hover:text-on-brand">
              <ArrowUpRight aria-hidden="true" className="size-4 shrink-0 text-brand-green" />{company.email}
            </a>
          </div>
        </div>

        <div className="flex flex-col items-start justify-between gap-3 pt-6 text-xs text-on-brand/55 sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} {company.name}. All rights reserved.</p>
          <p className="flex items-center gap-2"><Leaf aria-hidden="true" className="size-3 text-brand-green" />{company.tagline}</p>
        </div>
      </div>
    </footer>
  );
}

export function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <a href="#main-content" className="sr-only z-50 bg-background p-3 text-foreground focus:not-sr-only focus:fixed focus:left-4 focus:top-4">
        Skip to content
      </a>
      <SiteHeader />
      {children}
      <SiteFooter />
    </>
  );
}