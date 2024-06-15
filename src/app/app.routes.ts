import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TodoListComponent } from './todo-list/todo-list.component';
export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'home/todo-list', component: TodoListComponent },
  //{ path: 'home/todo-list/add/:id', component: TodoListComponent }

{ path: 'home/todo-list/edit/:id', component: TodoListComponent }
];
