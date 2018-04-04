import { FIZZ_BUZZ_30 } from './mocks/fizzbuzz';
import { fizzBuzz } from '../dist/fizzbuzz';
import { assert } from 'chai';
import 'mocha';

describe('FizzBuzz', () => {
	it('should return the first 30 entries of FizzBuzz', () => {
		const actual = fizzBuzz(30);
		const expected = FIZZ_BUZZ_30;

		assert.deepEqual(actual, expected);
	});
})