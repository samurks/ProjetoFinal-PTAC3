import styles from '../../styles/details.module.css';

export default async function Filme({ params }) {

  const response = await fetch("http://localhost:3000/api/" + params.id)
  const data = await response.json();
 
  return (
    <main className={styles.main}>
    <div className={styles.card}>
      <div className={styles.imageSection}>
        <img className={styles.image} src={data.imagem_url} alt={data.nome} />
      </div>
      <div className={styles.detailsSection}>
        <h1 className={styles.title}>{data.nome}</h1>
        <p className={styles.genre}>{data.genero}</p>
        <p className={styles.synopsis}>{data.sinopse}</p>
        <a className={styles.watchButton} href={data.url_filme}>
          Assistir
        </a>
      </div>
    </div>
  </main>
  );
}
