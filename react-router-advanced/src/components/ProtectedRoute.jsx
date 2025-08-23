import React from "react";
import { Navigate } from "react-router-dom";

/**
 * Usage:
 * <ProtectedRoute isAuthenticated={bool} redirectTo="/login">
 *   <YourComponent />
 * </ProtectedRoute>
 */
export default function ProtectedRoute({ isAuthenticated, redirectTo = "/login", children }) {
  if (!isAuthenticated) return <Navigate to={redirectTo} replace />;
  return children;
}

["useAuth"]