
// You should implement your task here.

module.exports = function towelSort (matrix) {
    let res = []
    if (!matrix) return res;
    if (!matrix.length) return res;
    for (let i = 0; i < matrix.length; i++) {
        if (!(i % 2)) {
            res.push(matrix[i])
        } else {
            res.push(matrix[i].reverse())
        }
    }
  return res.join(',').split(',');
}
