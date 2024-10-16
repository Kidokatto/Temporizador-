// Title.js
import { Text, StyleSheet } from 'react-native';

export default function Title() {
  return <Text style={styles.title}>Temporizador</Text>;
}

const styles = StyleSheet.create({
  title: {
    fontSize: 44,
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    height: 450,
  },
});
