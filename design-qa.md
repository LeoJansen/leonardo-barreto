# Design QA — landing page Dr. Leonardo Barreto

## Referências e capturas

- **Referência visual:** `C:\Users\leooa\.codex\generated_images\01a15b5e-bb05-7ac0-9e5f-c10d5d9b4c15\exec-6523024e-26ca-403d-b11a-ac65e3cb8916.png` — PNG de 809 × 1942 px. É uma prancha que reúne as referências desktop (1440 px) e mobile (390 px), não uma captura bruta de uma única viewport.
- **Implementação desktop:** captura full-page JPEG feita pelo navegador local e exibida inline na revisão visual; 1440 × 5694 px, viewport CSS de 1440 × 1000 px, `deviceScaleFactor` 1. Captura feita depois de percorrer a página para ativar as animações de entrada. O navegador só expôs a captura em memória; não há caminho de arquivo local.
- **Implementação mobile:** captura visual feita durante a revisão em viewport CSS de 390 × 844 px, densidade 1. `document.body.scrollWidth` ficou em 375 px e não houve overflow horizontal. A captura foi exibida inline; suas dimensões rasterizadas e um caminho local não ficaram disponíveis.
- **Estado:** landing page inicial, sem abrir a agenda externa. A comparação desktop da prancha e da implementação foi feita no mesmo contexto visual. A prancha inclui o frame mobile; a implementação mobile foi conferida na captura responsiva separada. As imagens não foram redimensionadas para alegar correspondência pixel a pixel.
- **Limitação do arquivo de evidência:** o navegador retornou as imagens como bytes em memória. A tentativa de exportação por URL `data:` foi negada pela política do navegador; não usei caminhos alternativos para contornar esse bloqueio.

## Findings

- Nenhuma diferença P0, P1 ou P2 ficou pendente após a comparação visual.
- A agenda de horários da Doctoralia só aparece depois de uma solicitação explícita e da autorização do serviço externo. A captura mostra a explicação e o botão de carregamento; esse estado respeita o consentimento e evita apresentar horários inventados.

## Fidelidade visual

- **Tipografia:** Inter mantém hierarquia clara entre navegação, títulos, rótulos e texto corrido; quebras e tamanhos se mantêm legíveis nos frames conferidos.
- **Espaçamento e ritmo:** hero, apresentação, busca por ajuda, sinais, faixa de acolhimento, formação, agendamento e CTA final seguem a ordem da referência. Cards e respiros preservam uma leitura confortável no desktop e no mobile.
- **Cores e tokens:** teal/turquesa destaca ações e navegação; sálvia clara apoia superfícies e seções; teal escuro organiza sinais e rodapé, em linha com a referência e as preferências registradas para o projeto.
- **Imagens:** fotos do consultório, estudo, atendimento, condições e formação carregam com recortes coerentes com a prancha, sem áreas de imagem quebrada.
- **Conteúdo:** CRM fica separado da qualificação do Einstein, cujo status permanece “em andamento”. A página mantém presencial e teleconsulta e diferencia a agenda Doctoralia do contato por WhatsApp.

## Interações e console

- CTA principal “Agendar na Doctoralia” leva à seção `#agendar`.
- A seção da agenda explica o carregamento externo e mantém a ação disponível; nenhum script da Doctoralia foi solicitado durante a revisão.
- Os logs de console de uma sessão limpa não registraram erros nem avisos.
- Navegação mobile e ausência de overflow horizontal foram conferidas em 390 × 844 px.

## Histórico da comparação

- A primeira captura full-page foi feita antes de percorrer a página; a animação de entrada do bloco “Sobre” ainda não tinha sido ativada. Percorri a página, capturei novamente e confirmei o bloco visível. Isso foi uma condição de captura; nenhuma correção adicional de código foi necessária.
- A comparação final não encontrou diferenças visuais acionáveis P0/P1/P2.

## Checklist de implementação

- [x] Refinar navegação, hero e hierarquia dos CTAs.
- [x] Reorganizar “Sobre”, busca por ajuda e cards de sinais.
- [x] Ajustar cores, formação, localização e seção da agenda.
- [x] Conferir desktop, mobile, CTA principal e console do navegador.
- [x] Registrar a limitação de persistência da captura do navegador.

## Follow-up polish

