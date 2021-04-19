function get_student_names(students) {
	return Object.values(students);
}

console.log(
	get_student_names({
		'Student 1': 'Steve',
		'Student 2': 'Becky',
		'Student 3': 'John',
	})
);
