import React, { useState, useEffect } from 'react';

export default function Contact(){
  const [form, setForm] = useState({name:'', email:'', department:'', message:''});
  const [departments, setDepartments] = useState([]);
  const [submitted, setSubmitted] = useState(null);

  useEffect(() => {
    fetch('/src/data/departments.json')
      .then(res => res.json())
      .then(data => setDepartments(data))
      .catch(()=>setDepartments([]));
  }, []);

  function handleChange(e){
    setForm(prev => ({...prev, [e.target.name]: e.target.value}));
  }

  function handleSubmit(e){
    e.preventDefault();
    setSubmitted(form);
    setForm({name:'', email:'', department:'', message:''});
  }

  return (
    <>
      <h2>Contact</h2>
      <div className="row">
        <div className="col-md-6">
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label">Name</label>
              <input required name="name" value={form.name} onChange={handleChange} className="form-control" />
            </div>
            <div className="mb-3">
              <label className="form-label">Email</label>
              <input required type="email" name="email" value={form.email} onChange={handleChange} className="form-control" />
            </div>
            <div className="mb-3">
              <label className="form-label">Department</label>
              <select required name="department" value={form.department} onChange={handleChange} className="form-select">
                <option value="">-- Select --</option>
                {departments.map(d=> <option key={d.id} value={d.name}>{d.name}</option>)}
              </select>
            </div>
            <div className="mb-3">
              <label className="form-label">Message</label>
              <textarea required name="message" value={form.message} onChange={handleChange} className="form-control" rows="4" />
            </div>
            <button className="btn btn-primary" type="submit">Submit</button>
          </form>
        </div>
        <div className="col-md-6">
          <h5>College Address</h5>
          <p>123 College Road, City, State - 600000</p>
          <p>Email: info@college.edu</p>
        </div>
      </div>

      {submitted && (
        <div className="mt-4 card p-3">
          <h5>Submitted Details</h5>
          <p><strong>Name:</strong> {submitted.name}</p>
          <p><strong>Email:</strong> {submitted.email}</p>
          <p><strong>Department:</strong> {submitted.department}</p>
          <p><strong>Message:</strong> {submitted.message}</p>
        </div>
      )}
    </>
  );
}
