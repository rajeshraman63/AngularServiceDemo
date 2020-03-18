import { Injectable } from '@angular/core';

import { Book } from './book';
import { HttpClient } from '@angular/common/http';
import { Observable, ObservableLike } from 'rxjs';
import { Pen } from './pen';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  private booksUrl = './assets/books.json';
  private penUrl = './assets/pen.json'
  private bookPenUrl = './assets/book-pen.json';

  constructor(private http: HttpClient) { }

  getBooks(): Observable<Book[]> {
    return this.http.get<Book[]>(
      this.booksUrl
    );
  }

  getPens(): Observable<Pen[]> {
    return this.http.get<Pen[]>(
      this.penUrl
    );
  }


  getBookPen():Observable<any>{
    return this.http.get<any>(
      this.bookPenUrl
    )
  }

  // getAllBooks():Book[] { // returns an Array of  types
  //   return [{"id": 1, "name": "HTML 5"},
  //           {"id": 2, "name": "CSS 3"},
  //           {"id": 3, "name": "Java Script"},
  //           {"id": 4, "name": "Ajax Programming"}];
  // }

}
