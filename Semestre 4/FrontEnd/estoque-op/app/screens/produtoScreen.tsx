import { View, Text, ImageBackground, StyleSheet } from "react-native";
import { white } from "react-native-paper/lib/typescript/styles/themes/v2/colors";


export default function ProdutoScreen(){
return(
<View style={styles.container}>
    <ImageBackground style={styles.fundo} source={require("../../assets/images/fundo.jpg")} resizeMode='cover'>
    <Text style={styles.texto}>Tela de produtos</Text>
    </ImageBackground>
</View>
);


}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width:'100%',
        height: '100%'
    },

    fundo: {
        width: '100%',
        height: '100%',
        padding: 15,
        color: "#fff"
    },

    texto: {
        fontFamily: 'Calibri',
        fontSize: 20,
        textAlign: 'justify',
        color: "#fff"
    },

    caixaTexto: {
        backgroundColor: 'rgb(255,255,220)',
        padding: 10,
        gap: 10
    }
})