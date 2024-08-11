import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View } from 'react-native';
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
      <TextInput style={styles.input} placeholder='Digite alguma coisa'
      onChange={() => {console.log('1. onChange triggered')}}
      onChangeText={() => {console.log('2. onChangeText triggered')}}
      onFocus={() => {console.log('onFocus triggered')}}
      />
      <Text style={styles.button}
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
  button: {
    fontSize: 30,
    backgroundColor: 'blue',
    color: 'white', 
    borderWidth: 2,
    borderRadius: 15,
    marginTop: 15,
    paddingVertical: 5,
    paddingHorizontal: 10
  },
  input: {
    padding: 5,
    borderWidth: 1,
    borderRadius: 5,
    width: '60%',
    fontSize: 17,
    borderColor: 'black'
  }
});
