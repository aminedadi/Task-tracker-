import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Task } from '../Task';

const httpOption = {
  headers : new HttpHeaders({
    'content-type' : 'application/json',
  }),
};

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private apiUrl = 'http://localhost:5000/tasks'
  constructor(private http:HttpClient) { }

  addTask(task: Task): Observable<Task> {
    return this.http.post<Task>(this.apiUrl, task, httpOption);
  }
  getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(this.apiUrl) ;
  }
  deleteTasks(task : Task): Observable<Task[]> {
    const url = `${this.apiUrl}/${task.id}`;
    return this.http.delete<Task[]>(url) ;
  }
  updateTaskReminder(task : Task): Observable<Task[]> {
    const url = `${this.apiUrl}/${task.id}`;
    return this.http.put<Task[]>(url, task, httpOption) ;
  }
  
}
