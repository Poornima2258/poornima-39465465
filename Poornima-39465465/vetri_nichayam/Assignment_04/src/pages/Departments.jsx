import React, { useEffect, useState } from 'react';
import DepartmentCard from '../components/DepartmentCard';

export default function Departments(){
  const [departments, setDepartments] = useState([]);

  useEffect(() => {
    fetch('/src/data/departments.json')
      .then(res => res.json())
      .then(data => setDepartments(data))
      .catch(err => console.error('Failed loading departments', err));
  }, []);

  return (
    <>
      <h2>Departments</h2>
      <div className="row row-cols-1 row-cols-md-3 g-3">
        {departments.map(dept => (
          <div className="col" key={dept.id}>
            <DepartmentCard dept={dept} />
          </div>
        ))}
      </div>
    </>
  );
}
