import { Text , Image , TextInput , ImageBackground , View , StyleSheet } from "react-native"

export default function Pesquisa(){
    return(
    <View style={styles.container}>
        <ImageBackground style={styles.fundo} source={require("../../assets/images/fundo.jpg")} resizeMode='cover'>
            <Text style={styles.texto}>Pesquisa de Produtos</Text>
            <TextInput style={styles.input} placeholder="🔎︎ ronaldo"/>
            <View><Image source={require("../../assets/images/images.webp")}/>
            </View>
        </ImageBackground>

    </View>
    )
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
    input: {
        padding: 12,
        marginLeft:80,
        margin:30,
        marginRight:80, 
        backgroundColor: "#fff",
        borderRadius: 12,





    },

    texto: {
        fontFamily: 'Calibri',
        fontSize: 20,
        textAlign: 'center',
        color: "#fff"
    },

    caixaTexto: {
        backgroundColor: 'rgb(255,255,220)',
        padding: 10,
        gap: 10
    }
})