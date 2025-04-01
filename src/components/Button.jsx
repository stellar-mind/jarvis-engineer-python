import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const Button = ({ text, color, onPress }) => {
  return (
    <TouchableOpacity style={[styles.button, { backgroundColor: color }]} onPress={onPress}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 12,
    borderRadius: 4,
  },
  text: {
    fontSize: 16,
    color: '#fff',
  },
});

export default Button;