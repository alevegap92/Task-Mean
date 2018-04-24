import { HttpClient } from '@angular/common/http';
import { Injectable, } from '@angular/core';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import "rxjs/Rx";
import { Task } from '../../models/Task';
/*
  Generated class for the TasksProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/



@Injectable()
export class TasksProvider {

  domain: string = "http://localhost:3000";
  tasksUrl: string = 'http://localhost:3000/api/tasks';

  constructor(public http: HttpClient) {
    console.log('Hello TasksProvider Provider');
  }

  getTasks() {
    return this.http.get<Task>(`${this.domain}/api/tasks`)
   
  }

  deleteTask(id) {
    return this.http.delete<Task>(`${this.domain}/api/tasks/${id}`)
      .map(res => res);
  }

  addTask(newTask: Task) {
    return this.http.post<Task>(`${this.domain}/api/tasks`, newTask)
      .map(res => res);
  }
  updateTask(newTask) {
    return this.http.put<Task>(`${this.domain}/api/tasks/${newTask._id}`, newTask)
      .map(res => res)
  }
}
