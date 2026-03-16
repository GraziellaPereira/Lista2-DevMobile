/* arquivo de configurações das páginas */
import { Stack } from 'expo-router';

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: { backgroundColor: '#6C63FF' },
        headerTintColor: '#fff',
        headerTitleStyle: { fontWeight: 'bold' },
      }}
    >
      {/* 💡 Esconde o header padrão na tela de login */}
      <Stack.Screen name="login" options={{ headerShown: false }} />


      <Stack.Screen
        name="maioridade"
        options={{ title: 'Verificar Maioridade' }}
      />
      <Stack.Screen
        name="imc"
        options={{ title: 'Calcular IMC' }}
      />
    </Stack>
  );
}