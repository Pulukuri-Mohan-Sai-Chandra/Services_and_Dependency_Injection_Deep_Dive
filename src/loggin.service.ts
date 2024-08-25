import { Injectable } from '@angular/core';
import { Logs } from './Log.model';

@Injectable({
  providedIn: 'root'
})
export class LogginService {
  private logs:Logs = {
    new_tasks:0,
    task_updates:0
  }
  constructor() {
    this.getLogs();
  }
  newTaskDetected(){
    this.logs.new_tasks++;
    this.saveLogs();
  }
  newUpdateDected(){
    this.logs.task_updates++;
    this.saveLogs();
  }
  saveLogs(){
    localStorage.setItem('logs',JSON.stringify(this.logs));
  }
  getLogs(){
    const local_logs = localStorage.getItem('logs'); 
    if(local_logs){
      this.logs = JSON.parse(local_logs);
    }
  }
}
