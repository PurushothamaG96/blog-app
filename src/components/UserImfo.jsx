import React from 'react';
import {Link, useLocation} from "react-router-dom"
import "./userinfo.css"
function UserImfo(props) {
    const location = useLocation()
    console.log(location.state)
    return (
        <>
        <div className="container">
            
            <div className="info-container">
                <img src={location?.state?.image} alt={location?.state?.firstName}/>
                <h1><span>Name : {location?.state?.firstName}</span><span>{location?.state?.lastName}</span></h1>
                <h3>Email : {location?.state?.email}</h3>
                <h3>Phone : {location?.state?.phone}</h3>
                <h3>Age : {location?.state?.age}</h3>
                <h3>Gender : {location?.state?.gender}</h3>
                <h3>Height : {location?.state?.height}</h3>
                <h3>weight : {location?.state?.weight}</h3>

                
            </div>
            <Link to="/">Home</Link>
        </div>
        </>
    );
}

export default UserImfo;