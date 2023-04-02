import React, { useState, useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import {
  GetApiAction,
  PostApiAction,
  UpdateApiAction,
} from "../Redux/Action/Action";
import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import GetDetailsByHooks from "../Hooks/GetDetailsByHooks";
import { toast } from "react-toastify";

const EditData = ({ handleShow, id }) => {
  const dispatch = useDispatch();
  const [validated, setValidated] = useState(false);
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

  const SubmitForm = (e) => {
    e.preventDefault();
    const finalData = {
      name: AllData.name,
      email: AllData.email,
      phone: AllData.phone,
      country: AllData.country,
    };
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.preventDefault();
      e.stopPropagation();
      setNameError("Please provide a valid Name");
      setEmailError("Please provide a valid Email");
      SetPhoneError("Please provide a valid Phone Number");
      setcountryError("Please provide a valid County Name");
    } else {
      dispatch(UpdateApiAction(finalData, id));
      toast.success("your data Updated successfully!");
      dispatch(GetApiAction());
      setShow(false);
    }
  };
  const [detailsById] = GetDetailsByHooks(id);
  useEffect(() => {
    const data = () => {
      if (detailsById.data) {
        setAllData(detailsById.data);
      }
    };
    data();
  }, [detailsById.data]);
  return (
    <>
      <span variant="primary" onClick={Hadle} className="fapenicon">
        <FontAwesomeIcon icon={faPenToSquare} />
      </span>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form noValidate validated={validated} onSubmit={SubmitForm}>
            <Row>
              <Col>
                <Form.Group className="mb-3">
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    name="name"
                    value={AllData.name}
                    onChange={(e) => HandelChange(e)}
                    placeholder="Enter your name"
                  />

                  <Form.Control.Feedback>
                  <div className="errorshow">{nameError}</div>
                  </Form.Control.Feedback>
                  {nameError ? (
                    <div className="errorshow">{nameError}</div>
                  ) : null}
                </Form.Group>
              </Col>
              <Col>
                <Form.Group className="mb-3">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    required
                    type="email"
                    name="email"
                    value={AllData.email}
                    onChange={(e) => HandelChange(e)}
                    placeholder="name@example.com"
                  />
                  {emailError ? (
                    <div className="errorshow">{emailError}</div>
                  ) : null}
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Group className="mb-3">
                  <Form.Label>Phone no</Form.Label>
                  <Form.Control
                    required
                    type="number"
                    name="phone"
                    value={AllData.phone}
                    onChange={(e) => HandelChange(e)}
                    placeholder="Enter your phone no."
                  />
                  {phoneError ? (
                    <div className="errorshow">{phoneError}</div>
                  ) : null}
                </Form.Group>
              </Col>
              <Col>
                <Form.Group className="mb-3">
                  <Form.Label>country</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    name="country"
                    value={AllData.country}
                    onChange={(e) => HandelChange(e)}
                    placeholder="Enter Your Country Name"
                  />
                  {countryError ? (
                    <div className="errorshow">{countryError}</div>
                  ) : null}
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

export default EditData;
