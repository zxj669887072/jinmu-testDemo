function sort (A, B) {
  var i = 0, j = 0, p = 0, m = A.length, n = B.length, C = []
  while (i < m || j < n) {
    console.log(`start:i=${i},j=${j},p=${p}`,C)
    if (i < m && j < n) {
        C[p++] = A[i] < B[j] ? A[i++] : B[j++]
    }else if (i < m) {
        C[p++] = A[i++]
    }else {
        C[p++] = B[j++]
    }
    console.log('end',C,'\n');
  }
  return C
}
console.log(__dirname,sort([1,3,5],[4,5,6,7,8]));
console.log(sort([],[1]));
module.exports = sort;