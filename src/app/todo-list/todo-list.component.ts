// import { Component, Input, Output, EventEmitter } from '@angular/core';
// import { FormsModule} from '@angular/forms';
// import { CommonModule } from '@angular/common';


// @Component({
//   selector: 'app-todo-list',
//   standalone: true,
//   imports: [FormsModule,CommonModule],
//   template: `
//     // <h2>Todo List</h2>
//     // <input [(ngModel)]="newTodoTitle" type="text" placeholder="Enter Todo List">
//     // <button (click)="addTodo()">Add Todo</button>
    
//     // <ul>
//     //   <li *ngFor="let todo of todos">
//     //     {{ todo.title }}
//     //     <button (click)="deleteTodo(todo.id)">Delete</button>
//     //      <button (click)="editTodo()">Edit</button>
//     //   </li>
      
//     // </ul>
//   `,
//   styles: [`
//     ul {
//       list-style-type: none;
//       padding: 0;
//     }
//     li {
//       margin-bottom: 10px;
//     }
//     button {
//       margin-left: 10px;
//       background-color:yellow;
      
//     }
//   `]
// })

// export class TodoListComponent {
//   @Input() todos: { id: number, title: string, completed: boolean }[] = [];
//   @Output() delete = new EventEmitter<number>();

//   newTodoTitle = '';

//   deleteTodo(id: number): void {
//     this.todos = this.todos.filter(todo => todo.id !== id);
//   }

//   addTodo(): void {
//     const newTodo = {
//       id: this.todos.length + 1,
//       title: this.newTodoTitle,
//       completed: false
//     };
//     this.todos.push(newTodo);
//     this.newTodoTitle = '';
//   }
// }



import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Todo } from '../todo.model'; // Adjust the path based on your project structure

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [FormsModule, CommonModule],
  template: `
    <h2>Todo List</h2>
    <input [(ngModel)]="newTodoTitle" type="text" placeholder="Enter Todo List">
    <button (click)="addTodo()">Add Todo</button>
    
    <ul>
      <li *ngFor="let todo of todos">
        {{ todo.title }}
        <button (click)="deleteTodo(todo.id)">Delete</button>
        <button (click)="editTodo(todo)">Edit</button>
        <div *ngIf="todo.isEditing">
          <input [(ngModel)]="editedTodoTitle" type="text">
          <button (click)="saveEdit(todo)">Save</button>
          <button (click)="cancelEdit(todo)">Cancel</button>
        </div>
      </li>
    </ul>
  `,
  styles: [`
    ul {
      list-style-type: none;
      padding: 0;
    }
    li {
      margin-bottom: 10px;
    }
    button {
      margin-left: 10px;
      background-color: yellow;
    }
  `]
})
export class TodoListComponent {
  @Input() todos: Todo[] = [];
  @Output() delete = new EventEmitter<number>();

  newTodoTitle = '';
  editedTodoTitle = '';

  deleteTodo(id: number): void {
        this.todos = this.todos.filter(todo => todo.id !== id);
      }


 

  addTodo(): void {
    const newTodo: Todo = {
      id: this.todos.length + 1,
      title: this.newTodoTitle,
      completed: false
    };
    this.todos.push(newTodo);
    this.newTodoTitle = '';
  }

  editTodo(todo: Todo): void {
    todo.isEditing = true;
    this.editedTodoTitle = todo.title; 
  }

  saveEdit(todo: Todo): void {
    todo.title = this.editedTodoTitle;
    todo.isEditing = false;
    this.editedTodoTitle = '';
  }

  cancelEdit(todo: Todo): void {
    todo.isEditing = false;
    this.editedTodoTitle = ''; 
  }
}
