import { Text, TextInput, View, StyleSheet, ScrollView } from 'react-native';
import { useState, useEffect } from 'react';
import { IProduto } from '@/interfaces';
import { ProdutoApi } from '@/api';
import Card from '@/components/card';

export default function Pesquisa() {
  const [produtos, setProdutos] = useState<IProduto[]>([]);
  const [busca, setBusca] = useState('');

  async function carregarProdutos(filtro?: string) {
    try {
      const dados = await ProdutoApi.listar(filtro);
      setProdutos(dados);
    } catch (error) {
      console.log('Erro ao carregar produtos:', error);
    }
  }

  useEffect(() => {
    carregarProdutos();
  }, []);

  function pesquisar(texto: string) {
    setBusca(texto);
    carregarProdutos(texto);
  }

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.titulo}>Pesquisa de Produtos</Text>

      <TextInput
        style={styles.input}
        placeholder="🔎 Pesquisar produto"
        placeholderTextColor="#888"
        value={busca}
        onChangeText={pesquisar}
      />

      <View style={styles.lista}>
        {produtos.map((produto) => (
          <View key={produto.id} style={styles.card}>
            <Card
              nome={produto.nome}
              quantidadeAtual={produto.quantidadeAtual}
              nomearquivofoto={produto.nomearquivofoto}
            />
          </View>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111',
    padding: 16,
  },
  titulo: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 16,
  },
  input: {
    backgroundColor: '#fff',
    padding: 12,
    borderRadius: 8,
    fontSize: 16,
    marginBottom: 16,
  },
  lista: {
    gap: 10,
    paddingBottom: 30,
  },
  card: {
    backgroundColor: '#fff',
    padding: 12,
    borderRadius: 8,
  },
});