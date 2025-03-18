/**
 * 基因序列可以表示为一条由 8 个字符组成的字符串，其中每个字符都是 'A'、'C'、'G' 和 'T' 之一。
 * 假设我们需要调查从基因序列 start 变为 end 所发生的基因变化。一次基因变化就意味着这个基因序列中的一个字符发生了变化。
 * 例如，"AACCGGTT" --> "AACCGGTA" 就是一次基因变化。
 * 另有一个基因库 bank 记录了所有有效的基因变化，只有基因库中的基因才是有效的基因序列。（变化后的基因必须位于基因库 bank 中）
 * 给你两个基因序列 start 和 end ，以及一个基因库 bank ，请你找出并返回能够使 start 变化为 end 所需的最少变化次数。如果无法完成此基因变化，返回 -1 。
 * 注意：起始基因序列 start 默认是有效的，但是它并不一定会出现在基因库中。
 */

/**
 * @param {string} startGene
 * @param {string} endGene
 * @param {string[]} bank
 * @return {number}
 */
var minMutation = function (startGene, endGene, bank) {
  if (!bank.includes(endGene)) return -1;
  const keys = ["A", "C", "G", "T"];
  const BFS = (str) => {
    const queue = [[str, 0]]
    const visited = new Map()
    while(queue.length){
        const [cur, res] = queue.shift()
        for(let i=0;i< cur.length;i++){
            for(let key of keys){
                const newStr = cur.slice(0,i)+key+cur.slice(i+1)
                if(newStr === endGene) return res+1
                if(bank.includes(newStr) && !visited.has(newStr)){
                    visited.set(newStr,true)
                    queue.push([newStr, res+1])
                }
            }
        }
    }
    return -1;
  };
  return BFS(startGene);
};
var minMutation = function (startGene, endGene, bank) {
    if (!bank.includes(endGene)) return -1;
    const keys = ["A", "C", "G", "T"];
    const BFS = (str) => {
      const queue = [str]
      const visited = new Map()
      let k = 0
      while(queue.length){
        const size = queue.length;
        for(let i=0;i<size;i++){
            const cur = queue.shift()
            for(let j=0;j<cur.length;j++){
                for(let key of keys){
                    const newStr = cur.slice(0,j)+key+cur.slice(j+1)
                    if(newStr===endGene) return k+1
                    if(bank.includes(newStr) && !visited.get(newStr)){
                        queue.push(newStr)
                        visited.set(newStr, true)
                    }
                }
            }
        }
        k++
      }
      return -1
    }
    return BFS(startGene)
}


console.log(minMutation("AACCGGTT", "AACCGGTA", ["AACCGGTA"]));
console.log(
  minMutation("AACCGGTT", "AAACGGTA", ["AACCGGTA", "AACCGCTA", "AAACGGTA"])
);
console.log(
  minMutation("AAAAACCC", "AACCCCCC", ["AAAACCCC", "AAACCCCC", "AACCCCCC"])
);
console.log(
  minMutation("AAAAAAAA", "CCCCCCCC", [
    "AAAAAAAA",
    "AAAAAAAC",
    "AAAAAACC",
    "AAAAACCC",
    "AAAACCCC",
    "AACACCCC",
    "ACCACCCC",
    "ACCCCCCC",
    "CCCCCCCA",
    "CCCCCCCC",
  ])
);
