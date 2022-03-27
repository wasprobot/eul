obj = {
    // Starting in the top left corner of a 2×2 grid, and only 
    // being able to move to the right and down, there are exactly 6 
    // routes to the bottom right corner.
    // ┌───┬───►
    // │   │   │
    // ├───┼───┤
    // │   │   │
    // └───┴───▼
    // How many such routes are there through a 20×20 grid?
    numberOfPaths: (rows, cols) => {
        // console.log(`processing: ${rows}, ${cols}`);
        if (rows == 1) return cols+1;
        if (cols == 1) return rows+1;
        return obj.numberOfPaths(rows, cols-1) + obj.numberOfPaths(rows-1, cols);
    }   
};
  
module.exports = obj;
  