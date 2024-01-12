import { Component } from '@angular/core';
import { TODOS } from '../../todo/mock-todo';
import { TodoService } from '../../todo.service';
import { Todos } from '../../todo/todo';
import { CommonModule } from '@angular/common';
import { TodoListDirective } from '../../directives/todo-list.directive';
import { TodoComponent } from '../todo/todo.component';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'task',
  standalone: true,
  imports: [CommonModule, TodoListDirective, TodoComponent],
  template:`
  <h1>Afficher la tâche cliué</h1>  

  <a href="#" role="button"(click)="goToHomePage()">Page d'acceuil</a>

  <p>Id : {{this.task?.id}}</p>
  <p>title : {{this.task?.title}}</p>
  <p>Contenut : {{this.task?.content}}</p>
  <p>auteur : {{this.task?.author}}</p>
  <p>date de création : {{this.task?.createdAt}}</p>
  <p>date d'accomplissement : {{this.task?.completedAt}}</p>
  `,
})
export class TaskComponent {
  task: Todos| undefined

  constructor(
    private todoService: TodoService,
    private route: ActivatedRoute,
    private router: Router
  )  {}
  ngOnInit(){
    const taskId: string|null = this.route.snapshot.paramMap.get('id');
    if (taskId){
      this.todoService.getTodoById(+taskId).subscribe(task => this.task = task)
    }
  }

  goToHomePage(){
    this.router.navigate([''])
  }
}
