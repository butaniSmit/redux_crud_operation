import React, { useEffect } from "react";
import {GetApiAction,DeleteApiAction} from "../Redux/Action/Action";
import { useDispatch, useSelector } from "react-redux";
import Table from "react-bootstrap/Table";
import Add from "./Add";
import EditData from "./Edit";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { toast } from "react-toastify";

const Home = () => {
 const handleShow= true;
  const dispatch = useDispatch();
  const responseData = useSelector((state) => state.reducer.details);
//   console.log(responseData);

  useEffect(() => {
    dispatch(GetApiAction());
  }, [dispatch]);
  const DeleteItems = (id)=>{
  alert("Want to delete?");
  toast.error("your data Deleteed successfully!");
  dispatch(DeleteApiAction(id))
  dispatch(GetApiAction());
    
  }
  return (
    <div>
      <h1>React Redux Crud Operation | React Operation</h1>
      <Add handleShow={handleShow}/>
      <Table striped bordered hover variant="light">
        <thead>
          <tr>
            <th>id</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Country</th>
            <th>Action</th>

          </tr>
        </thead>
        <tbody>
        {responseData?  responseData.map((items, index) => {
            return (
              <tr key={index}>
                <td>{items.id}</td>
                <td>{items.name}</td>
                <td>{items.email}</td>
                <td>{items.phone}</td>
                <td>{items.country}</td>
                <td><EditData handleShow={handleShow} id={items.id}/><span className="trashcan" onClick={()=>DeleteItems(items.id)}><FontAwesomeIcon icon={faTrashCan}/></span></td>
              </tr>
            );
          })
          :null}
        </tbody>
      </Table>
    </div>
  );
};

export default Home;
