import React from "react";
import { Link, Outlet } from "react-router-dom";

export default function Profile() {
  return (
    <div style={{ padding: 16 }}>
      <h2>Profile</h2>
      <nav style={{ marginBottom: 12 }}>
        <Link to="details">Details</Link> {" | "}
        <Link to="settings">Settings</Link>
      </nav>
      {/* Nested routes render here */}
      <Outlet />
    </div>
  );
}

 ["Routes", "Route", "ProfileDetails", "ProfileSettings"]