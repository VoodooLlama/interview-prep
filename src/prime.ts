
/**
 * Function to determine whether a number is prime
 * @param n
 */
export function isPrime(n: number): boolean {
	const maxIndex = Math.floor(Math.sqrt(n));

	for (let i = 2; i <= maxIndex; i++) {
		if (n % i === 0) {
			return false;
		}
	}

	return n > 1;
}

/**
 * Helper function to generate primes 0..n
 * @param n Upper bound of primes generated
 */
export function generatePrimeSequence(n: number): number[] {
	return Array.from(Array(n), (_, i) => i)
		.filter((val) => isPrime(val));
}