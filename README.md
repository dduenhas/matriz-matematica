# Matriz Matemática

Jogo de navegador para os anos iniciais do Ensino Fundamental. O aluno calcula uma soma ou uma multiplicação em cada casa de uma matriz e pinta a casa com a cor daquele resultado. Quando todas as cores estão certas, o desenho aparece e a fase seguinte abre.

A aplicação não substitui a aula. Ela oferece uma situação repetida de cálculo, com material manipulável na soma, registro simbólico na casa e uma representação pictórica (o mosaico) como retorno. O professor escolhe a operação, o limite da soma ou as tabuadas, o tamanho da matriz e o desenho de partida.

## Como executar

```bash
npm install
npm run dev
```

Abra o endereço mostrado pelo Vite, em geral `http://localhost:5173`. Não há login nem servidor: as escolhas ficam no `localStorage` do navegador.

## Fundamentação pedagógica

### O que a criança faz

1. Lê uma expressão (`4 + 3` ou `3 × 4`) dentro da casa.
2. Decide o resultado. Na soma, pode arrastar as contas do ábaco antes de pintar.
3. Escolhe, na paleta, a cor daquele número e pinta a casa.
4. Confere com **Verifique**. Casas vazias e cores trocadas são marcadas sem apagar o trabalho.
5. Se tudo está certo, as expressões saem de cena, o desenho fica visível e a próxima fase começa com a mesma conta e outro desenho.

A paleta associa **uma cor a um resultado**, não a uma expressão. `3 + 4` e `4 + 3` pedem a mesma cor, porque o resultado é o mesmo. O mesmo vale para `2 × 5` e `5 × 2` quando as duas tabuadas estão ligadas. A criança precisa reconhecer a operação, não memorizar a posição da casa.

### Por que o jogo está organizado assim

- **Do manipulável ao registro.** Na soma até 10 há uma haste com 10 contas, 5 vermelhas e 5 brancas, no arranjo do rekenrek: o grupo de 5 fica visível e a criança conta deslocando contas, não contando uma a uma do zero toda vez. Até 20, duas hastes. O ábaco não pinta a casa. Ele é apoio, no sentido do material manipulável previsto para os fatos básicos e para os problemas de adição. A casa continua exigindo o registro da cor do resultado.
- **Decomposição.** Várias expressões diferentes produzem o mesmo número. Pintar pela cor do resultado faz a criança tratar `6 + 4`, `8 + 2` e `10 + 0` como formas de compor o 10. Isso conversa com a composição e a decomposição por adições, não com uma lista fechada de fatos isolados.
- **A matriz é o desenho.** Cada casa é um componente com posição. A cor é o atributo guardado naquela posição. O mosaico só fecha quando a codificação está consistente: o número calculado e a cor escolhida precisam ser o mesmo código. Errar a cor não é “errar o desenho” em abstrato; é gravar outro dado naquela coordenada.
- **Um passo de cada vez.** A matriz inteira é um problema grande. Cada casa é uma parte menor. A criança resolve as partes e a imagem junta as soluções. A verificação devolve as partes que ainda não fecharam, em vez de dizer apenas “errado”.
- **A sequência é estável.** Calcular, escolher a cor, pintar, conferir. A mesma sequência se repete em todas as casas e em todas as fases. O que muda é o desenho, não a regra. O professor mantém a variável matemática (até 10, até 20 ou quais tabuadas) e a prática se renova no contexto pictórico.
- **O retorno distingue vazio de trocado.** “Ainda há contas sem cor” não é a mesma informação que “algumas cores não combinam com o resultado”. A criança sabe o que revisar. A marcação usa contorno, texto anunciado e não depende só da cor.
- **O alcance numérico é o dos anos iniciais.** Somas com parcelas a partir de 0 e resultado até 10 ou até 20. Multiplicações das tabuadas escolhidas, de 1 a 10, no formato `3 × 1` … `3 × 10`. Não há divisão, não há elaboração escrita de problemas novos e não há cálculo com números racionais.

