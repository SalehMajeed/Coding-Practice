function fifty_thirty_twenty(ati) {
	return { Needs: ati / 2, Wants: 0.3 * ati, Savings: 0.2 * ati };
}

console.log(fifty_thirty_twenty(10000));
console.log(fifty_thirty_twenty(50000));
console.log(fifty_thirty_twenty(13450));
