class Pagination {
	constructor(items = [], pageSize = 10) {
		this.items = items;
		this.pageSize = parseInt(pageSize);
		this.totalPages = items.length > 0 ? Math.ceil(items.length / pageSize) : 1;
		this.currentPage = 1;
	}

	prevPage() {
		this.currentPage -= this.currentPage > 2 ? 1 : 0;
		return this;
	}

	nextPage() {
		this.currentPage += this.currentPage < this.pageSize ? 1 : 0;
		return this;
	}

	firstPage() {
		this.currentPage = 1;
		return this;
	}

	lastPage() {
		this.currentPage = this.totalPages;
		return this;
	}

	goToPage(page) {
		page = parseInt(page);
		this.currentPage = page > this.totalPages ? this.totalPages : page < 1 ? 1 : page;
		return this;
	}

	getVisibleItems() {
		const total_items = this.currentPage * this.pageSize;
		return this.items.slice(total_items - this.pageSize, total_items);
	}
}

const defaultPagination = new Pagination();
console.log(defaultPagination.pageSize, 10);
console.log(defaultPagination.items.length, 0);
console.log(Array.isArray(defaultPagination.items), true);

// // Checking correct handling of float numbers as pageSize
// // REMOVED no more float tests
console.log(new Pagination(new Array(0), 8.8).pageSize, 8);

// // Checking correct amount of pages
console.log(new Pagination(new Array(0), 10).totalPages, 1);
console.log(new Pagination(new Array(1), 10).totalPages, 1);
console.log(new Pagination(new Array(10), 10).totalPages, 1);
console.log(new Pagination(new Array(11), 10).totalPages, 2);

// // Checking correct currentPage
console.log(new Pagination(new Array(0), 10).currentPage, 1);
console.log(new Pagination(new Array(1), 10).currentPage, 1);
console.log(new Pagination(new Array(11), 10).currentPage, 1);

// Checking correct implementation of methods that change page
const p1 = new Pagination(new Array(69), 5);
console.log(p1.nextPage().currentPage, 2);
console.log(p1.lastPage().currentPage, 14);
console.log(p1.nextPage().currentPage, 14);
console.log(p1.prevPage().currentPage, 13);
console.log(p1.firstPage().currentPage, 1);
console.log(p1.prevPage().currentPage, 1);
console.log(p1.goToPage(99).currentPage, 14);
console.log(p1.goToPage(4).currentPage, 4);
// REMOVED no more float tests
console.log(p1.goToPage(6.5).currentPage, 6);
console.log(p1.goToPage(-99).currentPage, 1);

// Checking correct visible items returned in various pages
const ids = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const p2 = new Pagination(ids, 5);
console.log(p2.getVisibleItems(), [0, 1, 2, 3, 4]);
console.log(p2.nextPage().getVisibleItems(), [5, 6, 7, 8, 9]);
console.log(p2.nextPage().getVisibleItems(), [10]);
