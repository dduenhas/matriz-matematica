export type SkillRow = {
  code: string;
  year: string;
  axis: string;
  text: string;
  offer: string;
};

export const mathSkills: SkillRow[] = [
  {
    code: "EF01MA06",
    year: "1º",
    axis: "Números",
    text: "Construir fatos básicos da adição e utilizá-los em procedimentos de cálculo para resolver problemas.",
    offer: "Somas até 10, com o ábaco de 5 + 5 como apoio antes do registro.",
  },
  {
    code: "EF01MA07",
    year: "1º",
    axis: "Números",
    text: "Compor e decompor número de até duas ordens, por meio de diferentes adições, com o suporte de material manipulável, contribuindo para a compreensão de características do sistema de numeração decimal e o desenvolvimento de estratégias de cálculo.",
    offer: "Várias adições para o mesmo resultado compartilham a cor. O ábaco é o material manipulável. O jogo fica no intervalo até 10 ou 20.",
  },
  {
    code: "EF01MA08",
    year: "1º",
    axis: "Números",
    text: "Resolver e elaborar problemas de adição e de subtração, envolvendo números de até dois algarismos, com os significados de juntar, acrescentar, separar e retirar, com o suporte de imagens e/ou material manipulável, utilizando estratégias e formas de registro pessoais.",
    offer: "Resolve adições com apoio de imagem e do ábaco. Não elabora problemas nem trabalha subtração.",
  },
  {
    code: "EF02MA05",
    year: "2º",
    axis: "Números",
    text: "Construir fatos básicos da adição e subtração e utilizá-los no cálculo mental ou escrito.",
    offer: "Revisita fatos aditivos até 10 ou 20. Não trabalha subtração.",
  },
  {
    code: "EF02MA06",
    year: "2º",
    axis: "Números",
    text: "Resolver e elaborar problemas de adição e de subtração, envolvendo números de até três ordens, com os significados de juntar, acrescentar, separar, retirar, utilizando estratégias pessoais ou convencionais.",
    offer: "Resolve adições pequenas. Não chega à ordem das centenas nem pede a elaboração de problemas.",
  },
  {
    code: "EF02MA07",
    year: "2º",
    axis: "Números",
    text: "Resolver e elaborar problemas de multiplicação (por 2, 3, 4 e 5) com a ideia de adição de parcelas iguais por meio de estratégias e formas de registro pessoais, utilizando ou não suporte de imagens e/ou material manipulável.",
    offer: "As tabuadas de 2, 3, 4 e 5 podem ser ligadas pelo professor. O registro é a cor na matriz.",
  },
  {
    code: "EF03MA03",
    year: "3º",
    axis: "Números",
    text: "Construir e utilizar fatos básicos da adição e da multiplicação para o cálculo mental ou escrito.",
    offer: "A partida repete fatos aditivos ou fatos de uma ou mais tabuadas, com conferência imediata.",
  },
  {
    code: "EF03MA06",
    year: "3º",
    axis: "Números",
    text: "Resolver e elaborar problemas de adição e subtração com os significados de juntar, acrescentar, separar, retirar, comparar e completar quantidades, utilizando diferentes estratégias de cálculo exato ou aproximado, incluindo cálculo mental.",
    offer: "A soma até 20 entra como cálculo exato e mental. Comparar e completar quantidades não são o foco da partida.",
  },
  {
    code: "EF03MA07",
    year: "3º",
    axis: "Números",
    text: "Resolver e elaborar problemas de multiplicação (por 2, 3, 4, 5 e 10) com os significados de adição de parcelas iguais e elementos apresentados em disposição retangular, utilizando diferentes estratégias de cálculo e registros.",
    offer: "A tabuada do 10 pode entrar. A matriz é uma disposição retangular, e cada casa traz uma conta.",
  },
  {
    code: "EF04MA03",
    year: "4º",
    axis: "Números",
    text: "Resolver e elaborar problemas com números naturais envolvendo adição e subtração, utilizando estratégias diversas, como cálculo, cálculo mental e algoritmos, além de fazer estimativas do resultado.",
    offer: "Há cálculo mental ou escrito da adição. Não há estimativa nem subtração como tarefa da casa.",
  },
  {
    code: "EF04MA04",
    year: "4º",
    axis: "Números",
    text: "Utilizar as relações entre adição e subtração, bem como entre multiplicação e divisão, para ampliar as estratégias de cálculo.",
    offer: "A relação usada é entre expressões de mesmo resultado. Divisão não aparece.",
  },
  {
    code: "EF04MA05",
    year: "4º",
    axis: "Números",
    text: "Utilizar as propriedades das operações para desenvolver estratégias de cálculo.",
    offer: "A comutatividade aparece quando as duas ordens da mesma conta compartilham a cor.",
  },
  {
    code: "EF04MA06",
    year: "4º",
    axis: "Números",
    text: "Resolver e elaborar problemas envolvendo diferentes significados da multiplicação (adição de parcelas iguais, organização retangular e proporcionalidade), utilizando estratégias diversas, como cálculo por estimativa, cálculo mental e algoritmos.",
    offer: "O cálculo do produto é registrado na organização retangular da matriz.",
  },
];

