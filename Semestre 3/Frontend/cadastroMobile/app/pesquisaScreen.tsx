import {View, Text} from "react-native";
import { Button } from "react-native";
import { useRouter } from "expo-router";

export default function Cadastro() {
  const router = useRouter();
    return (
        
        <>
        <View>
            <Text>Pesquisa</Text>
            <Button title="Ir para Cadastro com id 7" onPress={() => router.push({pathname: "/cadastroScreen", params: {id: 7}})} />
        </View>
        </>
    );

}