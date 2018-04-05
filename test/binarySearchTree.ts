import { BinarySearchTree } from '../dist/binarySearchTree';
import { assert } from 'chai';
import 'mocha';

describe('Binary Search Trees', () => {
	it('should be able to insert elements into the tree and ignore duplicates', () => {
		const tree = new BinarySearchTree();

		tree.insert(2);
		tree.insert(1);
		tree.insert(3);
		tree.insert(3);

		assert.equal(tree.count, 3);
	});

	it.skip('should be able to delete elements from the tree', () => {

	});
});