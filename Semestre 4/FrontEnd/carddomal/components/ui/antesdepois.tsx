'use client'
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";

interface AntesDepoisProps {
    imagem1: string | StaticImport;
    imagem2: string | StaticImport;
    titulo: string;
}

export function Robalo({imagem1, imagem2, titulo}: AntesDepoisProps) {
    return(
        <div className="container">
            <h1>{titulo}</h1>
            
            <div className="cards">
                <div className="card">
                    <Image 
                        width={250} 
                        height={250} 
                        alt="antes" 
                        src={imagem1}
                    />
                    <p>antes</p>
                </div>

                <div className="card">
                    <Image 
                        width={250} 
                        height={250} 
                        alt="depois" 
                        src={imagem2}
                    />
                    <p>depois</p>
                </div>
            </div>

            <style jsx>{`
                .container {
                    display: flex;
                    flex-direction: column;
                    gap: 30px;
                    padding: 30px;
                    border: 3px solid #333;
                    width: fit-content;
                }

                .container h1 {
                    margin: 0;
                    text-align: center;
                    font-size: 24px;
                }

                .cards {
                    display: flex;
                    gap: 30px;
                }

                .card {
                    display: flex;
                    flex-direction: column;
                    gap: 15px;
                    align-items: center;
                    border: 2px solid #333;
                    padding: 20px;
                }

                .card img {
                    width: 250px;
                    height: 250px;
                    object-fit: cover;
                }

                .card p {
                    margin: 0;
                    font-size: 16px;
                    font-weight: bold;
                }
            `}</style>
        </div>
    )
}




interface ListaAntesDepoisProps {
    cards: AntesDepoisProps[];
}

export  function ListaRobalo({cards}: ListaAntesDepoisProps) {
    return(
        <div className="lista">
            {cards.map((card, index) => (
                <Robalo 
                    key={index}
                    imagem1={card.imagem1}
                    imagem2={card.imagem2}
                    titulo={card.titulo}
                />
            ))}

            <style jsx>{`
                .lista {
                    display: flex;
                    flex-direction: column;
                    gap: 40px;
                    padding: 40px;
                }
            `}</style>
        </div>
    )
}