import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import "./Home.css"
function Home(props) {
    const {data} = props
    console.log(data)
    const [datas, setDatas]=useState([])
    const [page, setPage] = useState(1)
    useEffect(()=>{
        let temp = []
        for(let i= 0; i < 15; i++){
            temp[i] = data[i]
        }
        setDatas(temp)
    }, [data])

    const handlePaginationInc = ()=>{
        let deference = data.length-page*15
        if(deference<=15){
            let temp = []
        for(let i= page*15; i < data.length; i++){
            temp[i] = data[i]
        }
        setDatas(temp)
        setPage((old)=>old+1)
        } 
        else{
            let temp = []
            for(let i= page*15; i < 15; i++){
                temp[i] = data[i]
            }
            setDatas(temp)
            setPage((old)=>old+1)
        }
    }
    const handlePaginationDec = ()=>{   
        if(page===2){
            let temp = []
            for(let i = 0; i < 15; i++){
                temp[i] = data[i]
            }
            setDatas(temp)
            setPage(1)
        }
        else{
            let temp = []
            for(let i = (page*15)-15; i < page*15; i++){
                temp[i] = data[i]
            }
            setDatas(temp)
            setPage((old)=>old-1)
        }
    }
    return (
        <>
        <div className='container home-container'>
            {datas.map((val, i)=>{
                return(
                    <div key={i} className='cards'>
                <img src={val?.image} alt="" />
                <div className='sub-card'>
                    <h3 className='text-muted'>{val?.firstName}</h3>
                    <button className='btn btn-primary'><Link className="text-white text-decoration-none" to="/userinfo" state={datas[i]}>click to view Profile</Link></button>
                </div>
                
            </div> 
                )
            })}
            
        </div>
        <div className="d-flex justify-content-center">
        <button onClick={handlePaginationDec} className="btn btn-primary" disabled={(page===1)?true:false}>Previus</button>
        <p className="px-5 text-primary"><span>{page}</span></p>
        <button onClick={handlePaginationInc} className="btn btn-primary" disabled={((page*15)===data.length)?true:false}>Next</button>
        </div>
        
        </>
    );
}

export default Home;