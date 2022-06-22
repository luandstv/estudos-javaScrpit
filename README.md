# Estudos Praticos de javaScript

## 1. Desafio de notas escolares

### Transformar notas escolares

- Crie um algoritimo que transfoorme as notas do sistema numérico para
  o sistema de notas em caracteres.
- Ex.: A B C

* de 90 para cima - A
* entre 80 - 89 - B
* entre 70 - 79 - C
* entre 60 - 69 - D
* menor que 60 - F

## 2. Sistema de gastos familiar

crie um objeto que possuirá 2 propiedades, ambas do tipo array: - receitas: [] - despesas: []

Agora, crie uma função que irá calcular o total de receitas e despesas e
irá mostrar uma mensagem se a família está com saldo positivo ou negativo,
seguido do valor do saldo

## 3. Celsius em fahrenheit

Crie uma função que receba uma string em celsius ou
fahrenheit e faça a transformação
de uma unidade para a outra

C = (F - 32) * 5/9

F = C * 9/5 + 32

## 4. Buscando e contando dados em array

    Baseado no array de livros por categoria abaixo, faça os seguintes desafios

    - Contar o número de categorias e o número de livros em cada categoria
    - Contar o número de autores
    - mostrar livros do autor Agusto Cury
    - transformar a função acima em uma funçõa que irá receber o nome do autor e devolver os livros desse autor

    ~~~
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
                author: "Robert T. Kiyosaki e Sharon L. Lechter"
            }
        ]
    },
    {
        category: "Inteligência Emocional",
        books: [
            {
                title: "Você é Insubstituível",
                author: "Augusto Cury"
            },
            {
                title: "Ansiedade - Como enfrentar o mal do século",
                author: "Augusto Cury"
            },
            {
                title: "Os 7 hábitos das pessoas altamente eficazes",
                author: "Stephen R. Covey"
            },
        ]
    }
]
~~~