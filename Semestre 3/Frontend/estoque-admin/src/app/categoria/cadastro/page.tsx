'use client'

import { useRouter } from "next/navigation";
import cardecontainers from "../../card.module.css"
import botao from "../../botao.module.css"

export default function criarCat() {
  const router = useRouter();
  return (
    < div className={cardecontainers.rootElement}>
      <div className={cardecontainers.container2}>
        <h1>Cadastro de Categoria</h1>
        <input type="text" name="" id="" placeholder="Digite o nome da categoria:"/>
        <textarea rows={4} cols={40} placeholder="digite a descrição da categoria:"/>
        <button className={botao.botaodobem}>Botão do bem</button>
        <button className={botao.botaodomal}>Botão do mal</button>
    
      </div>
    </div>
  );
}
