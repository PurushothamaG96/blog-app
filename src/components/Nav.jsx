import React, {useState} from 'react';
import {Link} from "react-router-dom"

import "./nav.css"
function Nav(props) {
    const [active, setActive] = useState(["active", "de-active", "de-active"])
    return (
        <div className='nav-container'>
            <div className='inner-nav-container'>
            <nav className='d-flex justify-content-between align-items-center'>
                <p className='mx-2'>JSOM</p>
                <ul className='d-flex'>
                    <li onClick={()=>{
                        setActive(["active", "de-active", "de-active"])
                    }} className='mx-2'><Link className={`Link ${active[0]}`} to={"./"}>Authors</Link></li>
                    <li onClick={()=>{
                        setActive(["de-active","active", "de-active"])
                    }} 
                     className='mx-2'><Link className={`Link ${active[1]}`} to={"./mostlinkedpost"}>MostLinkedPost</Link></li>
                    <li onClick={()=>{
                        setActive(["de-active", "de-active" ,"active"])
                    }} 
                     className='mx-2'><Link className={`Link ${active[2]}`} to={"./mostCommentpost"}>MostCommentPost</Link></li>
                </ul>
            </nav>
            </div>
            
        </div>
    );
}

export default Nav;