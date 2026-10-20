import type { Metadata } from 'next';
import LegalPageShell from '@/components/LegalPageShell';
import { CONSULTATION_LOCATION, SITE_URL, WHATSAPP_PHONE } from '@/contants/index.js';

export const metadata: Metadata = {
  title: 'Política de Privacidade | Dr. Leonardo Barreto',
  description: 'Saiba quais dados este site trata, para quais finalidades e como exercer seus direitos de privacidade.',
  alternates: { canonical: '/politica-de-privacidade' },
};

const privacyMessage = encodeURIComponent('Olá, gostaria de fazer uma solicitação sobre privacidade e meus dados pessoais.');
const privacyContact = `https://wa.me/${WHATSAPP_PHONE.replace(/\D+/g, '')}?text=${privacyMessage}`;
const doctoraliaPrivacy = 'https://www.doctoralia.com.br/privacidade';
const whatsappPrivacy = 'https://www.whatsapp.com/legal/privacy-policy';
const mapsPrivacy = 'https://policies.google.com/privacy?hl=pt-BR';

const headingClass = 'text-xl font-semibold tracking-tight text-ink-strong sm:text-2xl';
const paragraphClass = 'mt-3 text-base leading-7 text-ink-muted';
const listClass = 'mt-3 list-disc space-y-2 pl-6 text-base leading-7 text-ink-muted marker:text-accent';
const linkClass = 'font-medium text-accent underline underline-offset-4 hover:text-brand-deep focus:outline-none focus-visible:ring-2 focus-visible:ring-focus-on-light';

