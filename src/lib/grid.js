var obj = {
  columns(g) {
    return g[0].map((_, columnIndex) => {
      // For each column index, create a new row by mapping over all rows
      return g.map(row => row[columnIndex]);
    })
  },

  positiveDiags(g) {
    const numRows = g.length;
    // Assumes all rows have the same number of columns
    const numCols = g[0].length;
    // A map to store diagonals, where the key is the sum of indices (i + j)
    const diagonalsMap = new Map();

    for (let i = 0; i < numRows; i++) {
      for (let j = 0; j < numCols; j++) {
        const sum = i + j;
        if (!diagonalsMap.has(sum)) {
          diagonalsMap.set(sum, []);
        }
        // Push the element into the correct diagonal group
        diagonalsMap.get(sum).push(g[j][i]);
      }
    }

    // Convert the map values to an array of arrays
    // The diagonals are ordered based on their index sum
    return Array.from(diagonalsMap.values());
  },

  negativeDiags(g) {
    const numRows = g.length;
    // Assumes all rows have the same number of columns
    const numCols = g[0].length;
    // A map to store diagonals, where the key is the sum of indices (i + j)
    const diagonalsMap = new Map();

    for (let i = 0; i < numRows; i++) {
      for (let j = numCols - 1; j >= 0; j--) {
        const sum = i + numCols - j;
        if (!diagonalsMap.has(sum)) {
          diagonalsMap.set(sum, []);
        }
        // Push the element into the correct diagonal group
        diagonalsMap.get(sum).push(g[i][j]);
      }
    }

    // Convert the map values to an array of arrays
    // The diagonals are ordered based on their index sum
    return Array.from(diagonalsMap.values());
  }

};

module.exports = obj;
