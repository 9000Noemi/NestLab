//Servicio encargado de manejar la lógica relacionada con las tareas


import { Injectable } from '@nestjs/common';
import { Task, TaskStatus } from './task.entity';
import { v4 } from 'uuid'


//Decorador injectable: marca esta clase como inyectable,lo que permite usarla en controladores u otros servicios mediante inyección de dependencias.
@Injectable()
//CLASE que contiene toda la lógica para gestionar las tareas (crear, obtener, modificar, eliminar).
export class TasksService {

  //Array privado de tareas. Se inicializa con una tarea de ejemplo.
  private tasks: Task[] = [
    {
      id: '1',
      title: 'first task',
      description: 'some task',
      status: TaskStatus.PENDING
    },
  ];

  //Método que devuelve todas las tareas. Equivalente a un GET /tasks
  getAllTasks() {
    //En una clase, this hace referencia a la instancia actual de esa clase.
    return this.tasks;
  }

  //Método para crear nueva tarea.
  createTask(title: string, description: string) {
    const task = {
      id: v4(), //Genera un ID único con la función v4() del paquete uuid. 
      title,
      description,
      status: TaskStatus.PENDING
    }
    this.tasks.push(task);

    return task;
  }
  updateTask() {}
  deleteTask() {}
}
