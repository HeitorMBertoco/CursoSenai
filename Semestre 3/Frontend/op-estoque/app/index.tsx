import { router } from 'expo-router';
import {
  ImageBackground,
  StyleSheet,
  Text,
  Pressable,
  View,
} from 'react-native';

export default function HomeScreen() {
  return (
    <ImageBackground
      source={require('../assets/dirt.png')}
      style={styles.container}
      resizeMode="repeat"
    >
      <View style={styles.overlay}>
        <Text style={styles.title}>Home Page</Text>

        <Pressable style={styles.button} onPress={() => router.push('/entrada')}>
          <Text style={styles.buttonText}>Entrada</Text>
        </Pressable>

        <Pressable style={styles.button} onPress={() => router.push('/saida')}>
          <Text style={styles.buttonText}>Saída</Text>
        </Pressable>

        <Pressable style={styles.button} onPress={() => router.push('/listar')}>
          <Text style={styles.buttonText}>Listar Produtos</Text>
        </Pressable>

        <Pressable style={styles.secondaryButton} onPress={() => router.push('/sobre')}>
          <Text style={styles.secondaryText}>Sobre este aplicativo</Text>
        </Pressable>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height:"100%",
    width:"100%"
  },

  overlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },

  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 40,
  },

  button: {
    width: '100%',
    backgroundColor: '#4ade80', // verde estilo Minecraft
    paddingVertical: 14,
    borderRadius: 8,
    marginBottom: 15,
    alignItems: 'center',
  },

  buttonText: {
    color: '#064e3b',
    fontSize: 16,
    fontWeight: 'bold',
  },

  secondaryButton: {
    marginTop: 10,
  },

  secondaryText: {
    color: '#fff',
    fontSize: 14,
  },
});