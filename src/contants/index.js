// Conteúdos de sinais e sintomas organizados como objeto JS

/**
 * Estrutura de dados
 * {
 *   chave: {
 *     title: string,
 *     bullets: Array<{ title: string, description: string }>
 *   }
 * }
 */




export const conditionsDetails = {
	depressao: {
		title: 'Depressão',
		bullets: [
			{
				title: 'Tristeza persistente e perda de interesse',
				description:
					'Sentimento de tristeza, desesperança ou perda de prazer em atividades que antes eram prazerosas.',
			},
			{
				title: 'Alterações físicas',
				description:
					'Mudanças significativas no apetite e no sono, além de falta de energia e fadiga constante.',
			},
		],
	},
	ansiedade: {
		title: 'Ansiedade',
		bullets: [
			{
				title: 'Preocupação e nervosismo',
				description:
					'Sentimento de preocupação excessiva, inquietação e nervosismo constante, sem um motivo claro.',
			},
			{
				title: 'Sintomas físicos',
				description:
					'Aumento da frequência cardíaca, sudorese, tremores ou tensão muscular.',
			},
		],
	},
	insonia: {
		title: 'Insônia',
		bullets: [
			{
				title: 'Problemas para dormir',
				description:
					'Dificuldade para adormecer, permanecer dormindo ou acordar muito cedo.',
			},
			{
				title: 'Cansaço diurno',
				description:
					'Sensação de não ter tido um sono reparador, resultando em sonolência, irritabilidade e falta de concentração durante o dia.',
			},
		],
	},
	tdah: {
		title: 'TDAH (Transtorno do Déficit de Atenção e Hiperatividade)',
		bullets: [
			{
				title: 'Desatenção e impulsividade',
				description:
					'Dificuldade em manter o foco e agir ou falar sem pensar nas consequências.',
			},
			{
				title: 'Inquietação',
				description:
					'Sensação de estar sempre "ligado" e ter dificuldade em ficar parado por muito tempo.',
			},
		],
	},
};

// Informação do WhatsApp para o botão flutuante
// Dica: use apenas números com DDI + DDD + número (ex.: Brasil 55 + 11 + 91234-5678 => "5511912345678")
export const WHATSAPP_PHONE = process.env.NEXT_PUBLIC_WHATSAPP_PHONE || '+5546999808231';
export const WHATSAPP_MESSAGE =
	process.env.NEXT_PUBLIC_WHATSAPP_MESSAGE || 'Olá! Gostaria de agendar uma consulta com o Dr. Leonardo Barreto. Link disponível em www.leonardobarreto.com.br';

export default conditionsDetails;