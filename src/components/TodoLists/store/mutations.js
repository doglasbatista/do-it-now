/* eslint-disable no-param-reassign */

export default {
  ADD_EMPTY_TODO_LIST(state, todoList) {
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
};

/* eslint-disable no-param-reassign */