export const computingSkills: SkillRow[] = [
  {
    code: "EF01CO02",
    year: "1º",
    axis: "Pensamento Computacional",
    text: "Identificar e seguir sequências de passos aplicados no dia a dia para resolver problemas.",
    offer: "A partida tem uma sequência estável: ler a conta, achar o resultado, escolher a cor, pintar e conferir.",
  },
  {
    code: "EF01CO05",
    year: "1º",
    axis: "Mundo Digital",
    text: "Representar informação usando diferentes codificações.",
    offer: "O mesmo resultado aparece como expressão e como cor.",
  },
  {
    code: "EF02CO01",
    year: "2º",
    axis: "Pensamento Computacional",
    text: "Criar e comparar modelos (representações) de objetos, identificando padrões e atributos essenciais.",
    offer: "O desenho é um modelo em grade. O atributo que a criança controla é a cor de cada casa.",
  },
  {
    code: "EF02CO02",
    year: "2º",
    axis: "Pensamento Computacional",
    text: "Criar e simular algoritmos representados em linguagem oral, escrita ou pictográfica, construídos como sequências com repetições simples (iterações definidas) com base em instruções preestabelecidas ou criadas, analisando como a precisão da instrução impacta na execução do algoritmo.",
    offer: "Uma cor trocada muda o desenho: a precisão da instrução altera o resultado.",
  },
  {
    code: "EF03CO03",
    year: "3º",
    axis: "Pensamento Computacional",
    text: "Aplicar a estratégia de decomposição para resolver problemas complexos, dividindo esse problema em partes menores, resolvendo-as e combinando suas soluções.",
    offer: "Cada casa é uma parte. A imagem é a combinação das partes certas.",
  },
  {
    code: "EF04CO01",
    year: "4º",
    axis: "Pensamento Computacional",
    text: "Reconhecer objetos do mundo real e/ou digital que podem ser representados através de matrizes que estabelecem uma organização na qual cada componente está em uma posição definida por coordenadas, fazendo manipulações simples sobre estas representações.",
    offer: "Um desenho digital é uma matriz. Pintar é uma manipulação simples dessa representação.",
  },
  {
    code: "EF04CO04",
    year: "4º",
    axis: "Mundo Digital",
    text: "Entender que para guardar, manipular e transmitir dados deve-se codificá-los de alguma forma que seja compreendida pela máquina (formato digital).",
    offer: "A cor é o formato combinado para guardar o resultado na casa.",
  },
  {
    code: "EF04CO05",
    year: "4º",
    axis: "Mundo Digital",
    text: "Codificar diferentes informações para representação em computador (binária, ASCII, atributos de pixel, como RGB etc.).",
    offer: "Cada casa funciona como um pixel: posição mais atributo de cor. Binário e ASCII não são objetos desta partida.",
  },
  {
    code: "EF15CO01",
    year: "1º ao 5º",
    axis: "Pensamento Computacional",
    text: "Identificar as principais formas de organizar e representar a informação de maneira estruturada (matrizes, registros, listas e grafos) ou não estruturada (números, palavras, valores verdade).",
    offer: "A informação do desenho está estruturada numa matriz.",
  },
  {
    code: "EF15CO02",
    year: "1º ao 5º",
    axis: "Pensamento Computacional",
    text: "Construir e simular algoritmos, de forma independente ou em colaboração, que resolvam problemas simples e do cotidiano com uso de sequências, seleções condicionais e repetições de instruções.",
    offer: "A criança repete a sequência em cada casa e decide se a cor serve. A colaboração não está na interface.",
  },
  {
    code: "EF15CO04",
    year: "1º ao 5º",
    axis: "Pensamento Computacional",
    text: "Aplicar a estratégia de decomposição para resolver problemas complexos, dividindo esse problema em partes menores, resolvendo-as e combinando suas soluções.",
    offer: "O mosaico é o problema inteiro, repartido em casas.",
  },
  {
    code: "EF15CO05",
    year: "1º ao 5º",
    axis: "Mundo Digital",
    text: "Codificar a informação de diferentes formas, entendendo a importância desta codificação para o armazenamento, manipulação e transmissão em dispositivos computacionais.",
    offer: "Sem a codificação resultado para cor, a informação não se conserva até o desenho.",
  },
];

