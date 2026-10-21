import Art from './components/Art';

function Specialization() {
  return (
    <section
      id="especializacao"
      aria-labelledby="education-heading"
      tabIndex={-1}
      className="scroll-mt-24 bg-surface-soft focus:outline-none"
    >
      <div className="mx-auto grid w-full max-w-7xl items-center gap-6 px-5 py-14 sm:px-8 sm:py-16 md:grid-cols-2 md:gap-8 lg:gap-14 lg:px-10 lg:py-24">
        <article className="dark-surface order-2 rounded-3xl border border-brand-deep/10 bg-brand-primary p-6 text-on-brand shadow-[0_24px_60px_-38px_rgba(15,61,59,0.65)] sm:p-8 lg:order-1 lg:p-10">
          <header>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-on-dark sm:text-sm">
              Qualificação profissional
            </p>
            <h2
              id="education-heading"
              className="mt-3 text-3xl font-semibold leading-tight tracking-[-0.04em] text-on-brand sm:text-4xl"
            >
              Formação acadêmica e registro
            </h2>
          </header>

          <dl className="mt-7 divide-y divide-brand-primary/15 rounded-2xl border border-secondary bg-secondary px-5 text-secondary-foreground sm:mt-9 sm:px-6">
            <div className="py-5">
              <dt className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-deep">
                Pós-graduação em andamento
              </dt>
              <dd className="mt-1 text-lg font-semibold text-secondary-foreground sm:text-xl">
                Hospital Israelita Albert Einstein
              </dd>
            </div>
            <div className="py-5">
              <dt className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-deep">
                Registro profissional
              </dt>
              <dd className="mt-1 text-lg font-semibold text-secondary-foreground sm:text-xl">
                CRM-PR 58107
              </dd>
            </div>
          </dl>
        </article>

        <div className="order-1 min-w-0 md:order-2">
          <Art />
        </div>
      </div>
    </section>
  );
}

export default Specialization;
