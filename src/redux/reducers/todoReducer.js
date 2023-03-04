import {ADD_TODO} from "../actions/todoAction";

export default function todoReducer(state = [], action) {
  if (action === ADD_TODO) {
    return {
      ...state,
      todos: [
        ...state.todos,
        {
          id: Date.now(),
          todo: action.todo,
          complete: false,
          completeTime: null
        }
      ]
    }
  }
  return state
}
