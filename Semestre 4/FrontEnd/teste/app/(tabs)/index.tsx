
import { Platform, StyleSheet } from 'react-native';

import { SafeAreaProvider } from 'react-native-safe-area-context';

import { View, Text } from 'react-native'

import React from 'react';
import Betao from '@/components/ui/Button';
import Input from '@/components/ui/Incput';
import Cartao from '@/components/ui/Card';

export default function HomeScreen() {
  return (
    <SafeAreaProvider>
    <View style={styles.titleContainer}>
      <Input corfundo='#222222' texto='Input do Mal'corTexto='#7c0000' Border={1} corbrd='#ffffff' brdInferior={3} corbrdinf='#ff0000'></Input>
      <Betao padding={10} text='Do Mal' color='#000000' textColor='brown' radius={5} border={1} brdcolor='#ff0000'></Betao>
      <Betao padding={10} text='Um pouco menos do mal' color='#7c0000' textColor='#ffffff' radius={5} border={1} brdcolor='#ffffff'></Betao>
      <Cartao foto='https://images.unsplash.com/photo-1782071777301-64b92a756493?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' nome='Heitor' profissao='estudante' sobre='eu'></Cartao>
    </View>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    
    display: 'flex', gap:20, padding: 20, 
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
