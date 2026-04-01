import { View, Text, ImageBackground, StyleSheet, ScrollView, Image } from "react-native";

export default function Tistar() {
  const estoque = [
    { id: 1, nome: "Espada de Diamante", quantidade: 10, urlFoto: require('../assets/espada.webp') },
    { id: 2, nome: "Pão", quantidade: 25, urlFoto: require('../assets/pao.webp') },
    { id: 3, nome: "Bloco de Terra", quantidade: 50, urlFoto: require('../assets/terra.webp') },
    { id: 4, nome: "Armadura de Ferro", quantidade: 5, urlFoto: require('../assets/armadura.png') },
    { id: 5, nome: "Poção de Cura", quantidade: 12, urlFoto: require('../assets/pocaodecura.png') },
  ];

  return (
    <ImageBackground
      source={require('../assets/dirt.png')}
      style={styles.container}
      resizeMode="repeat"
    >
      <ScrollView contentContainerStyle={styles.overlay}>
        {estoque.map((produto) => (
          <View key={produto.id} style={styles.productCard}>
            
            <Image source={produto.urlFoto} style={styles.image} />

            <Text style={styles.productName}>{produto.nome}</Text>
            <Text style={styles.productQty}>
              Quantidade: {produto.quantidade}
            </Text>
          </View>
        ))}
      </ScrollView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
  overlay: {
    padding: 20,
  },
  productCard: {
    backgroundColor: "#4ade80",
    padding: 15,
    borderRadius: 8,
    marginBottom: 15,
    alignItems: "center",
  },
  image: {
    width: 60,
    height: 60,
    marginBottom: 10,
    resizeMode: "contain",
  },
  productName: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#064e3b",
  },
  productQty: {
    fontSize: 16,
    color: "#064e3b",
    marginTop: 5,
  },
});