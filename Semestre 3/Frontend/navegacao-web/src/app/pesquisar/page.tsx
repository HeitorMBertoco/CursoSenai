'use client';
import Link from "next/link";
import Image from "next/image";
import "../main.css";
import ICartao from "../InterfaceCartao";
import { useEffect, useState } from "react";
import { ListarCartoes } from "../api";
export default function Pesquisar() {

    const [dados, setDados] = useState<ICartao[]>([]);
    const [searchTerm, setSearchTerm] = useState<string>("");
    
    useEffect(() => {  
        ListarCartoes().then((cartoes) => {
            setDados(cartoes);
        });
    }, []);

    // filtra os cartões baseado no termo de busca (por nome)
    const filteredDados = dados.filter((cartao) =>
        cartao.nome.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
    <>
        
        <div className="main">
            
            <h1 style={{textAlign: "center",background:"black", color: "white", borderRadius: "25px", border: "6px solid white", padding: "10px", fontFamily: "Arial, sans-serif"}}>Pesquisar</h1>
            <p>Todos os cadastros listados abaixo</p>
            
            {/* Input de pesquisa */}
            <input
                
                type="text"
                placeholder="Pesquisar por nome..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                style={{
                    width: "50%",
                    padding: "10px",
                    marginBottom: "20px",
                    border: "2px solid #ccc",
                    borderRadius: "5px",
                    fontSize: "16px"
                }}
                className="inputForm"
            />
            
            {filteredDados.map((cartao) => (
                <div key={cartao.id} style={{ marginBottom: '20px', textAlign: 'center' }}>
                    <img
                        src={cartao.urlFoto}
                        alt="Imagem"
                        style={{ display: 'block', margin: '0 auto', maxWidth: '100%', height: 'auto' }}
                    />
                    <Link href={`/cadastrar?id=${cartao.id}`} style={{}}>
                        <h2>{cartao.nome}</h2>
                    </Link>
                </div>
            ))}
            
                
        </div>
        </>
    );
}