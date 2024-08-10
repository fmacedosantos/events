import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {

  async function handlerPress(numero: number) {
    console.log('Ai ' + numero);
  }
  return (
    <View style={styles.container}>
      <Text onPress={() => handlerPress(1)}>Open up App.tsx to start working on your app!</Text>
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
});
