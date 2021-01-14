function larget_common_prefix(strs) {
	if (strs.length <= 0 || strs.length >= 200) return '';
	if (strs.length == 1) return strs[0];
	const word = strs[strs.length - 1];
	strs.pop();

	let i = 0;
	strs.every(each_word => {
		// if (each_word.length <= 0 || each_word.length >= 200) return false;
		console.log(each_word.charAt(i),word[i]) 
		i++;
		if(each_word.length == 6) return true
	});
	return word.substring(0, i);
}
// console.log(larget_common_prefix(['flower', 'flow', 'flight']));
// console.log(larget_common_prefix(['dog', 'racecar', 'car']));
// console.log(larget_common_prefix(['']));
// console.log(larget_common_prefix(['a']));
// console.log(larget_common_prefix(['ab', 'a']));
// console.log(larget_common_prefix(['cir', 'car']));
console.log(larget_common_prefix(['flower', 'flower', 'flower', 'flower']));
