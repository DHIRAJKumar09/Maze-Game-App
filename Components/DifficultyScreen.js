import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const DifficultyScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* Screen Title */}
      <Text style={styles.title}>Select Difficulty</Text>

      {/* Difficulty Buttons */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Game', { difficulty: 'easy' })}
      >
        <Text style={styles.buttonText}>Easy</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Game', { difficulty: 'medium' })}
      >
        <Text style={styles.buttonText}>Medium</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Game', { difficulty: 'hard' })}
      >
        <Text style={styles.buttonText}>Hard</Text>
      </TouchableOpacity>

      {/* Back to Home Button */}
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.navigate('Home')}
      >
        <Text style={styles.backButtonText}>Back to Home</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5', // Light background color
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 30,
  },
  button: {
    backgroundColor: '#28a745',
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
  backButton: {
    backgroundColor: '#6c757d',
    padding: 10,
    borderRadius: 10,
    marginTop: 20,
    width: 200,
    alignItems: 'center',
  },
  backButtonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default DifficultyScreen;
