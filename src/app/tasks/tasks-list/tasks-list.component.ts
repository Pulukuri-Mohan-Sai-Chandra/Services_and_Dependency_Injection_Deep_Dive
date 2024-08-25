import { Component, inject, OnInit, signal } from '@angular/core';

import { TaskItemComponent } from './task-item/task-item.component';
import { TaskService } from '../../../task.service';
import { Task } from '../task.model';

@Component({
  selector: 'app-tasks-list',
  standalone: true,
  templateUrl: './tasks-list.component.html',
  styleUrl: './tasks-list.component.css',
  imports: [TaskItemComponent],
})
export class TasksListComponent{
  selectedFilter: string = 'all'
  private taskService = inject(TaskService);
  get getTasks(){
    switch (this.selectedFilter) {
      case 'open':
        return this.taskService.getTasks().filter((task: Task) => {
          if (task.status === 'OPEN') return true;
          return false;
        })
        break;
      case 'in-progress':
        return this.taskService.getTasks().filter((task: Task) => {
          if (task.status === 'IN_PROGRESS') return true;
          return false;
        })
        break;
      case 'done':
        return this.taskService.getTasks().filter((task: Task) => {
          if (task.status === 'DONE') return true;
          return false;
        })
        break;
      default:
        return this.taskService.getTasks();
        break;
    }
  }
  onChangeTasksFilter(filter: string) {
    this.selectedFilter = filter;
  }
}
