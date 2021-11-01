
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';


export default function App() {

  const [number1, setNumber]=useState(null);
  const [number2, setNumber2]=useState(null);
  const [sum, setSum]=useState(null); 
  


  const buttonAdd = () => {
    setSum(parseInt(number1) + parseInt(number2)); 
    
  }

  const buttonMinus = () => {
    setSum(parseInt(number1) - parseInt(number2)); 
     
  }


  return (

    <View style={styles.container}>

      <View>
        <Text>Result: {sum}</Text>
      </View>
      <View style={styles.textinput}>
        <TextInput
          onChangeText={number1 => setNumber(number1)}
          value={number1}
          keyboardType="numeric"
        />
      </View>
      <View style={styles.textinput}>
        <TextInput
          onChangeText={number2 => setNumber2(number2)}
          value={number2}
          keyboardType="numeric"
        />
      </View>
      <View style={styles.button}>
        <Button onPress={buttonAdd} title="+" />
        <Button onPress={buttonMinus} title="-" />
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
  textinput: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  }, 
  button: { 
    flexDirection: 'row',
    alignItems:'center',
    justifyContent: 'space-around',
  }
});
