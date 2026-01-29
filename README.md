# Library App

A simple Library application built as part of **The Odin Project** curriculum.  
The app allows users to add, display, update, and remove books using JavaScript and DOM manipulation.

## Features

- Add new books with title, author, number of pages, and read status
- Display all books as cards in the UI
- Toggle read status for each book
- Delete books from the library
- Uses unique IDs to track books

## Demo

You can run the project locally by opening the `index.html` file in your browser.

## Built With

- HTML
- CSS
- JavaScript (Vanilla JS)
- DOM Manipulation

## How It Works

- Books are stored in an array called `myLibrary`
- Each book is created using a `Book` constructor
- Every book has a unique ID generated with `crypto.randomUUID()`
- The UI is dynamically rendered based on the contents of the library array

### Book Object

Each book contains the following properties:

- `id`
- `title`
- `author`
- `pages`
- `read`

The read status can be toggled using a prototype method.

## Project Structure

├── index.html
├── style.css
├── library.js
└── README.md

## Usage

1. Click the **New Book** button
2. Fill in the book details
3. Submit the form to add the book to the library
4. Use the **Read** button to toggle read status
5. Use the **Delete Book** button to remove a book

## Learning Outcomes

- Working with constructor functions and prototypes
- Managing application state with arrays
- Dynamic DOM creation and updates
- Handling user events
- Using dialogs/modals for form input

## Acknowledgements

- [The Odin Project](https://www.theodinproject.com/) for the project idea and guidance

## Live Link
https://syedtanzim.github.io/Library/