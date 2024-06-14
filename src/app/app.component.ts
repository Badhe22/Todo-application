import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TodoListComponent} from './todo-list/todo-list.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { routes } from './app.routes';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CommonModule, RouterModule,TodoListComponent,FormsModule,HomeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title= 'app';
  
}
