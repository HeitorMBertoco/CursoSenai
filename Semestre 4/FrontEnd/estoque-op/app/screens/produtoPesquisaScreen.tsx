import {
    Text,
    TextInput,
    ImageBackground,
    View,
    StyleSheet,
} from 'react-native';
import { useState, useEffect } from 'react';
import { IProduto } from '@/interfaces';
import { ProdutoApi } from '@/api';
import Card from '@/components/card';

export default function Pesquisa() {
    const [produtos, setProdutos] = useState<IProduto[]>([]);

    useEffect(() => {
        async function carregarProdutos() {
            try {
                const dados = await ProdutoApi.listar();
                setProdutos(dados);
            } catch (error) {
                console.log(error);
            }
        }

        carregarProdutos();
    }, []);

    return (
        <View style={styles.container}>
            
                <View style={styles.overlay} />

                <View style={styles.conteudo}>
                    <Text style={styles.titulo}>
                        Pesquisa de Produtos
                    </Text>

                    <TextInput
                        style={styles.input}
                        placeholder="🔎  Pesquisar produto"
                        placeholderTextColor="#8E8E93"
                    />

                    <View style={styles.lista}>
                        {produtos.map((produto) => (
                            <View
                                key={produto.id}
                                style={styles.cardContainer}
                            >
                                <Card
                                    nome={produto.nome}
                                    quantidadeAtual={produto.quantidadeAtual}
                                />
                            </View>
                        ))}
                    </View>
                </View>
           
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#111111',
    },

    fundo: {
        flex: 1,
    },

    overlay: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: 'rgba(0, 0, 0, 0.42)',
    },

    conteudo: {
        flex: 1,
        paddingHorizontal: 20,
        paddingTop: 24,
    },

    titulo: {
        color: '#FFFFFF',
        fontSize: 24,
        fontWeight: '600',
        textAlign: 'center',
        marginBottom: 20,
    },

    input: {
        height: 52,
        backgroundColor: '#FFFFFF',
        borderRadius: 14,
        paddingHorizontal: 18,
        fontSize: 16,
        color: '#222222',
        marginBottom: 20,
    },

    lista: {
        gap: 12,
    },

    cardContainer: {
        backgroundColor: '#FFFFFF',
        borderRadius: 14,
        padding: 14,
        shadowColor: '#000000',
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.12,
        shadowRadius: 8,
        elevation: 3,
    },
});