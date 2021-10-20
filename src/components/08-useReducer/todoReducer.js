//the state parameter will be manage as an array of objects, so we can initialized it here
export const todoReducer = (state = [], action) => {
  switch (action.type) {
    case "add":
      //add to state a new task of TODO list
      return [...state, action.payload];
    case "delete":
      //filter returns the state without the specific task id to be deleted
      return state.filter((todo) => todo.id !== action.payload);
    case "toggle-old":
      return state.map((todo) => {
        //if id matchs then return the todo with the done atribute false or true
        if (todo.id === action.payload) {
          return {
            ...todo,
            done: !todo.done,
          };
          //if id do not match return the todo without changes
        } else {
          return todo;
        }
      });
    case "toggle":
      return state.map((todo) =>
        todo.id === action.payload ? { ...todo, done: !todo.done } : todo
      ); //small version of the same logic in toggle-old

    default:
      return state;
  }
};
