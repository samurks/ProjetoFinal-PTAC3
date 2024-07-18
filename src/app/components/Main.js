"use client";
import React from "react";
import { useEffect, useState } from "react";
import Loading from "./Loading";
import ErroFetch from "./ErroFecth";
import Link from "next/link";
import styles from "../styles/main.module.css";

export default function Main() {
  const [listaFilmes, setFilmes] = useState([]);
  const [erro, setErro] = useState(false)

  useEffect(() => {
    const getFilmes = async () => {
     try{
      const response = await fetch("http://localhost:3000/api/");
      const data = await response.json();
      setFilmes(data);
    }
    catch{
      setErro(true)
    }
  }
    getFilmes()
  }, [])

  if(erro == true){
    return <ErroFetch/>
  }

  if (!listaFilmes.length) {
    return <Loading />;
  }
  
  return (
    <main className={styles.main}>
      <div className={styles.grid}>
        {listaFilmes.map((filme) => (
          <div className={styles.card} key={filme.id}>
            <Link href={"/filme/" + filme.id}>
              <img className={styles.image} src={filme.imagem_url} alt={filme.nome} />
              <div className={styles.cardDetails}>
                <h2 className={styles.title}>{filme.nome}</h2>
                <p className={styles.genre}>{filme.genero}</p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </main>
  );
}
