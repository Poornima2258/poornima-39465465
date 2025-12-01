import React from "react";
import { Link, Routes, Route } from "react-router-dom";

function Electronics() {
  return <h3>Electronics Section</h3>;
}
function Fashion() {
  return <h3>Fashion Section</h3>;
}

export default function NestedDemo() {
  return (
    <div style={{ padding: 20 }}>
      <h1 style={{ color: "#002147" }}>Nested Routes Demo</h1>

      <div style={{ display: "flex", gap: 12 }}>
        <Link to="electronics" style={{ color: "#002147" }}>
          Electronics
        </Link>
        <Link to="fashion" style={{ color: "#002147" }}>
          Fashion
        </Link>
      </div>

      <div style={{ marginTop: 20 }}>
        <Routes>
          <Route path="electronics" element={<Electronics />} />
          <Route path="fashion" element={<Fashion />} />
        </Routes>
      </div>
    </div>
  );
}
