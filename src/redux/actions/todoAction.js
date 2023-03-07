export const ADD_TODO = "ADD_TODO"

export function addTodoActionCreator(todo) {
  return {
    type: ADD_TODO,
    todo: todo
  }
}
