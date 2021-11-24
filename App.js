import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ScrollView, TextInput, Image } from 'react-native';

export default function App() {
  return ( 
    <ScrollView>
      <View style={styles.container}>
        <Text style={{FontWeight: "bold",fontSize: 50}}>Hello World!</Text>
        <Text style={{ fontSize: 20}}>First React Native App</Text>
        <Text>This is a paragraph explaning what this app is all about. As you can see there are already many components including text, images and buttonss</Text>
        <StatusBar style="auto" />
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

 
 