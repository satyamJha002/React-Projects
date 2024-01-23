import React from "react";

const Navigation = () => {
  return (
    <div>
      <nav>
        <div className="logo">
          <img src="/images/brand_logo.png" alt="brand logo" />
        </div>
        <ul>
          <li href="/menu">Menu</li>
          <li href="/location">Location</li>
          <li href="/about">About</li>
          <li href="/contact">Contact</li>
        </ul>
        <button>Login</button>
      </nav>
    </div>
  );
};

export default Navigation;
