# Dijkstra's Algorithm: Minimum Distance Path in 2D Grid

This project demonstrates the implementation of Dijkstra's algorithm to find the minimum distance path between two points in a 2D grid. The grid is represented by a 10x20 grid of toggle buttons in an HTML page.

## Features

- The 2D grid is displayed as a grid of toggle buttons, where each button represents a cell in the grid.
- The source and destination points are represented by green color buttons.
- The restricted path is indicated by red color buttons, which cannot be traversed.
- The algorithm allows movement in four directions: up, down, left, and right.
- Dijkstra's algorithm is applied to find the shortest path from the source to the destination, considering the restricted path.
- The minimum distance path is visually highlighted on the grid.

## Usage

1. Open the HTML page in a web browser.
2. Use the toggle buttons to create the 2D grid, set the source and destination points, and mark the restricted path.
3. Click the "Find Shortest Path" button to calculate and display the minimum distance path between the source and destination points.
4. The algorithm will use Dijkstra's algorithm to find the shortest path, taking into account the restricted path.
5. The minimum distance path will be visually highlighted on the grid, providing a clear representation of the optimal route.

## Implementation Details

- The project utilizes HTML, CSS, and JavaScript to create the grid and implement the Dijkstra's algorithm.
- The toggle buttons and their states (active, inactive) are used to represent the 2D grid.
- JavaScript code handles the button interactions, path calculations, and visualization of the minimum distance path.
- Dijkstra's algorithm is implemented to find the shortest path, considering the restricted path.
- The grid is updated dynamically to highlight the minimum distance path.

## Screenshot
  <img width="960" alt="image" src="https://github.com/anuraggoyar/Graph/assets/48005704/45439d70-01d1-43bc-b9aa-a11d67c6d89a">

## Compatibility

This project is compatible with modern web browsers that support HTML, CSS, and JavaScript, including Google Chrome, Mozilla Firefox, and Microsoft Edge.

## Future Enhancements

- Enable diagonal movement in addition to the four cardinal directions.
- Implement additional pathfinding algorithms for comparison.
- Allow users to adjust the grid size and customize the colors for source, destination, and restricted path.

## Credits

This project is created by **Anurag Goyar** as a demonstration of Dijkstra's algorithm for finding the minimum distance path in a 2D grid.

---
