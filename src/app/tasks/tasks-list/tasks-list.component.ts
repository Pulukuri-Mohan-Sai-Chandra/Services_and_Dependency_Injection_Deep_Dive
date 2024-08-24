import { Component, computed, effect, inject, signal } from '@angular/core';

import { TaskItemComponent } from './task-item/task-item.component';
import { TaskService } from '../task.service';
import { Task } from '../task.model';

@Component({
  selector: 'app-tasks-list',
  standalone: true,
  templateUrl: './tasks-list.component.html',
  styleUrl: './tasks-list.component.css',
  imports: [TaskItemComponent],
})
export class TasksListComponent {
  selectedFilter = signal<string>('all');
  private taskService = inject(TaskService)

  tasks = computed(() => {
    switch (this.selectedFilter()) {
      case "all": return this.taskService.allTasks();
      case 'open': return this.taskService.allTasks().filter((task: Task) => task.status === 'OPEN')
      case 'in-progress': return this.taskService.allTasks().filter((task: Task) => task.status === 'IN_PROGRESS');
      case 'done': return this.taskService.allTasks().filter((task: Task) => task.status === 'DONE')
      default:
        return this.taskService.allTasks();

    }
  })
  onChangeTasksFilter(filter: string) {
    this.selectedFilter.set(filter);
  }
}
