//https://visualgo.net/en/graphds

//edge list
const edgeGraph = [
  [0, 2],
  [2, 3],
  [2, 1],
  [1, 3],
];

//adjacent List
const ALGraph = [[1], [2, 3], [0, 1, 3], [1, 2]];

//adjacent Matrix
const AMGraph = [
  [0, 0, 1, 0],
  [0, 0, 1, 1],
  [1, 1, 0, 1],
  [0, 1, 1, 0],
];
const AMGraphAsObj = {
  0: [0, 0, 1, 0],
  1: [0, 0, 1, 1],
  2: [1, 1, 0, 1],
  3: [0, 1, 1, 0],
};
