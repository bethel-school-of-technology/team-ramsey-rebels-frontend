import React, { Component, useState, useEffect } from "react";
import firebase from "../firebase";
import RequestDataService from '../services/request.service';


function RequestDataTestInfo() {
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
            <h1>Requests Listed Below</h1>
            {requests.map((request) => (
            <div key={request.id}>
            <h3>{request.serviceType}</h3>
            <h3>{request.status}</h3>
    
            </div>
            ))}
        </div>
    );
    }
    
    export default RequestDataTestInfo;