import React, { useState } from "react";
import { Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import {GetApiAction, PostApiAction} from "../Redux/Action/Action";
import { useDispatch, useSelector } from "react-redux";


const Add = ({ handleShow }) => {
    const dispatch =useDispatch();
    const isResponce = useSelector((state) => state.reducer.isResponce);
  const [nameError, setNameError] = useState();
  const [emailError, setEmailError] = useState();
  const [phoneError, SetPhoneError] = useState();
  const [countryError, setcountryError] = useState();
  const Hadle = () => {
    if ((handleShow = true)) {
      setShow(true);
    }
  };
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const [AllData, setAllData] = useState({
    name: "",
    email: "",
    phone: "",
    country: "",
  });
  const HandelChange = (e) => {
    setAllData({ ...AllData, [e.target.name]: [e.target.value] });
  };
  const finalData={
    name:AllData.name,
    email:AllData.email,
    phone:AllData.phone,
    country:AllData.country
 }
  const SubmitForm = (e) => {
    e.preventDefault();
    if(AllData.name===''|| AllData.email===''||AllData.phone===''|| AllData.country===''){
      setNameError("Name is Reqier");
      setEmailError("Email is reqier");
      SetPhoneError("Phone Number is Reqier");
      setcountryError('County is reqier');
      console.log('1')
    }else{
      console.log('2');
     dispatch(PostApiAction(finalData));
     dispatch(GetApiAction());
     setShow(false);
     setAllData('');setNameError('');setEmailError('');SetPhoneError('');setcountryError('');
    }
    
  };
  return (
    <>
      <Button variant="primary" onClick={Hadle}>
        Add Data
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={SubmitForm}>
            <Row>
              <Col>
                <Form.Group className="mb-3">
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="name"
                    value={AllData.name}
                    onChange={(e) => HandelChange(e)}
                    placeholder="Enter your name"
                  />
                {nameError? <div className="errorshow">{nameError}</div>: null} 
                </Form.Group>
              </Col>
              <Col>
                <Form.Group className="mb-3">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    value={AllData.email}
                    onChange={(e) => HandelChange(e)}
                    placeholder="name@example.com"
                  />
                  {emailError? <div className="errorshow">{emailError}</div>: null} 
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Group className="mb-3">
                  <Form.Label>Phone no</Form.Label>
                  <Form.Control
                    type="number"
                    name="phone"
                    value={AllData.phone}
                    onChange={(e) => HandelChange(e)}
                    placeholder="Enter your phone no."
                  />
                  {phoneError? <div className="errorshow">{phoneError}</div>: null} 
                </Form.Group>
              </Col>
              <Col>
                <Form.Group className="mb-3">
                  <Form.Label>country</Form.Label>
                  <Form.Control
                    type="text"
                    name="country"
                    value={AllData.country}
                    onChange={(e) => HandelChange(e)}
                    placeholder="Enter Your Country Name"
                  />
                {countryError? <div className="errorshow">{countryError}</div>: null} 
                </Form.Group>
              </Col>
            </Row>

            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Button type="submit" variant="primary">
                Submit
              </Button>
            </Modal.Footer>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Add;
