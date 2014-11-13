class BooksController < ApplicationController
  before_action :set_book, only: [:show, :update, :destroy]

  def index
    render json: Book.all
  end
 
  def create
    render json: Book.create(book_params)
  end
 
  def show
    render json: @book
  end
 
  def update
    render json: @book.update(book_params)
  end
 
  def destroy
    render json: @book.destroy
  end
 
  private
  def set_book
    @book = Book.find(params[:id])
  end
 
  def book_params
    params.require(:book).permit(:title, :author, :description, :isbn)
  end
 
end