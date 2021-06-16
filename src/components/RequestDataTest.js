import React, { useState, useEffect } from "react";
import firebase from "../firebase";
import RequestDataTestPost from './RequestDataTestPost';

function RequestDataTest() {
const [requests, setRequests] = useState([]);
const [loading, setLoading] = useState(false);

const ref = firebase.firestore().collection("requests");
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
        <RequestDataTestPost />
        <h1>Requests</h1>
        {requests.map((request) => (
        <div key={request.key}>
        <h6>{request.fullName} | {request.email} | {request.phone} {request.vehicle} | {request.location} | {request.serviceType}</h6>
        <hr />
        </div>
        ))}
        </div>
);
}

export default RequestDataTest;