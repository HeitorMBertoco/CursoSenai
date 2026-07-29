"use client"
import { useRouter } from "next/navigation";

export default function CreditsPage(){
    const router = useRouter();
    return(
        <div className="container">
            <h1 className="title">Credits dedicated to:</h1>
            <p className="text-dedication">"For MariCarmen, who deserved a better book"</p>
            
            <div className="button-group">
                {/* Botão Voltar (Estilo secundário com seta para esquerda) */}
                <button 
                    className="btn btn-secondary btn-arrow" 
                    onClick={() => router.back()}
                >
                    <span>←</span> Voltar
                </button>

                {/* Botão Avançar (Pronto para o próximo capítulo do livro) */}
                <button 
                    className="btn btn-arrow" 
                    onClick={() => router.push("/pages/summary")}
                >
                    Avançar <span>→</span>
                </button>
            </div>
        </div>
    )
}
