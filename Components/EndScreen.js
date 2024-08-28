import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function EndScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Congratulations!</Text>
      <Button title="Play Again" onPress={() => navigation.navigate('Start')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});
