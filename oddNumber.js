// Buatlah script untuk mencetak bilangan ganjil antara 1 hingga 100.

// ====================================================================

let arr = [];
for (let i = 0; i < 100; i++) {
  if (i % 2 != 0) {
    arr.push(i);
  }
}

console.log(arr);
