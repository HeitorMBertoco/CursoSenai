import { Image, View } from "react-native"
import Texto from "./TypographyRobalo"




interface CardTipos {
    nome: string,
    quantidadeAtual: number
}

export default function Card({ nome, quantidadeAtual }: CardTipos) {
    return (
        <View style={{display: "flex", flexDirection: "row"}}>
            <Image style={{width: 75, height: 75,marginRight: 10 }} source={require("@/assets/images/simas.png")} />
            <View style={{display: "flex", flexDirection: "column"}}>
            <Texto variant="title"  >{nome}</Texto>
            <Texto variant="default" style={{ color: "#a6a6a6" }} >{"Quantidade: " + quantidadeAtual}</Texto>
            </View>
        </View>
    )


}