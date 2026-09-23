import { Button, ScrollView, Text, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { router } from "expo-router";

import React from "react";
import { useOptionStore } from "@/hooks/useOptionStore";

export default function Index() {
  const opcoes = useOptionStore((state) => state.opcoes)
  
  return (
    <SafeAreaProvider>
      <View >

        <ScrollView >

          <Text>Index</Text>

          <Button onPress={() => router.push("/paginas/pesquisa")} title="Pag. pesqusa"></Button>

          <Text>Você pesquisa:</Text>
          {
            opcoes.map((opcao, index) => (
              <Text key={index}>{opcao}</Text>
            ))
          }

        </ScrollView>

      </View>
    </SafeAreaProvider>
  );
}