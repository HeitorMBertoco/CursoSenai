import { ColorValue, View } from "react-native"
import Texto from "./TypographyRobalo"




interface BannerTipos {
    Text: string,
    CorTexto: ColorValue,
    CorBg: ColorValue
}

export default function Banner({ Text, CorTexto, CorBg }: BannerTipos) {
    return (
        <View style={{display: "flex", flexDirection: "row", backgroundColor: CorBg, justifyContent: "center", alignItems: "center", padding: 5, borderRadius: 1, width: 1200, height:40, marginLeft: "auto", marginRight: "auto", marginTop: 10, marginBottom: 10}}>
            <Texto variant="title" style={{ color: CorTexto }} >{Text}</Texto>
        </View>
    )


}