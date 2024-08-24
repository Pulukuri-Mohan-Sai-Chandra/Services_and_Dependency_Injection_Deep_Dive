import { Injectable, signal } from "@angular/core";
import { Task, TaskStatus } from "./task.model";

@Injectable({
    providedIn: 'root'
})
export class TaskService {
    private tasks = signal<Task[]>([]);

    constructor() {
        this.getTasks();
    }
    allTasks = this.tasks.asReadonly();
    addTask(taskData: { title: string, description: string }) {
        this.tasks.update((prevVal) => {
            return [...prevVal, {
                id: (Math.random() * 1000000000000).toString(),
                status: 'OPEN',
                ...taskData
            }]
        })
        this.saveTasks();
    }

    getTasks() {
        const local_task = localStorage.getItem('tasks');
        if (local_task) {
            this.tasks.update((prev_values) => [...prev_values, JSON.parse(local_task)])
        }
    }
    saveTasks() {
        localStorage.setItem('tasks', JSON.stringify(this.tasks()));
    }
    updateTask(taskId: string, new_status: TaskStatus) {
        this.tasks.update((prev_values) => {
            return prev_values.map((task: Task) => {
                return (task.id === taskId) ? { ...task, status: new_status } : task;
            })
        })
        this.saveTasks();
    }

}