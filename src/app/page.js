import Image from "next/image";
import "./styles.css";
import Link from "next/link";
import Main from "./components/Main"
import { listaFilmes } from "./api/route";

export default function Home() {

  return (
    <main>
      <Main/>
    </main>
  );
};
