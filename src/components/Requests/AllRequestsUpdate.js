import React from 'react';
import firebase from 'firebase';
import AllRequestsInput from './AllRequestsInput';
import Nav from '../Nav/Nav';

function AllRequestsUpdate() {
    const [requests, setRequests] = React.useState([])

    React.useEffect(() => {
        const fetchData = async() => {
        const db = firebase.firestore()
        const data = await db.collection("requests").get()
        setRequests(data.docs.map(doc => ({...doc.data(), id: doc.id})))
    }
    fetchData()
}, [])

return (
    <div>
        <Nav />
        <h1>Current Service Requests:</h1>
    <div>
        {requests.map(request => (
            <p key={request.serviceType}>
                <AllRequestsInput request={request} />
                </p>
        ))}
    </div>
    </div>
);
}

export default AllRequestsUpdate;
