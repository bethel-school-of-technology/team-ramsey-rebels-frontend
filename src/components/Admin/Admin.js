import React from 'react';
import firebase from 'firebase';
import AdminInput from './AdminInput';
import Nav from '../Nav/Nav';

function Admin() {
    const [requests, setRequests] = React.useState([]);
    


    React.useEffect(() => {
        const fetchData = async() => {
        const db = firebase.firestore()
        const data = await db.collection("requests").get()
        setRequests(data.docs.map(doc => ({...doc.data(), id: doc.id})))
        
    }
    fetchData();
}, [])

const refreshPage = () => {
    window.location.reload();
}


return (
    <div>
        <Nav />
        <h1>Update service requests here:</h1>
        <div>
        <button onClick={refreshPage}>Refresh Changes</button>
    </div>
    <hr />
    <div>
        {requests.map(request => (
            <div key={request.serviceType}>
                <AdminInput request={request} />
                </div>
        ))}
    </div>

    </div>
);
}

export default Admin;
