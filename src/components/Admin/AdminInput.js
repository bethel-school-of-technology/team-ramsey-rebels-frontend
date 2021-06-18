import React from 'react';
import firebase from 'firebase';
import Button from 'react-bootstrap/Button';

const AdminInput = ({request}) => {
const [serviceType, setServiceType] = React.useState(request.serviceType);

const onUpdate = () => {
const db = firebase.firestore()
db.collection('requests').doc(request.id).set({...request, serviceType});

}

const onDelete = () => {
    const db = firebase.firestore()
    db.collection('requests').doc(request.id).delete();

}

    return (<>
    <p><b>Request ID: </b>{request.id}</p>
    <p>{request.fullName} | {request.email} | {request.phone}</p>
    <p>{request.vehicle} | {request.location}</p>
    Service Needed: <input value={serviceType} onChange={(e) => {setServiceType(e.target.value)}}/>
    <br />
    <Button variant="warning" onClick={onUpdate}>Update</Button>
    <Button variant="danger" onClick={onDelete}>Delete</Button>
    <hr />

    </>)

}

export default AdminInput;