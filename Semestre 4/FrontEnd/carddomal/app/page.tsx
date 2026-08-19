import Image from "next/image";
import Ronaldo from "@/components/ui/card";
import ImagemPeixe from "@/assets/help-my-fish-isnt-eating-v0-3jyph38op33h1.webp"
import { Robalo, ListaRobalo } from "@/components/ui/antesdepois";
import ImagemSensor from "@/assets/S417b160a2ec24a7c8b5180ec1f48363cl.jpg_220x220q75.jpg"
import ImagemPeixeSol from "@/assets/image.png"

import ImagemPeixeEquinox from "@/assets/PeixeEscuro.png"
import ImagemSensorDoBem from "@/assets/image.jpg"

const minhasImagens = [
    {
      titulo: "Aquatico",
      imagem1: ImagemPeixeEquinox,
      imagem2: ImagemPeixeSol
    },
    {
      titulo: "Azul",
      imagem1: ImagemSensorDoBem,
      imagem2: ImagemSensor
    },
    
  ]

export default function Home() {
  return (
    <>
      <Robalo
        imagem1={ImagemSensor}
        imagem2={ImagemSensorDoBem}
        titulo="Sensor de Ronaldo vs Sensor de Ronaldo do mal"
      />
      <Robalo
        imagem1={ImagemPeixeSol}
        imagem2={ImagemPeixeEquinox}
        titulo="Ronaldo do bem vs Ronaldo do mal"
      />
      <ListaRobalo cards={minhasImagens}/>
      <Ronaldo
        imagem={ImagemPeixe}
        estiloImagem="redonda"
        alt="Ronaldo"
        linha1="Ronaldo"
        linha2="Peixe"
        linha3={14.00}
      />
      <br />
      <Ronaldo
        imagem={ImagemSensor}
        estiloImagem="quadrada"
        alt="sensor"
        linha1="Sensor de Ronaldo"
        linha2="Do mal"
        linha3={32.00}
      />
    </>
  );
}