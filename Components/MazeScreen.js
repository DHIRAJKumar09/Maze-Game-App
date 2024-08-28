// MazeScreen.js
import React, { useState, useRef } from 'react';
import { View, StyleSheet, Text, Animated, Button } from 'react-native';

const cellSize = 60;
const arrowSize = 20;

const createMaze = (difficulty) => {
  if (difficulty === 'easy') {
    return [
      [1, 0, 1, 1, 1],
      [1, 0, 1, 0, 1],
      [1, 0, 0, 0, 1],
      [1, 1, 1, 0, 1],
      [1, 0, 1, 0, 0],
    ];
  } else if (difficulty === 'medium') {
    return [
      [1, 0, 1, 1, 1, 1],
      [1, 0, 0, 0, 0, 1],
      [1, 1, 1, 1, 0, 1],
      [1, 0, 0, 0, 0, 1],
      [1, 1, 1, 1, 0, 1],
      [1, 0, 0, 0, 0, 0],
    ];
  } else if (difficulty === 'hard') {
    return [
      [1, 0, 1, 1, 1, 1, 1],
      [1, 0, 0, 0, 0, 0, 1],
      [1, 1, 1, 1, 1, 0, 1],
      [1, 0, 0, 0, 0, 0, 1],
      [1, 1, 1, 1, 1, 0, 1],
      [1, 0, 0, 0, 0, 0, 0],
      [1, 1, 1, 1, 1, 1, 0],
    ];
  }
};

const goalPosition = { row: 4, col: 4 };

export default function MazeScreen({ route, navigation }) {
  const { difficulty } = route.params || { difficulty: 'easy' };
  const maze = createMaze(difficulty);
  const [playerPosition, setPlayerPosition] = useState({ row: 0, col: 1 });
  const animatedValue = useRef(new Animated.ValueXY({ x: playerPosition.col * cellSize, y: playerPosition.row * cellSize })).current;

  const movePlayer = (direction) => {
    const { row, col } = playerPosition;
    let newRow = row;
    let newCol = col;

    if (direction === 'up') newRow--;
    if (direction === 'down') newRow++;
    if (direction === 'left') newCol--;
    if (direction === 'right') newCol++;

    if (maze[newRow] && maze[newRow][newCol] === 0) {
      Animated.timing(animatedValue, {
        toValue: { x: newCol * cellSize, y: newRow * cellSize },
        duration: 500,
        useNativeDriver: false,
      }).start();

      setPlayerPosition({ row: newRow, col: newCol });
    }
  };

  const resetGame = () => {
    setPlayerPosition({ row: 0, col: 1 });
    animatedValue.setValue({ x: 1 * cellSize, y: 0 });
  };

  return (
    <View style={styles.container}>
      <View style={styles.maze}>
        {maze.map((row, rowIndex) =>
          row.map((cell, colIndex) => (
            <View
              key={`${rowIndex}-${colIndex}`}
              style={[
                styles.cell,
                {
                  backgroundColor: cell === 1 ? 'black' : 'white',
                },
              ]}
            />
          ))
        )}
        <Animated.View style={[styles.cell, styles.player, animatedValue.getLayout()]} />
        <View style={[styles.arrow, { top: 0, left: cellSize }]}>
          <Text style={styles.arrowText}>↑</Text>
        </View>
        <View style={[styles.arrow, { top: goalPosition.row * cellSize, left: goalPosition.col * cellSize }]}>
          <Text style={styles.arrowText}>→</Text>
        </View>
      </View>
      <Button title="Move Up" onPress={() => movePlayer('up')} />
      <Button title="Move Down" onPress={() => movePlayer('down')} />
      <Button title="Move Left" onPress={() => movePlayer('left')} />
      <Button title="Move Right" onPress={() => movePlayer('right')} />
      <Button title="Restart Game" onPress={resetGame} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  maze: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: cellSize * 5,
    height: cellSize * 5,
  },
  cell: {
    width: cellSize,
    height: cellSize,
    borderWidth: 1,
    borderColor: 'grey',
  },
  player: {
    position: 'absolute',
    width: cellSize,
    height: cellSize,
    backgroundColor: 'red',
  },
  arrow: {
    position: 'absolute',
    width: arrowSize,
    height: arrowSize,
    justifyContent: 'center',
    alignItems: 'center',
  },
  arrowText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'blue',
  },
});
