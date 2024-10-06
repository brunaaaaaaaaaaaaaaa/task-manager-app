import { Component, Input } from '@angular/core'; 
import { Task } from '../models/task.model';
import { TaskService } from '../task.service'; 
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-task-item',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent {
  @Input() task!: Task;
  
  
  newTask = {
    title: '',
    completed: false
  };

  constructor(private taskService: TaskService) {}  

  onSubmit() {
   
    this.taskService.addTask(this.newTask).subscribe(response => {
      console.log('Task saved:', response);

      this.newTask = { title: '', completed: false };  
    }, error => {
      console.error('Error saving task:', error);
    });
  }
}


