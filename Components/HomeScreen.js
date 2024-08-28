import React from 'react';
import { View, Text, Button, StyleSheet, Image, TouchableOpacity } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
   
      <Text style={styles.title}>Maze Game</Text>

     
      <Image
        source={{ uri: 'https://example.com/your-game-logo.png' }} // Replace with your logo/image
        style={styles.logo}
      />


      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Difficulty')}
      >
        <Text style={styles.buttonText}>Start Game</Text>
      </TouchableOpacity>

     
      <TouchableOpacity
        style={styles.button}
        onPress={() => alert('Instructions or About')}
      >
        <Text style={styles.buttonText}>How to Play</Text>
      </TouchableOpacity>


      <TouchableOpacity
        style={styles.button}
        onPress={() => alert('Settings or Exit')}
      >
        <Text style={styles.buttonText}>Settings</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5', 
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
  },
  logo: {
    width: 200,
    height: 200,
    marginBottom: 20,
  
  },
  button: {
    backgroundColor: '#007BFF',
    padding: 15,
    borderRadius: 10,
    marginVertical: 10,
    width: 200,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default HomeScreen;
