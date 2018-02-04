export default {
  addEmptyTodoList({ commit, state }) {
    commit('ADD_EMPTY_TODO_LIST', state.todoListStructure);
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
    const newTask = Object.assign({}, state.taskStructure);

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

    const newTodoList = Object.assign({}, state.todoListStructure);
    const newTask = Object.assign({}, state.taskStructure);

    newTodoList.title = todoListTitle;
    newTask.title = taskTitle;

    newTodoList.tasks.push(newTask);

    commit('ADD_EMPTY_TODO_LIST', newTodoList);
  },
};
