import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';

function UserType() {
    return(
        <div>
            <h2>Who Are You?</h2>
            <hr></hr>
            <Link to="/ownersignup" className="">
            Car Owner
            </Link> || 
            <Link to="/mechanicsignup" className="">
            Mechanic
            </Link>
        </div>
    )
}

export default UserType;