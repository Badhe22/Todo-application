
import { Component, Input, Output, EventEmitter ,OnInit} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { Todo } from '../todo.model'; 
import { IdService } from '../id.service';

@Component({
  standalone:true,
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
  imports: [FormsModule, CommonModule] 
})

export class TodoListComponent {
  @Input() todos: Todo[] = [];
  newTodoTitle = '';
  editedTodo: Todo | null = null;

  constructor(private router: Router, private idService: IdService) {}

  addOrEditTodo(): void {
    if (this.editedTodo) {
      
      const index = this.todos.findIndex(todo => todo.id === this.editedTodo!.id);
      if (index !== -1) {
        this.todos[index].title = this.newTodoTitle;
        this.editedTodo = null; 
        this.newTodoTitle = ''; 
      }
    } else {
     
      if (this.newTodoTitle.trim()) {
        const newTodo: Todo = {
          id: this.idService.getNextId(),
          title: this.newTodoTitle,
          completed: false
        };
        this.todos.push(newTodo);
        this.newTodoTitle = ''; 

        
        // this.router.navigate(['home/todo-list/add', newTodo.id]);
      }
    }
  }

  editTodo(todo: Todo): void {
    this.editedTodo = todo;
    this.newTodoTitle = todo.title; 
    
    this.router.navigate(['home/todo-list/edit', todo.id]);
  }

  deleteTodo(id: number): void {
    this.todos = this.todos.filter(todo => todo.id !== id);
  }
}