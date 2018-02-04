export default {
  initialPayload({ commit, state }) {
    let newTodoList;
    Array.from({ length: 2 }, (_, index) => `Lista ${index + 1}`)
      .map((todoListTitle) => {
        newTodoList = JSON.parse(JSON.stringify(state.todoListStructure));
        newTodoList.title = todoListTitle;
        commit('ADD_TODO_LIST', newTodoList);
        return true;
      });
  },
  addTodoList({ commit, state }, todoListTitle) {
    const newTodoList = JSON.parse(JSON.stringify(state.todoListStructure));
    newTodoList.title = todoListTitle;

    commit('ADD_TODO_LIST', newTodoList);
  },
  addEmptyTodoList({ commit, state }) {
    commit('ADD_TODO_LIST', state.todoListStructure);
  },
  addEmptyTask({ commit, state }, todoListIndex) {
    commit('ADD_TASK', [todoListIndex, state.taskStructure]);
  },
  addEmptySubTask({ commit, state }, data) {
    const [todoListIndex, taskIndex] = data;
    commit('ADD_SUB_TASK', [todoListIndex, taskIndex, state.subTaskStructure]);
  },
  addTask({ commit, state }, data) {
    const [todoListIndex, taskTitle] = data;
    const newTask = JSON.parse(JSON.stringify(state.taskStructure));

    newTask.title = taskTitle;

    commit('ADD_TASK', [todoListIndex, newTask]);
  },
  addSubTask({ commit, state }, data) {
    const [todoListIndex, taskIndex, subTaskTitle] = data;
    const newSubTask = state.subTaskStructure;

    newSubTask.title = subTaskTitle;
    commit('ADD_SUB_TASK', [todoListIndex, taskIndex, newSubTask]);
  },
  addListWithTask({ commit, state }, data) {
    const [todoListTitle, taskTitle] = data;

    const newTodoList = JSON.parse(JSON.stringify(state.todoListStructure));
    const newTask = JSON.parse(JSON.stringify(state.taskStructure));

    newTodoList.title = todoListTitle;
    newTask.title = taskTitle;

    newTodoList.tasks.push(newTask);

    commit('ADD_TODO_LIST', newTodoList);
  },
  removeTodoList({ commit }, todoListIndex) {
    commit('REMOVE_TODO_LIST', todoListIndex);
  },
  removeTask({ commit }, data) {
    const [todoListIndex, taskIndex] = data;
    commit('REMOVE_TASK', [todoListIndex, taskIndex]);
  },
  removeSubTask({ commit }, data) {
    const [todoListIndex, Taskindex, subTaskIndex] = data;
    commit('REMOVE_SUB_TASK', [todoListIndex, Taskindex, subTaskIndex]);
  },
  updateTodoTitle({ commit }, data) {
    const [todoListIndex, todoTitle] = data;
    commit('UPDATE_TODO_TITLE', [todoListIndex, todoTitle]);
  },
  toggleTaskStatus({ commit, state }, data) {
    const [todoListIndex, taskIndex] = data;
    const task = state.todoLists[todoListIndex].tasks[taskIndex];

    commit('TOGGLE_TASK_STATUS', [todoListIndex, taskIndex]);

    const mutationName = task.done ? 'FINISH_SUB_TASK' : 'OPEN_SUB_TASK';
    state.todoLists[todoListIndex].tasks[taskIndex].subTasks
      .map((_, subTaskIndex) => commit(mutationName, [todoListIndex, taskIndex, subTaskIndex]));
  },
  toggleSubTaskStatus({ commit, state }, data) {
    const [todoListIndex, taskIndex, subTaskIndex] = data;
    const parentTask = state.todoLists[todoListIndex].tasks[taskIndex];

    commit('TOGGLE_SUB_TASK_STATUS', [todoListIndex, taskIndex, subTaskIndex]);

    const thereIsOpenTask = parentTask.subTasks
      .map(subTask => subTask.done)
      .includes(false);

    if (thereIsOpenTask) {
      commit('OPEN_TASK', [todoListIndex, taskIndex]);
    } else {
      commit('FINISH_TASK', [todoListIndex, taskIndex]);
    }
  },
};
