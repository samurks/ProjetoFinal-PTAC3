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
  const [generoFiltro, setGeneroFiltro] = useState("Todos");
  const [generos, setGeneros] = useState([]);

  useEffect(() => {
    const getFilmes = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/");
        const data = await response.json();
        setFilmes(data);
        setListaToda(data);
        const listaGeneros = data
          .map((filme) => filme.genero)
          .join(", ")
          .split(", ");
        const generoUnico = ["Todos", ...new Set(listaGeneros)];
        setGeneros(generoUnico);
      } catch {
        setErro(true);
      }
    };
    getFilmes();
  }, []);

  const filtrarFilmes = (texto, genero) => {
    let newList = listaToda.filter((filme) =>
      filme.nome.toUpperCase().includes(texto.toUpperCase().trim())
    );

    if (genero !== "Todos") {
      newList = newList.filter((filme) => filme.genero.includes(genero));
    }
    setFilmes(newList);
  };

  const selecionarGenero = (genero) => {
    setGeneroFiltro(genero);
    filtrarFilmes(textSearch, genero);
  };

  const search = (text) => {
    setTextSearch(text);
    filtrarFilmes(text, generoFiltro);
    if (text === "") {
      setFilmes(listaToda);
      return;
    }
  };

  if (erro == true) {
    return <ErroFetch />;
  }

  if (listaToda[0] == null) {
    return <Loading />;
  }

  return (
    <main className={styles.main}>
      <div className={styles.filterContainer}>
        <div className={styles.searchContainer}>
          <input
            type="text"
            value={textSearch}
            onChange={(event) => search(event.target.value)}
            className={styles.searchInput}
            placeholder="Pesquisar filmes..."
          />
        </div>
        <div className={styles.dropdownContainer}>
          <select
            value={generoFiltro}
            onChange={(e) => selecionarGenero(e.target.value)}
            className={styles.dropdown}
          >
            {generos.map((genero, genre) => (
              <option key={genre} value={genero}>
                {genero}
              </option>
            ))}
          </select>
        </div>
      </div>
      <h1>LISTA DE FILMES</h1>
      <div className={styles.grid}>
        {listaFilmes.map((filme) => (
          <div className={styles.card} key={filme.id}>
            <Link href={"/filme/" + filme.id}>
              <Image
                className={styles.image}
                src={filme.imagem_url}
                width={350}
                height={525}
              />
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
