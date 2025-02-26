function Book(author, published) {
	this.author = author;
	this.published = published;
}

const Author = {
	name: null,
	books: null,
};

const Publisher = new (function () {
	this.authors = 'null';
	this.books = 'null';
})();

class Review {
	constructor(rating, user) {
		this.rating = rating;
		this.user = user;
	}
}

const Bookstore = new (function () {
	this.books = null;
	this.prices = null;
})();

const book = new Book();
const review = new Review();

console.log(book instanceof Book);
console.log(book.hasOwnProperty('author'));
console.log(book.hasOwnProperty('published'));
console.log(Author.hasOwnProperty('name'));
console.log(Author.hasOwnProperty('books'));
console.log(Publisher.hasOwnProperty('authors'));
console.log(Publisher.hasOwnProperty('books'));
console.log(review instanceof Review);
console.log(review.hasOwnProperty('rating'));
console.log(review.hasOwnProperty('user'));

if (typeof Bookstore === 'undefined') {
	return null;
} else {
	console.log(Bookstore.hasOwnProperty('books'));
	console.log(Bookstore.hasOwnProperty('prices'));
}
