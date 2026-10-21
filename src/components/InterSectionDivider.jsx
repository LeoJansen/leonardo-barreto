function InterSectionDivider() {
  return (
    <section
      aria-labelledby="care-message-heading"
      className="bg-surface-soft px-5 py-14 text-center text-ink-strong sm:px-8 sm:py-16 lg:px-10 lg:py-20"
    >
      <div className="mx-auto flex max-w-4xl flex-col items-center">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent sm:text-sm">
          Cuidado em saúde mental
        </p>
        <h2
          id="care-message-heading"
          className="mt-4 text-balance text-3xl font-semibold leading-tight tracking-[-0.04em] text-brand-deep sm:text-4xl lg:text-5xl"
        >
          A conversa pode ser o primeiro passo para pensar no cuidado.
        </h2>
        <p className="mt-5 max-w-2xl text-sm leading-6 text-ink-muted sm:text-base sm:leading-7">
          Cada história é diferente. Conhecer as possibilidades de cuidado pode ajudar a tornar os próximos passos mais claros.
        </p>
      </div>
    </section>
  );
}

export default InterSectionDivider;
