//Namespace
var Library = {}

// Get request
Library.loadBooks = function() { // Fetch all the books
  $("#books").remove(); //clear out books
  $.get("/books").done(function(books){ // AJAX request
    var ul = $("<ul>").attr("id", "books"); // Create a ul to use later
    books.forEach(function(book){ // iterate through the books our AJAX returned
      var li = $("<li>").text(book.title + " by "  + book.author); // Build an li with innerText based on the book data
      li.attr("data-atr-id", book.id); // add the book's id to the li's data-atr-id
      ul.append(li); // append the li to the ul
      var dltBtn = $("<button>").text("delete"); // create a corresponding delete button
      dltBtn.on("click", Library.deleteBook); // create an event listener for the delete button
      ul.append(dltBtn); // append the delete button to the ul
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
Library.deleteBook = function() {
  var dis = this;
  var targetId = $(this).prev("li").attr("data-atr-id");
  $.ajax({
    type: 'delete',
    url: '/books/' + targetId
  }).done(function(data){
    $(dis).prev("li").remove();
    $(dis).remove();
  })
}
