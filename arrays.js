/*  ## Buscando e contando dados em array

    Baseado no array de livros por categoria abaixo, faça os seguintes desafios

    - Contar o número de categorias e o número de livros em cada categoria
    - Contar o número de autores
    - mostrar livros do autor Agusto Cury
    - transformar a função acima em uma funçõa que irá receber o nome do autor e devolver os livros desse autor
*/

const booksByCategory = [
  {
    category: "Riqueza",
    books: [
      {
        title: "Os segredos da mente milionária",
        author: "T. Harv Eker",
      },
      {
        title: "O homem mais rico da Babilônia",
        author: "George S. Clason",
      },
      {
        title: "Pai rico, Pai pobre",
        author: "Robert T. Kiyosaki e Sharon L. Lechter",
      },
    ],
  },
  {
    category: "Inteligência Emocional",
    books: [
      {
        title: "Você é Insubstituível",
        author: "Augusto Cury",
      },
      {
        title: "Ansiedade - Como enfrentar o mal do século",
        author: "Augusto Cury",
      },
      {
        title: "Os 7 hábitos das pessoas altamente eficazes",
        author: "Stephen R. Covey",
      },
    ],
  },
];

// contando categorias
const totalCategories = booksByCategory.length;
console.log("Total de categorias: ", totalCategories);

// numero de livros por categoria

for (let category of booksByCategory) {
  console.log("Total de livros da categoria: ", category.category);
  console.log("Numero de livros: ", category.books.length);
}

//contar numero de autores

function countAuthors() {
  let authors = [];

  //laço de repetição para percorrer as categorias
  for (category of booksByCategory) {
    // loop para percorrer os livros da categoria
    for (book of category.books) {
      //if para verificar se o author ja está dentro do array authors
      if (authors.indexOf(book.author) == -1) {
        authors.push(book.author); // o método push() adicona um ou mais elementos ao final de um array e retorna o novo comprimento desse array
      }
    }
  }

  console.log("Total de autores: ", authors.length);
}

// mostrar livros do Augusto Cury
function booksOfAuthor(author) {
  books = [];

  //laço de repetição para percorrer as categorias
  for (category of booksByCategory) {
    // loop para percorrer os livros da categoria
    for (book of category.books) {
      if (book.author.toUpperCase() === author.toUpperCase()) {
        books.push(book.title);
      }
    }

    // tentar pesquisar mesmo so com o nome inicial do autor
  }
  console.log(`Livros do autor ${author} : ${books.join(",  ")}`);
   //O método join() junta todos os elementos de um array (ou um array-like object) em uma string e retorna esta string.
}

countAuthors();
booksOfAuthor('T. Harv Eker');

