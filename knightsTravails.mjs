import { gameBoard } from "./gameboard.mjs";

function pathFrom(start, end, graph = gameBoard) {
  // Create Queue needed for breadth first search
  const Q = [];

  // Create paths array to store all of the found paths
  const paths = [];
  for (let row = 0; row < graph.length; row++) {
    const newRow = [];
    for (let col = 0; col < graph[row].length; col++) {
      newRow.push([]);
    }
    paths.push(newRow);
  }
  paths[start[0]][start[1]] = [start, 0];

  // Create array to keep track of found paths
  const found = [];
  for (let row = 0; row < graph.length; row++) {
    const newRow = [];
    for (let col = 0; col < graph[row].length; col++) {
      newRow.push(false);
    }
    found.push(newRow);
  }
  found[start[0]][start[1]] = true;

  // Queue up the start's paths
  for (let node of graph[start[0]][start[1]]) {
    Q.push({ from: start, self: node, cost: 1 });
  }

  // Keep going until queue is epmty or path found
  while (Q.length && !found[end[0]][end[1]]) {
    // Dequeue the next element
    const visited = Q.shift();

    if (!found[visited.self]) {
      // Update arrays with pertinant info
      found[visited.self[0]][visited.self[1]] = true;
      paths[visited.self[0]][visited.self[1]].push(visited.from);
      paths[visited.self[0]][visited.self[1]].push(visited.cost);

      // Queue paths if not already found
      for (let next of graph[visited.self[0]][visited.self[1]]) {
        if (!found[next[0]][next[1]])
          Q.push({ from: visited.self, self: next, cost: visited.cost + 1 });
      }
    }
  }

  const path = [];
  path.unshift(end);
  let currentPos = paths[end[0]][end[1]][0];
  while (currentPos != start) {
    path.unshift(currentPos);
    currentPos = paths[currentPos[0]][currentPos[1]][0];
  }
  path.unshift(currentPos);

  console.log(`You made it in ${path.length - 1} moves! Here is your path:`)
  for (let square of path) {
    console.log(square);
  }
}

pathFrom([3,3], [4, 3]);
