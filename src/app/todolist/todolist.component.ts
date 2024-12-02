// todolist.component.ts
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { TodoService , Todo} from '../services/todo.service';
import { AuthService } from '../services/auth.service';


@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit {
  taskArray: Todo[] = [];
  errorMessage: string = '';

  constructor(
    private todoService: TodoService,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {

    if (!this.authService.isLoggedIn()) {
      this.router.navigate(['/login']);
      return;
    }

    // Fetch todos
    this.loadTodos();
  }

  loadTodos() {
    this.todoService.getTodos().subscribe({
      next: (todos) => {
        this.taskArray = todos;
      },
      error: (error) => {
        console.error('Error fetching todos', error);
        // Handle unauthorized or other errors
        if (error.status === 401) {
          this.authService.logout();
          this.router.navigate(['/login']);
        }
      }
    });
  }

  onSubmit(form: NgForm) {
    if (form.valid) {
      const newTodo: Todo = {
        taskName: form.controls['task'].value.trim(),
        isCompleted: false
      };

      this.todoService.createTodo(newTodo).subscribe({
        next: (createdTodo) => {
          this.taskArray.push(createdTodo);
          form.reset();
        },
        error: (error) => {
          console.error('Error creating todo', error);
        }
      });
    }
  }

  onDelete(index: number) {
    const todo = this.taskArray[index];
    
    if (todo.id) {
      this.todoService.deleteTodo(todo.id).subscribe({
        next: () => {
          this.taskArray.splice(index, 1);
        },
        error: (error) => {
          console.error('Error deleting todo', error);
        }
      });
    }
  }

  onCheck(index: number) {
    const todo = this.taskArray[index];
    todo.isCompleted = !todo.isCompleted;

    if (todo.id) {
      this.todoService.updateTodo(todo).subscribe({
        error: (error) => {
          console.error('Error updating todo', error);
          // Revert the change if update fails
          todo.isCompleted = !todo.isCompleted;
        }
      });
    }
  }

  onEdit(index: number) {
    this.taskArray[index].isEditing = true;
  }

  onSave(index: number) {
    const todo = this.taskArray[index];
    const taskName = todo.taskName.trim();

    if (taskName) {
      if (todo.id) {
        this.todoService.updateTodo(todo).subscribe({
          next: () => {
            todo.isEditing = false;
          },
          error: (error) => {
            console.error('Error saving todo', error);
          }
        });
      }
    } else {
      alert('Task name cannot be empty!');
    }
  }

  onCancel(index: number) {
    this.taskArray[index].isEditing = false;
  }

  // Add logout method
  onLogout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}