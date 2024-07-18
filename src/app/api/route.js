import { NextRequest, NextResponse } from "next/server";

export const listaFilmes = [
  {
    id: 1,
    nome: "Interstellar",
    genero: "Ficção Científica",
    imagem_url: "https://i.pinimg.com/originals/24/a7/dd/24a7ddc20cbba87eb9042febd09a048a.jpg",
    url_filme: "https://www.imdb.com/title/tt0816692/",
    sinopse: "Um grupo de exploradores viaja através de um buraco de minhoca no espaço na tentativa de garantir a sobrevivência da humanidade."
  },
  {
    id: 2,
    nome: "The Shawshank Redemption",
    genero: "Drama",
    imagem_url: "https://images-na.ssl-images-amazon.com/images/I/717W9DCnyzL.jpg",
    url_filme: "https://www.imdb.com/title/tt0111161/",
    sinopse: "Dois homens presos desenvolvem uma amizade ao longo de vários anos, encontrando conforto e redenção por meio de atos de decência comum."
  },
  {
    id: 3,
    nome: "Inception",
    genero: "Ficção Científica",
    imagem_url: "https://images-na.ssl-images-amazon.com/images/I/81p+xe8cbnL._RI_.jpg",
    url_filme: "https://www.imdb.com/title/tt1375666/",
    sinopse: "Um ladrão que invade os sonhos das pessoas para roubar segredos corporativos recebe a missão de plantar uma ideia na mente de um alvo."
  },
  {
    id: 4,
    nome: "The Godfather",
    genero: "Crime, Drama",
    imagem_url: "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@.jpg",
    url_filme: "https://www.imdb.com/title/tt0068646/",
    sinopse: "O patriarca de uma dinastia mafiosa transita o controle de seu império criminoso para seu filho relutante."
  },
  {
    id: 5,
    nome: "The Dark Knight",
    genero: "Ação, Crime, Drama",
    imagem_url: "https://upload.wikimedia.org/wikipedia/pt/thumb/d/d1/The_Dark_Knight.jpg/512px-The_Dark_Knight.jpg",
    url_filme: "https://www.imdb.com/title/tt0468569/",
    sinopse: "Quando o Coringa emerge como o novo criminoso de Gotham, Batman deve aceitar um dos maiores desafios psicológicos e físicos de sua habilidade de combater o crime."
  },
  {
    id: 6,
    nome: "Fight Club",
    genero: "Drama",
    imagem_url: "https://images-na.ssl-images-amazon.com/images/I/71QPnEkXygS.jpg",
    url_filme: "https://www.imdb.com/title/tt0137523/",
    sinopse: "Um homem insone e um fabricante de sabão formam um clube de luta clandestino que evolui para algo muito mais."
  },
  {
    id: 7,
    nome: "The Matrix",
    genero: "Ação, Ficção Científica",
    imagem_url: "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@.jpg",
    url_filme: "https://www.imdb.com/title/tt0133093/",
    sinopse: "Um hacker descobre que a realidade como ele conhece é uma simulação controlada por máquinas e junta-se a uma rebelião para libertar a humanidade."
  },
  {
    id: 8,
    nome: "Forrest Gump",
    genero: "Drama, Romance",
    imagem_url: "https://m.media-amazon.com/images/M/MV5BNWIwODRlZTUtY2U3ZS00Yzg1LWJhNzYtMmZiYmEyNmU1NjMzXkEyXkFqcGdeQXVyMTQxNzMzNDI@.jpg",
    url_filme: "https://www.imdb.com/title/tt0109830/",
    sinopse: "Através de várias décadas, a vida de Forrest Gump é uma jornada inspiradora e inusitada de eventos históricos e pessoais."
  },
  {
    id: 9,
    nome: "Pulp Fiction",
    genero: "Crime, Drama",
    imagem_url: "https://vertentesdocinema.com/wp-content/uploads/2022/01/pulp-fiction-2.jpeg",
    url_filme: "https://www.imdb.com/title/tt0110912/",
    sinopse: "As vidas de dois assassinos de aluguel, uma esposa de gangster, um boxeador e outros se entrelaçam em uma série de histórias de crime e redenção."
  },
  {
    id: 10,
    nome: "The Lord of the Rings: The Fellowship of the Ring",
    genero: "Aventura, Drama, Fantasia",
    imagem_url: "https://m.media-amazon.com/images/I/81EBp0vOZZL._AC_SY879_.jpg",
    url_filme: "https://www.imdb.com/title/tt0120737/",
    sinopse: "Um hobbit e seus amigos embarcam em uma missão para destruir um anel poderoso e salvar a Terra Média das forças das trevas."
  },
  {
    id: 11,
    nome: "The Silence of the Lambs",
    genero: "Crime, Drama",
    imagem_url: "https://m.media-amazon.com/images/I/61806LSjYhL.__AC_SX300_SY300_QL70_FMwebp_.jpg",
    url_filme: "https://www.imdb.com/title/tt0102926/",
    sinopse: "Uma jovem agente do FBI busca a ajuda de um brilhante mas perigoso psiquiatra canibal para capturar outro serial killer."
  },
  {
    id: 12,
    nome: "The Green Mile",
    genero: "Crime, Drama, Fantasia",
    imagem_url: "https://m.media-amazon.com/images/I/51mvJdnlXrL._AC_.jpg",
    url_filme: "https://www.imdb.com/title/tt0120689/",
    sinopse: "A vida dos guardas no corredor da morte é alterada por um prisioneiro com poderes sobrenaturais."
  },
  {
    id: 13,
    nome: "Schindler's List",
    genero: "Biografia, Drama, História",
    imagem_url: "https://m.media-amazon.com/images/I/71EtVRky4eL._AC_SY879_.jpg",
    url_filme: "https://www.imdb.com/title/tt0108052/",
    sinopse: "A história real de Oskar Schindler, que salvou milhares de judeus durante o Holocausto ao empregá-los em sua fábrica."
  },
  {
    id: 14,
    nome: "Goodfellas",
    genero: "Biografia, Crime, Drama",
    imagem_url: "https://m.media-amazon.com/images/I/61mNMoD4YrL.__AC_SX300_SY300_QL70_FMwebp_.jpg",
    url_filme: "https://www.imdb.com/title/tt0099685/",
    sinopse: "A ascensão e queda de um associado da máfia e seus amigos ao longo de várias décadas."
  },
  {
    id: 15,
    nome: "The Godfather: Part II",
    genero: "Crime, Drama",
    imagem_url: "https://m.media-amazon.com/images/I/51KSlBeZYcL.__AC_SX300_SY300_QL70_FMwebp_.jpg",
    url_filme: "https://www.imdb.com/title/tt0071562/",
    sinopse: "A história de como Vito Corleone subiu ao poder e como seu filho Michael expandiu o império da família."
  },
  {
    id: 16,
    nome: "The Lord of the Rings: The Two Towers",
    genero: "Aventura, Drama, Fantasia",
    imagem_url: "https://m.media-amazon.com/images/I/81wByEaQrlL._AC_SY879_.jpg",
    url_filme: "https://www.imdb.com/title/tt0167261/",
    sinopse: "Frodo e Sam continuam sua jornada para Mordor enquanto seus amigos lutam para proteger a Terra Média do crescente poder de Sauron."
  },
];
export async function GET() {
  return NextResponse.json(listaFilmes);
}