import type { TaskStateModel } from "./TaskStateModel";

export type TaskModel = {
  id: string;
  name: string;
  duration: number; // duração em minutos
  startDate: number;
  completeDate: number | null; // quando o timer chega ao final
  interrupteDate: number | null; // quando o usuário interrompe a task
  type: keyof TaskStateModel["config"]; // 'workTime' | 'shortBreakTime' | 'longBreakTime'
};
