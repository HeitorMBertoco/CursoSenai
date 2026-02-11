import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { RadioButton } from 'react-native-paper';

interface IRetangulo{
  largura: number;
  comprimento: number;
  area: number;
  perimetro: number;
}

const apiGet = (
  largura: number,
  comprimento: number,
  forma: string,
  setRetangulo: React.Dispatch<React.SetStateAction<IRetangulo | null>>
) => 
{
  fetch(`http://l92.168.2.142:5001/${forma}?largura=${largura}&comprimento=${comprimento}`)
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
  const [forma, setForma] = useState<'retangulo' | 'triangulo'>('retangulo');

  const atualizarApi = (novaLargura: number, novoComprimento: number) => {
    if(novaLargura > 0 && novoComprimento > 0) {
      apiGet(novaLargura, novoComprimento, forma, setRetangulo);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Calculadora de {forma === 'retangulo' ? 'Retângulo' : 'Triângulo'}
      </Text>

      <RadioButton.Group
        onValueChange={(value) => {
          setForma(value as 'retangulo' | 'triangulo');
          setRetangulo(null);
        }}
        value={forma}
      >
        <RadioButton.Item label="Retângulo" value="retangulo" color="#fff" />
        <RadioButton.Item label="Triângulo" value="triangulo" color="#fff" />
      </RadioButton.Group>
      
      <TextInput
        placeholder="Largura"
        keyboardType="numeric"
        onChangeText={(text) => {
          const value = Number(text);
          setLargura(value);
          atualizarApi(value, comprimento);
        }}
        style={styles.input}
      />

      <TextInput
        placeholder="Comprimento"
        keyboardType="numeric"
        onChangeText={(text) => {
          const value = Number(text);
          setComprimento(value);
          atualizarApi(largura, value);
        }}
        style={styles.input}
      />

      <Text style={styles.input}>Área: {retangulo?.area}</Text>
      {forma === 'retangulo' && (
  <Text style={styles.input}>Perímetro: {retangulo?.perimetro}</Text>
)}


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
