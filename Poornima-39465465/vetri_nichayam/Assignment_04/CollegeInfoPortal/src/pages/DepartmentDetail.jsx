import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function DepartmentDetail(){
  const { id } = useParams();
  const [dept, setDept] = useState(null);

  useEffect(() => {
    fetch('/src/data/departments.json')
      .then(res => res.json())
      .then(data => {
        const found = data.find(d => d.id.toLowerCase() === id.toLowerCase());
        setDept(found || null);
      })
      .catch(err => console.error(err));
  }, [id]);

  if(!dept) return <p>Loading or department not found.</p>;

  return (
    <>
      <h2>{dept.name}</h2>
      <p>{dept.fullDescription}</p>

      <h4>Courses Offered</h4>
      <ul>
        {dept.courses.map((c, i) => <li key={i}>{c}</li>)}
      </ul>

      <h4>Faculty</h4>
      <ul>
        {dept.faculty.map((f, i) => <li key={i}>{f}</li>)}
      </ul>

      <h4>Labs / Facilities</h4>
      <ul>
        {dept.labs.map((l, i) => <li key={i}>{l}</li>)}
      </ul>
    </>
  );
}