- A agenda visual com horários disponíveis depende da autorização e do carregamento da Doctoralia; conferir esse estado quando a integração for aberta em um ambiente consentido.

## Iteração do hero — mockup de 20/10/2026

- **Referência visual:** `C:\Users\leooa\AppData\Local\Temp\codex-clipboard-676c3403-78e4-4f2b-a505-6b52cdb7b4d2.png`, prancha de 1409 × 469 px com frames desktop e mobile.
- **Implementação:** preview local em `http://localhost:3001/`; capturas do navegador in-app, exibidas durante esta revisão e não persistidas em arquivo. Raster desktop: 1265 × 791 px a partir de viewport CSS 1280 × 800; raster mobile: 375 × 812 px a partir de viewport CSS 390 × 844; densidade 1. Sem redimensionamento.
- **Estado:** rota inicial no topo; menu fechado; agenda externa não carregada.
- **Comparação de tela completa:** no desktop, imagem em tela cheia, texto alinhado à esquerda e CTAs em linha; no mobile, recorte em pé com o médico à direita e CTAs empilhados, como na referência. A barra de rolagem reduz a largura útil do raster; o documento não tem overflow horizontal.
- **Região focada:** não foi necessária uma captura recortada adicional: eyebrow, título, descrição, CTAs e recorte da foto ficam legíveis na captura de cada viewport.
- **Fidelidade:** Inter e tamanhos preservam a hierarquia; posições e espaçamentos aproximam a prancha; verde escuro e teal seguem os tokens do site; a foto de consultório existente corresponde à imagem do mockup; o texto do hero foi mantido.
- **CTAs e console:** “Agendar na Doctoralia” aponta para `#agendar`; WhatsApp mantém o destino externo e abre em nova aba. Nenhuma ação externa foi disparada. Console sem erros ou avisos nos dois tamanhos.
- **Histórico:** a primeira captura mobile desta iteração apresentou quebras de título diferentes da prancha. A largura e a quebra responsiva foram refinadas e comparadas novamente a 390 × 844. A última captura corresponde ao mockup sem diferenças acionáveis P0/P1/P2.

**Findings:** nenhum P0, P1 ou P2 pendente.

**Checklist**

- [x] Remover os painéis de nome/CRM e características de dentro do hero.
- [x] Aplicar o recorte da foto, a hierarquia dos textos e os dois CTAs responsivos.
- [x] Conferir os frames desktop e mobile e os destinos dos CTAs.

## Iteração — altura do viewport e limite 21:9 — 20/10/2026

- **Regra:** o hero ocupa a área abaixo da navegação em telas retrato; em telas landscape a partir de 768 px, a altura máxima acompanha 21:9 pela largura real do conteúdo.
- **Desktop:** viewport 1280 × 800 px; navegação 77 px; hero 1265 × 542,14 px, proporção 2,3333:1. Sem overflow horizontal.
- **Mobile:** viewport 390 × 844 px; navegação 69 px; hero 375 × 775 px, preenchendo o restante do viewport. Sem overflow horizontal.
- **Composição mobile:** foto enquadrada à direita e `sizes` ajustado à altura visível para preservar a nitidez; os CTAs ficam abaixo do rosto do médico.
- **Console:** nenhum erro. Há um aviso já registrado fora do hero sobre quality 78 em `/assets/under-img.png`, valor ausente de `images.qualities`; sem relação com esta alteração.

**Findings:** nenhum P0, P1 ou P2 pendente nesta iteração.

Resultado da comparação anterior: passed

## Iteração — redistribuição responsiva do hero — 20/10/2026

