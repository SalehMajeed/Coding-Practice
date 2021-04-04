function amazing_edabit(str) {
	return !str.includes('edabit') ? str.replace(/amazing/, 'not amazing') : str;
}

console.log(amazing_edabit('edabit is amazing.'));
console.log(amazing_edabit('Mubashir is amazing.'));
console.log(amazing_edabit('Infinity is amazing.'));
