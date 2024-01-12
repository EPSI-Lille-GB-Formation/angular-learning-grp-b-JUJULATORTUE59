import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Todos } from './todo/todo';
import { Observable ,catchError, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  todosUrl : string = 'api/todos';

  constructor(private http: HttpClient) { }

  getTodoList(): Observable <Todos[]>{
    return this.http.get<Todos[]>(this.todosUrl).pipe(
      tap(todolist => console.log(todolist)),
      catchError(error => {
        console.log(error);
        return of([])
      }
      )
    );
  }

  getTodoById(todoId: number): Observable<Todos>{
    return this.http.get<Todos>(`${this.todosUrl}/${todoId}`).pipe(
      catchError(error => {
        console.log(error);
        return of();
      })
    )
  }

}