- **Referência visual:** `C:\Users\leooa\AppData\Local\Temp\codex-clipboard-aee8d1b0-69f4-4b94-bf78-6fb2224accf0.png`, prancha de 1527 × 710 px com frames de 320 × 569, 390 × 693, 450 × 800, 640 × 1138 e 641 × 1140 px. Os frames fazem parte de uma prancha composta; a comparação foi visual, sem alegar paridade pixel a pixel.
- **Caminho da captura da implementação:** não há arquivo local persistido. As capturas JPEG foram feitas no navegador in-app de `http://localhost:3001/`, em CSS 641 × 1140 e 640 × 320, densidade 1; rasterizadas em 626 × 1113 e 625 × 313 px respectivamente e conferidas na sessão.
- **Estado:** topo da página, menu fechado, hero visível e animações de entrada concluídas. Os CTAs não foram acionados; o WhatsApp e a agenda externa não foram abertos.
- **Comparação de tela completa:** no frame 641 × 1140, os CTAs antes ficavam em linha na altura do rosto. Na implementação final, ficam empilhados no canto inferior esquerdo e o rosto permanece livre. Em 1280 × 800, os CTAs voltam à linha; o hero mede 1265 × 542 px (21:9). Em 1920 × 911, mede 1905 × 816 px (21:9).
- **Região focada:** eyebrow, título, descrição, dois CTAs e rosto do profissional foram conferidos no mesmo frame de 641 × 1140. A captura 640 × 320 confirmou o modo paisagem compacto, com os dois botões inteiros e margem inferior de 12 px.
- **Matriz responsiva:** 320 × 569, 390 × 693, 450 × 800, 640 × 1138, 641 × 1140, 640 × 320, 768 × 600, 800 × 600, 1024 × 768, 1039 × 768, 1024 × 1366, 1280 × 800 e 1920 × 911. Não houve overflow horizontal; todos os botões permaneceram dentro do hero. Os CTAs ficam empilhados nas larguras menores e em telas compactas; entram em linha quando há largura para separar a ação do retrato.
- **Achado P1 inicial:** em 640–641 px, o breakpoint anterior colocava os CTAs lado a lado sobre o rosto. Em paisagem muito baixa, a descrição e os botões também ultrapassavam o espaço vertical disponível.
- **Correções e evidência após a correção:** os CTAs agora têm a mesma largura e ficam ancorados abaixo do texto em layouts estreitos. O enquadramento do retrato acompanha a orientação da tela. Paisagem curta reduz os espaçamentos e mantém 12 px de respiro; em tablets de paisagem o padding também foi ajustado para manter todo o conteúdo no hero. As capturas finais de 641 × 1140 e 640 × 320 mostram os CTAs sem sobrepor o rosto e sem cortes.
- **Destinos e console:** o CTA Doctoralia continua apontando para `#agendar`; o WhatsApp mantém o destino externo em nova aba. Os controles não foram acionados. Console do navegador sem erros ou avisos após a atualização final.

**Findings:** nenhum P0, P1 ou P2 pendente.

**Checklist**

- [x] Manter os CTAs empilhados e com largura consistente até haver espaço seguro para a linha.
- [x] Ancorar as ações no fim do hero sem cobrir o rosto em telas estreitas ou retrato.
- [x] Ajustar paisagem baixa e tablet para manter texto e botões dentro da seção.
- [x] Conferir os treze tamanhos da matriz, a proporção 21:9 em desktop, os destinos e o console.

Resultado da comparação responsiva anterior: passed

## Iteração — hero preenchendo o viewport em paisagem — 20/10/2026

- **Referências:** `C:\Users\leooa\AppData\Local\Temp\codex-clipboard-8700a5a6-9f49-4c01-a31b-b96a1c6f4fe9.png` e `C:\Users\leooa\AppData\Local\Temp\codex-clipboard-00f44465-b23a-4c92-b12b-9d504a0e9ab7.png`, com exemplos de desktop e mobile.
- **Alteração:** removido o teto de 21:9 em telas landscape. O hero conserva a altura do viewport descontada a navegação sticky; o contêiner usado apenas para aplicar aquele teto também foi removido.
- **Captura da implementação:** preview local em `http://localhost:3001/`, conferido no navegador in-app. A captura de tela não foi persistida em arquivo. A inspeção visual foi feita nos frames 1024 × 768 e 1439 × 1079 px.
- **Matriz de viewports CSS:** 1024 × 768, 1280 × 960, 1350 × 1013, 1439 × 1079, 640 × 320 e 320 × 600 px. Em todos, a soma das alturas da navegação e do hero coincide com a altura do viewport e a borda inferior do hero coincide com o fim do viewport; sem overflow horizontal.
- **Medidas landscape:** em 1024 × 768, navegação 77 px e hero 691 px; em 1280 × 960, hero 883 px; em 1350 × 1013, hero 936 px; em 1439 × 1079, hero 1002 px. Paisagem compacta 640 × 320 mantém navegação 69 px e hero 251 px.
- **Retrato:** em 320 × 600, navegação 69 px e hero 531 px, preservando o comportamento anterior.
- **Região focada:** no frame 1439 × 1079, eyebrow, título, descrição, dois CTAs e imagem permanecem visíveis. O CTA Doctoralia continua no header e os dois CTAs do hero mantêm a composição existente.
- **Console:** nenhuma mensagem de erro ou aviso após a atualização CSS.

