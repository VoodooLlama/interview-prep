import { fibonacci, generateFibonacciSequence } from '../dist/fibonacci';
import { TEN_FIBONACCI_DIGITS } from './mocks/fibonacci';
import { assert } from 'chai';
import 'mocha';

describe('Fibonacci Sequence', () => {
	it('should calculate the nth number of the fibonacci sequence', () => {
		const actual = fibonacci(5);
		const expected = 5;

		assert.equal(actual, expected);
	});

	it('should calculate the first ten numbers of the fibonacci sequence', () => {
		const actual = generateFibonacciSequence(10);
		const expected = TEN_FIBONACCI_DIGITS;

		assert.deepEqual(actual, expected);
	});
});