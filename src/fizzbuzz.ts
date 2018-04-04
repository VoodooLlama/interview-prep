
/**
 * Class programming puzzle FizzBuzz
 * @param n 
 */
export function fizzBuzz(n: number): Array<number|string> {
	const accumulator = [];
	const endIndex = n + 1;

	for (let i = 1; i < endIndex; i++) {
		if (i === 0) {
			accumulator.push(i);
		}
		else if (i % 15 === 0) {
			accumulator.push('FizzBuzz');
		}
		else if (i % 5 === 0) {
			accumulator.push('Buzz');
		}
		else if (i % 3 === 0) {
			accumulator.push('Fizz');
		}
		else {
			accumulator.push(i);
		}
	}

	return accumulator;
}