import { useLocalSearchParams } from "expo-router";
import { View, Text, TextInput, Pressable, Button } from "react-native";
import { ObterCartaoPorId, CriarCartao } from "./cartaoApi";
import { use, useEffect, useState } from "react";
import ICartao from "./cartaoInterface";

export default function Cadastro() {
  const [cartao, setCartao] = useState<ICartao | null>(null);

  const [nome, setNome] = useState<ICartao["nome"]>("");
  const [rm, setRm] = useState<ICartao["rm"]>(0);
  const [unidade, setUnidade] = useState<ICartao["unidade"]>("");
  const [curso, setCurso] = useState<ICartao["curso"]>("");
  const [nascimento, setNascimento] = useState<ICartao["nascimento"]>("");
  const [urlFoto, setUrlFoto] = useState<ICartao["urlFoto"]>("");

  const params = useLocalSearchParams();
  const id = params.id?.toString();

  useEffect(() => {
    if (!id) return;
    ObterCartaoPorId(id).then((cartao) => {
      setCartao(cartao);
    });
  }, [id]);
  const Inputs = () => {
    return (
      <>
        <Text>Criar Cartao</Text>
        <TextInput
          value={nome}
          onChangeText={setNome}
          placeholder="nome"
        ></TextInput>
        <TextInput
          value={rm.toString()}
          onChangeText={(text) => setRm(Number(text))}
          placeholder="rm"
        ></TextInput>
        <TextInput
          value={unidade}
          onChangeText={setUnidade}
          placeholder="unidade"
        ></TextInput>
        <TextInput
          value={curso}
          onChangeText={setCurso}
          placeholder="curso"
        ></TextInput>
        <TextInput
          value={nascimento}
          onChangeText={setNascimento}
          placeholder="YYYY-MM-DD"
        />
        <TextInput
          value={urlFoto}
          onChangeText={setUrlFoto}
          placeholder="urlFoto"
        ></TextInput>
        <Button
          title="Criar Cartao"
          onPress={() => {
            CriarCartao({
              nome,
              rm,
              unidade,
              curso,
              nascimento,
              urlFoto,
            }).then((cartao) => {
              setCartao(cartao);
            });
          }}
        ></Button>
      </>
    );
  };
  const texto = () => {
    return (
      <>
        <Text>{cartao?.nome}</Text>
        <Text>{cartao?.rm}</Text>
        <Text>{cartao?.unidade}</Text>
        <Text>{cartao?.curso}</Text>
        <Text>{cartao?.nascimento.toString()}</Text>
        <Text>{cartao?.urlFoto}</Text>
      </>
    );
  };

  if (cartao) {
    var conteudo = texto();
  } else {
    var conteudo = Inputs();
  }
  return (
    <>
      <View>{conteudo}</View>
    </>
  );
}
