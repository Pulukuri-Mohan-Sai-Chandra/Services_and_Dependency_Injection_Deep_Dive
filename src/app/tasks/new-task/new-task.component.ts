import { Component, ElementRef, inject, viewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TaskService } from '../task.service';
import { LogginService } from '../../../loggin.service';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css',
})
export class NewTaskComponent {
  private formEl = viewChild<ElementRef<HTMLFormElement>>('form');
  private taskSerivce = inject(TaskService);
  private logService = inject(LogginService);
  onAddTask(title: string, description: string) {
    this.taskSerivce.addTask({ title, description })
    this.logService.newTaskDetected();
    this.formEl()?.nativeElement.reset();
  }
}
