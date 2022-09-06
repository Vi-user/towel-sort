
// You should implement your task here.

module.exports = function towelSort (matrix) {
    let res = []
    if (!matrix || !matrix.length) return res;
    for (let i = 0; i < matrix.length; i++) {
        (!(i % 2)) ? res.push(matrix[i]) : res.push(matrix[i].reverse());
    }
    return res.flat();
}