export default function PrivacyPolicyPage() {
  return (
    <LegalPageShell
      title="Política de Privacidade"
      intro="Esta página explica como os dados podem ser tratados quando você navega pelo site, solicita informações ou acessa serviços externos de agendamento e contato."
    >
      <section aria-labelledby="privacy-controller">
        <h2 className={headingClass} id="privacy-controller">1. Quem responde pelo tratamento</h2>
        <p className={paragraphClass}>
          Para as operações próprias deste site e para o contato profissional, o responsável é o Dr. Leonardo Barreto, médico, CRM-PR 58107. O atendimento presencial ocorre na {CONSULTATION_LOCATION.streetAddress} – {CONSULTATION_LOCATION.neighborhood}, {CONSULTATION_LOCATION.addressLocality} – {CONSULTATION_LOCATION.addressRegion}, {CONSULTATION_LOCATION.postalCode}.
        </p>
        <p className={paragraphClass}>
          Para dúvidas ou solicitações sobre privacidade, use o canal profissional de WhatsApp: {' '}
          <a className={linkClass} href={privacyContact} rel="noopener noreferrer" target="_blank">
            falar sobre privacidade e dados pessoais<span className="sr-only"> (abre em nova aba)</span>
          </a>.
        </p>
      </section>

      <section aria-labelledby="privacy-data">
        <h2 className={headingClass} id="privacy-data">2. Quais dados são tratados</h2>
        <p className={paragraphClass}>
          Este site não possui formulário de contato, cadastro de pacientes ou prontuário. A preferência de carregamento da agenda integrada é guardada no armazenamento local do navegador para que sua escolha seja lembrada.
        </p>
        <p className={paragraphClass}>
          Para disponibilizar e proteger as páginas, o provedor de hospedagem pode processar dados técnicos de conexão, como endereço IP, data e horário da solicitação, página acessada e informações do navegador. O prazo de retenção depende das configurações e políticas do serviço de hospedagem.
        </p>
        <p className={paragraphClass}>
          Se você optar por iniciar uma conversa no WhatsApp, a plataforma poderá tratar seu número, dados do perfil e o conteúdo que decidir enviar. Se você informar dados sobre saúde, eles podem ser dados pessoais sensíveis. Envie apenas o necessário para a finalidade do contato e evite compartilhar detalhes clínicos por canais que não sejam indicados para o atendimento.
        </p>
        <p className={paragraphClass}>
          O agendamento pela Doctoralia é operado em uma plataforma externa. Os dados inseridos no perfil ou na agenda são tratados segundo os papéis e as políticas próprias da Doctoralia e do profissional. Consulte a {' '}
          <a className={linkClass} href={doctoraliaPrivacy} rel="noopener noreferrer" target="_blank">
            Política de Privacidade da Doctoralia<span className="sr-only"> (abre em nova aba)</span>
          </a>.
        </p>
        <p className={paragraphClass}>
          O link do Google Maps só é acessado quando você escolhe abrir o endereço. Veja a {' '}
          <a className={linkClass} href={mapsPrivacy} rel="noopener noreferrer" target="_blank">
            Política de Privacidade do Google<span className="sr-only"> (abre em nova aba)</span>
          </a>. Para o WhatsApp, consulte a {' '}
          <a className={linkClass} href={whatsappPrivacy} rel="noopener noreferrer" target="_blank">
            Política de Privacidade do WhatsApp<span className="sr-only"> (abre em nova aba)</span>
          </a>.
        </p>
      </section>

      <section aria-labelledby="privacy-purposes">
        <h2 className={headingClass} id="privacy-purposes">3. Finalidades e bases legais</h2>
        <ul className={listClass}>
          <li>Manter e proteger a navegação do site e lembrar sua escolha sobre conteúdo externo.</li>
          <li>Carregar a agenda integrada da Doctoralia somente após sua autorização, se você optar por isso.</li>
          <li>Responder a uma mensagem ou organizar um pedido de agendamento quando você iniciar o contato.</li>
          <li>Tratar dados necessários à prestação de serviços de saúde conforme a hipótese legal aplicável a cada situação, quando houver relação de atendimento.</li>
        </ul>
        <p className={paragraphClass}>
          O consentimento deste site se limita ao carregamento opcional do widget da Doctoralia. Ele não substitui nem representa um consentimento geral para tratamento de dados de saúde. As bases legais de cada interação são definidas conforme sua finalidade, nos termos da Lei Geral de Proteção de Dados Pessoais (LGPD).
        </p>
      </section>

      <section aria-labelledby="privacy-sharing">
        <h2 className={headingClass} id="privacy-sharing">4. Serviços externos e compartilhamento</h2>
        <p className={paragraphClass}>
          O site não carrega ferramentas próprias de publicidade ou analytics. A agenda da Doctoralia é conteúdo de terceiro e só é carregada depois que você a autoriza no aviso de cookies. WhatsApp e Google Maps são abertos por links quando você escolhe usá-los; ao sair deste site, o tratamento passa a seguir as políticas desses serviços.
        </p>
      </section>

      <section aria-labelledby="privacy-retention">
        <h2 className={headingClass} id="privacy-retention">5. Armazenamento, retenção e segurança</h2>
        <p className={paragraphClass}>
          A opção de carregar ou não a agenda fica no armazenamento local do navegador e pode ser alterada pelo controle “Gerenciar cookies” no rodapé. O código deste site não envia essa escolha para um banco de dados próprio.
        </p>
        <p className={paragraphClass}>
          Mensagens e informações de agendamento ficam nos serviços em que você as envia ou fornece. A retenção nesses serviços e em registros profissionais depende da finalidade do atendimento, das regras aplicáveis e das políticas de cada plataforma.
        </p>
      </section>

      <section aria-labelledby="privacy-rights">
        <h2 className={headingClass} id="privacy-rights">6. Seus direitos</h2>
        <p className={paragraphClass}>
          A LGPD prevê direitos como confirmar o tratamento, acessar e corrigir dados, solicitar anonimização, bloqueio ou eliminação quando cabível, obter informações sobre compartilhamentos e revogar consentimentos. Você pode encaminhar uma solicitação pelo canal de privacidade indicado nesta página. Pedidos relativos a dados mantidos diretamente por Doctoralia, WhatsApp ou Google também podem ser feitos a essas plataformas.
        </p>
      </section>

      <section aria-labelledby="privacy-content">
        <h2 className={headingClass} id="privacy-content">7. Informações de saúde no site</h2>
        <p className={paragraphClass}>
          Os conteúdos sobre saúde mental são informativos. Não confirmam diagnósticos e não substituem avaliação, orientação ou acompanhamento profissional. Leia os avisos apresentados junto às informações de saúde antes de tomar decisões sobre cuidados.
        </p>
      </section>

      <section aria-labelledby="privacy-updates">
        <h2 className={headingClass} id="privacy-updates">8. Atualizações desta política</h2>
        <p className={paragraphClass}>
          Esta política pode ser atualizada quando mudarem o site, os serviços utilizados ou as práticas de tratamento. A versão vigente ficará disponível nesta página. Endereço do site: <a className={linkClass} href={SITE_URL}>{SITE_URL.replace(/^https?:\/\//, '')}</a>.
        </p>
      </section>

      <p className="rounded-2xl border border-site-border bg-surface-soft p-5 text-sm leading-6 text-ink-muted">
        Referências: <a className={linkClass} href="https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2018/lei/l13709compilado.htm" rel="noopener noreferrer" target="_blank">Lei nº 13.709/2018 (LGPD)</a> e {' '}
        <a className={linkClass} href="https://www.gov.br/anpd/pt-br/centrais-de-conteudo/materiais-educativos-e-publicacoes/guia_orientativo_cookies_e_protecao_de_dados_pessoais" rel="noopener noreferrer" target="_blank">orientações da ANPD sobre cookies</a>.
      </p>
    </LegalPageShell>
  );
}
