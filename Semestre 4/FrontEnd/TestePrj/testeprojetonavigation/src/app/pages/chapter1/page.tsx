"use client"
import { useRouter } from "next/navigation";

export default function CapituloUmPage() {
    const router = useRouter();

    return (
        <div className="container">
            
            <span className="subtitle" style={{ marginBottom: "0.2rem", fontWeight: "bold" }}>
                Capítulo 1
            </span>
            <h1 className="title" style={{ marginBottom: "2rem" }}>
                O Cemitério dos Livros Esquecidos
            </h1>

            
            <div className="book-text">
                <p>
                    Ainda me lembro do amanhecer em que meu pai me levou pela primeira vez a visitar o Cemitério dos Livros Esquecidos.
                </p>
                <p>
                    Desciam pelas ruas as névoas de uma Barcelona cinzenta e fria, envolvendo a Rambla em um hálito de fumaça líquida. O dia parecia uma promessa de chuva que nunca chegava a se cumprir.
                </p>
            </div>

           
            <div className="button-group">
                
                <button 
                    className="btn btn-secondary btn-arrow" 
                    onClick={() => router.back()}
                >
                    <span>←</span> Voltar
                </button>

                
                <button 
                    className="btn btn-arrow" 
                    onClick={() => router.push("/capitulo2")}
                >
                    Avançar <span>→</span>
                </button>
            </div>
        </div>
    );
}
