import React, {useState} from 'react';
import "./Home.css"
function Home(props) {
    const {datas} = props
    const [data, useState]=useState(datas)
    return (
        <div className='container home-container'>
            {datas}
            <div className='cards'>
                <img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree__480.jpg" alt="" />
                <div className='sub-card'>
                    <h3 className='text-muted'>Delphy crist</h3>
                    <button className='btn btn-primary'>click to view Profile</button>
                </div>
            </div> 
        </div>
    );
}

export default Home;