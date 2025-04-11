window.addEventListener("DOMContentLoaded", () => {
  const list = document.getElementById("book-list");
  // Fetch all books and display them in the list
  fetch("https://67eda8114387d9117bbe47cb.mockapi.io/book")
    .then(res => res.json())
    .then(data => {
      data.forEach(book => {
        const li = document.createElement("li");
        li.innerHTML = `<a href="detail.html?id=${book.id}">${book.title}</a><button class="edit-btn" onclick="location.href='edit.html?id=${book.id}'">Edit</button><button class="delete-btn" onclick="deleteBook(${book.id})">Delete</button>`;
        list.appendChild(li);
      });
    });
});

// Global function to delete a book (called by Delete buttons)
function deleteBook(id) {
  if (!confirm("Are you sure you want to delete this book?")) return;
  fetch(`https://67eda8114387d9117bbe47cb.mockapi.io/book/${id}`, {
    method: "DELETE"
  })
  .then(() => {
    alert("Book deleted successfully!");
    // Refresh the list after deletion
    window.location.reload();
  });
}
