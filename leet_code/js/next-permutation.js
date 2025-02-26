function findNexPermutation(index, arr, ans) {
    if(index == arr.length) {
        ans.push(arr);
        return;
    }
    for(let i = 0; i < arr.length; i++) {
        swap(arr, i, index);
        findNexPermutation(index+1, arr, ans);
        swap(arr, i, index);
    }
}

function swap(arr, i, j) {
    [arr[i], arr[j]] = [arr[j], arr[i]];
}

function findPermutation(arr) {
    const ans = [];
    findNexPermutation(0, arr, ans);
    console.log(ans);
}

findPermutation([1, 2, 3]);