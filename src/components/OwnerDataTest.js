import React, { useState, useEffect } from "react";
import firebase from "../firebase";

function OwnerDataTest() {
const [owners, setOwners] = useState([]);
const [loading, setLoading] = useState(false);

const ref = firebase.firestore().collection("owners");
console.log(ref);


function getOwners() {
    setLoading(true);
    ref.onSnapshot((querySnapshot) => {
        const items = [];
        querySnapshot.forEach((doc) => {
            items.push(doc.data());
            console.log(doc.id);
        });
        setOwners(items);
        setLoading(false);
    })
}

useEffect(() => {
    getOwners();
}, []);

if(loading) {
    return <h1>Loading...</h1>;
}

return (
    <div>
        <h1>Owners</h1>
        {owners.map((owner) => (
        <div key={owners.id}>
        <h3>{owner.fullName}</h3>
        <h3>{owner.email}</h3>
        </div>
        ))}
    </div>
);
}
export default OwnerDataTest;