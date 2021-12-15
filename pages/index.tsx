import styles from "../styles/Formulario.module.css"
import Cartao from "../components/Cartao";
import Link from "next/link";
import EntradaNumerica from "../components/EntradaNumerica";
import { useState } from "react";

export default function Formulario() {
  const [qntdPortas, setQntdPortas] = useState(3)
  const [comPresente, setcomPresente] = useState(1)
  
  return (
    <div className={styles.formulario}>
      <div>
        <Cartao bgcolor="#C0392C">
          <h1>Monty Hall</h1>
        </Cartao>
        <Cartao>
          <EntradaNumerica text="Quantidade Portas?" 
            value={qntdPortas} 
            onChange={novaQntd => setQntdPortas(novaQntd)} />
        </Cartao>
      </div>
      <div>
        <Cartao>
        <EntradaNumerica text="Porta com Presente?" 
            value={comPresente} 
            onChange={novaPortaComPresente => setcomPresente(novaPortaComPresente)} />
        </Cartao>

        <Cartao bgcolor="#28A085">
          <Link href={`/jogo/${qntdPortas}/${comPresente}`}>
            <h2 className={styles.link}>Iniciar</h2>
          </Link>
        </Cartao>
      </div>
    </div>
  )
}