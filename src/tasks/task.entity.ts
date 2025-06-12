
//Enum que permite usar TaskStatus.PENDING, TaskStatus.IN_PROGRESS, etc.,
export enum TaskStatus {
    PENDING = 'PENDING',
    IN_PROGRESS = 'IN_PROGRESS',
    DONE = 'DONE'
}

// Clase que representa el modelo de una tarea
export class Task {
    id: string
    title: string
    description: string
    status:TaskStatus
}
