import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Task } from './models/task.model';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private apiUrl = 'http://localhost:3000/list';

  constructor(private http: HttpClient) { }

  getTasks():Observable<Task[]> {
    return this.http.get<Task[]>(this.apiUrl);
  }

  addTask(task: { title: string; completed: boolean }): Observable<any> {
    return this.http.post(this.apiUrl, task);
  }
}
