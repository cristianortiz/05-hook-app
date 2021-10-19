//the state parameter will be manage as an array of objects, so we can initialized it here
export const todoReducer = (state = [], action) => {
  switch (action.type) {
    case "add":
      //add to state a new task of TODO list
      return [...state, action.payload];

    default:
      return state;
  }
};
