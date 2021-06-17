import React from 'react';
import firebase from 'firebase';
import AllRequestsInput from './AllRequestsInput';

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
        <h1>Update service requests here:</h1>
    <ul>
        {requests.map(request => (
            <li key={request.serviceType}>
                <AllRequestsInput request={request} />
                </li>
        ))}
    </ul>
    </div>
);
}

export default AllRequestsUpdate;
