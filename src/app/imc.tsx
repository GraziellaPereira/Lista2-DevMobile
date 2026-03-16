import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import { useState } from 'react';

export default function App() {
  const [altura, setAltura] = useState(0);
 
  const[peso, setPeso] = useState(0);

  function verificarIMC() 
  {
    const imc = peso / (altura * altura);

    if (imc < 18.5) {
  alert(`Seu IMC é ${imc.toFixed(2)} e você está abaixo do peso normal!`)
} else if (imc >= 18.5 && imc <= 24.9) {
  alert(`Seu IMC é ${imc.toFixed(2)} e você está com o peso normal!`)
} else if (imc >= 25.0 && imc <= 29.9) {
  alert(`Seu IMC é ${imc.toFixed(2)} e você está com excesso de peso!`)
} else if (imc >= 30.0 && imc <= 34.9) {
  alert(`Seu IMC é ${imc.toFixed(2)} e você está com obesidade classe I!`)
} else if (imc >= 35.0 && imc <= 39.9) {
  alert(`Seu IMC é ${imc.toFixed(2)} e você está com obesidade classe II!`)
} else {
  alert(`Seu IMC é ${imc.toFixed(2)} e você está com obesidade classe III!`)
}

  }

  return (
    <View style={styles.container}>
      <Text>Olá! Vamos informar o seu IMC.</Text>
      <View style={{ marginTop: 20 }}>
      <TextInput style={styles.input}
       placeholder='Digite o seu peso aqui'
       onChangeText={(valor) => setPeso(Number(valor))}
      /> 
      </View>
      <View style={{ marginTop: 20 }}>
      <TextInput style={styles.input}
       placeholder='Digite a sua altura aqui'
       onChangeText={(valor) => setAltura(Number(valor))}
      /> 
      </View>
         <View style={{ marginTop: 20 }}>
          <Button onPress={verificarIMC} title="Verificar IMC" />
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