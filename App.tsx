import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { handlerAnotherFile } from './src/actions';

export default function App() {

  async function handlerFunction() {
    console.log('handler function');
  }
  
  async function handlerFunctionWithParameters(numero: number) {
    console.log(numero + '° handler function with parameters');
  }
  return (
    <View style={styles.container}>
      <Text onPress={() => console.log('inline')}>Inline</Text>
      <Text onPress={handlerFunction}>Handler Function</Text>
      <Text onPress={() => handlerFunctionWithParameters(1)}>Handler Function with Parameters</Text>
      <Text onPress={handlerAnotherFile}>Another File</Text>
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
