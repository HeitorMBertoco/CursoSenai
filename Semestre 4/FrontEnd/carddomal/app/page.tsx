import Image from "next/image";
import Ronaldo from "@/components/ui/card";
import ImagemPeixe from "@/assets/help-my-fish-isnt-eating-v0-3jyph38op33h1.webp"
import ImagemSensor from "@/assets/S417b160a2ec24a7c8b5180ec1f48363cl.jpg_220x220q75.jpg"

export default function Home() {
  return (
    <>
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