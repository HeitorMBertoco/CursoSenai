"use client"
import { useRouter } from "next/navigation";

export default function SumarioPage() {
    const router = useRouter();

  
    const capitulos = [
        { id: "credits", numero: "Créditos", titulo: "Dedicatória", rota: "/credits" },
        { id: "1", numero: "Capítulo 1", titulo: "O Cemitério dos Livros Esquecidos", rota: "/pages/chapter1" },
        { id: "2", numero: "Capítulo 2", titulo: "Dias de Cinza", rota: "/capitulo2" },
        { id: "3", numero: "Capítulo 3", titulo: "O Palácio da Névoa", rota: "/capitulo3" },
    ];

    return (
        <div className="container">
            <span className="subtitle" style={{ marginBottom: "0.2rem", fontWeight: "bold" }}>
                Índice
            </span>
            <h1 className="title" style={{ marginBottom: "1rem" }}>
                Sumário
            </h1>

                       <ul className="summary-list">
                {capitulos.map((cap) => (
                    <li 
                        key={cap.id} 
                        className="summary-item" 
                        onClick={() => router.push(cap.rota)}
                    >
                        <span className="summary-title">
                            <strong>{cap.numero}:</strong> {cap.titulo}
                        </span>
                        <span className="summary-page">→</span>
                    </li>
                ))}
            </ul>

            <div className="button-group">
                <button 
                    className="btn btn-secondary btn-arrow" 
                    onClick={() => router.push("/")}
                >
                    <span>←</span> Início
                </button>
            </div>
        </div>
    );
}
