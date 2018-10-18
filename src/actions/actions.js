import axios from 'axios';

//store constant data in variable
export const GET_ALL_TASKS = 'GET_ALL_TASKS';
export const ADD_TASK = 'ADD_TASK';

export const getAllTasks = () => {
  //return a function to dispatch action that will dispatch another action
  return dispatch => {
    axios.get('/tasks')
      .then(dataFromDB => {
        console.log('data in actionCreator:', dataFromDB);
      })
      .catch(err => {
        console.log("ERROR - axios getAllTasks:", err);
      })
  }
}

//Like a post request to your internal store
export const addTask = (task) => {
  console.log("\nACTION: addTask:", task)
  return {
    type: ADD_TASK,
    payload: task
  }
}
