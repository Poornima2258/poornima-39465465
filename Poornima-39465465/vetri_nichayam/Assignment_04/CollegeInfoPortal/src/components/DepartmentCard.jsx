import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function DepartmentCard({dept}){
  const navigate = useNavigate();
  return (
    <div className="card h-100">
      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{dept.name}</h5>
        <p className="card-text">{dept.description}</p>
        <div className="mt-auto">
          <button className="btn btn-primary" onClick={() => navigate(`/departments/${dept.id}`)}>View More</button>
        </div>
      </div>
    </div>
  );
}
