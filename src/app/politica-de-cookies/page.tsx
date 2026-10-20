import type { Metadata } from 'next';
import Link from 'next/link';
import LegalPageShell from '@/components/LegalPageShell';
import CookieSettingsButton from '@/components/CookieSettingsButton';

export const metadata: Metadata = {
  title: 'Política de Cookies | Dr. Leonardo Barreto',
  description: 'Entenda como este site guarda suas preferências e controla o carregamento da agenda externa da Doctoralia.',
  alternates: { canonical: '/politica-de-cookies' },
};

const headingClass = 'text-xl font-semibold tracking-tight text-ink-strong sm:text-2xl';
const paragraphClass = 'mt-3 text-base leading-7 text-ink-muted';
const linkClass = 'font-medium text-accent underline underline-offset-4 hover:text-brand-deep focus:outline-none focus-visible:ring-2 focus-visible:ring-focus-on-light';

export default function CookiePolicyPage() {
  return (
    <LegalPageShell
      title="Política de Cookies"
      intro="Explicamos quais tecnologias este site usa, quando um serviço externo é carregado e como alterar sua escolha."
    >
      <section aria-labelledby="cookies-overview">
        <h2 className={headingClass} id="cookies-overview">1. O que são cookies</h2>
        <p className={paragraphClass}>
          Cookies são arquivos ou identificadores que podem ser armazenados no navegador para viabilizar funções, lembrar escolhas ou medir atividades. Tecnologias semelhantes, como armazenamento local, também podem guardar informações no dispositivo.
        </p>
      </section>

      <section aria-labelledby="cookies-current">
        <h2 className={headingClass} id="cookies-current">2. O que este site usa hoje</h2>
        <div className="mt-4 overflow-x-auto rounded-2xl border border-site-border">
          <table className="w-full min-w-[38rem] border-collapse text-left text-sm">
            <thead className="bg-surface-soft text-ink-strong">
              <tr>
                <th className="p-4 font-semibold" scope="col">Tecnologia</th>
                <th className="p-4 font-semibold" scope="col">Finalidade e escolha</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-site-border text-ink-muted">
              <tr>
                <th className="p-4 align-top font-semibold text-ink-strong" scope="row">Preferência de privacidade</th>
                <td className="p-4 leading-6">O armazenamento local do navegador lembra se você permitiu ou recusou a agenda integrada. É usado para respeitar sua escolha e não é um cookie de publicidade ou analytics.</td>
              </tr>
              <tr>
                <th className="p-4 align-top font-semibold text-ink-strong" scope="row">Agenda da Doctoralia</th>
                <td className="p-4 leading-6">O widget de terceiros fica bloqueado até sua autorização. Ao ativá-lo, a Doctoralia pode receber dados técnicos do acesso e usar cookies ou tecnologias próprias, conforme as políticas do serviço.</td>
              </tr>
              <tr>
                <th className="p-4 align-top font-semibold text-ink-strong" scope="row">Analytics e publicidade</th>
                <td className="p-4 leading-6">O código atual do site não carrega ferramentas próprias de analytics, pixels de publicidade ou cookies de marketing.</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className={paragraphClass}>
          O nome e o prazo de retenção de eventuais cookies definidos pelo widget são controlados pela Doctoralia e podem mudar. Consulte a {' '}
          <a className={linkClass} href="https://www.doctoralia.com.br/privacidade" rel="noopener noreferrer" target="_blank">
            política de privacidade e cookies da Doctoralia<span className="sr-only"> (abre em nova aba)</span>
          </a> para obter o inventário atualizado do serviço.
        </p>
      </section>

      <section aria-labelledby="cookies-consent">
        <h2 className={headingClass} id="cookies-consent">3. Como funciona sua escolha</h2>
        <p className={paragraphClass}>
          Na primeira visita, você pode permitir a agenda integrada, recusar conteúdo opcional ou personalizar a escolha. A agenda é opcional: recusá-la não impede a navegação nem o acesso ao perfil da Doctoralia pelo link disponível na seção de agendamento.
        </p>
        <p className={paragraphClass}>
          Você pode alterar ou revogar a autorização a qualquer momento pelo botão abaixo ou pelo link “Gerenciar cookies” no rodapé de qualquer página. Ao revogar a agenda depois de carregada, a página é atualizada para deixar de carregá-la. A revogação impede novas cargas do widget pelo site, mas não apaga dados ou cookies que a Doctoralia já tenha armazenado em seu próprio serviço; para isso, consulte as opções oferecidas pela plataforma e pelo navegador.
        </p>
        <div className="mt-4">
          <CookieSettingsButton variant="light" />
        </div>
      </section>

      <section aria-labelledby="cookies-links">
        <h2 className={headingClass} id="cookies-links">4. Links para outros serviços</h2>
        <p className={paragraphClass}>
          Os links para WhatsApp e Google Maps só abrem o serviço externo quando você os seleciona. O uso desses serviços passa a seguir suas próprias políticas. Veja também a {' '}
          <Link className={linkClass} href="/politica-de-privacidade">Política de Privacidade deste site</Link>.
        </p>
      </section>

      <p className="rounded-2xl border border-site-border bg-surface-soft p-5 text-sm leading-6 text-ink-muted">
        Esta política acompanha a configuração atualmente implementada. Para saber como a ANPD recomenda apresentar escolhas de cookies, consulte o {' '}
        <a className={linkClass} href="https://www.gov.br/anpd/pt-br/centrais-de-conteudo/materiais-educativos-e-publicacoes/guia_orientativo_cookies_e_protecao_de_dados_pessoais" rel="noopener noreferrer" target="_blank">
          Guia Orientativo da ANPD<span className="sr-only"> (abre em nova aba)</span>
        </a>.
      </p>
    </LegalPageShell>
  );
}
