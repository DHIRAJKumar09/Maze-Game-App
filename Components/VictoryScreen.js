import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const VictoryScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Congratulations, You Win!</Text>
      <Button
        title="Play Again"
        onPress={() => navigation.navigate('Game')}
        color="#28a745"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f8f9fa',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#28a745',
    marginBottom: 20,
  },
});

export default VictoryScreen;
