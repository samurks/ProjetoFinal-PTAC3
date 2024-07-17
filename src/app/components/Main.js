"use client";
import React from "react";
import { useEffect, useState } from "react";
import Loading from "./Loading";
import ErroFetch from "./ErroFecth";

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
