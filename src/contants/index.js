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

export default conditionsDetails;