import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ScrollView, TextInput, Image, Button } from 'react-native';

export default function App() {


    var textInputValue = "<Welcome to the dark side!>"; 
    const handlePress = () => console.log(textInputValue); 
    const handleChangeText = () => console.log(textInputValue);
  
    return (
    <ScrollView>
      <View style={main.container}>
      <TextInput placeholder="Initial Text" onChangeText={handleChangeText} />
    <Button title="Submit" onPress={handlePress} />
    <Text>Your answer is: {textInputValue}</Text>
    </View>

      <View style={styles.container2}>
      <Text style={{ fontSize:20}}>What would you like to get out of this course?</Text>
      <TextInput placeholder="Initial text" />
      <Text style={{ fontSize:20}}>An emoji describing how you are feeling about the course:</Text>
      <Image
        style={{ width: 100, height: 100 }}
        source={require("./assets/icon.png")}
      />
      <StatusBar style="auto" />

      <TextInput placeholder="Initial Text" onChangeText={handleChangeText} />
    <Button title="Submit" onPress={handlePress} />
    <Text>Your answer is: {textInputValue}</Text>

    </View>
  </ScrollView>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 0.3,
    backgroundColor: '#b6cfe4',

    justifyContent: 'center',
  },
  contanier2: {
    flex:0.7,
  }
});

 
 