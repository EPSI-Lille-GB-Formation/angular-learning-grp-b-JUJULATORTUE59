import { Injectable } from '@angular/core';
import {InMemoryDbService, RequestInfo} from 'angular-in-memory-web-api'
import { TODOS } from './mock-todo';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService{

  createDb() { 
    const todos = TODOS;
    return {todos}
    //reuete url : api/todos
  }
}
