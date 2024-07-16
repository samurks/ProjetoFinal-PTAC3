import React from "react";

export default function Main({ imagemUrl, nomeFilme, genero }) {

  return (
    <main>
    <img src={imagemUrl} alt={nomeFilme} />
    <h3>{nomeFilme}</h3>
    <p>{genero}</p>
  </main>
  );
}