### O que esta aplicação não afirma

Ela não cobre uma habilidade inteira da BNCC. As habilidades de Matemática pedem, em vários códigos, **resolver e elaborar** problemas. Aqui a criança resolve cálculos já propostos e registra o resultado por uma cor. Ela não redige um problema novo.

No complemento de Computação, codificar informação inclui formas que este jogo não trabalha, como binário e ASCII. O que ele faz é uma codificação à altura da turma: um resultado numérico vira uma cor, e o conjunto das cores, numa grade de coordenadas, vira uma imagem. Isso é uma entrada para a ideia de dado e de pixel, não o percurso completo do eixo Mundo Digital.

## BNCC de Matemática

Documento homologado de 2018. Unidade temática **Números**. Os textos abaixo foram conferidos com esse documento (há espelhos públicos, como o PDF do MEC e os registros de [bncc.dev](https://bncc.dev/), dados-2026.07.1, que declaram conferência contra o PDF oficial).

| Código | Ano | Habilidade | O que o jogo oferece |
| --- | --- | --- | --- |
| EF01MA06 | 1º | Construir fatos básicos da adição e utilizá-los em procedimentos de cálculo para resolver problemas. | Somas até 10, com o ábaco de 5 + 5 como apoio antes do registro. |
| EF01MA07 | 1º | Compor e decompor número de até duas ordens, por meio de diferentes adições, com o suporte de material manipulável, contribuindo para a compreensão de características do sistema de numeração decimal e o desenvolvimento de estratégias de cálculo. | Várias adições para o mesmo resultado compartilham a cor. O ábaco é o material manipulável. O jogo fica no intervalo até 10 ou 20, não nas duas ordens completas. |
| EF01MA08 | 1º | Resolver e elaborar problemas de adição e de subtração, envolvendo números de até dois algarismos, com os significados de juntar, acrescentar, separar e retirar, com o suporte de imagens e/ou material manipulável, utilizando estratégias e formas de registro pessoais. | Resolve adições com apoio de imagem e do ábaco. Não elabora problemas nem trabalha subtração. |
| EF02MA05 | 2º | Construir fatos básicos da adição e subtração e utilizá-los no cálculo mental ou escrito. | Revisita fatos aditivos até 10 ou 20. Não trabalha subtração. |
| EF02MA06 | 2º | Resolver e elaborar problemas de adição e de subtração, envolvendo números de até três ordens, com os significados de juntar, acrescentar, separar, retirar, utilizando estratégias pessoais ou convencionais. | Resolve adições pequenas. Não chega à ordem das centenas nem pede a elaboração de problemas. |
| EF02MA07 | 2º | Resolver e elaborar problemas de multiplicação (por 2, 3, 4 e 5) com a ideia de adição de parcelas iguais por meio de estratégias e formas de registro pessoais, utilizando ou não suporte de imagens e/ou material manipulável. | As tabuadas de 2, 3, 4 e 5 podem ser ligadas pelo professor. O registro é a cor na matriz. |
| EF03MA03 | 3º | Construir e utilizar fatos básicos da adição e da multiplicação para o cálculo mental ou escrito. | A partida repete fatos aditivos ou fatos de uma ou mais tabuadas, com conferência imediata. |
| EF03MA06 | 3º | Resolver e elaborar problemas de adição e subtração com os significados de juntar, acrescentar, separar, retirar, comparar e completar quantidades, utilizando diferentes estratégias de cálculo exato ou aproximado, incluindo cálculo mental. | A soma até 20 entra como cálculo exato e mental. Comparar e completar quantidades não são o foco da partida. |
| EF03MA07 | 3º | Resolver e elaborar problemas de multiplicação (por 2, 3, 4, 5 e 10) com os significados de adição de parcelas iguais e elementos apresentados em disposição retangular, utilizando diferentes estratégias de cálculo e registros. | A tabuada do 10 pode entrar. A própria matriz é uma disposição retangular, embora cada casa traga uma conta, não um arranjo de objetos a contar. |
| EF04MA03 | 4º | Resolver e elaborar problemas com números naturais envolvendo adição e subtração, utilizando estratégias diversas, como cálculo, cálculo mental e algoritmos, além de fazer estimativas do resultado. | Há cálculo mental ou escrito da adição. Não há estimativa nem subtração como tarefa da casa. |
| EF04MA04 | 4º | Utilizar as relações entre adição e subtração, bem como entre multiplicação e divisão, para ampliar as estratégias de cálculo. | A relação usada de fato é entre expressões de mesmo resultado (`3 + 4` e `4 + 3`; `2 × 5` e `5 × 2`). Divisão não aparece. |
| EF04MA05 | 4º | Utilizar as propriedades das operações para desenvolver estratégias de cálculo. | A comutatividade aparece quando as duas ordens da mesma conta compartilham a cor. |
| EF04MA06 | 4º | Resolver e elaborar problemas envolvendo diferentes significados da multiplicação (adição de parcelas iguais, organização retangular e proporcionalidade), utilizando estratégias diversas, como cálculo por estimativa, cálculo mental e algoritmos. | O significado mobilizado é o cálculo do produto nas tabuadas escolhidas, com registro na organização retangular da matriz. |

Competências específicas de Matemática com as quais a proposta dialoga, sem esgotá-las: desenvolver o raciocínio lógico em uma situação de cálculo repetido; usar uma ferramenta digital para modelar e registrar uma solução; enfrentar uma situação-problema que só se completa quando todas as partes estão certas.

## Complemento de Computação à BNCC

Norma: Parecer CNE/CEB nº 2/2022, homologado pelo despacho publicado no D.O.U. de 3/10/2022, e Resolução CNE/CEB nº 1, de 4 de outubro de 2022. Os textos das habilidades foram conferidos com o anexo desse parecer, nas páginas indicadas pela edição pública dados-2026.07.1. Três eixos organizam o complemento: Pensamento Computacional, Mundo Digital e Cultura Digital. Esta aplicação se aproxima dos dois primeiros.

| Código | Ano | Eixo | Habilidade | O que o jogo oferece |
| --- | --- | --- | --- | --- |
| EF01CO02 | 1º | Pensamento Computacional | Identificar e seguir sequências de passos aplicados no dia a dia para resolver problemas. | A partida tem uma sequência estável: ler a conta, achar o resultado, escolher a cor, pintar, conferir. |
| EF01CO05 | 1º | Mundo Digital | Representar informação usando diferentes codificações. | O mesmo resultado pode aparecer como expressão (`2 + 3`) e como cor. São duas codificações da mesma informação. |
| EF02CO01 | 2º | Pensamento Computacional | Criar e comparar modelos (representações) de objetos, identificando padrões e atributos essenciais. | O desenho é um modelo em grade. O atributo que a criança controla é a cor de cada casa. |
| EF02CO02 | 2º | Pensamento Computacional | Criar e simular algoritmos representados em linguagem oral, escrita ou pictográfica, construídos como sequências com repetições simples (iterações definidas) com base em instruções preestabelecidas ou criadas, analisando como a precisão da instrução impacta na execução do algoritmo. | A criança executa uma instrução precisa por casa. Uma cor trocada muda o desenho: a precisão da instrução altera o resultado. |
| EF03CO03 | 3º | Pensamento Computacional | Aplicar a estratégia de decomposição para resolver problemas complexos, dividindo esse problema em partes menores, resolvendo-as e combinando suas soluções. | O mosaico é o problema inteiro. Cada casa é uma parte. A imagem é a combinação das partes certas. |
| EF04CO01 | 4º | Pensamento Computacional | Reconhecer objetos do mundo real e/ou digital que podem ser representados através de matrizes que estabelecem uma organização na qual cada componente está em uma posição definida por coordenadas, fazendo manipulações simples sobre estas representações. | É o núcleo do jogo: um desenho digital é uma matriz, cada casa tem posição, e pintar é uma manipulação simples dessa representação. |
| EF04CO04 | 4º | Mundo Digital | Entender que para guardar, manipular e transmitir dados deve-se codificá-los de alguma forma que seja compreendida pela máquina (formato digital). | A cor é o formato combinado para guardar o resultado na casa. Outro código não fecha o desenho. |
| EF04CO05 | 4º | Mundo Digital | Codificar diferentes informações para representação em computador (binária, ASCII, atributos de pixel, como RGB etc.). | Cada casa funciona como um pixel: posição mais atributo de cor. Binário e ASCII não são objetos desta partida. |
| EF15CO01 | 1º ao 5º | Pensamento Computacional | Identificar as principais formas de organizar e representar a informação de maneira estruturada (matrizes, registros, listas e grafos) ou não estruturada (números, palavras, valores verdade). | A informação do desenho está estruturada numa matriz. O número da paleta, sozinho, é um valor; na grade, ele ganha posição. |
| EF15CO02 | 1º ao 5º | Pensamento Computacional | Construir e simular algoritmos, de forma independente ou em colaboração, que resolvam problemas simples e do cotidiano com uso de sequências, seleções condicionais e repetições de instruções. | A criança simula sozinha uma sequência com repetição (uma casa, depois outra) e uma seleção (esta cor serve ou não). A colaboração não está na interface. |
| EF15CO04 | 1º ao 5º | Pensamento Computacional | Aplicar a estratégia de decomposição para resolver problemas complexos, dividindo esse problema em partes menores, resolvendo-as e combinando suas soluções. | Mesma relação descrita em EF03CO03, no bloco de 1º ao 5º ano. |
| EF15CO05 | 1º ao 5º | Mundo Digital | Codificar a informação de diferentes formas, entendendo a importância desta codificação para o armazenamento, manipulação e transmissão em dispositivos computacionais. | Sem a codificação combinada (resultado → cor), a informação não se conserva de uma casa para o desenho. |

Competências gerais da BNCC de 2018 mais próximas desta proposta: a competência 2, de pensamento científico, crítico e criativo, porque a criança testa uma hipótese de resultado e a revisa com a conferência; a competência 4, de comunicação, porque lê expressões e usa um código visual comum à turma; a competência 5, de cultura digital, porque resolve a situação num artefato computacional e não apenas no caderno.

## Acessibilidade

A interface segue práticas do W3C: WCAG 2.2 e WAI-ARIA. Há um botão **Acessibilidade** com os comandos de teclado e com três ajustes que a página realmente aplica: texto maior, alto contraste e redução de animação. O contraste alto não troca as cores do mosaico, porque a cor é o conteúdo da tarefa; ele reforça texto, borda e foco. Animações também respeitam `prefers-reduced-motion` do sistema.

Atalhos: Tab e Shift+Tab percorrem os controles; Enter ou Espaço acionam; Esc fecha uma janela; no ábaco, seta para a esquerda conta, seta para a direita devolve, Home esvazia a haste e End a completa.

## Fontes

- Brasil. Ministério da Educação. *Base Nacional Comum Curricular*. Brasília: MEC, 2018. Disponível em <http://basenacionalcomum.mec.gov.br/>.
- Brasil. Conselho Nacional de Educação. Parecer CNE/CEB nº 2/2022. *Normas sobre Computação na Educação Básica — Complemento à BNCC*. Homologação publicada no D.O.U. de 3/10/2022.
- Brasil. Conselho Nacional de Educação. Resolução CNE/CEB nº 1, de 4 de outubro de 2022.
- Texto do anexo de Computação usado na conferência dos códigos: <https://www.gov.br/mec/pt-br/media/bncc-computacao-na-educacao-basica.pdf>.
- Conferência frase a frase dos códigos citados: registros públicos em <https://bncc.dev/>, versão de dados 2026.07.1, que apontam a página do PDF oficial de cada habilidade.
