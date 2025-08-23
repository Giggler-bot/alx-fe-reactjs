import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useNavigate,
} from "react-router-dom";

import ProtectedRoute from "./components/ProtectedRoute";
import BlogPost from "./components/BlogPost";

// If you already created these earlier, keep them.
// Otherwise, you can temporarily stub them or adjust imports.
import Profile from "./components/Profile"; // must exist from your nested routes task
import ProfileDetails from "./components/ProfileDetails";
import ProfileSettings from "./components/ProfileSettings";

function Home() {
  return <div><h2>Home</h2><p>Welcome.</p></div>;
}

function Login({ onLogin }) {
  const navigate = useNavigate();
  const handleLogin = () => {
    onLogin(true);
    navigate("/profile", { replace: true });
  };
  return (
    <div style={{ padding: 16 }}>
      <h2>Login</h2>
      <button onClick={handleLogin}>Login (mock)</button>
    </div>
  );
}

export default function App() {
  // super simple auth state; persist in localStorage to survive reloads
  const [isAuthed, setIsAuthed] = React.useState(
    () => localStorage.getItem("authed") === "true"
  );
  React.useEffect(() => {
    localStorage.setItem("authed", String(isAuthed));
  }, [isAuthed]);

  return (
    <BrowserRouter>
      <header style={{ display: "flex", gap: 12, padding: 12, borderBottom: "1px solid #eee" }}>
        <Link to="/">Home</Link>
        <Link to="/profile">Profile (Protected)</Link>
        <Link to="/blog/42">Blog 42</Link>
        <Link to="/login">Login</Link>
        {isAuthed && (
          <button onClick={() => setIsAuthed(false)} style={{ marginLeft: "auto" }}>
            Logout
          </button>
        )}
      </header>

      <Routes>
        <Route path="/" element={<Home />} />

        {/* Protected profile with nested routes already implemented */}
        <Route
          path="/profile"
          element={
            <ProtectedRoute isAuthenticated={isAuthed} redirectTo="/login">
              <Profile />
            </ProtectedRoute>
          }
        >
          <Route index element={<ProfileDetails />} />
          <Route path="details" element={<ProfileDetails />} />
          <Route path="settings" element={<ProfileSettings />} />
        </Route>

        {/* Dynamic route: /blog/:id -> BlogPost */}
        <Route path="/blog/:id" element={<BlogPost />} />

        <Route path="/login" element={<Login onLogin={setIsAuthed} />} />

        <Route path="*" element={<div style={{ padding: 16 }}>404 Not Found</div>} />
      </Routes>
    </BrowserRouter>
  );
}
