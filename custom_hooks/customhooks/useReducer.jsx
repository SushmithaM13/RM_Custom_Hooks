import { useReducer } from "react";

const initialState={count: 0};

function reducer(state,action){
    switch(action.type){
        case "INCREMENT":
            return {count: state.count+1};
        case "DECREMENT":
            return {count: state.count-1};
        case "RESET":
            return {count: 0};
        default:
            return state;
    }
}

let [state, dispatch]=useReducer(reducer,initialState);
return(
    <>
    
    </>
)