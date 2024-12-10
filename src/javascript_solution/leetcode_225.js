// 主要思路是使用两个队列来模拟栈的操作，一个队列用来存储数据，另一个队列用来辅助操作
// push操作时，将数据push到queue1中，然后将queue2中的数据出队并依次push到queue1中，最后交换queue1和queue2


var MyStack = function() {
    this.queue_1 = [];
    this.queue_2 = [];
};

/** 
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function(x) {
    this.queue_1.push(x);
    while (this.queue_2.length > 0) {
        this.queue_1.push(this.queue_2.shift());
    }
    [this.queue1, this.queue2] = [this.queue2, this.queue1];
};

/**
 * @return {number}
 */
MyStack.prototype.pop = function() {
    return this.queue_2.poll();
};

/**
 * @return {number}
 */
MyStack.prototype.top = function() {
    return this.queue_2.peek()
};

/**
 * @return {boolean}
 */
MyStack.prototype.empty = function() {
    return queue1.isEmpty();
};

/** 
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */