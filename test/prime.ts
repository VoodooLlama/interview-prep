import { isPrime, generatePrimeSequence } from '../dist/prime';
import { PRIMES_UNDER_100 } from './mocks/prime';
import { assert } from 'chai';
import 'mocha';

describe('Prime Numbers', () => {
	it('should determine whether a number is prime', () => {
		const is5Prime   = isPrime(5);
		const is883Prime = isPrime(883);
		const is882Prime = isPrime(882);

		assert.equal(is5Prime, true);
		assert.equal(is883Prime, true);
		assert.equal(is882Prime, false);
	});

	it('should determine prime numbers between 0 and 100', () => {
		const actual = generatePrimeSequence(100);
		const expected = PRIMES_UNDER_100;

		assert.deepEqual(actual, expected);
	});
})