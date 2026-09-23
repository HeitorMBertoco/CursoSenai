import { useOptionStore } from '@/hooks/useOptionStore';
import { router } from 'expo-router';
import { useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

export default function HomeScreen() {
  const [opcaoLocal, setOpcaoLocal] = useState<string>('');
  const setOpcaoStore = useOptionStore((state) => state.setOpcao);

  function confirmar() {
    setOpcaoStore(opcaoLocal);
    router.push("/");
  }

  return (
    <View style={styles.container}>
      <Text>Opção Selecionada: {opcaoLocal}</Text>

      <Text onPress={() => setOpcaoLocal('Frango Frito da Lívia')}>
        Opção A - Frango Frito da Lívia
      </Text>

      <Text onPress={() => setOpcaoLocal('Tilapia Frita da Larissa')}>
        Opção B - Tilapia Frita da Larissa
      </Text>

      <Text onPress={() => setOpcaoLocal('Pomada Capilar do Igor')}>
        Opção C - Pomada Capilar do Igor
      </Text>

      <Pressable onPress={confirmar} style={styles.confirmar}>
        <Text>Confirmar Opção</Text>
      </Pressable>

      <Pressable onPress={() => router.back()} style={styles.cancelar}>
        <Text>Cancelar</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 16,
  },
  confirmar: {
    backgroundColor: 'lime',
    padding: 10,
    width: 190,
    alignItems: 'center',
    borderRadius: 30,
  },
  cancelar: {
    backgroundColor: 'gray',
    padding: 10,
    width: 190,
    alignItems: 'center',
    borderRadius: 30,
  },
});