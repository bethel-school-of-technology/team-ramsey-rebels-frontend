import React, { useState, useEffect } from "react";
import firebase from "../../firebase";
import Nav from '../Nav/Nav';


function MyRequests() {
const [requests, setRequests] = useState([]);
const [loading, setLoading] = useState(false);

//********filter below needs to be changed to allow for user's email**********

const ref= firebase.firestore().collection("requests").where('phone', '==', '662-555-2121');
console.log(ref);

function getRequests() {
    setLoading(true);
    ref.onSnapshot((querySnapshot) => {
        const items = [];
        querySnapshot.forEach((doc) => {
            items.push(doc.data());
        });
        setRequests(items);
        setLoading(false);
    })
}

useEffect(() => {
    getRequests();
}, []);

if(loading) {
    return <h1>Loading...</h1>;
}


return (
    <div>
        <Nav />
        <h1>Find My Requests by Phone Number:</h1>
        <form>
        <input type="text" />
        <button>Submit</button>
        </form>
        {requests.map((request) => (
        <div key={request.fullName}>
        <h6>{request.fullName} | {request.email} | {request.phone} {request.vehicle} | {request.location} | {request.serviceType}</h6>
        <hr />
        </div>
        ))}
        </div>
);
}

export default MyRequests;