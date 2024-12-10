// 主要思路是维护两个栈，一个栈用来存储元素，另一个栈用来辅助操作
// push操作时，直接将元素push到栈中
// pop操作时，将栈中的元素依次出栈并push到辅助栈中，然后将辅助栈中的元素依次出栈并push到栈中，最后返回栈顶元素


var MyQueue = function() {
    this.queue1 = [];
    this.queue2 = [];
};

/** 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function(x) {
    this.queue1.push(x);
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function() {
    while(this.queue2.isEmpty()){
        this.queue2.push(this.queue1.pop())
    }
    return this.queue2.pop()
    // while(!this.queue1.isEmpty()){
    //     this.queue2.push(this.queue1.pop())
    // }
    // const res = this.queue2.peak()
    // [queue1, queue2] = [queue2, queue1];
    // return res
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function() {
    return this.queue2[this.queue2.length-1]
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {
    return this.queue1.length === 0 && this.queue2.length === 0
};

/** 
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */