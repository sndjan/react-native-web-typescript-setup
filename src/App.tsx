import React from 'react';
import { View, Text, Image, StyleSheet, Linking, TouchableOpacity } from 'react-native';

const logo = require('./logo.png');

const App: React.FC = () => {
  return (
    <View style={styles.container}>
      <Image source={logo} style={styles.logo} resizeMode="contain" />
      <Text style={styles.text}>
        Edit <Text style={styles.code}>src/App.tsx</Text> and save to reload.
      </Text>
      <TouchableOpacity onPress={() => Linking.openURL('https://reactjs.org')} style={styles.link}>
        <Text style={styles.linkText}>Learn React</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#282c34',
  },
  logo: {
    width: 200,
    height: 200,
  },
  text: {
    color: 'white',
    fontSize: 18,
    margin: 20,
  },
  code: {
    fontWeight: 'bold',
  },
  link: {
    marginTop: 10,
  },
  linkText: {
    color: '#61dafb',
    fontSize: 16,
  },
});

export default App;
