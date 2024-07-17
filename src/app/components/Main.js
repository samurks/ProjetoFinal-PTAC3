"use client";
import React from "react";
import { useEffect, useState } from "react";
import Loading from "./Loading";

export default function Main() {
  const [listaFilmes, setFilmes] = useState([]);

  useEffect(() => {
    const getFilmes = async () => {
      const response = await fetch("http://localhost:3000/api/");
      const data = await response.json();
      setFilmes(data);
    };
    getFilmes();
  }, []);


  if (!listaFilmes.length) {
    return <Loading />;
  }
  
  return (
    <main>
      {listaFilmes.map((filmes) => (
        <div key={filmes.id}>
          <img src={filmes.imagem_url} />
          <h2>{filmes.nome}</h2>
          <p>{filmes.genero}</p>
        </div>
      ))}
    </main>
  );
}
