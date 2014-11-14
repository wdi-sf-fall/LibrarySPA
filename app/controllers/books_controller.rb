class BooksController < ApplicationController
  before_action :set_book, only: [:show, :update, :destroy]
  respond_to :json, :html

  def index
    respond_with Book.all
  end
 
  def create
    respond_with Book.create(book_params)
  end
 
  def show
    respond_with @book
  end
 
  def update
    respond_with @book.update(book_params)
  end
 
  def destroy
    respond_with @book.destroy
  end
 
  private
  def set_book
    @book = Book.find(params[:id])
  end
 
  def book_params
    params.require(:book).permit(:title, :author, :description, :isbn)
  end
 
end