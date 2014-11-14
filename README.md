#AJAX & JSON APIs

Lot's of acronyms here, but you should be able to appreciate the importance of each by the end of the lesson

##Objectives
By the end of the lesson, you should be able to...

* Design a RESTful JSON API
* Retrieve Data from the API
* Use JQuery to append data to HTML elements
* Contrast how Handlebars can refactor your code
* Send data to the API and, on success, maintain state between the DB and the DOM

##AJAX
It allows us to easily send and recieve data to and from our server without reloading the page.
 
 * Go to an example [JSBin](http://jsbin.com/qamocegowe/7/edit?html,js,output) project
 * GOAL: understand the code


##JSON API
We want to be able to respond to our AJAX requests with the exact data it needs

* GOAL: Compare the differences in the instruments vs. the books controller

##SPA CRUD
Single-page app's (SPAs) are made possible due to asynchronicity. They provide fluid user experiences akin to native applications.

Discussion Questions
* Can you articulate the differences between a typical API and a JSON API
* When most people refer to "API's" do you think they are refering to 
* What are the implications of have a centralized API? 
 
##Exercise

 We will work in pairs to leverage our JSON API and create a SPA.

###Setup

* Run `bundle`
* Run `rake db:create db:migrate db:seed`

###Fill the library

1) Create a `loadBooks` function in the **books.js** file that fetches all the the books in the database 

For help, you can always reference the [JSBin](http://jsbin.com/qamocegowe/7/edit?html,js,output) example on hitting the OMDB API with AJAX.

* Get an AJAX GET request to /books working
* When the responce is recieved (aka done) you will need to append the data to the page:
    * Create an empty unordered list
    * Loop through the AJAX response and on each iteration create an li that contains the book's title and author. The format should be "Book by Author"
    * Append the li to the ul
    * After all the li's have been appended to the ul, you can then append the ul to 

2) Have the function execute once the document is ready

###Refactor Our Code with Handlebars

* Add `gem 'handlebars_assets'`
* Run `bundle`
* In your `assets/javascripts` create a folder called `templates`
* Make sure your application.js looks something like this:

```
//= require jquery
//= require jquery_ujs
//= require handlebars.runtime
//= require turbolinks
//= require_tree ./templates
//= require_tree .
```
* Inside templates create a folder called `books`
* Inside books create a file called `book.hbs`
* In the `loadBooks` function reference your template using `HandlebarsTemplates["books/book"](book)
    * HandlebarsTemplates is a variable that now exists in the global namespace
    * It is a object that can take, as a key, the path the template we want to use
    * We then can pass in the object we want to use in our template

###Add to our Library

* Comment the line `protect_from_forgery with: :exception` in your **application_controller.rb** file
* In home.html.erb create two input forms and a button
    * Add `onclick=Library.addBook()` on the button
* Build on the function called `Library.addBook`
    * Send a post request, using AJAX to `/books` so that you can add a book
* Build on the `Library.addBook` function so that you are sending the input values in your AJAX request
    * On done clear the input values and call `Library.loadBooks()` to reload your books
    * You may see duplicate lists. If so, edit the loadBooks function so that the first thing it does is clear out the current books on the page.

###Bonus

* Add a delete button next to each book that sends an AJAX request to delete the book you are targeting
* Hint: you will need to have access to the book's Id.
    * Tip: try adding the book's Id into a `data-atr` tag in the `li` element 
