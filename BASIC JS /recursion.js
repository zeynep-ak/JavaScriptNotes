function countup(n) {
    if (n < 1) {
      return [];
    } else {
      const countArray = countup(n - 1);
      countArray.push(n);
      return countArray;
    }
};

function countdown(n){
    if (n < 1) {
      return [];
    } else {
      const countArray = countdown(n - 1);
      countArray.unshift(n);
      return countArray;
    }
};

// SAME
function rangeOfNumbers(startNum, endNum) {
    if (startNum > endNum) {
        return [];
      } else {
        const countArray = rangeOfNumbers(startNum + 1, endNum);
        countArray.unshift(startNum);
        return countArray;
      }
};
function rangeOfNumbers(startNum, endNum) {
    if (startNum > endNum) {
        return [];
      } else {
        const countArray = rangeOfNumbers(startNum, endNum - 1);
        countArray.push(endNum);
        return countArray;
      }
};
