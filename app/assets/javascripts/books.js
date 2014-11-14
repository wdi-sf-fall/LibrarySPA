//Namespace
var Library = {}

// Get request
Library.loadBooks = function() { // Fetch all the books
  $("#books").remove(); //clear out books
  $.get("/books").done(function(books){ // AJAX request
    var ul = $("<ul>").attr("id", "books"); // Create a ul to use later
    books.forEach(function(book){ // iterate through the books our AJAX returned
      var bookHTML = HandlebarsTemplates["books/book"](book)
      ul.append(bookHTML)
    })
    $("#container").append(ul);
  })
}

Library.addBook = function() {
  var title = $("#book-title-input").val(); // get title
  $("#book-title-input").val(""); // clear title
  var author = $("#book-author-input").val(); // get author
  $("#book-author-input").val(""); // clear author
  $.post('/books', {book: {title: title, author: author} }).done(function(book) {
    Library.loadBooks();
  }); 
}

//Delete a book
Library.deleteBook = function(targetId) {
  $.ajax({
    type: 'delete',
    url: '/books/' + targetId
  }).done(function(data){
    dis = data
    $("#book-" + data.id).remove();
  })
}
