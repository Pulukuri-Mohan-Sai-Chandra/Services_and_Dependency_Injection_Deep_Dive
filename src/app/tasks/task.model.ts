import { InjectionToken, Provider } from "@angular/core";

export type TaskStatus = 'OPEN' | 'IN_PROGRESS' | 'DONE';

export interface Task {
  id: string;
  title: string;
  description: string;
  status: TaskStatus;
}


export type TaskVaule = {
  value: string,
  text: string,
  task_status: TaskStatus
}

export const TaskOptionsInjectionToken = new InjectionToken<TaskVaule[]>('task_options');

export const TaskOptions: TaskVaule[] = [
  {
    value: 'open',
    text: 'Open',
    task_status: 'OPEN'
  },
  {
    value: 'in-progress',
    text: "In-Progress",
    task_status: 'IN_PROGRESS'
  },
  {
    value: 'done',
    text: 'Done',
    task_status: "DONE"
  }
]
export const TaskOptionsProvider: Provider = {
  provide: TaskOptionsInjectionToken,
  useValue: TaskOptions
}