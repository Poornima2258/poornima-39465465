import React from 'react';

export default function About(){
  return (
    <>
      <h2>About the College</h2>
      <p>Established in 1990, our college has a history of academic excellence and strong industry partnerships.</p>

      <h3>Mission & Vision</h3>
      <p><strong>Mission:</strong> To educate students for lifelong learning and responsible citizenship.</p>
      <p><strong>Vision:</strong> To be a centre of excellence in education, research and innovation.</p>

      <h3>Achievements</h3>
      <div className="row">
        <div className="col-md-4">
          <div className="card p-3 mb-3">
            <h5>Accredited</h5>
            <p>National accreditation for quality education.</p>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card p-3 mb-3">
            <h5>Research Grants</h5>
            <p>Multiple funded projects in engineering and technology.</p>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card p-3 mb-3">
            <h5>Placements</h5>
            <p>Strong placement record with top companies.</p>
          </div>
        </div>
      </div>
    </>
  );
}
