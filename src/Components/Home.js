import React, { useEffect, useState } from "react";
import { GetApiAction, DeleteApiAction } from "../Redux/Action/Action";
import { useDispatch, useSelector } from "react-redux";
import Table from "react-bootstrap/Table";
import Add from "./Add";
import EditData from "./Edit";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { toast } from "react-toastify";
import Pagination from "../pagination/pagination";

const Home = () => {
  const handleShow = true;
  const dispatch = useDispatch();
  const responseData = useSelector((state) => state.reducer.details);

  useEffect(() => {
    dispatch(GetApiAction());
  }, [dispatch]);
  const DeleteItems = (id) => {
    alert("Want to delete?");
    toast.error("your data Deleteed successfully!");
    dispatch(DeleteApiAction(id));
    dispatch(GetApiAction());
  };
  const [currentPage, setCurrentPage] = useState(1);
  const [val, setVal]= useState(2);
  const data=[2,3,4,5,6];
  let PageSize = val;
  const firstPageIndex = (currentPage - 1) * PageSize;
  const lastPageIndex = firstPageIndex + PageSize;
  const  recodrs = responseData.slice(firstPageIndex,lastPageIndex);

const HandalChange = (e)=>{
setVal(parseInt(e.target.value));
setCurrentPage(1)
}
  return (
    <div>
      <h1>React Redux Crud Operation | React Operation</h1>
      <Add handleShow={handleShow} />
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
          {recodrs
            ? recodrs.map((items, index) => {
                return (
                  <tr key={index}>
                    <td>{items.id}</td>
                    <td>{items.name}</td>
                    <td>{items.email}</td>
                    <td>{items.phone}</td>
                    <td>{items.country}</td>
                    <td>
                      <EditData handleShow={handleShow} id={items.id} />
                      <span
                        className="trashcan"
                        onClick={() => DeleteItems(items.id)}
                      >
                        <FontAwesomeIcon icon={faTrashCan} />
                      </span>
                    </td>
                  </tr>
                );
              })
            : null}
        </tbody>
      </Table>
      <div className="m-4 mb-0">
        {(currentPage - 1) * PageSize + 1} to{" "}
        {(currentPage - 1) * PageSize+recodrs.length} of {responseData.length}
      </div>
      <div className="example-header">
        Page Size:
        <select id="page-size" value={val} onChange={e=>HandalChange(e)}>
          {data.map((item,index) => {
            return (
              <option value={item} key={index}>
                {item}
              </option>
            );
          })}
        </select>
      </div>

      <Pagination
        className="pagination-bar"
        currentPage={currentPage}
        totalCount={responseData.length}
        pageSize={PageSize}
        onPageChange={(page) => setCurrentPage(page)}
      />
    </div>
  );
};

export default Home;
