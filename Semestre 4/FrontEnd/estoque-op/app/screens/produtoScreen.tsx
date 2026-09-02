import { View, Text, ImageBackground, StyleSheet } from "react-native";
import Banner from "@/components/banner";


export default function ProdutoScreen(){
return(
<View style={styles.container}>
    <ImageBackground style={styles.fundo} source={require("../../assets/images/fundo.jpg")} resizeMode='cover'>
    <Banner Text="Tela de produtos" CorTexto="#fff" CorBg="rgba(0,0,0,0.7)" />
    <Banner Text="SAIDA " CorTexto="#fff" CorBg="#ff0000" />
    <Banner Text="Entrada" CorTexto="#fff" CorBg="#00ff00" />
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