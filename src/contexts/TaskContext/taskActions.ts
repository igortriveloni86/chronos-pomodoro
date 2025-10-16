// useReducer <- hook do React que recebe um reducer e um estado inicial
// reducer <- função que recebe o estado atual e uma ação, e retorna um novo estado
// state <- estado atual
// action <- a ação disparada, geralmente é um objeto com type e payload
// type <- tipo da ação, geralmente uma string (pode ser enum, constante, etc)
// payload <- dados extras enviados junto com a action, se necessário para atualizar o estado

import type { TaskModel } from "../../models/TaskModel";

export enum TaskActionTypes {
  START_TASK = "START_TASK",
  INTERRUPT_TASK = "INTERRUPT_TASK",
  RESET_TASK = "RESET_TASK",
  COUNT_DOWN = "COUNT_DOWN",
  COMPLETE_TASK = "COMPLETE_TASK",
}

export type TaskActionWithPayload =
  | {
      type: TaskActionTypes.START_TASK;
      payload: TaskModel;
    }
  | {
      type: TaskActionTypes.COUNT_DOWN;
      payload: { secondsRemaining: number };
    };

export type TaskActionWithoutPayload =
  | {
      type: TaskActionTypes.RESET_TASK;
    }
  | {
      type: TaskActionTypes.INTERRUPT_TASK;
    }
  | {
      type: TaskActionTypes.COMPLETE_TASK;
    };

export type TaskActionModel = TaskActionWithPayload | TaskActionWithoutPayload;
