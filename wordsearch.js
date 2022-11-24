
const wordSearch = (letters, word) => {
  const horizontalJoin = letters.map(ls => ls.join(''));

  for (let l of horizontalJoin) {
    if (l.includes(word.toUpperCase())) return true;
  }

  let vertArr = [];
  let vertArrSize = letters.length;
  let horiArrSize = letters[0].length;
  
  //for each array inside of letters
  for (let i = 0; i < horiArrSize - 1; i++) {
    for (let j = 0; j < vertArrSize; j++) {
      //pushes all of one index into arr.
      vertArr.push(letters[j][i]);
      if (vertArr.length === vertArrSize) {
        let newStr = vertArr.join("");
        if (newStr.includes(word.toUpperCase())) {
          return true;
        } else {
          vertArr = [];
        }
      }
    }
  }
  return false;
};

module.exports = wordSearch;