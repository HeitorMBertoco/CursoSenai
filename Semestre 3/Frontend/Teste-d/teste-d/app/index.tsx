
import { Button, StyleSheet, Text, View } from 'react-native';
import { useRouter } from 'expo-router';

export default function App() {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <Button title="Ir pro Cadastro" onPress={() => router.push("/cartoes/cadastroScreen")} />
        <Button title="Ir pro Pesquisa" onPress={() => router.push("/cartoes/pesquisaScreen")} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
