import { type } from "@testing-library/user-event/dist/type";
import { GET_DETAILS,POST_DETAILS,UPDATE_DETAILS,DELETE_DETAILS } from "../Type";
import {GetApiDetails,PostApiDetails,UpdateApiDetails,DeleteApiDetails} from "../../Api/AxiosRequest";

const GetApiAction = () =>{
    return function(dispatch){
        return GetApiDetails().then((res)=>{
            dispatch({
                    type:GET_DETAILS,
                    payload:res.data,
            })    
        })
    }
}

const PostApiAction = (request) =>{
    return function(dispatch){
            return PostApiDetails(request).then((res)=>{
                dispatch({
                        type:POST_DETAILS,
                        payload:"",
                })    
            })
    }
}

const UpdateApiAction = (request,id) =>{
    return function(dispatch){
        return UpdateApiDetails(request,id).then((res)=>{
            console.log(res);
            dispatch({
                    type:UPDATE_DETAILS,
                    payload:"",
            })
        })
    }
   
}

const DeleteApiAction = (id) =>{
    return function(dispatch){
        return DeleteApiDetails(id).then((res)=>{
            dispatch({
                    type:DELETE_DETAILS,
                    payload:"",
            })
            GetApiAction();
        })
    }
}
export {GetApiAction,PostApiAction,UpdateApiAction,DeleteApiAction};