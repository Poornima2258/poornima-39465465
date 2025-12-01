import React from "react";
import { Link, Routes, Route } from "react-router-dom";

function Home() {
  return <h2>Home Page</h2>;
}
function About() {
  return <h2>About Page</h2>;
}
function Products() {
  return <h2>Products Page</h2>;
}

export default function RoutingDemo() {
  return (
    <div style={{ padding: 20 }}>
      <h1 style={{ color: "#002147" }}>Routing Demo</h1>

      <div style={{ display: "flex", gap: 12 }}>
        <Link to="" style={{ color: "#002147" }}>
          Home
        </Link>
        <Link to="about" style={{ color: "#002147" }}>
          About
        </Link>
        <Link to="products" style={{ color: "#002147" }}>
          Products
        </Link>
      </div>

      <div style={{ marginTop: 20 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="products" element={<Products />} />
        </Routes>
      </div>
    </div>
  );
}
