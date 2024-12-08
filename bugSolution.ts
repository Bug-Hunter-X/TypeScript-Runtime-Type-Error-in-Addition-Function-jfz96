function add(a: number, b: number): number {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('Both arguments must be numbers');
  }
  return a + b;
}

let result = add(10, 20); //Correct
console.log(result); //Output: 30

try {
  let result2 = add(10, "20"); //Throws an error
  console.log(result2);
} catch (error) {
  console.error(error.message); //Output: Both arguments must be numbers
}
