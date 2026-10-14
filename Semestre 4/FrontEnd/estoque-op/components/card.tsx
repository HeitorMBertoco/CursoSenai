import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import Texto from './TypographyRobalo';
import { getImagemUrl } from '@/api';

interface CardTipos {
  nome: string;
  quantidadeAtual: number;
  nomearquivofoto?: string;
}

export default function Card({ nome, quantidadeAtual, nomearquivofoto }: CardTipos) {
  const foto = nomearquivofoto ? getImagemUrl(nomearquivofoto) : null;

  return (
    <View style={styles.card}>
      <Image
        style={styles.imagem}
        source={foto ? { uri: foto } : require('@/assets/images/simas.png')}
      />
      <View>
        <Texto variant="title">{nome}</Texto>
        <Texto variant="default">{'Quantidade: ' + quantidadeAtual}</Texto>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  imagem: {
    width: 60,
    height: 60,
    borderRadius: 4,
  },
});