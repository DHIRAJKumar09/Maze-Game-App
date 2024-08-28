import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { generateMaze } from '../utils/GenerateMaze'; 

const GameScreen = ({ route, navigation }) => {
  const { difficulty } = route.params;
  const size = difficulty === 'easy' ? 5 : difficulty === 'medium' ? 7 : 11;
  const { maze, start, end } = generateMaze(size);

  const [playerPosition, setPlayerPosition] = useState(start);

  useEffect(() => {
    if (playerPosition[0] === end[0] && playerPosition[1] === end[1]) {
      navigation.navigate('GameOver', { score: 100 });
    }
  }, [playerPosition]);

  const movePlayer = (dx, dy) => {
    const [x, y] = playerPosition;
    const newX = x + dx;
    const newY = y + dy;

    if (newX >= 0 && newY >= 0 && newX < size && newY < size && maze[newX][newY] === 0) {
      setPlayerPosition([newX, newY]);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.difficultyText}>{difficulty.toUpperCase()} MODE</Text>

      
      <View style={styles.maze}>
        {maze.map((row, rowIndex) => (
          <View key={rowIndex} style={styles.row}>
            {row.map((cell, colIndex) => (
              <View
                key={colIndex}
                style={[
                  styles.cell,
                  cell === 1 && styles.wall,
                  playerPosition[0] === rowIndex && playerPosition[1] === colIndex && styles.player,
                  end[0] === rowIndex && end[1] === colIndex && styles.end,
                ]}
              />
            ))}
          </View>
        ))}
      </View>

     
      <View style={styles.controls}>
        <TouchableOpacity onPress={() => movePlayer(-1, 0)} style={styles.button}><Text>Up</Text></TouchableOpacity>
        <View style={styles.rowControls}>
          <TouchableOpacity onPress={() => movePlayer(0, -1)} style={styles.button}><Text>Left</Text></TouchableOpacity>
          <TouchableOpacity onPress={() => movePlayer(0, 1)} style={styles.button}><Text>Right</Text></TouchableOpacity>
        </View>
        <TouchableOpacity onPress={() => movePlayer(1, 0)} style={styles.button}><Text>Down</Text></TouchableOpacity>
      </View>
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
  difficultyText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  maze: {
    marginBottom: 40,
    flexDirection: 'column',
  },
  row: {
    flexDirection: 'row',
  },
  cell: {
    width: 30,
    height: 30,
    borderWidth: 1,
    borderColor: '#999',
  },
  wall: {
    backgroundColor: 'black',
  },
  player: {
    backgroundColor: 'red',
  },
  end: {
    backgroundColor: 'green',
  },
  controls: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    padding: 15,
    backgroundColor: '#007BFF',
    margin: 5,
    borderRadius: 5,
    width: 100,
    alignItems: 'center',
  },
  rowControls: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default GameScreen;
