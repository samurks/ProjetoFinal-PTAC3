"use client";
import React from "react";
import { useEffect, useState } from "react";
import Loading from "./Loading";
import ErroFetch from "./ErroFecth";
import Link from "next/link";
import styles from "../styles/main.module.css";
import Image from "next/image";


export default function Main() {
  const [listaFilmes, setFilmes] = useState([]);
  const [erro, setErro] = useState(false);
  const [listaToda, setListaToda] = useState([]);
  const [textSearch, setTextSearch] = useState("");

  useEffect(() => {
    const getFilmes = async () => {
     try{
      const response = await fetch("http://localhost:3000/api/");
      const data = await response.json();
      setFilmes(data);
      setListaToda(data);
    }
    catch{
      setErro(true)
    }
  }
    getFilmes()
  }, [])

  const search = (text) => {
    setTextSearch(text);
    if (text === "") {
      setFilmes(listaToda);
      return;
    }
    const newList = listaToda.filter((filme) =>
      filme.nome.toUpperCase().includes(text.toUpperCase().trim())
    );
    setFilmes(newList);
  };


  if(erro == true){
    return <ErroFetch/>
  }

  if (listaToda[0] == null) {
    return  <Loading />
  }

  return (
    <main className={styles.main}>
       <div className={styles.searchcontainer}>
          <input
            type="text"
            value={textSearch}
            onChange={(event) => search(event.target.value)}
            className={styles.searchinput}
          />
        </div>
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