**Findings:** nenhum P0, P1 ou P2 pendente.

**Checklist**

- [x] Remover o limite de proporção 21:9 das telas horizontais.
- [x] Confirmar que a navegação e o hero preenchem juntos a altura do viewport em quatro tamanhos horizontais.
- [x] Conferir paisagem compacta e retrato para preservar o comportamento responsivo.

Resultado da iteração anterior: passed

## Iteração — seção “Sobre” conforme mockup — 20/10/2026

- **Referências visuais:** mobile `C:\Users\leooa\AppData\Local\Temp\codex-clipboard-0acee82e-8c33-4668-9e26-9a4015d95ef9.png` (346 × 540 px) e desktop `C:\Users\leooa\AppData\Local\Temp\codex-clipboard-f057e0f4-59d2-4a14-8a65-bd02b04ac71d.png` (793 × 379 px).
- **Implementação:** preview `http://localhost:3001/#sobre`. A foto ocupa o topo no mobile e fica à direita no desktop; o eyebrow deixou de ser uma cápsula; texto e cartões seguem a hierarquia do mockup. Os cartões mantêm os ícones de usuário e grupo em círculos verdes com pictogramas brancos.
- **Capturas e comparação combinada:** `C:\Users\leooa\.codex\visualizations\2026\10\20\01a15b5e-bb05-7ac0-9e5f-c10d5d9b4c15\about-section-qa\about-mobile-comparison.png` coloca a referência à esquerda e a implementação à direita; `about-desktop-comparison.png` faz o mesmo para desktop. As imagens fonte e as capturas do navegador foram abertas e comparadas lado a lado.
- **Dimensões e normalização mobile:** viewport CSS 346 × 540 px; captura do navegador 331 × 517 px, densidade efetiva 0,957 por conta da área de rolagem da captura. A implementação foi escalada uniformemente a 346 × 540 px na comparação.
- **Dimensões e normalização desktop:** viewport CSS 1024 × 490 px; captura do navegador 1009 × 483 px, densidade efetiva 0,985. A implementação foi redimensionada a 793 × 379 px para coincidir com o raster da referência. O enquadramento contém uma faixa de 8 px da seção anterior no topo; título, imagem e cartões estão visíveis.
- **Estado:** rota `/#sobre`, menu fechado, animações de entrada concluídas. Nenhum CTA externo ou agenda foi acionado.
- **Comparação de tela completa:** imagem e conteúdo seguem a mesma ordem do mockup em cada viewport. No mobile, imagem, eyebrow, título, os dois parágrafos e ambos os cartões aparecem no frame de 346 × 540 px. No desktop, os cartões avançam cerca de 48 px sobre a borda esquerda da imagem, como na referência.
- **Região focada:** não foi necessária captura recortada adicional; os elementos de texto, foto e cartões estão presentes nas duas comparações completas.
- **Tipografia, cores e imagem:** Inter e hierarquia de pesos permanecem coerentes com o site; o eyebrow usa caixa alta e espaçamento amplo. A paleta mantém o fundo claro e o teal da identidade. Foi reutilizada a imagem existente `/assets/estudo2.png`, com recorte horizontal no mobile e próximo de quadrado no desktop. Os pictogramas vêm de `react-icons/hi2`.
- **Console e responsividade:** nenhum erro ou aviso. Sem overflow horizontal em 320 × 600, 346 × 540, 390 × 844, 640 × 800, 768 × 900, 1024 × 768 e 1280 × 900 px.

**Histórico da comparação**

