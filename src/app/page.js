import Image from "next/image";
import "./styles.css";
import Link from "next/link";
import Main from "./components/Main"
import { listaFilmes } from "./api/route";

export default function Home() {

  return (
    <main>
      {listaFilmes.map((filmes) => (
        <Main
          key={filmes.id}
          imagemUrl={filmes.imagem_url}
          nomeFilme={filmes.nome}
          genero={filmes.genero}
        />
      ))
      }
    </main>
  );
};
