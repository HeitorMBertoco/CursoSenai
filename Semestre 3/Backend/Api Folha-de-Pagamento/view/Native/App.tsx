// App.tsx
import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";

interface Funcionario {
  nome: string;
  foto: string;
  pagamento: number;
  tipo: string;
}

export default function App() {
  const [apiFuncionario, setApiFuncionario] = useState<Funcionario[] | null>(
    null
  );
  const [pagina, setPagina] = useState(0);

  const itensMaximoPagina = 1;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("http://localhost:5055/funcionarios");
        const data = await res.json();
        setApiFuncionario(data);
      } catch (error) {
        console.error("Erro ao buscar dados da API:", error);
      }
    };

    fetchData();
  }, []);

  const totalPaginas = apiFuncionario
    ? Math.ceil(apiFuncionario.length / itensMaximoPagina)
    : 0;

  const funcionariosPaginados = apiFuncionario
    ? apiFuncionario.slice(
        pagina * itensMaximoPagina,
        (pagina + 1) * itensMaximoPagina
      )
    : [];

  const renderCard = (funcionario: Funcionario, index: number) => {
    return (
      <View style={styles.containerCard} key={funcionario.nome}>
        <View style={styles.card}>
          {/* Header */}
          <View style={styles.cardHeader}>
            <Text style={styles.cardHeaderText}>{funcionario.nome}</Text>
          </View>

          {/* Tipo */}
          <View style={styles.cardContent}>
            <Text style={styles.cardContentText}>Tipo: {funcionario.tipo}</Text>
          </View>

          {/* Foto */}
          <Image
            style={styles.cardImage}
            source={{
              uri: `https://randomuser.me/api/portraits/men/${index + 63}.jpg`,
            }}
          />

          {/* Pagamento */}
          <View style={styles.cardFooter}>
            <Text style={styles.cardFooterText}>
              A pagar R$ {funcionario.pagamento}
            </Text>
          </View>
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.mainContainer}>
      <Text style={styles.title}>API Folha de Pagamento</Text>

      <FlatList
        data={funcionariosPaginados}
        keyExtractor={(item) => item.nome}
        renderItem={({ item, index }) => renderCard(item, index)}
        contentContainerStyle={{ alignItems: "center" }}
      />

      <View style={styles.pagination}>
        <TouchableOpacity
          style={[styles.button, pagina === 0 && styles.disabledButton]}
          onPress={() => setPagina((prev) => Math.max(prev - 1, 0))}
          disabled={pagina === 0}
        >
          <Text style={styles.buttonText}>Anterior</Text>
        </TouchableOpacity>

        <Text style={styles.pageText}>
          Página {pagina + 1} de {totalPaginas}
        </Text>

        <TouchableOpacity
          style={[
            styles.button,
            pagina === totalPaginas - 1 && styles.disabledButton,
          ]}
          onPress={() =>
            setPagina((prev) => Math.min(prev + 1, totalPaginas - 1))
          }
          disabled={pagina === totalPaginas - 1}
        >
          <Text style={styles.buttonText}>Próxima</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    paddingTop: 50,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    alignSelf: "center",
    marginBottom: 20,
  },
  containerCard: {
    marginBottom: 20,
  },
  card: {
    width: 320,
    backgroundColor: "#c2c2c2",
    borderRadius: 15,
    overflow: "hidden",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  cardHeader: {
    backgroundColor: "#e0e0e0",
    padding: 10,
  },
  cardHeaderText: {
    fontSize: 18,
    fontWeight: "bold",
  },
  cardContent: {
    backgroundColor: "#f2f2f2",
    padding: 10,
  },
  cardContentText: {
    fontSize: 16,
  },
  cardImage: {
    height: 140,
    width: "100%",
  },
  cardFooter: {
    backgroundColor: "#e0e0e0",
    padding: 10,
  },
  cardFooterText: {
    fontSize: 16,
    fontWeight: "600",
  },
  pagination: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  button: {
    backgroundColor: "#007AFF",
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 5,
  },
  disabledButton: {
    backgroundColor: "#a0a0a0",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
  pageText: {
    marginHorizontal: 15,
    fontSize: 16,
  },
});