import React from "react";
import firebase from "firebase";
import AdminInput from "./AdminInput";
import Navigation from "../Nav/Navigation";
import Button from "react-bootstrap/Button";

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
      <h1>Update service requests here:</h1>
      <div>
        <Button variant="success" onClick={refreshPage}>
          Refresh Changes
        </Button>
      </div>
      <hr />
      <div>
        {requests.map((request) => (
          <div key={request.serviceType}>
            <AdminInput request={request} />
          </div>
        ))}
        <Button variant="success" onClick={refreshPage}>
          Refresh Changes
        </Button>
      </div>
    </div>
  );
}

export default Admin;
