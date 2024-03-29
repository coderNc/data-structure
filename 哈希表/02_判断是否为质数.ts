export function isPrime(num: number): boolean {
  const sqrt = Math.sqrt(num);
  for (let i = 2; i <= sqrt; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

console.log(isPrime(5));
console.log(isPrime(8));
console.log(isPrime(13));
console.log(isPrime(21));
