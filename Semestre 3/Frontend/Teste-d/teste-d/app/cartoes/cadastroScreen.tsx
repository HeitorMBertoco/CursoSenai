import { useLocalSearchParams} from "expo-router";
import { View, Text, TextInput, Button, StyleSheet, ScrollView } from "react-native";
import { ObterCartaoPorId, CriarCartao, AtualizarCartao, DeletarCartao } from "./cartaoApi";
import { useEffect, useState } from "react";
import ICartao from "./cartaoInterface";

export default function Cadastro() {
  const [cartao, setCartao] = useState<ICartao | null>(null);

  const [nome, setNome] = useState<ICartao["nome"]>("");
  const [rm, setRm] = useState<ICartao["rm"]>(0);
  const [unidade, setUnidade] = useState<ICartao["unidade"]>("");
  const [curso, setCurso] = useState<ICartao["curso"]>("");
  const [nascimento, setNascimento] = useState<ICartao["nascimento"]>("");
  const [urlFoto, setUrlFoto] = useState<ICartao["urlFoto"]>("");

  const formatDateOnly = (value: string) => {

    const parsed = new Date(value);
    if (isNaN(parsed.getTime())) return value;
    return parsed.toISOString().split("T")[0];
  };

  const params = useLocalSearchParams();
  const id = params.id?.toString();

  useEffect(() => {
    if (!id) return;
    ObterCartaoPorId(id).then((cartao) => {
      setCartao(cartao);
      setNome(cartao.nome);
      setRm(cartao.rm);
      setUnidade(cartao.unidade);
      setCurso(cartao.curso);
      setNascimento(cartao.nascimento);
      setUrlFoto(cartao.urlFoto);
    });
  }, [id]);
  const Inputs = () => {
    return (
      <>
        <TextInput
          style={styles.input}
          value={nome}
          onChangeText={setNome}
          placeholder="Nome"
        />
        <TextInput
          style={styles.input}
          value={rm.toString()}
          onChangeText={(text) => setRm(Number(text))}
          placeholder="RM"
          keyboardType="numeric"
        />
        <TextInput
          style={styles.input}
          value={unidade}
          onChangeText={setUnidade}
          placeholder="Unidade"
        />
        <TextInput
          style={styles.input}
          value={curso}
          onChangeText={setCurso}
          placeholder="Curso"
        />
        <TextInput
          style={styles.input}
          value={nascimento}
          onChangeText={setNascimento}
          placeholder="YYYY-MM-DD"
        />
        <TextInput
          style={styles.input}
          value={urlFoto}
          onChangeText={setUrlFoto}
          placeholder="URL da foto"
        />
        <View style={styles.buttonGroup}>
          <View style={styles.buttonWrapper}>
            <Button
              title="Criar Cartao"
              onPress={() => {
                CriarCartao({
                  nome,
                  rm,
                  unidade,
                  curso,
                  nascimento: formatDateOnly(nascimento),
                  urlFoto,
                }).then((cartao) => {
                  setCartao(cartao);
                });
              }}
            />
          </View>
        </View>
      </>
    );
  };
  const texto = (cartao: ICartao) => {
    return (
      <>
        <TextInput
          style={styles.input}
          value={nome}
          onChangeText={setNome}
          placeholder="Nome"
        />
        <TextInput
          style={styles.input}
          value={rm.toString()}
          onChangeText={(text) => setRm(Number(text))}
          placeholder="RM"
          keyboardType="numeric"
        />
        <TextInput
          style={styles.input}
          value={unidade}
          onChangeText={setUnidade}
          placeholder="Unidade"
        />
        <TextInput
          style={styles.input}
          value={curso}
          onChangeText={setCurso}
          placeholder="Curso"
        />
        <TextInput
          style={styles.input}
          value={nascimento}
          onChangeText={setNascimento}
          placeholder="YYYY-MM-DD"
        />
        <TextInput
          style={styles.input}
          value={urlFoto}
          onChangeText={setUrlFoto}
          placeholder="URL da foto"
        />
        <View style={styles.buttonGroup}>
          <View style={styles.buttonWrapper}>
            <Button
              title="Atualizar"
              onPress={() => {
                AtualizarCartao(cartao.id.toString(), {
                  ...cartao,
                  nome,
                  rm,
                  unidade,
                  curso,
                  nascimento: formatDateOnly(nascimento),
                  urlFoto,
                });
              }}
            />
          </View>
          <View style={styles.buttonWrapper}>
            <Button
              title="Deletar"
              color="red"
              onPress={() => {
                DeletarCartao(cartao.id.toString());
              }}
            />
          </View>
        </View>
      </>
    );
  };
  let conteudo;
  if (cartao) {
    conteudo = texto(cartao);
  } else {
    conteudo = Inputs();
  }
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.title}>{cartao ? "Editar Cartão" : "Criar Cartão"}</Text>
        {conteudo}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f2f5f9",
  },
  content: {
    padding: 16,
  },
  title: {
    fontSize: 22,
    fontWeight: "700",
    color: "#1d2a3a",
    marginBottom: 16,
  },
  input: {
    backgroundColor: "#ffffff",
    borderWidth: 1,
    borderColor: "#d0d7de",
    borderRadius: 10,
    paddingHorizontal: 12,
    paddingVertical: 10,
    marginBottom: 12,
    fontSize: 16,
  },
  buttonGroup: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },
  buttonWrapper: {
    flex: 1,
  },
});
