import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './Detail.css'
const Details = () => {
    const { serviceId } = useParams()
    const [project, setProject] = useState([]);
    const{picture,heading,subtitle,detail,technology,live}=project
    console.log(project);
    useEffect(() => {
        const url = `https://damp-cove-71011.herokuapp.com/service/${serviceId}`
        fetch(url)
        .then(res => res.json())
        .then(data => setProject(data));
    },[])
    return (
        <div>
            <div className='grid grid-cols-2 bg-red-400'>
                <div >
                    {/* <img src={picture} alt="" /> */}
                    <iframe className='w-full min-h-screen p-5' src={live} frameborder="0"></iframe>
                </div>
                <div className='mx-5 p-5 text-white'>
                    <img className='w-2/5 mx-auto' src={picture} alt="" />
                    <h2 className='text-center mt-5 text-3xl font-bold'>{heading} </h2>
                    <h2 className='text-center text-2xl py-3'> {subtitle}</h2>
                    <p className='text-center text-white py-3'>{ detail}</p>
                    <p className='text-center text-2xl'>Which Technology use: <span className='text-white'>{ technology}</span> </p>

                </div>
           </div>
        </div>
    );
};

export default Details;