import React from "react";
import firebase from "firebase";
import AdminInput from "./AdminInput";
import Navigation from "../Nav/Navigation";
import Button from "react-bootstrap/Button";
import { Card, Container } from "react-bootstrap";

function Admin() {
  const [requests, setRequests] = React.useState([]);

  React.useEffect(() => {
    const fetchData = async () => {
      const db = firebase.firestore();
      const data = await db.collection("requests").get();
      setRequests(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    fetchData();
  }, []);

  const refreshPage = () => {
    window.location.reload();
  };

  return (
    <div>
      <Navigation />
      <br />
      <br />
      <Container>
        <Card>
          <Card.Header>
            <h2>Update Service Requests Here:</h2>
          </Card.Header>
          <Card.Body>
            <Card.Title></Card.Title>
            <Card.Text>
              <div className="refresh">
                <Button variant="success" onClick={refreshPage}>
                  Refresh Changes
                </Button>
              </div>
              <hr />
              <div className="requests">
                {requests.map((request) => (
                  <div key={request.serviceType}>
                    <AdminInput request={request} />
                  </div>
                ))}
                <Button variant="success" onClick={refreshPage}>
                  Refresh Changes
                </Button>
              </div>
            </Card.Text>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
}

export default Admin;
