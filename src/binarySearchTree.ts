
class BinarySearchTree<T> {

	private root: IBinarySearchTreeNode<T> | null;
	private count: number;
	private comparator: IComparator<T>;

	constructor(comparator?: IComparator<T>) {
		this.comparator = comparator || DefaultComparator;
		this.count = 0;
		this.root = null;
	}

	/**
	 * Traverses the binary search tree using in-order traversal
	 * @param node 
	 * @param callback 
	 */
	traverseInOrder(node: IBinarySearchTreeNode<T> | null, callback?: any) {
		if (node) {
			this.traverseInOrder(node.left, callback);

			if (callback) {
				callback(node);
			}

			this.traverseInOrder(node.right, callback);
		}
	}

	/**
	 * Traverses the binary search tree using post-order traversal
	 * @param node 
	 * @param callback 
	 */
	traversePostOrder(node: IBinarySearchTreeNode<T> | null, callback?: any) {
		if (node) {
			this.traversePostOrder(node.left, callback);
			this.traversePostOrder(node.right, callback);

			if (callback) {
				callback(node);
			}
		}
	}

	/**
	 * Traverses the binary search tree using pre-order traversal
	 * @param node 
	 * @param callback 
	 */
	traversePreOrder(node: IBinarySearchTreeNode<T> | null, callback?: any) {
		if (node) {
			if (callback) {
				callback(node);
			}

			this.traversePreOrder(node.left, callback);
			this.traversePreOrder(node.right, callback);
		}
	}

	/**
	 * Traverses the binary search tree using level-order traversal (breadth-first)
	 */
	traverseLevelOrder(node: IBinarySearchTreeNode<T> | null, callback?: any) {
		const queue = [];

		queue.push(node);

		while (queue.length) {
			let currentNode = queue.shift();

			if (callback) {
				callback(currentNode);
			}

			if (currentNode) {
				if (currentNode.left) {
					queue.push(currentNode.left);
				}
				if (currentNode.right) {
					queue.push(currentNode.right);
				}
			}
		}
	}

	/**
	 * Inserts a new node into the binary tree
	 */
	insert(value: T) {
		if (!this.root) {
			this.root = new BinarySearchTreeNode(value);
			this.count++;

			return;
		}

		let currentNode = this.root;

		while(currentNode) {
			const compareResult = this.comparator(currentNode.value, value);

			if (compareResult === CompareResult.LESS_THAN) {
				// Insert node to the left, or iterate to the next left node
				if (!currentNode.left) {
					currentNode.left = new BinarySearchTreeNode(value);
					this.count++;
					break;
				}
				else {
					currentNode = currentNode.left;
				}
			}
			else if (compareResult === CompareResult.GREATER_THAN) {
				// Insert node to the right, or iterate to the next right node
				if (!currentNode.right) {
					currentNode.right = new BinarySearchTreeNode(value);
					this.count++;
					break;
				}
				else {
					currentNode = currentNode.right;
				}
			}
			else {
				// Duplicate value, ignore
				break;
			}
		}
	}
}

class BinarySearchTreeNode<T> implements IBinarySearchTreeNode<T> {
	value: T;
	right: IBinarySearchTreeNode<T> | null;
	left: IBinarySearchTreeNode<T> | null;

	constructor(value: T, left?: BinarySearchTreeNode<T>, right?: BinarySearchTreeNode<T>) {
		this.value = value;
		this.right = right || null;
		this.left = left || null;
	}

	toString() {
		return this.value;
	}
}

function DefaultComparator<T>(x: T, y: T): CompareResult {
	if (x < y) {
		return -1;
	}
	else if (y > x) {
		return 1;
	}

	return 0;
}

enum CompareResult {
	LESS_THAN = -1,
	EQUAL = 0,
	GREATER_THAN = 1
}

interface IBinarySearchTreeNode<T> {
	value: T,
	left:  IBinarySearchTreeNode<T> | null,
	right: IBinarySearchTreeNode<T> | null
};

interface IComparator<T> {
	(x: T, y: T): CompareResult;
}