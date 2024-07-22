import styles from "../../styles/details.module.css";
import Link from "next/link";
import Image from "next/image";

export default async function Filme({ params }) {
  const response = await fetch("http://localhost:3000/api/" + params.id);
  const data = await response.json();

  return (
    <main className={styles.main}>
      <div className={styles.heroSection}>
        <Image
          src={data.imagem_url}
          layout="fill"
          objectFit="cover"
          className={styles.heroImage}
          alt={data.nome}
        />
        <div className={styles.heroOverlay}></div>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>{data.nome}</h1>
          <p className={styles.heroSynopsis}>{data.sinopse}</p>
          <div className={styles.heroButtons}>
            <Link className={styles.heroButton} href={data.url_filme}>
              Assistir
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
