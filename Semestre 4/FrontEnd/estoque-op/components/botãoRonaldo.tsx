
import React from 'react';
import { Button, Text } from 'react-native-paper';
import { StyleSheet } from 'react-native';

interface CustomButtonProps {
  label: string;
  onPress: () => void;
  buttonColor?: string;
  textColor?: string;
}

const Ronaldo: React.FC<CustomButtonProps> = ({ 
  label, 
  onPress, 
  buttonColor = 'rgb(70,70,70)',
  textColor = 'white'
}) => {
  const styles = StyleSheet.create({
    botao: {
      borderRadius: 2,
      paddingTop: 3,
      paddingBottom: 3,
    },
    textoBotoes: {
      fontFamily: 'Calibri',
      fontSize: 17,
      fontWeight: 'bold'
    }
  });

  return (
    <Button
      style={styles.botao}
      buttonColor={buttonColor}
      textColor={textColor}
      mode='contained-tonal'
      rippleColor='#bbbbbb'
    
      onPress={onPress}
    >
      <Text style={styles.textoBotoes}>{label}</Text>
    </Button>
  );
};

export default Ronaldo;