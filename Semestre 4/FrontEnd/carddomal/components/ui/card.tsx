'use client'
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";


interface CardProps {
    imagem: string | StaticImport;
    estiloImagem: "redonda" | "quadrada"
    linha1?: string;
    linha2?: string;
    linha3?: number;
    alt: string
}

export default function Ronaldo({ imagem, estiloImagem, linha1, linha2, linha3, alt }: CardProps) {
    return (
        <div className="card">
            <div className={`imagem ${estiloImagem}`}>
                <Image
                    width={250}
                    height={250}
                    alt={alt}
                    src={imagem}
                    style={{
                        width: 250,
                        height: 250,
                        borderRadius: estiloImagem === "redonda" ? "50%" : "0"
                    }}
                />
            </div>
            <div className="main">
                <h2>{linha1}</h2>
                <p>{linha2}</p>
                <p className="preco">R$ {linha3}</p>
            </div>

            <style jsx>{`
                .card {
                    display: flex;
                    gap: 20px;
                    padding: 20px;
                    border: 2px solid #333;
                    width: fit-content;
                }

                .imagem {
                    flex-shrink: 0;
                    overflow: hidden;
                }

                .imagem.redonda {
                    width: 250px;
                    height: 250px;
                    border-radius: 50%;
                }

                .imagem.quadrada {
                    width: 250px;
                    height: 250px;
                    border-radius: 0;
                }

                .main {
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                }

                .main h2 {
                    margin: 0;
                    font-size: 18px;
                    font-weight: bold;
                }

                .main p {
                    margin: 5px 0;
                    font-size: 14px;
                    color: #666;
                }

                .preco {
                    font-weight: bold;
                    color: #333;
                }
            `}</style>
        </div>
    )
}