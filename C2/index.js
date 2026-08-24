function chunkArray(array, chunkSize) {
  const chunks = [];

  for (let i = 0; i <= array.length; i += chunkSize) {
    chunks.push(array.slice(i, i + chunkSize));
  }
  return chunks;
}
console.log(chunkArray([1, 2, 3, 4, 5], 2));
