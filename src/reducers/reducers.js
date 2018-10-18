import { GET_ALL_TASKS, ADD_TASK } from '../actions/actions.js';

//takes in action and current sate, if there is no state then it will be an empty attay
const itemReducer = (state = [], action) => {
  //action is an object {type:...payload:...}
  console.log("\nREDUCER ACTION: ", action);
  console.log("\nCURRENT STATE:", state);
  switch (action.type) {
    case GET_ALL_TASKS:
      //action.payload is initial state or array of objects
      return action.payload;
    case ADD_TASK:
      return [...state, action.payload];
    default:
      //default is to return original state to do nothing 
      return state;
  }
}

export default itemReducer;