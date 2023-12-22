import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { TODOS } from './mock-todo';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  template: `
  <div class="container">
      <h1>Liste des chose a faire</h1>
      
      <ul>
        <ng-container *ngFor="let todo of todolist">
        <li *ngIf="!todo.isCompleted">{{ todo.title }}</li>
      </ng-container>
    </ul>
  </div>  
      `,
  styles: [],
})
export class AppComponent {

  todolist = [TODOS];
  constructor() {
    console.table(this.todolist);
  }
  selectodo(id: number){
    id = id++;
    return this.todolist[id];
  }
}


