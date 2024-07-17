"use client";
import React from "react";
import { useEffect, useState } from "react";

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

  return (
    <main>
      {listaFilmes.map((filmes) => (
        <div key={filmes.id}>
          <img src={filmes.imagem_url} />
          <h2>{filmes.nome}</h2>
          <p>{filme.genero}</p>
        </div>
      ))}
    </main>
  );
}
