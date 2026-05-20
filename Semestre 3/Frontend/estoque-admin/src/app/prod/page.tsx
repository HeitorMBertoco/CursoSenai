'use client';

import { useRouter } from 'next/navigation'; // ✅ correct import
import text from "../text.module.css";
import cards from "../card.module.css";
import input from "../input.module.css"

export default function Produto() {
    const router = useRouter(); 

    return (
        <>
            <div className={input.containerPesquisa}>
                <h1>Pesquisar</h1>
                 <select name="" id="" className={input.select}>
                   
                 </select>
                 <input type="text" name="" id="" placeholder='Nome ou descrição:'/>
                 
            </div>
            <hr />
            <div className={cards.container}>

                <div onClick={() => router.push("/categoria/cadastro")} className={cards.cardcriar}> Criar + </div>

            </div>
        </>

    );
}