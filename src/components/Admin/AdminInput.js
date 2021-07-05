import React, { useState } from "react";
import firebase from "firebase";
import Button from "react-bootstrap/Button";
import { Container, Card, Alert } from "react-bootstrap";


const AdminInput = ({ request }) => {
  const [serviceType, setServiceType] = React.useState(request.serviceType);
  const [error, setError] = useState("");

  const onUpdate = () => {
    const db = firebase.firestore();
    db.collection("requests")
      .doc(request.id)
      .set({ ...request, serviceType });

    return setError("Updated successfully!");
  };

  const onDelete = () => {
    var answer = window.confirm("Are you sure you want to delete me?");
    if (answer) {
      const db = firebase.firestore();
      db.collection("requests")
        .doc(request.id)
        .delete()
        .then(() => window.location.reload());
    }
  };

  return (
    <div>
      <Container
        className="d-flex align-items-center justify-content-center"
        style={{ minWidth: "300px", marginTop: "30px" }}
      >
        <Card>
          <Card.Body>
            <Card.Title>{request.fullName}</Card.Title>
            <hr />
            <Card.Text>
              <p>Email: {request.email}</p>
              <p>Phone: {request.phone}</p>
              <p>Vehicle: {request.vehicle}</p>
              <p>Location: {request.location}</p>
              <hr />
              <p>Service Details:</p>
              <textarea
                value={serviceType}
                onChange={(e) => {
                  setServiceType(e.target.value);
                }}
              />{" "}
              <br />
              <Button
                variant="info"
                onClick={onUpdate}
                style={{ marginRight: "20px" }}
              >
                Update
              </Button>
              <Button variant="danger" onClick={onDelete}>
                Delete
              </Button>
              <br />
              {error && (
                <Alert style={{ marginTop: "10px" }} variant="success">
                  {error}
                </Alert>
              )}
            </Card.Text>
            <Card.Footer>
              <b>Request ID: </b>
              {request.id}
            </Card.Footer>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
};

export default AdminInput;
