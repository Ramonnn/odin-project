const myLibrary = [
	new Book("Author 1", "Title 1", 100, "Yes"),
	new Book("Author 2", "Title 2", 200, "No"),
	new Book("Author 3", "Title 3", 300, "Yes"),
];

function Book(author, title, pages, read = "Yes") {
	this.author = author;
	this.title = title;
	this.pages = pages;
	this.read = read;
}

function renderLibrary() {
	const books = document.querySelector(".all-books");
	books.innerHTML = "";

	myLibrary.forEach((book, index) => {
		const book_card = document.createElement("div");
		const remove_book = document.createElement("button");
		const book_read = document.createElement("button");

		book_card.classList.add("book_card");
		book_card.textContent = `${book.title} by ${book.author}, ${book.pages} pages, read? -> ${book.read}`;

		remove_book.textContent = "Remove Book";
		remove_book.classList.add("remove_book");
		remove_book.dataset.index = index;

		book_read.textContent = book.read === "Yes" ? "Mark as Unread" : "Mark as Read";
		book_read.classList.add("read_book");
		book_read.dataset.index = index;

		book_card.appendChild(remove_book);
		book_card.appendChild(book_read);
		books.appendChild(book_card);
	});
}

function addBookToLibrary(book) {
	myLibrary.push(book);
	renderLibrary();
}

const openbtn = document.querySelector(".add_book");
openbtn.addEventListener("click", () => {
	const book_dialog = document.querySelector(".book_dialog");
	book_dialog.show();
});

const closebtn = document.querySelector(".close_dialog");
closebtn.addEventListener("click", (event) => {
	event.preventDefault();

	const book_dialog = document.querySelector(".book_dialog");
	const author = document.querySelector(".author").value;
	const title = document.querySelector(".title").value;
	const pages = document.querySelector(".pages").value;

	if (author && title && pages) {
		const new_book = new Book(author, title, pages);
		addBookToLibrary(new_book);

		document.querySelector(".author").value = "";
		document.querySelector(".title").value = "";
		document.querySelector(".pages").value = "";

		book_dialog.close();
	} else {
		alert("Not all fields were filled in, closing without adding a book.");
		book_dialog.close();
	}
});

document.querySelector(".container").addEventListener("click", (event) => {
	if (event.target.classList.contains("remove_book")) {
		const bookIndex = event.target.dataset.index;
		myLibrary.splice(bookIndex, 1);
		renderLibrary();
	}
	if (event.target.classList.contains("read_book")) {
		const bookIndex = event.target.dataset.index;
		myLibrary[bookIndex].read = myLibrary[bookIndex].read === "Yes" ? "No" : "Yes";
		renderLibrary();
	}
});

renderLibrary();
