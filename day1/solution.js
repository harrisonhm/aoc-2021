var text1 = require("fs").readFileSync("./puzzle_input_1.txt", "utf-8");
const depths1 = text1.split("\n")

const {totalIncreases: totalIncreases1} = depths1.reduce(({previousDepth, totalIncreases}, currentDepth, currentIndex) => {
  if (currentIndex === 0) return {totalIncreases: 0, previousDepth: parseInt(currentDepth)}
  const newTotalIncreases = parseInt(currentDepth) > previousDepth ? totalIncreases + 1 : totalIncreases;
  return { previousDepth: parseInt(currentDepth), totalIncreases: newTotalIncreases }
}, {totalIncreases: 0, previousDepth: 0})

console.log(totalIncreases1);

var text2 = require("fs").readFileSync("./puzzle_input_2.txt", "utf-8");
const depths2 = text2.split("\n")

const {totalIncreases: totalIncreases2} = depths2.reduce(({previousDepthSum, totalIncreases, depthToRemove}, currentDepth, currentIndex, array) => {
  if (currentIndex <= 2) return {totalIncreases: 0, previousDepthSum: previousDepthSum + parseInt(currentDepth), depthToRemove: parseInt(array[currentIndex - 2])}
  const newTotalIncreases = previousDepthSum + parseInt(currentDepth) - depthToRemove > previousDepthSum ? totalIncreases + 1 : totalIncreases;
  return { previousDepthSum: previousDepthSum + parseInt(currentDepth) - depthToRemove, totalIncreases: newTotalIncreases, depthToRemove: parseInt(array[currentIndex - 2])}
}, {totalIncreases: 0, previousDepthSum: 0, depthToRemove: 0})

console.log(totalIncreases2);