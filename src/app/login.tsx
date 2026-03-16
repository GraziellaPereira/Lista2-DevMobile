import { View, Button, StyleSheet, Text } from 'react-native';

import { useRouter } from 'expo-router';

export default function Login() {

      const router = useRouter();

      function navegarMaioridade() {
        router.push('/maioridade');
      }
      function navegarIMC() {
        router.push('/imc');
      }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Bem-vindo 👋</Text>

      <Text style={styles.subtitulo}>
        Escolha para qual página deseja ir:
      </Text>

      <View style={{ height: 30 }} />
        <Button title='Página Maioridade' onPress={navegarMaioridade} />
        <View style={{ height: 20 }} /> {/* espaço entre os botões */}
        <Button title='Página IMC' onPress={navegarIMC} />

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
  titulo: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#6C63FF',
  },
  subtitulo: {
    fontSize: 18,
    color: '#333',
    textAlign: 'center',
    marginBottom: 20,

  }
});

