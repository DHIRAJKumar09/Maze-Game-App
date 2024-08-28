import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from '../Components/HomeScreen';
import GameScreen from '../Components/GameScreen';
import VictoryScreen from '../Components/VictoryScreen';
const Stack = createStackNavigator();
const Navigation = () => {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Game" component={GameScreen} />
          <Stack.Screen name="Victory" component={VictoryScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  };
  
  export default Navigation;