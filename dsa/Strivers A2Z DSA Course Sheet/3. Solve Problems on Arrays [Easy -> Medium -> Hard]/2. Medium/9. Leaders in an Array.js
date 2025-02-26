function findLeader(arr) {
    const leaderArr = [];
    let max = arr[arr.length - 1];
    leaderArr.push(max);
    for (let i = arr.length - 2; i >= 0; i--) {
      if (max < arr[i]) {
        max = arr[i];
        leaderArr.push(max);
      }
    }
    return leaderArr.reverse();
  }
  console.log(findLeader([4, 7, 1, 0]));
  console.log(findLeader([10, 22, 12, 3, 0, 6]));
  