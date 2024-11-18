/**
图像平滑器 是大小为 3 x 3 的过滤器，用于对图像的每个单元格平滑处理，平滑处理后单元格的值为该单元格的平均灰度。
每个单元格的  平均灰度 定义为：该单元格自身及其周围的 8 个单元格的平均值，结果需向下取整。（即，需要计算蓝色平滑器中 9 个单元格的平均值）。
如果一个单元格周围存在单元格缺失的情况，则计算平均灰度时不考虑缺失的单元格（即，需要计算红色平滑器中 4 个单元格的平均值）。
*/

/**
 * @param {number[][]} img
 * @return {number[][]}
 */
var imageSmoother = function (img) {
  const res = new Array(img.length)
    .fill(0)
    .map((item) => new Array(img[0].length).fill(0));
  for (let i = 0; i < img.length; i++) {
    for (let j = 0; j < img[i].length; j++) {
      let sum = 0,
        count = 0;
      for (let x = i - 1; x <= i + 1; x++) {
        for (let y = j - 1; y <= j + 1; y++) {
          if (x >= 0 && x < img.length && y >= 0 && y < img[i].length) {
            sum += img[x][y];
            count++;
          }
        }
      }
      img[i][j] = Math.floor(sum / count);
    }
  }
  return img;
};
