import axios from 'axios';

//store constant data in variable
export const GET_ALL_TASKS = 'GET_ALL_TASKS';
export const ADD_TASK = 'ADD_TASK';

export const getAllTasks = () => {
  //return a function to dispatch action that will dispatch another action
  return dispatch => {
    axios.get('/tasks')
      .then(responseFromDB => {
        console.log('data in actionCreator:', responseFromDB);
        dispatch({ type: GET_ALL_TASKS, payload: responseFromDB.data })
      })
      .catch(err => {
        console.log("ERROR - axios getAllTasks:", err);
        // dispatch({ type: DISPLAY_ERROR_NOTIFICATION });
      })
  }
}

//Like a post request to your internal store
export const addTask = (task) => {
  console.log("\nACTION: addTask:", task)
  return dispatch => {
    axios.post('/newTask', task)
      .then(responseFromDB => {
        console.log("\naddTask - responseFromDB.data:", responseFromDB.data);
        dispatch({ type: GET_ALL_TASKS, payload: responseFromDB.data });
      })
      .catch(err => {
        console.log("Error w/axios POST/newTask:", err);
      })
  }
}
