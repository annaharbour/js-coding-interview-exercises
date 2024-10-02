// --- Directions
// Implement bubbleSort, selectionSort, and mergeSort

function bubbleSort(arr) {
	for (let i = 0; i < arr.length; i++) {
		for (let j = 0; j < arr.length - i - 1; j++) {
			if (arr[j] > arr[j + 1]) {
				// assigning the lesser value to a temporary variable
				const temp = arr[j + 1];
				// setting the lesser value to the previous index
				arr[j + 1] = arr[j];
				// setting the greater index to the temporary value
				arr[j] = temp;
			}
		}
	}
	return arr;
}

// The "prove me wrong" algo
function selectionSort(arr) {
	for (let i = 0; i < arr.length; i++) {
		let min = i;

		for (let j = i + 1; j < arr.length; j++) {
			if (arr[j] < arr[min]) {
				min = j;
			}
		}

		if (min !== i) {
			let temp = arr[min];
			arr[min] = arr[i];
			arr[i] = temp;
		}
	}
	return arr;
}

function mergeSort(arr) {
	if (arr.length === 1) {
		return arr;
	}

	const mid = Math.floor(arr.length / 2);
	const left = arr.slice(0, mid);
	const right = arr.slice(mid);

	return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
	const result = [];

	while (left.length && right.length) {
		if (left[0] < right[0]) {
			result.push(left.shift());
		} else {
			result.push(right.shift());
		}
	}
	return [...result, ...left, ...right];
}

module.exports = { bubbleSort, selectionSort, mergeSort, merge };
