export default async function Filme({ params }) {

  const response = await fetch("http://localhost:3000/api/" + params.id)
  const data = await response.json();

 
  return (
    <main>
      <div key={data.id}>
        <h1>{data.nome}</h1>
        <img src={data.imagem_url} alt={data.nome} />
        <h3>{data.genero}</h3>
        <a href={data.url_filme}>
          Assistir Filme
        </a>
      </div>
    </main>
  );
}
