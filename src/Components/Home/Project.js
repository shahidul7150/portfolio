import React from 'react';
import { useNavigate } from 'react-router-dom';


const Project = ({ site }) => {
    console.log(site);
    const { _id,picture, heading, subtitle, live } = site
    
    const navigate = useNavigate();
  const navigateToServiceDetail = (id) => {
    navigate(`/service/${id}`);
  };
    return (
        <div>
            <div class="card card-side bg-base-100 shadow-xl">
                        <figure width="200px" height="280px"><img  src={picture} alt="Movie" /></figure>
                       
                        
  <div class="card-body">
                    <h2 class="card-title">{ heading}</h2>
                    <p>{subtitle}</p>
    <div class="card-actions justify-end">
    <button
          onClick={() => navigateToServiceDetail(_id)}
          className="btn btn-primary"
        >
          {heading} Details
        </button>
    </div>
  </div>
</div>
        </div>
    );
};

export default Project;