import React, { useState } from "react";
import firebase from "firebase";
import AdminInput from "./AdminInput";
import Navigation from "../Nav/Navigation";
import Footer from "../Footer";
import Button from "react-bootstrap/Button";
import { Card, Container, Alert, Jumbotron } from "react-bootstrap";
import { useAuth } from "../../contexts/AuthContext";
import { useHistory } from "react-router-dom";

export default function Admin() {
  const [requests, setRequests] = React.useState([]);
  const [error, setError] = useState("");
  const { currentUser, logout } = useAuth();
  const history = useHistory();

  async function handleLogout() {
    setError("");

    try {
      await logout();
      history.push("/adminlogin");
    } catch {
      setError("Failed to log out");
    }
  }

  React.useEffect(() => {
    const fetchData = async () => {
      const db = firebase.firestore();
      const data = await db.collection("requests").get();
      setRequests(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    fetchData();
  }, []);

  return (
    <div className="admin-div">
      <Navigation />
      <br />
      <br />
      <Container>
        <Card className="admin-card" bg="light" body>
          <h2>Admin Account</h2>
        </Card>
        <br />
      </Container>
      <div className="requests">
        {requests.map((request) => (
          <div key={request.serviceType}>
            <AdminInput request={request} />
          </div>
        ))}
      </div>
      <br />
      <Jumbotron>
        {" "}
        <p>
          ( {currentUser && currentUser.email} ){" "}
          <Button variant="dark" onClick={handleLogout}>
            Log Out
          </Button>
          {error && <Alert variant="danger">{error}</Alert>}
        </p>
      </Jumbotron>
      <Footer />
    </div>
  );
}
