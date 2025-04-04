import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const Header = ({ text, color, onPress }) => (
  <TouchableOpacity
    style={[styles.button, { backgroundColor: color }]}
    onPress={onPress}
  >
    <Text style={styles.text}>{text}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  text: {
    fontSize: 18,
    color: '#fff',
  },
});

export default Header;