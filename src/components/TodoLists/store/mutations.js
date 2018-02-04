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
  REMOVE_SUB_TASK(state, data) {
    const [todoListIndex, Taskindex, subTaskIndex] = data;

    state.todoLists[todoListIndex].tasks[Taskindex].subTasks.splice(subTaskIndex, 1);
  },
};

/* eslint-disable no-param-reassign */
