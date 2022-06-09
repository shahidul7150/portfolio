import React, { useEffect, useState } from 'react';
import Project from './Project';
const Projects = () => {
    const [sites, setSites] = useState([]);
    useEffect(() => {
        fetch('https://damp-cove-71011.herokuapp.com/service')
            .then(res => res.json())
        .then(data=>setSites(data))
    },[])
    return (
        <div className='mt-8'>
            <h2 className='text-center text-3xl font-bold mb-5'>My Projects</h2>


            <div className='mx-12'>
           

            <div className='grid sm:grid-cols-1 lg:grid-cols-2 gap-5 '>

                    

                    {
                        sites.map(site=><Project key={site._id} site={site}></Project>)
                 }




                {/* <div className='shadow-lg p-3'>
                    <img src="https://i.ibb.co/7Gnk42d/Tools-House.png" alt="" />
                    <button className='bg-red-500 py-2 px-3 font-bold text-white'><a href="https://tools-house.web.app/" target="-blank">Live Preview</a></button>
                    </div>
                    

                <div className='shadow-lg p-3'>
                    <img src="https://i.ibb.co/0cCspTx/snow.png" alt="" />
                    <button className='bg-red-500 py-2 px-3 font-bold text-white'><a href="https://snow-fun.netlify.app" target="-blank">Live Preview</a></button>
                    </div>
                    

                <div className='shadow-lg p-3'>
                    <img src="https://i.ibb.co/sg1DY5j/f2c.png" alt="" />
                    <button className='bg-red-500 py-2 px-3 font-bold text-white'><a href="https://f2c-store-auth.web.app/home" target="-blank">Live Preview</a></button>
                    </div>
                    

                <div className='shadow-lg p-3'>
                    <img src="https://i.ibb.co/jzw0b5T/career.png" alt="" />
                    <button className='bg-red-500 py-2 px-3 font-bold text-white'><a href="https://mr-career.web.app/" target="-blank">Live Preview</a></button>
                </div> */}

                </div>
                </div>
            
        </div>
    );
};

export default Projects;