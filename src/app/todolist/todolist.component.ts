import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit {
  taskArray = [
    { taskName: 'Brush teeth', isCompleted: false, isEditing: false }
  ];

  constructor() { }

  ngOnInit(): void { }

  onSubmit(form: NgForm) {
    if (form.valid) {
      this.taskArray.push({
        taskName: form.controls['task'].value.trim(),
        isCompleted: false,
        isEditing: false
      });
      form.reset();
    }
  }

  onDelete(index: number) {
    this.taskArray.splice(index, 1);
  }

  onCheck(index: number) {
    this.taskArray[index].isCompleted = !this.taskArray[index].isCompleted;
  }

  onEdit(index: number) {
    this.taskArray[index].isEditing = true;
  }

  onSave(index: number) {
    const taskName = this.taskArray[index].taskName.trim();
    if (taskName) {
      this.taskArray[index].isEditing = false;
    } else {
      alert('Task name cannot be empty!');
    }
  }

  onCancel(index: number) {
    this.taskArray[index].isEditing = false;
    // Optionally revert changes if a temporary backup is implemented
  }
}
