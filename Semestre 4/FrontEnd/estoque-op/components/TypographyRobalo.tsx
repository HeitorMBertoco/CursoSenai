
import React from 'react';
import { Text, StyleSheet, TextStyle } from 'react-native';

type TextVariant = 'default' | 'button' | 'title';

interface CustomTextProps {
  children: React.ReactNode;
  style?: TextStyle;
  variant?: TextVariant;
}

const Texto: React.FC<CustomTextProps> = ({ 
  children, 
  style,
  variant = 'default'
}) => {
  const styles = StyleSheet.create({
    default: {
      fontFamily: 'Calibri',
      fontSize: 16,
      color: '#333'
    },
    button: {
      fontFamily: 'Calibri',
      fontSize: 17,
      fontWeight: 'bold',
      color: '#fff'
    },
    title: {
      fontFamily: 'Calibri',
      fontSize: 20,
      fontWeight: 'bold',
      color: '#333'
    }
  });

  return (
    <Text style={[styles[variant], style]}>
      {children}
    </Text>
  );
};

export default Texto;