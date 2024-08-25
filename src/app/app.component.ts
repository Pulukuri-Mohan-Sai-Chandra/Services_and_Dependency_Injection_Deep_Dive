import { Component, inject, OnChanges, OnInit, SimpleChanges } from '@angular/core';

import { TasksComponent } from './tasks/tasks.component';
import { TaskService } from './tasks/task.service';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [TasksComponent],
})
export class AppComponent {
}
