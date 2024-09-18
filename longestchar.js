const str = "kjd fdjfds asodijf dffjdn";

function getLongestWord(str) {
  const res = str.split(" ");
  const ans = [];
  for (let i = 0; i < res.length; i++) {
    ans.push(res[i].length);
  }
  let maxlength = 0;
  let index;
  for (let i = 0; i < ans.length; i++) {
    if (ans[i] > maxlength) {
      maxlength = ans[i];
      index = i;
    }
  }
  return res[index];
}

const res = getLongestWord(str);
console.log(res);
