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

final result: passed
