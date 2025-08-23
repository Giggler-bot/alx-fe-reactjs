import React from "react";
import { BrowserRouter, Routes, Route, Link, Navigate, Outlet, useParams } from "react-router-dom";

const fakeAuth = {
  isAuthenticated: false,
  login(cb) { this.isAuthenticated = true; setTimeout(cb, 100); },
  logout(cb) { this.isAuthenticated = false; setTimeout(cb, 100); }
};

function Home() {
  return <div><h2>Home</h2><p>Welcome.</p></div>;
}

function Login() {
  const handleLogin = () => {
    fakeAuth.login(() => window.location.href = "/profile");
  };
  return <div><h2>Login</h2><button onClick={handleLogin}>Login (mock)</button></div>;
}

function ProtectedRoute({ children }) {
  if (!fakeAuth.isAuthenticated) {
    return <Navigate to="/login" replace />;
  }
  return children;
}

/* Profile with nested routes */
function Profile() {
  return (
    <div>
      <h2>Profile</h2>
      <nav>
        <Link to="details">Details</Link> | <Link to="settings">Settings</Link>
      </nav>
      <Outlet />
    </div>
  );
}
function ProfileDetails() { return <div><h3>Profile Details</h3></div>; }
function ProfileSettings() { return <div><h3>Profile Settings</h3></div>; }

/* Dynamic route example: blog post */
function Post() {
  const { postId } = useParams();
  return <div><h2>Post {postId}</h2><p>Dynamic route content for post {postId}</p></div>;
}

export default function AppRouter() {
  return (
    <BrowserRouter>
      <header>
        <Link to="/">Home</Link> | <Link to="/profile">Profile</Link> | <Link to="/posts/42">Post 42</Link> | <Link to="/login">Login</Link>
      </header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />

        <Route path="/profile" element={
          <ProtectedRoute><Profile /></ProtectedRoute>
        }>
          <Route path="details" element={<ProfileDetails />} />
          <Route path="settings" element={<ProfileSettings />} />
          {/* default nested route */}
          <Route index element={<ProfileDetails />} />
        </Route>

        <Route path="/posts/:postId" element={<Post />} />

        <Route path="*" element={<div>404 Not Found</div>} />
      </Routes>
    </BrowserRouter>
  );
}
