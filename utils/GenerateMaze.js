export const generateMaze = (size) => {
    // Create an empty maze filled with walls (1s)
    const maze = Array(size)
      .fill(null)
      .map(() => Array(size).fill(1));
  
    // Define the start and end points
    const start = [0, 0]; // Top-left corner
    const end = [size - 1, size - 1]; // Bottom-right corner
  
    // Carve out the maze recursively
    const carvePassagesFrom = (cx, cy, grid) => {
      const directions = [
        [-1, 0],
        [1, 0],
        [0, -1],
        [0, 1],
      ];
  
      // Shuffle directions to create a random maze
      directions.sort(() => Math.random() - 0.5);
  
      directions.forEach(([dx, dy]) => {
        const nx = cx + dx * 2;
        const ny = cy + dy * 2;
  
        if (nx >= 0 && nx < size && ny >= 0 && ny < size && grid[nx][ny] === 1) {
          grid[cx + dx][cy + dy] = 0; // Carve path
          grid[nx][ny] = 0; // Move to the next cell
          carvePassagesFrom(nx, ny, grid); // Recurse
        }
      });
    };
  
    // Start carving from the top-left corner
    maze[start[0]][start[1]] = 0;
    carvePassagesFrom(start[0], start[1], maze);
  
    return { maze, start, end };
  };
  