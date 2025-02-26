function assign_person_to_job(names, jobs) {
	return names.reduce((obj, val, index) => {
		obj[val] = jobs[index];
		return obj;
	}, {});
}

const names = ['Dennis', 'Vera', 'Mabel', 'Annette', 'Sussan'];
const jobs = ['Butcher', 'Programmer', 'Doctor', 'Teacher', 'Lecturer'];

console.log(assign_person_to_job(names, jobs));
