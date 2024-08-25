import { Injectable } from '@angular/core';
import { Task, TaskStatus } from './app/tasks/task.model';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private tasks: Task[] = []
  constructor() {
    this.loadTasks();
  }

  getTasks() {
    return this.tasks;
  }
  saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(this.tasks))
  }

  loadTasks() {
    const local_tasks = localStorage.getItem('tasks');
    if (local_tasks) {
      this.tasks = [...JSON.parse(local_tasks)];
    }
  }
  addTask(taskData: { title: string, description: string }) {
    this.tasks = [...this.tasks, {
      ...taskData,
      id: Math.round(Math.random() * 10000000000) + "",
      status: "OPEN"
    }]
    this.saveTasks();
  }
  updateTask(taskId: string, new_status: TaskStatus) {
    this.tasks = this.tasks.map((task: Task) => {
      return (task.id === taskId) ? { ...task, status: new_status } : task
    })
    this.saveTasks();
  }
}
