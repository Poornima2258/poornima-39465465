import React from 'react';
import { Link } from 'react-router-dom';

export default function Home(){
  return (
    <>
      <section className="p-5 text-white bg-primary rounded-3 mb-4">
        <div className="container">
          <h1 className="display-6">Welcome to Our College</h1>
          <p className="lead">Shaping innovators and leaders — excellence in teaching and research.</p>
          <Link to="/departments" className="btn btn-light">Explore Departments</Link>
        </div>
      </section>

      <section className="mb-4">
        <h2>Why this college?</h2>
        <p>We provide industry-aligned curriculum, experienced faculty, and excellent infrastructure to help students thrive.</p>
      </section>

      <section>
        <h3>Top Departments</h3>
        <div className="row g-3">
          <div className="col-md-4">
            <div className="card p-3">
              <h5>CSE</h5>
              <p>Strong in software and AI.</p>
              <Link to="/departments/cse" className="btn btn-outline-primary btn-sm">View</Link>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card p-3">
              <h5>ECE</h5>
              <p>Excellent labs & research.</p>
              <Link to="/departments/ece" className="btn btn-outline-primary btn-sm">View</Link>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card p-3">
              <h5>MBA</h5>
              <p>Industry focused management.</p>
              <Link to="/departments/mba" className="btn btn-outline-primary btn-sm">View</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
