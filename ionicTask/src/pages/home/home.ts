import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TasksProvider } from '../../providers/tasks/*tasks';
import { Task } from '../../models/Task';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  tasks: Task;
  constructor(public navCtrl: NavController, public taskService:TasksProvider) {
  	console.log('que pasa?asdasds')
  }
  ionViewDidLoad(){
    this.taskService.getTasks()
    .subscribe(
      data => this.tasks = data, // success path
      error => this.error = error // error path
    );
  }
}

