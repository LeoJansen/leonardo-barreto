import type { Metadata } from 'next';
import Link from 'next/link';
import LegalPageShell from '@/components/LegalPageShell';

export const metadata: Metadata = {
  title: 'Termos de Uso | Dr. Leonardo Barreto',
  description: 'Condições de uso e avisos importantes sobre as informações deste site e serviços externos.',
  alternates: { canonical: '/termos-de-uso' },
};

const headingClass = 'text-xl font-semibold tracking-tight text-ink-strong sm:text-2xl';
const paragraphClass = 'mt-3 text-base leading-7 text-ink-muted';
const linkClass = 'font-medium text-accent underline underline-offset-4 hover:text-brand-deep focus:outline-none focus-visible:ring-2 focus-visible:ring-focus-on-light';

export default function TermsOfUsePage() {
  return (
    <LegalPageShell
      title="Termos de Uso"
      intro="Estes termos apresentam os limites das informações publicadas neste site e o funcionamento dos links para agendamento e contato."
    >
      <section aria-labelledby="terms-information">
        <h2 className={headingClass} id="terms-information">1. Conteúdo informativo sobre saúde</h2>
        <p className={paragraphClass}>
          As informações deste site têm finalidade geral e educativa. Não constituem diagnóstico, prescrição ou plano individual de tratamento, não substituem consulta médica e não confirmam uma condição a partir de sintomas isolados.
        </p>
        <p className={paragraphClass}>
          Decisões sobre saúde devem considerar avaliação profissional individual. Este site e os canais de contato indicados não são serviços de emergência nem garantem atendimento imediato.
        </p>
      </section>

      <section aria-labelledby="terms-booking">
        <h2 className={headingClass} id="terms-booking">2. Agendamento e canais externos</h2>
        <p className={paragraphClass}>
          A agenda integrada é fornecida pela Doctoralia e só é carregada após autorização no aviso de cookies. Você também pode abrir o perfil externo diretamente. Disponibilidade, confirmação, cancelamento e regras de agendamento são apresentados pela plataforma.
        </p>
        <p className={paragraphClass}>
          O WhatsApp é um canal externo para mensagens iniciadas por você. Evite enviar informações clínicas detalhadas antes de receber orientação sobre o canal adequado para o atendimento. Consulte as políticas dos serviços na {' '}
          <Link className={linkClass} href="/politica-de-privacidade">Política de Privacidade</Link>.
        </p>
      </section>

      <section aria-labelledby="terms-use">
        <h2 className={headingClass} id="terms-use">3. Uso responsável</h2>
        <p className={paragraphClass}>
          Ao navegar, você concorda em usar o site de forma lícita e sem tentar comprometer sua disponibilidade ou segurança. O conteúdo pode ser atualizado para corrigir informações ou refletir mudanças no atendimento.
        </p>
      </section>

      <section aria-labelledby="terms-updates">
        <h2 className={headingClass} id="terms-updates">4. Atualizações</h2>
        <p className={paragraphClass}>
          Estes termos podem mudar junto com o site e seus serviços. A versão atual estará sempre disponível nesta página.
        </p>
      </section>
    </LegalPageShell>
  );
}
