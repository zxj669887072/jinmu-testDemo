/*
 * @lc app=leetcode.cn id=2660 lang=javascript
 *
 * [2660] 保龄球游戏的获胜者
 */

// @lc code=start
/**
 * @param {number[]} player1
 * @param {number[]} player2
 * @return {number}
 */
var isWinner = function(player1, player2) {
  // let n = player1.length;

  // function setDouble(list,currentIndex,currentScore){
  //   if(currentScore === 10){
  //     if(list[currentIndex+1] === 1){
  //       list[currentIndex+1] = 2;
  //     }
  //     if(list[currentIndex+2] === 1){
  //       list[currentIndex+2] = 2;
  //     }
  //   }
  // }

  // function getScore(list){
  //   let score = 0;
  //   let doubleFlagList = new Array(n +2).fill(1);
  //   list.forEach((p,i) => {
  //     setDouble(doubleFlagList,i,p);
  //     score += p* doubleFlagList[i];
  //   })

  //   return score;
  // }

  function getScore(list){
    let score = 0;
    list.forEach((s,i) => {
      let rate = (i-1>=0 && list[i-1] === 10) || (i-2>=0 && list[i-2] === 10) ? 2 : 1;
      score += s * rate;
    });
    return score;
  }

  let player1Score = getScore(player1),
    player2Score = getScore(player2);

  // console.log(player1Score, player2Score);
  if(player1Score === player2Score){
    return 0
  }else if(player1Score > player2Score){
    return 1;
  }else if(player1Score < player2Score){
    return 2
  }

};
// @lc code=end

console.log(isWinner([4,10,7,9],[6,5,2,3]),'\n\n');
console.log(isWinner([3,5,7,6],[8,10,10,2]),'\n\n');
console.log(isWinner([2,3],[4,1]),'\n\n');

