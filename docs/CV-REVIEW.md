# Revisão do CV — 24 de outubro de 2026

## Âmbito e evidência

Análise das duas páginas do PDF português gerado no navegador, dos dados PT/EN
em `src/data/cv.ts`, do gerador `src/lib/generate-cv.ts` e da informação em
`src/data/portfolio.ts`. Esta revisão orientou as melhorias aplicadas ao CV.

O PDF analisado tem 2 páginas A4 e cerca de 8,7 kB. O corpo usa 10 pt e os
metadados 9 pt. A extração contém o texto em sequência, incluindo acentos. Na
primeira página, o último texto termina a cerca de 790 pt; na segunda, a 685 pt
(numa página de 842 pt). A primeira página está mais densa. Os testes anteriores
validaram os downloads PT/EN, desktop/mobile, o texto e os links; não constituem
um teste no parser de um empregador nem uma garantia de classificação por ATS.

## Melhorias aplicadas

- Experiência antes das competências; formação antes dos projetos.
- Resumo mais curto e posicionamento em .NET, React e Azure.
- Competências selecionadas e categorias destacadas; descrições mais concisas.
- Corpo de 10,5 pt e metadados de 9,5 pt, sujeitos a verificação visual PT/EN.
- Ligações académicas clicáveis e rótulos Google Play/Vídeo.
- Conteúdo e ordem partilhados entre PDF e impressão através de `cv-sections.ts`.
- Mestrado em curso, conclusão prevista para novembro de 2026, conforme confirmação do utilizador.
- Apresentação do portefólio usa o ano de conclusão da licenciatura, sem assumir o mês administrativo.

Permanecem por confirmar métricas profissionais, anos dos projetos e nível QECR
de inglês. Não foram acrescentados dados novos nestes pontos. As propostas abaixo
registam a análise inicial; o resumo e a implementação final foram ajustados.

## Melhorias por prioridade

### 1. Reforçar a experiência recente

A função na B2F começa em setembro de 2023, mas surge depois do resumo e de seis
grupos de competências. A experiência deve ter maior destaque para candidaturas
a desenvolvimento de software.

Proposta: nome e contactos; título com foco técnico; resumo de 2–3 frases;
experiência; competências selecionadas. Na segunda página, formação, projetos
selecionados, prémios e idiomas. A prioridade de formação/projetos pode variar
consoante a vaga. Manter uma coluna e a sequência de leitura do PDF.

Os pontos da B2F usam formulações como «melhorando manutenibilidade» e «reduzindo
tarefas manuais», mas não explicam o processo, o alcance ou o efeito observado.
Reescrever segundo ação + contexto + tecnologia + resultado comprovado.
Não inventar percentagens, utilizadores, clientes ou responsabilidades.

Exemplo de reformulação conservadora do estágio:
«Automatização de processos ETL para recolha e tratamento de dados escolares,
com fontes Eurostat e DGEEC.»

Quando existirem dados reais, acrescentar a frequência de atualização, o volume
processado ou o tempo poupado. Confirmar primeiro a relação exata entre os ETL
e as fontes, uma vez que o CV atual apresenta essas atividades em pontos distintos.

### 2. Tornar o posicionamento mais específico

O título «Engenheiro de Software» é claro, mas genérico. Uma opção coerente com
os dados atuais é «Engenheiro de Software | .NET, React e Azure».

Resumo proposto, sem acrescentar resultados ou qualificações:

> Engenheiro de Software com experiência em aplicações web e mobile, com foco em
> .NET, React, Azure e SQL Server. Na B2F, desenvolve aplicações, integrações e
> automações de processos de negócio. Cocriador da aplicação SandSpace, para
> consulta da ocupação de praias em Portugal.

A formulação sobre a B2F depende de a função continuar atual. Os números da
SandSpace podem ficar no projeto, evitando repeti-los no resumo e na segunda
página. Adaptar o foco do título e a seleção de competências à vaga, sem incluir
tecnologias que não tenham sido usadas.

### 3. Selecionar competências e eliminar repetição

A secção atual lista mais de 40 tecnologias, frameworks e ferramentas, com peso
visual semelhante. O mesmo conjunto volta a aparecer nas linhas de tecnologias
por função e projeto.

Dar prioridade às competências usadas profissionalmente: C#, .NET Framework,
Razor ASP.NET, Blazor, React, React Native, Azure, SQL Server, ETL e Power Platform,
conforme a informação existente. Manter as restantes quando relevantes para a
vaga e sustentadas por projetos ou formação. Não atribuir níveis de proficiência
nem anos de experiência sem confirmação.

Usar categorias em negrito e texto normal para os itens. Distinguir linguagens
de programação de idiomas. Evitar barras, estrelas, percentagens e listas de
palavras-chave sem contexto.

