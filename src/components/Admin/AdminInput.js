import React from "react";
import firebase from "firebase";
import Button from "react-bootstrap/Button";
import { Container, Card } from "react-bootstrap";

const AdminInput = ({ request }) => {
  const [serviceType, setServiceType] = React.useState(request.serviceType);

  const onUpdate = () => {
    const db = firebase.firestore();
    db.collection("requests")
      .doc(request.id)
      .set({ ...request, serviceType });
  };

  const onDelete = () => {
    const db = firebase.firestore();
    db.collection("requests").doc(request.id).delete();
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
              Service Needed:{" "}
              <input
                value={serviceType}
                onChange={(e) => {
                  setServiceType(e.target.value);
                }}
              />
              <Button variant="warning" onClick={onUpdate}>
                Update
              </Button>
              <br />
              <br />
              <Button variant="danger" onClick={onDelete}>
                Delete
              </Button>
            </Card.Text>
          </Card.Body>
        </Card>
      </Container>
      <br />
    </>
  );
};

export default AdminInput;
