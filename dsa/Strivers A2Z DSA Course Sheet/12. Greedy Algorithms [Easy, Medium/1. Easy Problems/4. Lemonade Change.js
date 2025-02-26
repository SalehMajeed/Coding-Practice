function lemonadeChange(bills) {
	let fiveDollar = 0;
	let tenDollar = 0;
	for (let i = 0; i < bills.length; i++) {
	  const currentBill = bills[i];
	  if (currentBill === 5) {
		 fiveDollar += 1;
	  } else if (currentBill === 10) {
		 if (fiveDollar > 0) {
			fiveDollar -= 1;
			tenDollar += 1;
		 } else {
			return false;
		 }
	  } else if (currentBill === 20) {
		 if (tenDollar > 0 && fiveDollar > 0) {
			fiveDollar -= 1;
			tenDollar -= 1;
		 } else if (fiveDollar >= 3) {
			fiveDollar -= 3;
		 } else {
			return false;
		 }
	  }
	}
	return true;
 }
 
 console.log(lemonadeChange([5, 5, 5, 10, 20]));
 console.log(lemonadeChange([5, 5, 10, 10, 20]));
 