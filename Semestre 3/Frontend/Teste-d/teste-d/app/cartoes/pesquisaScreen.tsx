import { Button, View, Text, Pressable, StyleSheet, ScrollView } from "react-native";

import { useRouter } from "expo-router";
import { useEffect, useState } from "react";
import { ListarCartoes } from "./cartaoApi";
import ICartao from "./cartaoInterface";

export default function Pesquisa() {
  const [dados, setDados] = useState<ICartao[]>([]);
  const router = useRouter();

  useEffect(() => {
    ListarCartoes().then((cartoes) => {
      setDados(cartoes);
    });
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        
        <Text style={styles.title}>Cartões cadastrados</Text>
        <View style={styles.headerSpacer} />
      </View>

      <ScrollView contentContainerStyle={styles.list}>
        {dados.map((cartao) => (
          <Pressable
            key={cartao.id}
            style={({ pressed }) => [
              styles.card,
              pressed && styles.cardPressed,
            ]}
            onPress={() =>
              router.push({
                pathname: "./cadastroScreen",
                params: { id: cartao.id.toString() },
              })
            }
          >
            <Text style={styles.cardTitle}>{cartao.nome}</Text>
            <Text style={styles.cardSubtitle}>RM: {cartao.rm}</Text>
            <Text style={styles.cardSubtitle}>Curso: {cartao.curso}</Text>
          </Pressable>
        ))}
      </ScrollView>

      <View style={styles.footer}>
        <Button
          title="Novo Cartão"
          onPress={() => router.push("./cadastroScreen")}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#f9f9f9",
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 12,
    color: "#333",
  },
  list: {
    paddingBottom: 16,
  },
  card: {
    backgroundColor: "#fff",
    padding: 14,
    borderRadius: 10,
    marginBottom: 10,
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
    elevation: 3,
  },
  cardPressed: {
    opacity: 0.7,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: "#1a1a1a",
  },
  cardSubtitle: {
    fontSize: 14,
    color: "#666",
    marginTop: 2,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 14,
  },
  headerSpacer: {
    width: 56,
  },
  footer: {
    paddingVertical: 12,
    borderTopWidth: 1,
    borderTopColor: "#e0e0e0",
    backgroundColor: "#fff",
  },
});