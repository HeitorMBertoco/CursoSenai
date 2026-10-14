import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Alert,
} from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import Banner from '@/components/banner';
import Ronaldo from '@/components/botãoRonaldo';
import { IProduto } from '@/interfaces';
import { ProdutoApi, OperacaoApi } from '@/api';

export default function ProdutoScreen() {
  const params = useLocalSearchParams<{ tipo?: 'E' | 'S' }>();
  const [tipo, setTipo] = useState<'E' | 'S'>(params.tipo === 'S' ? 'S' : 'E');
  const [produtos, setProdutos] = useState<IProduto[]>([]);
  const [produtoSelecionado, setProdutoSelecionado] = useState<IProduto | null>(null);
  const [quantidade, setQuantidade] = useState('');
  const [motivo, setMotivo] = useState('');

  async function carregarProdutos() {
    try {
      const lista = await ProdutoApi.listar();
      setProdutos(lista);
    } catch (error) {
      console.log('Erro ao carregar produtos:', error);
    }
  }

  useEffect(() => {
    carregarProdutos();
  }, []);

  useEffect(() => {
    if (params.tipo === 'E' || params.tipo === 'S') {
      setTipo(params.tipo);
    }
  }, [params.tipo]);

  // Cálculo prévio do novo saldo para o usuário visualizar
  const qtdNumero = Number(quantidade) || 0;
  const estoqueAtual = produtoSelecionado ? Number(produtoSelecionado.quantidadeAtual) || 0 : 0;
  const novoEstoqueCalculado =
    tipo === 'E'
      ? estoqueAtual + qtdNumero
      : Math.max(0, estoqueAtual - qtdNumero);

  async function salvarOperacao() {
    if (!produtoSelecionado) {
      Alert.alert('Aviso', 'Selecione um produto da lista.');
      return;
    }

    const qtd = Number(quantidade);
    if (!qtd || qtd <= 0) {
      Alert.alert('Aviso', 'Informe uma quantidade válida maior que zero.');
      return;
    }

    if (!motivo.trim()) {
      Alert.alert('Aviso', 'Informe o motivo da operação.');
      return;
    }

    // Saída: não permite retirar mais do que existe no estoque
    if (tipo === 'S' && qtd > estoqueAtual) {
      Alert.alert(
        'Aviso',
        `Estoque insuficiente! Você quer tirar ${qtd}, mas o estoque atual é de apenas ${estoqueAtual}.`
      );
      return;
    }

    try {
      // Registra a operação no EstoqueJS:
      // Se tipo for 'E' -> adiciona quantidade (+qtd)
      // Se tipo for 'S' -> subtrai quantidade (-qtd)
      await OperacaoApi.registrarOperacaoComItens({
        motivo: motivo.trim(),
        entradasaida: tipo,
        itens: [
          {
            produtoId: Number(produtoSelecionado.id),
            quantidade: qtd,
            precoCusto: 0,
          },
        ],
        atualizarEstoqueProduto: true,
      });

      const mensagemSucesso =
        tipo === 'E'
          ? `Entrada de ${qtd} itens realizada!\nEstoque anterior: ${estoqueAtual}\nNovo estoque: ${novoEstoqueCalculado}`
          : `Saída de ${qtd} itens realizada!\nEstoque anterior: ${estoqueAtual}\nNovo estoque: ${novoEstoqueCalculado}`;

      Alert.alert('Sucesso', mensagemSucesso);

      setQuantidade('');
      setMotivo('');
      setProdutoSelecionado(null);
      await carregarProdutos();
    } catch (error: any) {
      console.error('Erro na operação:', error);
      const msg = error instanceof Error ? error.message : String(error?.message || error);
      Alert.alert('Erro', msg);
    }
  }

  return (
    <ScrollView style={styles.container}>
      <Banner
        Text={tipo === 'E' ? 'Entrada de Produtos (+)' : 'Saída de Produtos (-)'}
        CorTexto="#fff"
        CorBg={tipo === 'E' ? '#176B3A' : '#A83232'}
      />

      {/* Botões simples para alternar Entrada e Saída */}
      <View style={styles.botoesTipo}>
        <TouchableOpacity
          style={[styles.botaoTipo, tipo === 'E' && styles.ativoEntrada]}
          onPress={() => setTipo('E')}
        >
          <Text style={styles.textoBotao}>+ ENTRADA (DAR)</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.botaoTipo, tipo === 'S' && styles.ativoSaida]}
          onPress={() => setTipo('S')}
        >
          <Text style={styles.textoBotao}>- SAÍDA (TIRAR)</Text>
        </TouchableOpacity>
      </View>

      {/* Campo Motivo */}
      <Text style={styles.label}>Motivo da Operação:</Text>
      <TextInput
        style={styles.input}
        placeholder={tipo === 'E' ? 'Ex: Compra, Devolução, Ajuste' : 'Ex: Venda, Avaria, Consumo'}
        placeholderTextColor="#888"
        value={motivo}
        onChangeText={setMotivo}
      />

      {/* Campo Quantidade */}
      <Text style={styles.label}>
        Quantidade a {tipo === 'E' ? 'adicionar (+)' : 'retirar (-)'}:
      </Text>
      <TextInput
        style={styles.input}
        placeholder="0"
        placeholderTextColor="#888"
        keyboardType="numeric"
        value={quantidade}
        onChangeText={setQuantidade}
      />

      {/* Pré-visualização simples do cálculo do estoque */}
      {produtoSelecionado && qtdNumero > 0 ? (
        <View style={styles.resumoBox}>
          <Text style={styles.resumoTexto}>
            {tipo === 'E'
              ? `Estoque Atual: ${estoqueAtual} + ${qtdNumero} = Novo Estoque: ${novoEstoqueCalculado}`
              : `Estoque Atual: ${estoqueAtual} - ${qtdNumero} = Novo Estoque: ${novoEstoqueCalculado}`}
          </Text>
        </View>
      ) : null}

      {/* Seleção do Produto */}
      <Text style={styles.label}>Selecione o Produto:</Text>
      <View style={styles.lista}>
        {produtos.map((p) => {
          const selecionado = produtoSelecionado?.id === p.id;
          return (
            <TouchableOpacity
              key={p.id}
              style={[styles.item, selecionado && (tipo === 'E' ? styles.itemEntrada : styles.itemSaida)]}
              onPress={() => setProdutoSelecionado(p)}
            >
              <Text style={styles.itemNome}>{p.nome}</Text>
              <Text style={styles.itemEstoque}>
                Estoque atual: {p.quantidadeAtual}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>

      {/* Botão de Envio */}
      <View style={styles.botaoConfirmar}>
        <Ronaldo
          label={tipo === 'E' ? 'Confirmar Entrada (+)' : 'Confirmar Saída (-)'}
          buttonColor={tipo === 'E' ? '#176B3A' : '#A83232'}
          onPress={salvarOperacao}
        />
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
  botoesTipo: {
    flexDirection: 'row',
    gap: 10,
    marginBottom: 16,
  },
  botaoTipo: {
    flex: 1,
    backgroundColor: '#333',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  ativoEntrada: {
    backgroundColor: '#176B3A',
  },
  ativoSaida: {
    backgroundColor: '#A83232',
  },
  textoBotao: {
    color: '#fff',
    fontWeight: 'bold',
  },
  label: {
    color: '#fff',
    fontSize: 15,
    marginBottom: 6,
  },
  input: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 8,
    fontSize: 16,
    marginBottom: 14,
  },
  resumoBox: {
    backgroundColor: '#222',
    padding: 10,
    borderRadius: 8,
    marginBottom: 14,
  },
  resumoTexto: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  lista: {
    gap: 8,
    marginBottom: 20,
  },
  item: {
    backgroundColor: '#fff',
    padding: 12,
    borderRadius: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  itemEntrada: {
    backgroundColor: '#bbf7d0',
  },
  itemSaida: {
    backgroundColor: '#fecaca',
  },
  itemNome: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#000',
  },
  itemEstoque: {
    fontSize: 14,
    color: '#444',
  },
  botaoConfirmar: {
    marginBottom: 40,
  },
});