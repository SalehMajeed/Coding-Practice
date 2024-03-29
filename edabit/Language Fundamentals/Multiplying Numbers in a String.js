function multiplyNums(nums) {
	return nums.split(',').reduce((acc, val) => acc * val, 1);
}
console.log(multiplyNums('2, 3'), 6);
console.log(multiplyNums('1, 2, 3, 4'), 24);
console.log(multiplyNums('54, 75, 453, 0'), 0);
console.log(multiplyNums('10, -2'), -20);
console.log(multiplyNums('-26, 1, -27, -12, -19'), 160056);
console.log(multiplyNums('16, 8'), 128);
console.log(multiplyNums('-27, -14, -28, 13, -17'), 2339064);
console.log(multiplyNums('-19, -22, -14, 20, -15, -24, -17, 19, 30, -10'), -4082823360000);
console.log(multiplyNums('1, 13, 0, -11, 26, -17, 21'), 0);
console.log(multiplyNums('-25, -19, 7, -26, -26'), 2247700);
console.log(multiplyNums('-4, -16, -22, -3, -6'), -25344);
console.log(multiplyNums('-22, 11, 19, 5, 19, -9, -13, 20, -29'), 29641926600);
console.log(multiplyNums('-25, 22'), -550);
console.log(multiplyNums('26, -19, 17, 26, -21'), 4585308);
console.log(multiplyNums('5, -1, 1, -28, 14, 28, 1'), 54880);
console.log(multiplyNums('-27, -9, 6, -25, 4'), -145800);
console.log(multiplyNums('-24, -13, -14, 30, 9, -14'), 16511040);
console.log(multiplyNums('27, 25, 27, -18, -27, -7, 28, 27, 0'), 0);
console.log(multiplyNums('-23, 11, -18, -5, -4'), 91080);
console.log(multiplyNums('-16, -10, -29, -23, -30, -1'), 3201600);
console.log(multiplyNums('-14, -17, 9, -2, -17, -10, -30'), 21848400);
console.log(multiplyNums('-13, -23, 10, 0, -23'), 0);
console.log(multiplyNums('0'), 0);
console.log(multiplyNums('30'), 30);
console.log(multiplyNums('-24, -21, 6, -29, 23, 11, -21, -29'), -13511936592);
console.log(multiplyNums('4, 23, 10'), 920);
console.log(multiplyNums('-13, -2, 28, 10, 25'), 182000);
console.log(multiplyNums('-18, -6, -9, 7, -1, -4, 5, -2, 19'), 5171040);
console.log(multiplyNums('-24, 15, -19, 20, -14, -8, 6, -22, 17'), -34381670400);
console.log(multiplyNums('12, -12, -3, -12, 10, 16, -23, -5, 17'), -1621555200);
console.log(multiplyNums('17'), 17);
console.log(multiplyNums('9, -27, 9, -22, 24, -1'), -1154736);
console.log(multiplyNums('16, -26, -1, -25, 13, 6, 26, 2, 4'), -168729600);
console.log(multiplyNums('-13, 17, 29, 19, 7'), -852397);
console.log(multiplyNums('28, 15, -7, -25'), 73500);
console.log(multiplyNums('-8, 19, -11, -10, -3, -9, 30, 18'), -243777600);
console.log(multiplyNums('22, -13, 29, 3, -29'), 721578);
console.log(multiplyNums('18, -18, -8, -16'), -41472);
console.log(multiplyNums('-12, -28, -19, 14, 27, 14, -3, 10, 13, 1'), 13175809920);
console.log(multiplyNums('-26, -21, 27, 23, -22, 1'), -7459452);
console.log(multiplyNums('5, -21, -26, -29, -8, 21, -5, -30, 1'), 1995084000);
console.log(multiplyNums('-9, -7, -13, -15, -2'), -24570);
console.log(multiplyNums('9, 25, 1, 28, 3, -3, -16, -26, 12, -26'), 7359206400);
console.log(multiplyNums('-2, 4, -29'), 232);
console.log(multiplyNums('26, 13, 17, -16, 6'), -551616);
console.log(multiplyNums('-17'), -17);
console.log(multiplyNums('26, -15, -12, 2, -1, 4, 20, 14, 25, 3'), -786240000);
console.log(multiplyNums('8, -11'), -88);
console.log(multiplyNums('12, -2, 8, 6, -23, 9, 13, 14'), 43400448);
console.log(multiplyNums('-10, 19, -29, 3, 30, 20, -5'), -49590000);
console.log(multiplyNums('19'), 19);
console.log(multiplyNums('15, -28, 8, 7, -20, 24, 2'), 22579200);
console.log(multiplyNums('25, -24, 4, 9, -17, 4, -24, -18, -3'), -1903564800);
console.log(multiplyNums('8, -14, -30, 9, -14, 17, -14'), 100759680);
