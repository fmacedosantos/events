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
      {/* <Text onPress={() => console.log('inline')}>Inline</Text>
      <Text onPress={handlerFunction}>Handler Function</Text>
      <Text onPress={() => handlerFunctionWithParameters(1)}>Handler Function with Parameters</Text>
      <Text onPress={handlerAnotherFile}>Another File</Text> */}
      <Text style={{fontSize: 32}}
      onPress={() => console.log('2. onPress triggered')}
      onPressIn={() => console.log('1. onPressIn triggered')} // acontece antes do onPress
      onPressOut={() => console.log('3. onPressOut triggered')} // acontece depois do onPress
      onLongPress={() => console.log('2. onLongPress triggered')}
      onTextLayout={() => console.log('Text loaded and drawn')} // acontece quando a tag é desenhada na tela
      >Main Component</Text>
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
