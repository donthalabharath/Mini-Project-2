db.books.insertMany([
  {
    bookId: 1,
    title: "Java Programming",
    author: "James",
    status: "Available"
  },
  {
    bookId: 2,
    title: "Python Basics",
    author: "Guido",
    status: "Issued"
  },
  {
    bookId: 3,
    title: "HTML & CSS",
    author: "John",
    status: "Available"
  }
]);

// Display all books
db.books.find();

// Find available books
db.books.find({ status: "Available" });

// Update book status
db.books.updateOne(
  { bookId: 1 },
  { $set: { status: "Issued" } }
);

// Delete a book
db.books.deleteOne({ bookId: 2 });

// Display final records
db.books.find();