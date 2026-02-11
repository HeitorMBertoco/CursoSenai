import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

interface IRetangulo{
  largura: number;
  comprimento: number;
  area: number;
  perimetro: number;
}

const apiGet = (
  largura: number,
  comprimento: number,
  setRetangulo: React.Dispatch<React.SetStateAction<IRetangulo | null>>
) => 
{
  fetch(`http://localhost:5001/retangulo?largura=${largura}&comprimento=${comprimento}`)
    .then(response => response.json())
    .then((data: IRetangulo) => {
      setRetangulo(data);
    })
    .catch(error => {
      console.error('Error fetching data:', error);
    });
};

export default function App() {

  const [retangulo, setRetangulo] = useState<IRetangulo | null>(null);
  const [largura, setLargura] = useState<number>(0);
  const [comprimento, setComprimento] = useState<number>(0);

  const atualizarApi = (novaLargura: number, novoComprimento: number) => {
    if(novaLargura > 0 && novoComprimento > 0) {
      apiGet(novaLargura, novoComprimento, setRetangulo);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Calculadora de Retângulo</Text>
      <TextInput
        placeholder="Largura"
        keyboardType="numeric"
        onChangeText={(text) => {
          const value = Number(text);
          setLargura(value);
          atualizarApi(value, comprimento); // envia ambos valores para a API
        }}
        style={styles.input}
      /><TextInput
        placeholder="Comprimento"
        keyboardType="numeric"
        onChangeText={(text) => {
          const value = Number(text);
          setComprimento(value);
          atualizarApi(largura, value); // envia ambos valores para a API
        }}
        style={styles.input}
      />

      

      <Text style={styles.input}>Área: {retangulo?.area}</Text>
      <Text style={styles.input}  >Perímetro: {retangulo?.perimetro}</Text>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#5e87ba',
    alignItems: 'center',
    justifyContent: 'center',
   
  },
  input: {
    borderWidth: 1.5,
    width: 500,
    margin: 10,
    padding: 10,
    color: '#fff',
    borderRadius: 5,
    backgroundColor: '#3b5998',
    
  },
  text: {
    fontSize: 24,
    color: '#fff',
    fontWeight: 'bold',
    marginBottom: 20,
  }
});
