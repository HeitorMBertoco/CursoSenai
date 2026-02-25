import {View, Text, Pressable} from "react-native";
import { Button } from "react-native";
import { useRouter } from "expo-router";
import axios from "axios";
import { useEffect, useState } from "react";
import { ListarCartoes } from "./cartaoApi";
import ICartao from "./cartaoInterface";

export default function Pesquisa() {
   const [dados, setDados] = useState<ICartao[]>([]);
   useEffect(() => {
      ListarCartoes().then((cartoes) => {
         setDados(cartoes);
      });
   }, []);
  const router = useRouter();
    return (
        
       <View>
          {dados.map((cartao) => (
             <Pressable onPress={() => router.push({pathname: "cartoes/cadastroScreen/", params: {id: cartao.id}})} key={cartao.id}>{cartao.nome}</Pressable>
             
          ))}
       </View>
    );

}