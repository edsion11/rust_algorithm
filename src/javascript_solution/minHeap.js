const minHeapSort = arr => {
    // 1. 构造最小堆
    buildMinHeap(arr);
    // 2. 循环提取根节点arr[0], 直到全部提取完
    for (let i = arr.length - 1; i > 0; i--) {
        let tmp = arr[0];
        arr[0] = arr[i];
        arr[i] = tmp;
        siftDown(arr, 0, i - 1);
    }
};

// 把整个数组构造成最小堆
const buildMinHeap = arr => {
    if(arr.length < 2) {
        return arr;
    }
    const startIndex = Math.floor(arr.length / 2 - 1);
    for (let i = startIndex; i >= 0; i--) {
        siftDown(arr, i, arr.length - 1);
    }
};

// 从startIndex索引开始, 向下调整最小堆
const siftDown = (arr, startIndex, endIndex) => {
    const leftChildIndx = 2 * startIndex + 1;
    const rightChildIndx = 2 * startIndex + 2;
    let swapIndex = startIndex;
    let tmpNode = arr[startIndex];
    if (leftChildIndx <= endIndex) {
        if (arr[leftChildIndx] < tmpNode) {
            // 待定是否交换, 因为right子节点有可能更小
            tmpNode = arr[leftChildIndx];
            swapIndex = leftChildIndx;
        }
    }
    if (rightChildIndx <= endIndex) {
        if (arr[rightChildIndx] < tmpNode) {
            // 比left节点更小, 替换swapIndex
            tmpNode = arr[rightChildIndx];
            swapIndex = rightChildIndx;
        }
    }
    if (swapIndex !== startIndex) {
        // 1.交换节点
        arr[swapIndex] = arr[startIndex];
        arr[startIndex] = tmpNode;

        // 2. 递归调用, 继续向下调整
        siftDown(arr, swapIndex, endIndex);
    }
};