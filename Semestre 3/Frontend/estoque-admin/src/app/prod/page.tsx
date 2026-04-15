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
                    <option value="">
                        Container de Carga
                    </option>
                    <option value="">
                        Banana
                    </option>
                    <option value="">
                        Faca Tramontina
                    </option>
                 </select>
                 <input type="text" name="" id="" placeholder='Nome ou descrição:'/>
                 
            </div>
            <hr />
            <div className={cards.container}>

                <div onClick={() => router.push("/categoria/cadastro")} className={cards.cardcriar}> Criar + </div>

                <div className={cards.card}>Liquidificador Mondial</div>
                <div className={cards.card}>Saleiro Tramontina</div>
                <div className={cards.card}>Airfryer Brastemp</div>
                <div className={cards.card}>Pratos Tramontina</div>
                <div className={cards.card}>Copos Tramontina</div>
                <div className={cards.card}>Ralador Queijo Tramontina</div>
                <div className={cards.card}>Furador de Coco Tramontina</div>
                <div className={cards.card}>Espremedor de alho Tramontina</div>
                <div className={cards.card}>Telhados Irmões a obra</div>
                <div className={cards.card}>Garfos Tramontina</div>

                <div className={cards.card}>Facas Tramontina</div>
            </div>
        </>

    );
}