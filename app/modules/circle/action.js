export function circleState(params) {

  return (dispatch,getState)=>{
      console.log("params",params);
        dispatch(getOperationList(params))

  }
}

export const getOperationList=(data)=>{
  console.log("data",data);
  const ADD_TODO = 'ADD_TODO_TILL'
  return{
    type: ADD_TODO,
    data
  }
}
