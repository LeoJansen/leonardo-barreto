import Link from 'next/link';
import type { ReactNode } from 'react';
import Footer from './Footer';

export default function LegalPageShell({
  title,
  intro,
  children,
}: {
  title: string;
  intro: string;
  children: ReactNode;
}) {
  return (
    <div className="min-h-screen bg-surface text-ink">
      <a className="skip-link" href="#conteudo-legal">Pular para o conteúdo principal</a>
      <header className="border-b border-site-border bg-surface">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-4 sm:px-8">
          <Link className="inline-flex min-h-11 flex-col justify-center text-ink-strong focus:outline-none focus-visible:ring-2 focus-visible:ring-focus-on-light" href="/">
            <span className="text-sm font-semibold tracking-wide">Dr. Leonardo Barreto</span>
            <span className="text-xs text-ink-muted">Saúde Mental</span>
          </Link>
          <Link className="inline-flex min-h-11 items-center rounded-full border border-site-border px-4 text-sm font-semibold text-ink-strong transition hover:bg-surface-soft focus:outline-none focus-visible:ring-2 focus-visible:ring-focus-on-light" href="/">
            Voltar ao site
          </Link>
        </div>
      </header>

      <main id="conteudo-legal" tabIndex={-1} className="focus:outline-none">
        <section className="dark-surface bg-brand-deep px-5 py-12 text-on-brand sm:px-8 sm:py-16">
          <div className="mx-auto max-w-4xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-on-dark sm:text-sm">
              Informações legais
            </p>
            <h1 className="mt-3 text-3xl font-semibold leading-tight tracking-[-0.04em] sm:text-5xl">
              {title}
            </h1>
            <p className="mt-4 max-w-3xl text-base leading-7 text-on-brand-muted sm:text-lg sm:leading-8">
              {intro}
            </p>
            <p className="mt-5 text-sm text-on-brand-muted">
              Última atualização: <time dateTime="2026-10-20">20 de outubro de 2026</time>
            </p>
          </div>
        </section>

        <article className="mx-auto max-w-4xl px-5 py-10 sm:px-8 sm:py-14">
          <div className="space-y-9">{children}</div>
        </article>
      </main>

      <Footer />
    </div>
  );
}
