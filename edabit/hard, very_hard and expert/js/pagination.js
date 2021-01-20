// Your task is to create a class to handle paginated content in a website. A pagination is used to divide long lists of content in a series of pages.

// The pagination class will accept 2 parameters:
// items (default: []): An array of contents to paginate.
// pageSize (default: 10): The amount of items to show in each page.
// So for example we could initialize our pagination like this:
// const alphabetArray = "abcdefghijklmnopqrstuvwxyz".split("");
// const p = new Pagination(alphabetArray, 4);
// And then use the method getVisibleItems to show the contents of the paginated array.
// console.log(p.getVisibleItems()); // ["a", "b", "c", "d"]
// You will have to implement various methods to go through the pages such as:
// prevPage
// nextPage
// firstPage
// lastPage
// goToPage
// Here's a continuation of the example above using nextPage and lastPage:
// p.nextPage();
// console.log(p.getVisibleItems());
// // ["e", "f", "g", "h"]
// p.lastPage();
// console.log(p.getVisibleItems());
// // ["y", "z"]
// Notes
// You don't have to use ES6 class if you don't want to
// The second argument (pageSize) could be a float, in that case just convert it to an int (this is also the case for the goToPage method)
// The methods used to change page should be chainable, so you can call them one after the other like this: p.nextPage().nextPage();
// Please remove the comments I provided before publishing your solution.

class Pagination {
	constructor(items = [], page_size = 10) {
		this.current_page = 1;
		this.items = items;
		this.page_size = parseInt(page_size);
		this.total_pages = items.length > 0 ? Math.ceil(items.length / this.page_size) : 1;
	}
	first_page() {
		this.current_page = 1;
		return this;
	}
	last_page() {
		this.current_page = Math.ceil(this.items.length / this.page_size);
		this.current_page = this.current_page == 0 ? 1 : this.current_page;
		return this;
	}
	get_visible_items() {
		return [...this.items].splice(this.current_page * this.page_size - this.page_size, this.page_size);
	}
	prev_page() {
		this.current_page -= this.current_page == 1 ? 0 : 1;
		return this;
	}
	next_page() {
		this.current_page += this.current_page == this.total_pages ? 0 : 1;
		return this;
	}
	go_to_page(page) {
		if (page > this.total_pages) {
			this.current_page = this.total_pages;
		} else if (page < 1) {
			this.current_page = 1;
		} else {
			this.current_page = page;
		}
		return this;
	}
}

// Checking correct default values
const defaultPagination = new Pagination();
console.log(defaultPagination.page_size); // 10
console.log(defaultPagination.items.length); // 0
console.log(Array.isArray(defaultPagination.items)); // true
console.log('');

// Checking correct handling of float numbers as pageSize
// REMOVED no more float tests
console.log(new Pagination(new Array(0), 8.8).page_size); // 8
console.log('');

// Checking correct amount of pages
console.log(new Pagination(new Array(0), 10).total_pages); //1
console.log(new Pagination(new Array(1), 10).total_pages); //1
console.log(new Pagination(new Array(10), 10).total_pages); //1
console.log(new Pagination(new Array(11), 10).total_pages); //2
console.log('');

// Checking correct implementation of methods that change page
const p1 = new Pagination(new Array(69), 5);
console.log(p1.next_page().current_page); // 2
console.log(p1.last_page().current_page); // 14
console.log(p1.next_page().current_page); // 14
console.log(p1.prev_page().current_page); // 13
console.log(p1.first_page().current_page); // 1
console.log(p1.prev_page().current_page); // 1
console.log(p1.go_to_page(99).current_page); // 14
console.log(p1.go_to_page(4).current_page); // 4
console.log(p1.go_to_page(-99).current_page); // 1
console.log('');

// Checking correct visible items returned in various pages
const ids = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const p2 = new Pagination(ids, 5);
console.log(p2.get_visible_items()); // [0, 1, 2, 3, 4]
console.log(p2.next_page().get_visible_items()); // [5, 6, 7, 8, 9]
console.log(p2.next_page().get_visible_items()); // [10]