export const pedagogyLead = [
  "O aluno calcula uma soma ou uma multiplicação em cada casa e pinta a casa com a cor daquele resultado. Quando todas as cores estão certas, o desenho aparece e a fase seguinte abre, com a mesma conta e outro desenho.",
  "A paleta associa uma cor a um resultado, não a uma expressão. 3 + 4 e 4 + 3 pedem a mesma cor. O mesmo vale para 2 × 5 e 5 × 2 quando as duas tabuadas estão ligadas.",
  "Na soma, o ábaco tem o arranjo do rekenrek: até 10, uma haste com 5 contas vermelhas e 5 brancas; até 20, duas hastes. Ele ajuda a contar e não pinta a casa.",
  "A aplicação oferece uma situação para estas habilidades. Ela não cobre a habilidade inteira. Em Matemática, a criança resolve cálculos já propostos e não elabora um problema novo. Em Computação, a codificação trabalhada é a cor do resultado numa grade, não o binário nem o ASCII.",
];

function rowsToText(title: string, rows: SkillRow[]) {
  const body = rows
    .map((row) => `${row.code} (${row.year}, ${row.axis})\n${row.text}\nNesta aplicação: ${row.offer}`)
    .join("\n\n");
  return `${title}\n\n${body}`;
}

export function pedagogyPlainText() {
  return [
    "Fundamentação pedagógica — Matriz Matemática",
    "",
    pedagogyLead.join("\n\n"),
    "",
    rowsToText("BNCC de Matemática (2018), unidade temática Números", mathSkills),
    "",
    rowsToText(
      "Complemento de Computação à BNCC (Parecer CNE/CEB nº 2/2022 e Resolução CNE/CEB nº 1/2022)",
      computingSkills,
    ),
    "",
    "Competências gerais da BNCC mais próximas: competência 2, pensamento científico, crítico e criativo; competência 4, comunicação; competência 5, cultura digital.",
    "",
    "Fontes: Base Nacional Comum Curricular (MEC, 2018); Parecer CNE/CEB nº 2/2022; Resolução CNE/CEB nº 1, de 4 de outubro de 2022. Textos conferidos com o anexo oficial, na edição pública dados-2026.07.1.",
  ].join("\n");
}
