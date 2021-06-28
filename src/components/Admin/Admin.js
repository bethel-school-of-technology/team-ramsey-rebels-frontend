import React, {useState} from "react";
import firebase from "firebase";
import AdminInput from "./AdminInput";
import Navigation from "../Nav/Navigation";
import Button from "react-bootstrap/Button";
import { Card, Container, Alert  } from "react-bootstrap";
import {useAuth} from "../../contexts/AuthContext"
import { useHistory } from "react-router-dom"


export default function Admin() {
  const [requests, setRequests] = React.useState([]);
  const [error, setError] = useState("")
  const { currentUser, logout } = useAuth()
  const history = useHistory()

  async function handleLogout(){
    setError('')

    try{
        await logout()
        history.push('/adminlogin')
    } catch {
      setError('Failed to log out')
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

  const refreshPage = () => {
    window.location.reload();
  };

 
  return (
    <>
      <Navigation />
      <br />
      <br />
      <Container>

        <Card>
          <Card.Header>
            <h2>Update Service Requests Here:</h2>
          </Card.Header>
          {error && <Alert variant="danger">{error}</Alert>}
          <Card.Body>
            <Card.Title className="w-100 text-center mt-2">{currentUser && currentUser.email}</Card.Title>
            <Card.Text>
              <div className="refresh">
                <Button variant="success" onClick={refreshPage}>
                  Refresh Changes
                </Button>
              </div>
              <div className="w-100 text-center mt-2">
                <Button variant="link" onClick={handleLogout}>Log Out</Button>
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
    </>
  );
}