- **P2 inicial — mobile:** a primeira comparação em 346 × 540 deixava o segundo cartão fora do frame (seção com 718 px). Reduzi tipografia, espaçamentos e altura dos cartões e ajustei a proporção da foto. Na captura revisada, a seção mede 546 px; os cartões começam em y=338 e y=441, têm 91 px de altura e aparecem completos.
- **P2 inicial — desktop:** os cartões terminavam junto à borda da foto. Ampliei a faixa dos cartões; na captura revisada em 1024 px, a foto começa em x=618 e os cartões terminam em x=666, cobrindo 48 px da imagem.
- **Resultado pós-correção:** as comparações mobile e desktop não mostram diferenças acionáveis P0/P1/P2. Pequenas variações de rasterização e a faixa superior de 8 px na captura desktop não alteram a avaliação da estrutura.

**Checklist**

- [x] Colocar a imagem primeiro no mobile e à direita no desktop.
- [x] Reorganizar eyebrow, título, textos e cartões conforme o mockup.
- [x] Adicionar os ícones brancos em fundos verdes.
- [x] Comparar referências e capturas lado a lado em ambos os layouts e conferir a matriz responsiva.

Resultado da comparação inicial da seção: passed

## Iteração — espaçamento da seção “Sobre” em telas estreitas — 20/10/2026

- **Referência:** `C:\Users\leooa\AppData\Local\Temp\codex-clipboard-d05a1ff6-f292-433b-835d-07e5c68bc8e5.png` (808 × 619 px), com frames de 320 × 569, 390 × 693 e 450 × 800 px.
- **Alteração:** o intervalo entre os blocos do artigo passa de 4 px para 8 px em 320 px, 10 px a partir de 375 px e 12 px a partir de 430 px. O intervalo entre a foto e o eyebrow continua em 12 px; o espaço entre cartões permanece em 12 px.
- **Captura e comparação:** os três tamanhos foram abertos no preview `http://localhost:3001/#sobre`; as capturas finais foram inspecionadas visualmente contra a referência fornecida na conversa. As capturas desta iteração não foram persistidas como arquivos separados.
- **Medidas CSS:** seção com 559 px a 320, 547 px a 390 e 561 px a 450. Em cada frame, ambos os cartões permanecem dentro da seção; o texto tem 8/10/12 px entre os blocos; sem overflow horizontal.
- **Captura do navegador:** raster de 305 × 542 px para viewport CSS 320 × 569, 375 × 666 px para 390 × 693 e 435 × 773 px para 450 × 800. A área menor corresponde à captura do browser in-app com a barra de rolagem visível.
- **Console:** sem erros ou avisos após a atualização.

**Findings:** nenhum P0, P1 ou P2 pendente.

**Checklist**

- [x] Aumentar a separação entre descrição e cartões sem inflar o frame de 320 px.
- [x] Graduar os intervalos nas larguras de 320, 390 e 450 px.
- [x] Conferir os dois cartões, a foto, overflow e console nos três frames.

Resultado anterior da seção Sobre: passed

## Iteração — seção “Quando buscar ajuda” conforme mockup — 20/10/2026

**Referências e captura**

- **Fontes visuais:** desktop `C:\Users\leooa\AppData\Local\Temp\codex-clipboard-c6b7ba54-040c-4afa-bbe3-582fa54c6cce.png` (570 × 320 px) e mobile `C:\Users\leooa\AppData\Local\Temp\codex-clipboard-d262eb8e-6291-4ee5-8130-502010bee034.png` (212 × 395 px).
- **Implementação:** `http://localhost:3001/#quando-procurar`; seção alinhada ao topo, animações concluídas. O menu permaneceu fechado.
- **Captura da implementação:** screenshot capturado no navegador in-app por CUA e pareado com a referência na mesma tela de comparação. As páginas temporárias de comparação foram removidas após a revisão; as imagens de captura não foram persistidas como PNG.
- **Normalização desktop:** referência 570 × 320 px ampliada uniformemente 2× para 1140 × 640 CSS px; implementação renderizada nesse conteúdo CSS e reduzida a 570 × 320 px no comparador. A medição direta final em 1140 × 640 reportou seção de 1125 × 635 px, imagem de 415 × 332 px e cartões de 335 × 221 px; a diferença de 15 px na largura corresponde à barra de rolagem do navegador.
- **Normalização mobile:** referência 212 × 395 px ampliada uniformemente 1,84× para 390 × 727 CSS px; implementação renderizada nesse conteúdo CSS e reduzida ao tamanho da referência. A medição direta final no viewport 390 × 727 reportou seção de 375 × 726 px, imagem de 335 × 174 px e cartões de 335 × 106 px; a diferença de 15 px na largura corresponde à barra de rolagem do navegador.
- **Estado e interações:** a seção não contém CTAs; nenhum link externo ou agenda foi acionado.

