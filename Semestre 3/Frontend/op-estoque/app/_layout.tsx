import { Stack } from 'expo-router';
import { ImageBackground, StyleSheet } from 'react-native';
import 'react-native-reanimated';

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
          color: '#fff',
        },

        // 🌿 textura de grama no topo
        headerBackground: () => (
          <ImageBackground

            source={require('../assets/grass_top.png')}
            style={{width:"100%",height:"100%"}}
            resizeMode="repeat"
          />
        ),

        // deixa o fundo transparente pra mostrar a textura
        contentStyle: {
          backgroundColor: 'transparent',
        },
      }}
    >
      <Stack.Screen
        name="index"
        options={{ title: 'Home' }}
      />
    </Stack>
  );
}