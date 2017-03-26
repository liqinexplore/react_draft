import { combineReducers } from 'redux' //


const searchData = {
  data:""
};
export const ADD_TODO = 'ADD_TODO_TILL'

export default combineReducers({

    params:function(state= searchData,action){
      switch (action.type) {
        case ADD_TODO:
          return Object.assign({}, state, {
            data: action.data,
          });
          break;
        default:
          return state
      }
    }
})
