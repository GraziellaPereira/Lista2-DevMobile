import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import { useState } from 'react';

export default function App() {
  const [text, setText] = useState('');
 
  const[idade, setIdade] = useState(0);

  function verificarIdade() 
  {
    if (idade >= 18) {
      alert('Você é maior de idade!');
    } else {
      alert('Você é menor de idade!');
    }
  }

  return (
    <View style={styles.container}>
      <Text>Olá! Vamos informar se você é maior ou menor de idade.</Text>
      <View style={{ marginTop: 20 }}>
      <TextInput style={styles.input}
       placeholder='Digite sua Idade'
       onChangeText={(valor) => setIdade(Number(valor))}
      /> 
      </View>
         <View style={{ marginTop: 20 }}>
          <Button onPress={verificarIdade} title="Verificar Maioridade" />
      <StatusBar style="auto" />
    </View>
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
  input : {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    padding: 10,
    width: '80%',
  }
});