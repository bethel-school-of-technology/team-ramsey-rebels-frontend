import React, { useState } from "react";
import firebase from "firebase";
import Button from "react-bootstrap/Button";
import { Container, Card, Alert } from "react-bootstrap";

const AdminInput = ({ request }) => {
  const [serviceType, setServiceType] = React.useState(request.serviceType);
  const [error, setError] = useState("")

  const onUpdate = () => {
    const db = firebase.firestore();
    db.collection("requests")
      .doc(request.id)
      .set({ ...request, serviceType });
      
        return setError("Updated successfully!")
  };

  const onDelete = () => {
    var answer = window.confirm("Are you sure you want to delete me?")
    if (answer) {
      const db = firebase.firestore();
    db.collection("requests").doc(request.id)
    .delete()
    .then(() => window.location.reload());
    }
  };


  
  return (
    <>
      <br />
      <Container>
        <Card>
          <Card.Header>
            <b>Request ID: </b>
            {request.id}
          </Card.Header>
          <Card.Body>
            <Card.Title>
              <p>
                {request.fullName} | {request.email} | {request.phone}
              </p>
            </Card.Title>
            <Card.Text>
              <p>
                {request.vehicle} | {request.location}
              </p>
              Service Details:{" "} <br />
              <textarea
                value={serviceType}
                onChange={(e) => {
                  setServiceType(e.target.value);
                }}
              /> <br />
              <Button variant="info" onClick={onUpdate} style={{marginRight: "20px"}}>
                Update
              </Button>              
              <Button variant="danger" onClick={onDelete}>
                Delete
              </Button>
              <br />
              {error && <Alert style= {{marginTop: "10px"}} variant="success">{error}</Alert>}
            </Card.Text>
          </Card.Body>
        </Card>
      </Container>
      <br />
    </>
  );
};

export default AdminInput;