**Comparação visual**

- **Tela completa:** a comparação lado a lado confirmou a imagem à esquerda e o bloco de texto à direita no desktop; os três cartões formam uma linha. No mobile, imagem, eyebrow, título, descrição e cartões aparecem em coluna. A proporção da foto e a altura da seção ficaram próximas às duas referências após a normalização.
- **Região focada:** não foi necessária captura recortada adicional. Título, descrição, pictogramas e texto dos três cartões permanecem visíveis e legíveis nas duas telas completas pareadas.
- **Tipografia e cópia:** a hierarquia acompanha a tipografia do site; os tamanhos aumentam no desktop e mantêm a leitura no mobile. Eyebrow, título, descrição e os textos dos cartões seguem a referência, sem cortes.
- **Espaçamento e layout:** o grid reorganiza a foto e o texto no desktop; em tablet os cartões passam a duas colunas e em telas menores ficam em uma ou duas colunas conforme o espaço. Alturas mínimas dos cartões evitam que a linha desktop pareça comprimida.
- **Cores e tokens:** superfície sálvia clara, cartões brancos e ícones em círculos verde-claro mantêm a paleta existente; o texto e os pictogramas usam o teal da marca.
- **Imagem e ícones:** mantida a imagem existente `/assets/whenToSeek.png`, que corresponde ao tema e ao recorte da referência. Os pictogramas usam `react-icons/tb` (Tabler): cérebro para emoções, pessoas para vida social e balões de conversa para relações. O traço é uniforme, com escala levemente ampliada e círculos verde-claros preservados.

**Histórico de comparação**

- **P2 inicial — desktop:** em 1140 × 640 CSS px, o primeiro preview tinha seção de aproximadamente 507 px e cartões de 108 px; no mockup normalizado, a seção ocupa cerca de 640 px e os cartões cerca de 222 px. A tipografia e os cartões estavam comprimidos.
- **Correção:** ajustei a proporção da imagem, escalei tipografia e pictogramas para desktop e aumentei a altura mínima dos cartões de forma fluida. Reorganizei os cartões em duas colunas nos tablets e três colunas a partir de 1024 px.
- **Evidência após a correção:** a seção mede 635 px, a foto 415 × 332 px e os cartões 221 px no conteúdo CSS 1140 × 640; na referência normalizada medem aproximadamente 640 px, 420 × 334 px e 222 px. A captura pareada final não mostra diferenças acionáveis P0/P1/P2.
- **Refino dos ícones — 21/10/2026:** após trocar os pictogramas por Tabler, a captura atual no navegador confirmou peso visual mais uniforme entre coração, grupo e conversa; o aumento ficou contido nos círculos existentes e não alterou o espaçamento dos cartões. Nenhum corte ou desalinhamento apareceu.
- **Substituição por símbolos mais específicos — 21/10/2026:** cérebro, pessoas e balões de conversa substituíram coração, grupo e balão simples para distinguir melhor os três temas sem alterar cards, cores ou espaçamentos. A captura desktop após a troca confirmou alinhamento e escala consistentes nos três círculos.

**Matriz responsiva**

- Viewports conferidos: 320 × 569, 390 × 727, 450 × 800, 640 × 800, 768 × 900, 1024 × 768, 1140 × 640 e 1280 × 800 CSS px.
- Não houve overflow horizontal. Em 320 px, a seção ultrapassa a altura do viewport por conta da coluna estreita, mantendo todo o conteúdo disponível por rolagem; de 390 px em diante, a distribuição se ajusta sem cortes nos cartões.

**Findings:** nenhum P0, P1 ou P2 pendente. As imagens fonte têm resolução menor que o conteúdo CSS comparado; pequenas diferenças de rasterização permanecem como variação P3.

**Checklist**

- [x] Reproduzir a estrutura desktop e a ordem mobile do mockup.
- [x] Aplicar os ícones com fundo verde-claro.
- [x] Conferir tipografia, espaçamento, cores, imagem e cópia nas duas comparações pareadas.
- [x] Verificar a redistribuição dos cartões e ausência de overflow em oito viewports.

final result: passed
