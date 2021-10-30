import { todoReducer } from "../../../components/08-useReducer/todoReducer";
import { demoTodos } from "../mockData/demoTodos";

//reducers always returns a state
describe("Test for todoReducer", () => {
  test("should return the default state", () => {
    const state = todoReducer(demoTodos, {});
    expect(state).toEqual(demoTodos);
  });

  test("should add a new todo", () => {
    //create action and their payload
    const action = {
      type: "add",
      payload: {
        id: 3,
        desc: "Learn JavaSript",
        done: true,
      },
    };
    const state = todoReducer(demoTodos, action);
    expect(state).toEqual([...demoTodos, action.payload]);
  });

  test("should delete a  todo", () => {
    const action = {
      type: "delete",
      payload: 2,
    };
    const state = todoReducer(demoTodos, action);
    expect(state.length).toEqual(1);
    expect(state).toEqual([demoTodos[0]]);
  });

  test("should trigger Toggle todo", () => {
    //create action and their payload
    const action = {
      type: "toggle",
      payload: 2,
    };
    const state = todoReducer(demoTodos, action);
    expect(state[1].done).toEqual(true);
    //test if the other element in the state is not change
    expect(state[0]).toEqual(demoTodos[0]);
  });
});
