import { Component, OnInit, Input } from '@angular/core';
import { HttpService } from '../http.service';
import { AppComponent } from '../app.component';

// import { Input } from '@angular/core';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  showInfo:boolean;
  showEdit:boolean;
  oldTask:any;


  @Input() taskToShow: any
  constructor(private _httpService: HttpService) { }

  ngOnInit() {
    this.oldTask = {
      title:"",
      desc:""
    };
    this.showEdit = false;
  }

  editTask(id){
    this._httpService.editATask(id,this.oldTask).subscribe(data=>{
      console.log('task '+this.taskToShow._id+' is about to get the REVAMPED!');
    });
    this.showEdit = false;
    // this.showInfo = false;
    alert('You just edited this task!');

    // this.showInfo = true;
    // AppComponent.getTasksFromService();
    // this.getFormInput(id);
  }

  getFormInput(id){
    console.log(id);
    this.showEdit = !this.showEdit;
    let obs = this._httpService.getTaskById(id);
    obs.subscribe(data=>{
      console.log('back from the server',data);
      // this.taskToShow = data;
      this.oldTask = data;
    });
  }
}
