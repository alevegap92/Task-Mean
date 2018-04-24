import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';;
import { TasksProvider } from '../../providers/tasks/*tasks';
import { Task } from '../../models/Task';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
  
})
export class HomePage {
  tasks: Task;
  title: string;

  constructor(public navCtrl: NavController, public taskService: TasksProvider ) {
  	console.log('que pasa?asdasds')
  }

  ionViewDidLoad(){
    this.taskService.getTasks()
    .subscribe(
      data => this.tasks = data, // success path

    );
  }

  deleteTask(id) {
    const response = confirm('are you sure to delete it?');
    if (response) {
      const tasks = this.tasks;
      this.taskService.deleteTask(id)
        .subscribe(data => {
          console.log(data.n);
          if (data.n == 1) {
            for (let i = 0; i < tasks.length; i++) {
              if (tasks[i]._id == id) {
                tasks.splice(i, 1);
              }
            }
          }
        })
    }
  }  
  updateStatus(task: Task) {
    var newTask = {
      _id: task._id,
      title: task.title,
      isDone: !task.isDone
    };
    this.taskService.updateTask(newTask)
      .subscribe(res => {
        task.isDone = !task.isDone;
      })
  }
  
  addTask(event) {
    event.preventDefault();
    const newTask: Task = {
      title: this.title,
      isDone: false
    }
    this.taskService.addTask(newTask)
      .subscribe(task => {
        this.tasks.push(task);
        this.title = '';
      });
  }

}

