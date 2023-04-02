import { GET_DETAILS,POST_DETAILS,UPDATE_DETAILS } from "../Type";

const initialState = {
  details:[],
};

const  Reducer =(state=initialState,action)=>{
    switch(action.type){
        case GET_DETAILS:
          return{
            details:action.payload
          };
        default:
            return state
    }
}
export default Reducer;
