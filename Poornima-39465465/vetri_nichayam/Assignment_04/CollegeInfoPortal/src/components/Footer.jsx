import React from 'react';

export default function Footer(){
  return (
    <footer className="bg-light text-center py-3 mt-4">
      <div className="container">
        <small>&copy; {new Date().getFullYear()} College Info Portal. All rights reserved.</small>
      </div>
    </footer>
  );
}
