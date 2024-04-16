import { createStore } from "redux";


const reducer= (state={counter:0},action) =>{
    if(action.type==="INCREMENT"){
        return{
          counter:  state.counter+2

        };
       
    }
    if(action.type==="DECREMENT"){
        return{
          counter:  state.counter-2

        };
        return state;
}
}
 const store= createStore(reducer);

const counterSubsriber = () =>{
   const latestState= store.getState();
    console.log(latestState);
};
store.subscribe(counterSubsriber);
store.dispatch({type:'INCREMENT'});
store.dispatch({type:'DECREMENT'});

export default store;