import { GetDetailsById } from "../Api/AxiosRequest";
import react,{useEffect,useState} from 'react';

export default (props) =>{
    const [detailsById,setDetailsById]=useState({})
const GetDetailsByHooks = (requestId) =>{
        return GetDetailsById(requestId).then((res)=>{
            console.log(res);
            setDetailsById(res);
  
        })
}
    useEffect(()=>{
      GetDetailsByHooks(props)
    },[props])
        return [detailsById];
}