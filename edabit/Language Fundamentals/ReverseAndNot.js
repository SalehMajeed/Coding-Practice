function reverseAndNot(i) {
	let digit = 0;
	let len = 1;
	const original_digit = i;
	while (i >= 1) {
		digit = digit * 10 + (i % 10);
		i = parseInt(i / 10);
		len = len * 10;
	}
	return digit * len + original_digit;
}

console.log(reverseAndNot(123), 321123);
console.log(reverseAndNot(123456789), 987654321123456789);
console.log(reverseAndNot(496), 694496);
console.log(reverseAndNot(307), 703307);
console.log(reverseAndNot(500), 5500);
console.log(reverseAndNot(321), 123321);
console.log(reverseAndNot(564), 465564);
console.log(reverseAndNot(66), 6666);
console.log(reverseAndNot(553), 355553);
console.log(reverseAndNot(518), 815518);
console.log(reverseAndNot(152), 251152);
console.log(reverseAndNot(273), 372273);
console.log(reverseAndNot(603), 306603);
console.log(reverseAndNot(864), 468864);
console.log(reverseAndNot(170), 71170);
console.log(reverseAndNot(96), 6996);
console.log(reverseAndNot(869), 968869);
console.log(reverseAndNot(960), 69960);
console.log(reverseAndNot(471), 174471);
console.log(reverseAndNot(925), 529925);
console.log(reverseAndNot(235), 532235);
console.log(reverseAndNot(389), 983389);
console.log(reverseAndNot(293), 392293);
console.log(reverseAndNot(586), 685586);
console.log(reverseAndNot(218), 812218);
console.log(reverseAndNot(262), 262262);
console.log(reverseAndNot(610), 16610);
console.log(reverseAndNot(75), 5775);
console.log(reverseAndNot(699), 996699);
console.log(reverseAndNot(298), 892298);
console.log(reverseAndNot(532), 235532);
console.log(reverseAndNot(211), 112211);
console.log(reverseAndNot(602), 206602);
console.log(reverseAndNot(804), 408804);
console.log(reverseAndNot(195), 591195);
console.log(reverseAndNot(271), 172271);
console.log(reverseAndNot(449), 944449);
console.log(reverseAndNot(938), 839938);
console.log(reverseAndNot(257), 752257);
console.log(reverseAndNot(205), 502205);
console.log(reverseAndNot(345), 543345);
console.log(reverseAndNot(365), 563365);
console.log(reverseAndNot(112), 211112);
console.log(reverseAndNot(792), 297792);
console.log(reverseAndNot(777), 777777);
console.log(reverseAndNot(759), 957759);
console.log(reverseAndNot(239), 932239);
console.log(reverseAndNot(469), 964469);
console.log(reverseAndNot(953), 359953);
console.log(reverseAndNot(574), 475574);
console.log(reverseAndNot(155), 551155);
console.log(reverseAndNot(238), 832238);
