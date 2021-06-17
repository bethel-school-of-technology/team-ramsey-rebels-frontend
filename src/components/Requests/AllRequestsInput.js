import React from 'react';
import firebase from 'firebase';



const AllRequestsInput = ({request}) => {
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
    <p>{request.fullName} | {request.email} | {request.phone} | 
    <input value={serviceType} onChange={(e) => {setServiceType(e.target.value)}}/>
    <button onClick={onUpdate}>Update</button>
    <button onClick={onDelete}>Delete</button>
    </p>
    </>)

}

export default AllRequestsInput;