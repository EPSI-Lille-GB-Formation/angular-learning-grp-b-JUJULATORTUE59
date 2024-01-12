import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TODOS } from '../mock-todo';
import { TodoListDirective } from '../todo-list.directive';
import { TodoComponent } from '../todo/todo.component';
import { TodoService } from '../todo.service';
import { Todos } from '../todo';

@Component({
  selector: 'todo-list',
  standalone: true,
  imports: [CommonModule, TodoListDirective, TodoComponent],
  template: `
    <h1>Liste des chose a faire</h1>

      <a href="#" role="button" [class.secondary] = "!completedFilter && !completedAll" (click)="onClickTodo()">A faire </a>
      <a href="#" role="button" [class.secondary] = "completedFilter && !completedAll" (click)="onClickTodoCpmleted()">Terminée</a>
      <a href="#" role="button" [class.secondary] = "completedAll"(click)="onClickTodoAfficher()">Afficher tous</a>
      <ng-container *ngFor="let todo of todolist">
      <ng-container *ngIf=" todo.isCompleted === completedFilter || completedAll">
        <todo [value] = "todo" />
      </ng-container>
      </ng-container>
      `,
  styles : [
    ` `
  ]    
})
export class TodoListComponent {
  todolist: Todos[] = TODOS;
  completedFilter : boolean = false;
  completedAll : boolean = false;

  constructor(private todoService: TodoService) {}

  ngInit() : void{
    this.todoService.getTodoList().subscribe(todos => this.todolist = todos)
  }

  onClickTodo(): void{
    this.completedFilter = false;
    this.completedAll = false;
  }
  onClickTodoCpmleted(): void{
    this.completedFilter = true;
    this.completedAll = false
  }
  onClickTodoAfficher(): void{
    this.completedAll = true;
  }
}
