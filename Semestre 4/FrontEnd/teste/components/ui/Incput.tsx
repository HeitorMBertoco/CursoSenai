
import { View, Text, TextInput } from "react-native"

interface Input{
    corfundo: string,
    texto: string,
    corTexto?: string,
    Border?: number,
    brdInferior?:number,
    corbrd?: string,
    corbrdinf?:string
}

export default function Input({corfundo, texto, corTexto, Border, corbrd, corbrdinf, brdInferior }: Input) {
    return(
        <View style={{
            display: "flex",
            alignItems:"center",
            justifyContent: "center" 
        }}>
            <Text style={{
                color: corTexto

            }}>
                {texto}
            </Text>
            <TextInput style={{
                width: 500,
                padding: 8, 

                backgroundColor: corfundo,
                color: "#ffffff",
                borderWidth: Border,
                borderColor:corbrd,
                borderBottomWidth:brdInferior,
                borderBottomColor: corbrdinf
            }}>
                
            </TextInput>

        </View>
    )
}