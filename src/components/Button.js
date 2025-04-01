import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const Button = ({ text, color, onPress }) => (
  <TouchableOpacity 
    onPress={onPress}
    style={{...styles.button, backgroundColor: color}}>
    <Text style={styles.text}>
      {text}
    </Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderRadius: 8,
  },
  text: {
    color: 'white',
    fontSize: 16,
  }
});

export default Button;