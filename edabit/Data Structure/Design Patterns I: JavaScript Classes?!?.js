function Book(author, published) {
	this.author = author;
	this.published = published;
}

const Author = {
	name: '',
	books: '',
};

const Publisher = new (function (authors, books) {
	this.authors = authors;
	this.books = books;
})();

class Review {
	constructor(rating, user) {
		this.rating = rating;
		this.user = user;
	}
}

const Bookstore =  (function (books, prices) {
	this.books = books;
	this.prices = prices;
})();


const book = new Book();
const review = new Review();

console.log(book instanceof Book, true);
console.log(book.hasOwnProperty('author'), true, 'The class Book needs to have a value for author.');
console.log(book.hasOwnProperty('published'), true, 'The class Book needs to have a value for published.');
console.log(Author.hasOwnProperty('name'), true, 'The class Author needs to have a value for name.');
console.log(Author.hasOwnProperty('books'), true, 'The class Author needs to have a value for books.');
console.log(Publisher.hasOwnProperty('authors'), true, 'The class Publisher needs to have a value for authors.');
console.log(Publisher.hasOwnProperty('books'), true, 'The class Publisher needs to have a value for books.');
console.log(review instanceof Review, true);
console.log(review.hasOwnProperty('rating'), true, 'The class Review needs to have a value for rating.');
console.log(review.hasOwnProperty('user'), true, 'The class Review needs to have a value for user.');

if (typeof Bookstore === 'undefined') {
	return null;
} else {
	console.log(Bookstore.hasOwnProperty('books'), true, 'The class Bookstore needs to have a value for books.');
	console.log(Bookstore.hasOwnProperty('prices'), true, 'The class Bookstore needs to have a value for prices.');
}
