import React from 'react';
import { StyleSheet, Text, View, Image, SafeAreaView } from 'react-native';
interface Ronaldo{
    foto: string,
    nome: string,
    profissao?: string,
    sobre?:string,
}

export default function Cartao({ foto, nome, profissao, sobre } : Ronaldo) {
    return (
    <View style={styles.cartao}>
     
      {foto && <Image source={{ uri: foto }} style={styles.foto} />}

      <View style={styles.conteudo}>
        
        {nome && <Text style={styles.nome}>{nome}</Text>}
        {profissao && <Text style={styles.profissao}>{profissao}</Text>}
        {sobre && <Text style={styles.sobre}>{sobre}</Text>}
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cartao: {
    width: 300, 
    backgroundColor: "#000000",
    color:"#ffffff",
    borderRadius: 12,
    overflow: 'hidden',

    elevation: 4,


  },
  foto: {
    width: '100%',
    height: 180,
    resizeMode: 'cover',

  },
  conteudo: {
    padding: 16,
  },
  nome: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#aaaaaa',
    marginBottom: 4,
  },
  profissao: {
    fontSize: 14,
    fontWeight: '600',
    color: '#666666',
    marginBottom: 12,
  },
  sobre:{
    fontSize:14,
    color:'#333333'
    ''
  }
})