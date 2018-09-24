import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { 
    // this.getTasks();
    // this.getTaskById();
  }
  getTasks(){
    // our http response is an Observable, store it in a variable
    return this._http.get('/api/tasks');
    // subscribe to the Observable and provide the code we would like to do with our data from the response
    // tempObservable.subscribe(data=>console.log("***WE'VE GOT THE DATA!***",data))
  }
  getTaskById(id){
    return this._http.get('/api/tasks/'+id);
  }  
  createATask(task){
    return this._http.post('/api/tasks',task);
  }
  deleteATask(id){
    return this._http.delete('/api/delete/'+id);
  }
  editATask(id,task){
    return this._http.put('/api/update/'+id,task);
  }
}
