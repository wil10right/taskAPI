import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';
// this page is the controller!!!!
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  allTasks:any;
  oneTask:any;
  newTask:any;
  oldTask:any;
  formTask:any;
  showAll:boolean;
  // showInfo:boolean;
  // showEdit:boolean;

  constructor(private _httpService: HttpService) { }

  ngOnInit(){
    console.log('***ngOnInit***');
    this.newTask = {
      title:"",
      desc:""
    };
    this.oldTask = {
      title:"",
      desc:""
    };
    this.showAll = false;
  }

  hideAll(){
    // this.getTasksFromService();
    this.showAll = !this.showAll;
  }

  getTasksFromService(){
    // this._httpService.getTasks();
    this.showAll = true
    let obs = this._httpService.getTasks();
    obs.subscribe(data=>{
      // console.log("Thank you for your subscription!",data);
      this.allTasks = data;
      console.log(this.allTasks);
    });
  }

  getTaskById(id){
    // if(this.showInfo == true){
    //   this.showInfo = true;
    // }else if(this.showInfo == false){
    //   this.showInfo = true;
    // }
    this._httpService.getTasks();
    // this.showInfo = !this.showInfo
    let obs = this._httpService.getTaskById(id);
    obs.subscribe(data=>{
      // console.log("Thank you for your subscription!",data);
      this.oneTask = data;
      this.oldTask = data;
    });
    console.log("LOOK AT THIS ONE",this.oneTask);
  }

  // getFormInput(id){
  //   this.showEdit = !this.showEdit;
  //   let obs = this._httpService.getTaskById(id);
  //   obs.subscribe(data=>{
  //     // console.log("Thank you for your subscription!",data);
  //     this.oldTask = data;
  //     // console.log(this.formTask.title,this.formTask.)
  //     console.log('back from the server',data);
  //     // this.oldTask.title = data.
  //   });
  // }

  createTask(){
    this._httpService.createATask(this.newTask).subscribe(data=>{
      console.log(data);
    });
    this.getTasksFromService();
    this.ngOnInit();
    this.showAll=true;
  }

  deleteTaskById(id){
    this._httpService.deleteATask(id).subscribe(data=>{
      console.log(data);
      console.log('task '+id+' is about to get the AXE!');
    });
    this.getTasksFromService();
  }

  // editTask(id){
  //   this._httpService.editATask(id,this.oldTask).subscribe(data=>{
  //     // console.log(id);
  //     // console.log(data);
  //     console.log('task '+this.oneTask._id+' is about to get the REVAMPED!');
  //   });
  //   this.getTasksFromService();
  //   this.getTaskById(id);
  //   this.showEdit = false;
  //   this.showInfo = false;
  //   this.showInfo = true;
  //   // setTimeout(this.showInfo = true,3000);
  //   // this.hideAll();
  //   // setTimeout(this.getTasksFromService,2000);
  // }

}
