/*
  Be sure to import in all of the action types from `../actions`
*/

import {FETCH_SMURF_START, FETCH_SMURF_SUCCESS, FETCH_SMURF_FAILURE, ADD_SMURF_START, ADD_SMURF_SUCCESS, ADD_SMURF_FAILURE} from '../actions/index'

/*
 Your initial/default state for this project could *Although does not have to* look a lot like this
 {
   smurfs: [],
   fetchingSmurfs: false
   addingSmurf: false
   updatingSmurf: false
   deletingSmurf: false
   error: null
 }
*/

const initialState = {
  smurfs: [],
   fetchingSmurfs: false,
   addingSmurf: false,
   updatingSmurf: false,
   deletingSmurf: false,
   error: null
}

const rootReducer = (state = initialState, action) => {
  switch(action.type){
    case FETCH_SMURF_START:
      return {
        ...state,
        fetchingSmurfs: true
      }
    case FETCH_SMURF_SUCCESS:
      console.log("Fetch smurf success payload: ", action.payload)
      return{
        ...state,
        smurfs: action.payload,
        fetchingSmurfs: false
      }
    case FETCH_SMURF_FAILURE:
      return {
        ...state,
        error: action.payload,
        fetchingSmurfs: false
      }
    case ADD_SMURF_START: 
      return{
        ...state,
        addingSmurf: true
      }
    case ADD_SMURF_SUCCESS:
      return {
        ...state,
        smurfs:[...state.smurfs, action.payload],
        addingSmurf: false
      }
    case ADD_SMURF_FAILURE:
      return{
        ...state, 
        error: action.payload,
        addingSmurf: false
      }
    default:
    console.log("Initial state: ", state)
      return state;
  }
}

export default rootReducer;

/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  There is no need for 'combineReducers' in this project.
  Components can then read your store as, `state` and not `state.fooReducer`.
*/
