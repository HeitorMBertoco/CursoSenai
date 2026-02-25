import { useLocalSearchParams } from "expo-router";
import { View, Text } from "react-native";

export default function Cadastro() {
  var {id} = useLocalSearchParams();
  if (id) {
    var texto = `O id é ${id}`;
  } else {
    var texto = "Não tem id";
  }

  return (
    <>
      <View>
        <Text>{texto}</Text>
      </View>
    </>
  );
}
