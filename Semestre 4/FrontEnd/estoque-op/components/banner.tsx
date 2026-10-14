import React from 'react';
import { ColorValue, StyleSheet, View } from 'react-native';
import Texto from './TypographyRobalo';

interface BannerTipos {
  Text: string;
  CorTexto: ColorValue;
  CorBg: ColorValue;
}

export default function Banner({ Text, CorTexto, CorBg }: BannerTipos) {
  return (
    <View style={[styles.container, { backgroundColor: CorBg }]}>
      <Texto variant="title" style={{ color: CorTexto }}>
        {Text}
      </Texto>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 8,
    borderRadius: 8,
    width: '100%',
    minHeight: 44,
    marginVertical: 10,
  },
});