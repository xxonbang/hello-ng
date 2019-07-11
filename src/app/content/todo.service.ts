import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Todo } from '../../model/Todo';

@Injectable({
  providedIn: 'root'
})

export class TodoService {

  constructor(private http: HttpClient) { }

  getAllTodos(): Observable<Array<Todo>> {
   return this.http.get<Array<Todo>>('https://jsonplaceholder.typicode.com/todos');
  }
}
