import { Component, OnInit } from '@angular/core';
import { Book } from './book';
import { BookService } from './book.service';
import { Pen } from './pen';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit {

  bookListFromService:Book[];
  books:Book[];
  errorMessage:string;
  selected_book:string = ""; 
  selected_pen:string = "";
  selected_book_common:string = "";
  
  pens:Pen[];
  // pen:Pen;

  booksFromCommonJson:Book[];

  movies:string[];

  constructor(private bookService: BookService) { }

  getBooks() {
    this.bookService.getBooks().subscribe(
      books => this.books = books,
      error => this.errorMessage = <any>error);
  }

  getPens(){
    this.bookService.getPens().subscribe(
      pens => this.pens=pens,
      error => this.errorMessage += <any>error
    );
  }

// this.booksFromCommonJson = bookPen['Books'],
// bookPen => console.log(bookPen['Books']),

  commonJsonObject;

  getBookPen(){
    this.bookService.getBookPen().subscribe(
      bookPen => {
        console.log("Data From service Class");
        console.log(bookPen);
        this.booksFromCommonJson = bookPen['Books'];
        // console.log(this.booksFromCommonJson);
        this.movies = bookPen['Movies'];
        // console.log(this.movies);
        this.commonJsonObject = bookPen;
      },
      error => console.log(error.errorMessage)
    );
  }


  ngOnInit() {
    // this.bookListFromService = this.bookService.getAllBooks();
    this.getBooks();
    this.getPens();
    this.getBookPen();
  }

}
