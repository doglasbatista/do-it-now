/* eslint-disable no-param-reassign */

export default {
  ADD_TODO_LIST(state, todoList) {
    state.todoLists.push(Object.assign({}, todoList));
  },
  ADD_TASK(state, data) {
    const [index, task] = data;
    state.todoLists[index].tasks.push(Object.assign({}, task));
  },
  ADD_SUB_TASK(state, data) {
    const [todoListIndex, Taskindex, subTaskData] = data;
    state.todoLists[todoListIndex].tasks[Taskindex].subTasks.push(Object.assign({}, subTaskData));
  },
  REMOVE_TODO_LIST(state, todoListIndex) {
    state.todoLists.splice(todoListIndex, 1);
  },
  REMOVE_TASK(state, data) {
    const [todoListIndex, taskindex] = data;
    state.todoLists[todoListIndex].tasks.splice(taskindex, 1);
  },
  REMOVE_SUB_TASK(state, data) {
    const [todoListIndex, Taskindex, subTaskIndex] = data;

    state.todoLists[todoListIndex].tasks[Taskindex].subTasks.splice(subTaskIndex, 1);
  },
  UPDATE_TODO_TITLE(state, data) {
    const [todoListIndex, todoTitle] = data;
    state.todoLists[todoListIndex].title = todoTitle;
  },
  TOGGLE_TASK_STATUS(state, data) {
    const [todoListIndex, taskIndex] = data;

    const task = state.todoLists[todoListIndex].tasks[taskIndex];
    task.done = !task.done;
  },
  FINISH_SUB_TASK(state, data) {
    const [todoListIndex, taskIndex, subTaskIndex] = data;
    state.todoLists[todoListIndex].tasks[taskIndex].subTasks[subTaskIndex].done = true;
  },
  OPEN_SUB_TASK(state, data) {
    const [todoListIndex, taskIndex, subTaskIndex] = data;
    state.todoLists[todoListIndex].tasks[taskIndex].subTasks[subTaskIndex].done = false;
  },
};

/* eslint-disable no-param-reassign */
