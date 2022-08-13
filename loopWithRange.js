// Buatlah script untuk mencetak dengan rentang angka tertentu.

// CONTOH
// Input pertama: 4
// Input kedua: 8
// Output di browser: 4, 5, 6, 7, 8

// ========================================================

function loopWithRange(a, b) {
  let arr = [];
  for (a; a <= b; a++) {
    arr.push(a);
  }

  return arr;
}

console.log(loopWithRange(4, 8));
