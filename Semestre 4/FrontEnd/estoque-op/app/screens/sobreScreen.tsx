import { ImageBackground, StyleSheet, View } from "react-native";
import Texto from "@/components/TypographyRobalo";
import { SafeAreaProvider } from "react-native-safe-area-context";


export default function SobreScreen() {
    return (
        <SafeAreaProvider>
            <View style={styles.container}>
                
                    <View style={styles.caixaTexto}>
                        <Texto style={styles.texto} variant="default"> Aplicativo desenvolvido com a finalidade de realizar operações de estoque,
                            nele você poderá procurar produtos,
                            registrar as entradas dos produtos no estoque e
                            registrar as saídas dos produtos no estoque.
                        </Texto>

                        <Texto style={styles.texto} variant="default">  Este aplicativo não foi feito para a realização de tarefas administrativas.
                            Para tarefas administrativas, usem o website do Painel Administrativo
                        </Texto>
                    </View>

                
            </View>
        </SafeAreaProvider>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#000000"
    },

    fundo: {
        width: '100%',
        height: '100%',
        padding: 15,
        justifyContent: 'flex-end'
    },

    texto: {
        fontFamily: 'Calibri',
        fontSize: 20,
        textAlign: 'justify'
    },

    caixaTexto: {
        backgroundColor: 'rgb(255,255,220)',
        padding: 10,
        gap: 10
    }
})