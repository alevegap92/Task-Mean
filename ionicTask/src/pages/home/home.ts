import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TasksProvider } from '../../providers/tasks/*tasks';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  tasks: any[] = [];
  constructor(public navCtrl: NavController, public taskService:TasksProvider) {
  	console.log('que pasa?asdasds')
  }
  ionViewDidLoad(){
    this.taskService.getTasks()
    .subscribe(
      (data) => { // Success
        this.tasks = data;
      },
      (error) =>{
        console.error(error);
      }
    )
  }
}
