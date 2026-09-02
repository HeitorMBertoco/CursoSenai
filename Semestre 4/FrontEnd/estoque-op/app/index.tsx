import { useRouter } from 'expo-router';
import {
    ImageBackground,
    StyleSheet,
    View,
} from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Ronaldo from '../components/botãoRonaldo';

export default function Index() {
    const router = useRouter();

    return (
        <SafeAreaProvider>
            <View style={styles.container}>
                
                 
                    <View style={styles.overlay} />

                    <View style={styles.conteudo}>
                        <View style={styles.botoes}>
                            <Ronaldo
                                label="Procurar Produtos"
                                buttonColor="#2C2C2E"
                                onPress={() =>
                                    router.push('/screens/produtoPesquisaScreen')
                                }
                            />

                            <Ronaldo
                                label="Entrada de Produtos"
                                buttonColor="#176B3A"
                                onPress={() =>
                                    router.push('/screens/produtoScreen')
                                }
                            />

                            <Ronaldo
                                label="Saída de Produtos"
                                buttonColor="#A83232"
                                onPress={() => console.log('Saída clicada')}
                            />

                            <Ronaldo
                                label="Sobre este App"
                                buttonColor="#F5F5F5"
                                textColor="#222222"
                                onPress={() =>
                                    router.push('/screens/sobreScreen')
                                }
                            />
                        </View>
                    </View>
                
            </View>
        </SafeAreaProvider>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#111',
    },

    fundo: {
        flex: 1,
    },

    overlay: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: 'rgba(0, 0, 0, 0.38)',
    },

    conteudo: {
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 24,
    },

    botoes: {
        width: '100%',
        gap: 16,
    },
});