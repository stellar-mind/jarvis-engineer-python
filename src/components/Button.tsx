import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const Button = ({ text, color, onPress }) => {
  return (
    <TouchableOpacity style={{...styles.button, backgroundColor: color}} onPress={onPress}>
      <Text style={styles.text}> {text} </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 4,
    padding: 10,
    alignItems: 'center'
  },
  text: {
    color: '#ffffff'
  }
});

export default Button;