import { Component, computed, inject, Input, input } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { Task, TaskStatus } from '../../task.model';
import { TaskService } from '../../../../task.service';

@Component({
  selector: 'app-task-item',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './task-item.component.html',
  styleUrl: './task-item.component.css',
})
export class TaskItemComponent {
  @Input({ required: true }) task!: Task
  private taskService = inject(TaskService);
  get taskStatus() {
    switch (this.task.status) {
      case 'OPEN': return 'open';
      case 'IN_PROGRESS': return 'Working on it';
      case 'DONE': return 'Completed';
    }
  }
  onChangeTaskStatus(taskId: string, status: string) {
    let newStatus: TaskStatus = 'OPEN';

    switch (status) {
      case 'open':
        newStatus = 'OPEN';
        break;
      case 'in-progress':
        newStatus = 'IN_PROGRESS';
        break;
      case 'done':
        newStatus = 'DONE';
        break;
      default:
        break;
    }
    this.taskService.updateTask(taskId, newStatus)
  }
}
