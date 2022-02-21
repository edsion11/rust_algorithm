class NaivePQ {
  constructor(comparator = (a, b) => a - b) {
    this.array = [];
    this.size = 0
    this.comparator = (i, j) => comparator(this.array[i], this.array[j]);
  }

  /**
   * Insert element
   * @runtime O(n log n)
   * @param {any} value
   */
  add(value) {
    this.array.push(value);
    this.size++
    this.bubbleUp();
  }

  /**
   * Move new element upwards on the Heap, if it's out of order
   * @runtime O(log n)
   */
   bubbleUp() {
    let index = this.size - 1;
    const parent = (i) => Math.ceil(i / 2 - 1);
    while (parent(index) >= 0 && this.comparator(parent(index), index) > 0) {
      this.swap(parent(index), index);
      index = parent(index);
    }
  }

  /**
   * Retrieves and removes the head or returns null if this Heap is empty.
   * @runtime O(n)
   */

   /* Heap
   * parent(i) = Math.ceil(i / 2 - 1)
   * leftChild(i) = 2 * i + 1
   * rightChild2(i) = 2 * i + 1 
   */
  /**
 * Retrieves and removes the head of this Heap or returns null if this Heap is empty.
 * @runtime O(log n)
 */
remove(index = 0) {
    if (!this.size) return null;
    this.swap(index, this.size - 1); // swap with last
    const value = this.array.pop(); // remove element
    this.size--
    this.bubbleDown(index);
    return value;
  }
  
  /**
   * After removal, moves element downwards on the Heap, if it's out of order
   * @runtime O(log n)
   */
  bubbleDown(index = 0) {
    let curr = index;
    const left = (i) => 2 * i + 1;
    const right = (i) => 2 * i + 2;
    const getTopChild = (i) => (right(i) < this.size
      && this.comparator(left(i), right(i)) > 0 ? right(i) : left(i));
  
    while (left(curr) < this.size && this.comparator(curr, getTopChild(curr)) > 0) {
      const next = getTopChild(curr);
      this.swap(curr, next);
      curr = next;
    }
  }

  swap(a,b){
    [this.array[a],this.array[b]] = [this.array[b], this.array[a]]
  }
}

module.exports = {
  NaivePQ
}