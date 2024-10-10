const graph = [
  [1, 2, 3, 6], // 0
  [0, 3, 4], // 1
  [0, 5, 6], // 2
  [0, 1, 6, 7], // 3
  [1, 7, 11], // 4
  [2, 8, 9], // 5
  [0, 2, 3, 9], // 6
  [3, 4, 9, 10, 11], // 7
  [5, 12], // 8
  [5, 6, 12, 13], // 9
  [7, 13], // 10
  [4, 7, 14], // 11
  [8, 9, 13], // 12
  [9, 10, 12, 14], // 13
  [11, 13], // 14
];

function allPathsFrom(start) {
  const Q = [];
  const paths = [];
  for (let i = 0; i < graph.length; i++) {
    paths[i] = [];
  }
  paths[start] = [0, 0];
  const found = [];
  for (let i = 0; i < graph.length; i++) {
    found[i] = false;
  }
  found[start] = true;

  for (let node of graph[start]) {
    Q.push({ from: start, self: node, cost: 1 });
  }

  while (Q.length && !found.every((element) => element)) {
    const visited = Q.shift();

    if (!found[visited.self]) {
      found[visited.self] = true;
      paths[visited.self][0] = visited.from;
      paths[visited.self][1] = visited.cost;

      for (let next of graph[visited.self]) {
        if (!found[next])
          Q.push({ from: visited.self, self: next, cost: visited.cost + 1 });
      }
    }
  }

  return paths;
}

function pathFrom(start, end) {
  const Q = [];
  const paths = new Array(graph.length);
  for (let i = 0; i < paths.length; i++) {
    paths[i] = [];
  }
  paths[start] = [0, 0];
  const found = new Array(graph.length);
  found.forEach((element) => (element = false));
  found[start] = true;

  for (let node of graph[start]) {
    Q.push({ from: start, self: node, cost: 1 });
  }

  while (Q.length && !found[end]) {
    const visited = Q.shift();

    if (!found[visited.self]) {
      found[visited.self] = true;
      paths[visited.self][0] = visited.from;
      paths[visited.self][1] = visited.cost;

      for (let next of graph[visited.self]) {
        if (!found[next])
          Q.push({ from: visited.self, self: next, cost: visited.cost + 1 });
      }
    }
  }

  const path = [];
  path.unshift(end);
  currentPos = paths[end][0];
  while (currentPos != start) {
    path.unshift(currentPos);
    currentPos = paths[currentPos][0];
  }

  path.unshift(currentPos);

  return path;
}

console.log(pathFrom(8, 9));
