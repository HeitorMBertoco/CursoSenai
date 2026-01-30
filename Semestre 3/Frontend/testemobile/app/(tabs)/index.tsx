import { useState } from "react";
import { TextInput, View, StyleSheet, Button, Pressable, Text, Image } from "react-native";

export default function HomeScreen() {
  const [numero, setNumero] = useState(0);
  const [imageVisible, setImageVisible] = useState(false);

  const styles = StyleSheet.create({
    input: {
      height: 40,
      margin: 12,
      borderWidth: 1,
      backgroundColor: 'white',
      textAlign: 'center',
      padding: 10,
      marginTop: 30,
    },
    buttonesc: {
      width: 200,
      alignSelf: 'center',
      backgroundColor: 'black',
      padding: 10,
      marginTop: 650,
      borderRadius: 5,
      justifyContent: 'center',
      alignItems: 'center',
      color: '#333',
    },
    buttonText: {
      color: '#333',
      fontSize: 16,
      fontWeight: 'bold',
    },
    image: {
      width: 150,
      height: 150,
      alignSelf: 'center',
      marginTop: -400,
      display: imageVisible ? 'flex' : 'none',
    }
  });

  return (
    <>
      <View>
        <TextInput 
          style={styles.input} 
          placeholder="numero" 
          onChange={(e) => setNumero(Number(e.nativeEvent.text))} 
          value={numero.toString()}
        />
        <Button title="Acrescentar" onPress={() => setNumero(numero + 1)} />
      </View>
      <View>
        <Pressable style={styles.buttonesc} onPress={() => setImageVisible(!imageVisible)}>
          <Text style={styles.buttonText}>Botão Surpresa</Text>
        </Pressable>
      </View>
      
      <View><Image source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtR3IOB3FvAB0_pJrkVnGSg6V4yX0_UqrNRg&s' }} style={styles.image} /></View>
      </>
  );
}

