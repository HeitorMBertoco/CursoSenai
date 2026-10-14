import React from 'react';
import { Text, StyleSheet, TextProps } from 'react-native';

type TextVariant = 'default' | 'button' | 'title';

interface CustomTextProps extends TextProps {
  children: React.ReactNode;
  variant?: TextVariant;
}

const Texto: React.FC<CustomTextProps> = ({ 
  children, 
  style,
  variant = 'default',
  ...rest
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
    <Text style={[styles[variant], style]} {...rest}>
      {children}
    </Text>
  );
};

export default Texto;