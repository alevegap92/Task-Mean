import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { catchError, retry } from 'rxjs/operators';

import { Task } from '../../models/Task';
/*
  Generated class for the TasksProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()

export class TasksProvider {

  constructor(public http: HttpClient) {
    console.log('Hello TasksProvider Provider');
  }
  getTasks() {
    return this.http.get<Task>('http://localhost:3000/api/tasks')
      .pipe(
      retry(3), // retry a failed request up to 3 times
      catchError(this.handleError) // then handle the error
      );
  }
}
