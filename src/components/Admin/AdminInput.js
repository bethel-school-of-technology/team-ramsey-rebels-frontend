import React from 'react';
import firebase from 'firebase';

const AdminInput = ({request}) => {
const [serviceType, setServiceType] = React.useState(request.serviceType);

const onUpdate = () => {
const db = firebase.firestore()
db.collection('requests').doc(request.id).set({...request, serviceType})
}

const onDelete = () => {
    const db = firebase.firestore()
    db.collection('requests').doc(request.id).delete()
}

    return (<>
    <p><b>Request ID: </b>{request.id}</p>
    <p>{request.fullName} | {request.email} | {request.phone}</p>
    <p>{request.vehicle} | {request.location}</p>
    Service Needed: <input value={serviceType} onChange={(e) => {setServiceType(e.target.value)}}/>
    <br />
    <button onClick={onUpdate}>Update</button>
    <button onClick={onDelete}>Delete</button>
    <hr />

    </>)

}

export default AdminInput;