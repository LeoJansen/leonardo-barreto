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
				title: 'Humor e interesse',
				description:
					'Tristeza, desânimo ou diminuição do interesse e do prazer em atividades do cotidiano.',
			},
			{
				title: 'Energia e sono',
				description:
					'Mudanças no sono ou no apetite, cansaço e dificuldade de concentração também podem ocorrer.',
			},
		],
	},
	ansiedade: {
		title: 'Ansiedade',
		bullets: [
			{
				title: 'Preocupação e inquietação',
				description:
					'Preocupação intensa ou difícil de controlar e sensação frequente de inquietação.',
			},
			{
				title: 'Reações no corpo',
				description:
					'Em algumas situações, podem ocorrer aceleração dos batimentos, suor, tremores ou tensão muscular.',
			},
		],
	},
	insonia: {
		title: 'Insônia',
		bullets: [
			{
				title: 'Mudanças no sono',
				description:
					'Dificuldade para adormecer, manter o sono ou voltar a dormir depois de despertar.',
			},
			{
				title: 'Efeitos durante o dia',
				description:
					'Sono pouco reparador pode vir acompanhado de sonolência, irritabilidade ou dificuldade de concentração.',
			},
		],
	},
	tdah: {
		title: 'TDAH (Transtorno do Déficit de Atenção e Hiperatividade)',
		bullets: [
			{
				title: 'Atenção e organização',
				description:
					'Dificuldade frequente para manter a atenção, organizar tarefas ou concluir atividades.',
			},
			{
				title: 'Impulsividade ou inquietação',
				description:
					'Agir sem pensar ou sentir inquietação são experiências que também podem merecer avaliação.',
			},
		],
	},
};

// Informação do WhatsApp para o botão flutuante
// Dica: use apenas números com DDI + DDD + número (ex.: Brasil 55 + 11 + 91234-5678 => "5511912345678")
export const WHATSAPP_PHONE = process.env.NEXT_PUBLIC_WHATSAPP_PHONE || '+5546999808231';
export const WHATSAPP_MESSAGE =
	process.env.NEXT_PUBLIC_WHATSAPP_MESSAGE || 'Olá! Gostaria de agendar uma consulta com o Dr. Leonardo Barreto. Link disponível em www.drleonardobarreto.med.br';

export const SITE_URL = 'https://www.drleonardobarreto.med.br';
export const DOCTORALIA_PROFILE_URL =
	'https://www.doctoralia.com.br/leonardo-barreto-3/psiquiatra/foz-do-iguacu';
export const CONSULTATION_LOCATION = {
	streetAddress: 'Av. José Maria de Brito, 1707',
	neighborhood: 'Monjolo',
	addressLocality: 'Foz do Iguaçu',
	addressRegion: 'PR',
	postalCode: '85864-320',
	addressCountry: 'BR',
};

export default conditionsDetails;
