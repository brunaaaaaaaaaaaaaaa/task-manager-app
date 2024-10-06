import { Component } from '@angular/core';
import { TaskService } from '../task.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-task-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './task-form.component.html',
  styleUrl: './task-form.component.css'
})
export class TaskFormComponent {
  taskTitle: string = '';

  constructor(private taskService: TaskService) {}

  onSubmit() {
    const newTask = { title: this.taskTitle, completed: false};
    this.taskService.addTask(newTask).subscribe(response => {
      console.log('Task added:', response);
      this.taskTitle = '';
    });
  }
}
