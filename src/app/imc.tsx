import {Stack} from 'expo-router';
import { View, Text, StyleSheet } from 'react-native';

export default function Home2() {
  return (
    <View style={styles.container}>
      <Text style={styles.texto}>Bem-vindo à Home2!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  texto: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});