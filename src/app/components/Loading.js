import Image from "next/image";
import styles from '../styles/loading.module.css';

export default function Loading() {
  return (
    <div className={styles.loadingContainer}>
      <Image width={100} height={100} src={"/carregar.svg"} />
      <p className={styles.loadingText}>Aguarde, estamos carregando os filmes</p>
    </div>
  );
}
