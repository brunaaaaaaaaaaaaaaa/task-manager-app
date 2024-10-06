import { Component } from '@angular/core';
import { TaskService } from '../task.service';
import { OnInit } from '@angular/core';
import { NgFor } from '@angular/common';
import { Task } from '../models/task.model';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [NgFor],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css'
})
export class TaskListComponent implements OnInit {
  tasks: Task[] = [];

  constructor(private taskService: TaskService) {}
  ngOnInit(): void{
    this.taskService.getTasks().subscribe((data: Task[]) => {
      this.tasks = data.slice(0,10);
    });
  }
}
