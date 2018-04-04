
/**
 * Calculates the nth digit (zero-indexed) of the fibonacci sequence
 * @param n Represents the digit of the fibonacci sequence to generate
 */
export function fibonacci(n: number): number {
	if (n === 0) {
		return 0;
	}
	else if (n <= 2) {
		return 1;
	}
	else {
		return fibonacci(n - 1) + fibonacci(n - 2);
	}
}

/**
 * Returns an array containing n digits of the fibonacci sequence
 * @param n Length of fibonacci sequence to generate
 */
export function generateFibonacciSequence(n: number): number[] {
	return Array.from(Array(n), (_, i) => fibonacci(i));
}
