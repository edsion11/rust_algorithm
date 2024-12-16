/**
* 你在和朋友一起玩 猜数字（Bulls and Cows）游戏，该游戏规则如下：

写出一个秘密数字，并请朋友猜这个数字是多少。朋友每猜测一次，你就会给他一个包含下述信息的提示：

猜测数字中有多少位属于数字和确切位置都猜对了（称为 "Bulls"，公牛），
有多少位属于数字猜对了但是位置不对（称为 "Cows"，奶牛）。也就是说，这次猜测中有多少位非公牛数字可以通过重新排列转换成公牛数字。
给你一个秘密数字 secret 和朋友猜测的数字 guess ，请你返回对朋友这次猜测的提示。

提示的格式为 "xAyB" ，x 是公牛个数， y 是奶牛个数，A 表示公牛，B 表示奶牛。

请注意秘密数字和朋友猜测的数字都可能含有重复数字。
*/

/**
 * @param {string} secret
 * @param {string} guess
 * @return {string}
 */
var getHint = function(secret, guess) {
  let acount = 0;
  let bcount = 0;
  const secretMap = secret.split('')
  const guessMap = guess.split('')
  for (let i = 0; i < secretMap.length; i++) {
    if (secretMap[i] === guessMap[i]) {
      acount++
      guessMap[i] = 'A'
      secretMap[i] = 'A'
    }
  }
  for (let i = 0; i < secret.length; i++) {
    const index = guessMap.indexOf(secretMap[i])
    if (index > -1 && guessMap[index] !== 'A') {
      bcount++
      guessMap[index] = 'B'
    }
  }
  return `${acount}A${bcount}B`
};

console.log(getHint("1807", "7810"))
console.log(getHint("1123", "0111"))
