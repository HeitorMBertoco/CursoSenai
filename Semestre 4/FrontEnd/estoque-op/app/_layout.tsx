import { Stack } from 'expo-router';

export default function RootLayout() {
    return (
        <Stack
            screenOptions={{
                headerStyle: {
                    backgroundColor: '#FFFFFF',
                },
                headerTintColor: '#222222',
                headerTitleStyle: {
                    fontSize: 18,
                    fontWeight: '600',
                },
                headerTitleAlign: 'center',
                headerShadowVisible: false,
                contentStyle: {
                    backgroundColor: '#F7F7F8',
                },
            }}
        >
            <Stack.Screen
                name="index"
                options={{
                    title: 'Tela Inicial',
                    headerShown: false,
                }}
            />

            <Stack.Screen
                name="screens/produtoPesquisaScreen"
                options={{
                    title: 'Procurar Produtos',
                }}
            />

            <Stack.Screen
                name="screens/produtoScreen"
                options={{
                    title: 'Entrada de Produtos',
                }}
            />

            <Stack.Screen
                name="screens/sobreScreen"
                options={{
                    title: 'Sobre este App',
                }}
            />
        </Stack>
    );
}