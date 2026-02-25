import { Stack } from 'expo-router';

export default function Layout() {
  return (<Stack>
    <Stack.Screen name="index" options={{ title: "Home" }} />
    <Stack.Screen name="cadastroScreen" options={{ title: "Cadastro" }} />
    <Stack.Screen name="pesquisaScreen" options={{ title: "Pesquisa" }} />

  </Stack>);
}