### 4. Melhorar a seleção e apresentação dos projetos

Os três projetos em destaque são aplicações mais antigas; não existem datas
explícitas nos respetivos registos do CV. SandSpace tem impacto público descrito,
mas a contribuição técnica individual não é detalhada.

Para cada projeto, indicar ano, contribuição pessoal, problema resolvido,
principais tecnologias, resultado e ligação útil. Acrescentar um projeto recente
de .NET/React/Azure ou do mestrado se existir material público relevante e o
utilizador confirmar a sua participação. Nunca substituir por um projeto inventado.

Retirar os prefixos repetidos «Objetivo», «Resultado» e «Demo» quando a hierarquia
visual já transmite a função da linha. Usar «Google Play» para aplicações e
«Vídeo» para a ligação YouTube. Manter URLs de destino e texto identificável.
A ausência de datas e contribuição individual é mais relevante do que uma
mudança de cor ou decoração.

### 5. Clarificar formação, prémios e idiomas

- O mestrado consta com período setembro de 2024 a setembro de 2026. Em outubro
  de 2026, confirmar se está concluído, se a dissertação continua em curso ou se
  houve alteração da previsão. Não inferir conclusão a partir da data.
- A licenciatura termina em julho de 2023 no CV e na cronologia; a apresentação
  do portefólio refere agosto de 2023. Pode tratar-se de momentos distintos,
  mas convém esclarecer e uniformizar a designação das datas.
- «Certificações e prémios» contém apenas prémios. Preferir «Prémios e distinções»
  / «Awards and recognition», ou acrescentar certificações reais se existirem.
- Manter «Inglês básico» enquanto for o nível confirmado. Só indicar A1/A2/B1/etc.
  após confirmação; não converter automaticamente uma descrição genérica num
  nível do QECR.
- Confirmar se as referências a participação na ISEF e a cobertura mediática
  estão atualizadas e se existe uma ligação de suporte útil. Estão presentes
  nos dados do projeto, mas não foram verificadas externamente nesta revisão.

## Ajustes visuais

- Manter duas páginas enquanto o conteúdo justificar esse espaço; não comprimir
  tudo numa página por redução de fonte.
- Recuperar espaço com síntese e menor repetição antes de aumentar a tipografia.
- Experimentar corpo de 10,5–11 pt e metadados de 9,5 pt após a síntese; verificar
  ambas as línguas e não prometer duas páginas antes da medição.
- Reforçar a hierarquia entre função, empresa e datas. Destacar os nomes das
  categorias de competências e alguns resultados concretos.
- Equilibrar a densidade das páginas: a página 1 atual está perto do limite inferior.
- Acrescentar «Portugal» à localização «Porto» para candidaturas internacionais.
- Nome e número de página discretos podem ajudar na segunda página; contactos
  essenciais devem continuar no corpo principal da primeira página.
- As ligações a projetos académicos na formação estão escritas como texto; torná-las
  clicáveis também no PDF gerado.

## Implementação e manutenção

O download e a impressão com Ctrl+P usam renderizadores distintos. Partilham os
dados, mas têm regras de layout separadas. Qualquer alteração de ordem ou de
formatação deve ser refletida em ambos. Considerar um modelo comum de secções e
blocos para evitar divergências, sem acoplar o PDF a uma captura do ecrã.

O gerador deve continuar a criar o documento no momento do clique. A versão atual
já respeita esse requisito e não deve passar a distribuir um PDF pré-gerado.

## Validação após alterações

1. Gerar PDFs PT/EN nos dois botões, desktop/mobile, mantendo a geração no clique.
2. Inspecionar visualmente todas as páginas: espaçamento, quebras, sobreposições,
   contraste, acentos e texto demasiado pequeno.
3. Extrair o texto e comparar com os dados atuais, verificando contactos, títulos,
   datas e ordem de leitura. Testar também os links.
4. Confirmar que títulos não ficam isolados e que entradas longas não são cortadas.
5. Executar build e verificação de tipos. Não apresentar uma pontuação ATS sem
   um método identificado e não confundir extração de texto com aprovação por ATS.

## Referências

- Greenhouse, «Unsuccessful resume parse» (atualizado em março de 2026):
  https://support.greenhouse.io/hc/en-us/articles/200989175-Unsuccessful-resume-parse
  — descreve problemas com colunas, imagens, tabelas, cabeçalhos e falta de secções claras.
- Harvard Mignone Center for Career Success, «HES: Create Impactful Resumes and Cover Letters»:
  https://careerservices.fas.harvard.edu/resources/hes-create-impactful-resumes-and-cover-letters/
  — recomenda relevância para a função, linguagem específica e resultados demonstráveis.
