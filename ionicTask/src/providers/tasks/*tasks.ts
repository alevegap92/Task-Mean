import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { catchError, retry } from 'rxjs/operators';

import { Task } from '../../models/*Task';
/*
  Generated class for the TasksProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()

export class TasksProvider {

  domain: string = "http://localhost:3000";

  constructor(public http: HttpClient) {
    console.log('Hello TasksProvider Provider');
  }
  getTasks() {
    return this.http.get<Task>(`${this.domain}/api/tasks`)
      .pipe(
      retry(3), // retry a failed request up to 3 times
      catchError(this.handleError) // then handle the error
      );
  }

  /** POST: add a new task to the database */
  addTask(task:Task): Observable<Task> {
  	 return this.http.post<Task>(`${this.domain}/api/tasks`, newTask)
    .pipe(
      catchError(this.handleError('addTask', task))
    );
  }

  /** DELETE: delete the task from the server */	
  deleteTask (id): Observable<{}> {
	  const url = `${this.domain}/api/tasks/${id}`; // example: DELETE api/heroes/42
	  return this.http.delete(url)
	    .pipe(
	      catchError(this.handleError('deleteTask'))
	    );
  }

  /** PUT: update the task on the server. Returns the updated task upon success. */
  updateTask(task:Task): Observable<Task> {
  return this.http.put<Task>(`${this.domain}/api/tasks`, newTask)
    .pipe(
      catchError(this.handleError('updateTask', Task))
    );
  }

}
