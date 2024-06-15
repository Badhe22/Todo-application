import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  template: `
    <h1>Welcome to ToDo App!</h1>
    <button (click)="navigateToTodoList()">Create List</button>
  `,
  styles: [`
    button {
      margin-top: 10px;
      padding: 10px;
      font-size: 20px;
      
      
    }
    h1{
    color:blue;
    font-size:45px;
    
    }
  `]
})
export class HomeComponent {

  constructor(private router: Router) {}

  navigateToTodoList(): void {
    this.router.navigateByUrl('/home/todo-list');
  }

}
