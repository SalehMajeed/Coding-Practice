function get_file_name(str) {
	return str.match(/[^/]+$/g)[0];
}

console.log(get_file_name('C:/Projects/pil_tests/ascii/edabit.txt'));
console.log(get_file_name('C:/Users/johnsmith/Music/Beethoven_5.mp3'));
console.log(get_file_name('ffprobe.exe'));
