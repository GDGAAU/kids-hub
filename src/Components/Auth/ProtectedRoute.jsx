import React from "react";
import { Navigate } from "react-router-dom";
import { getToken } from "../utils/jwt";

export default function ProtectedRoute({ children }) {
  const token = getToken();
  if (!token) {
    // Not logged in, redirect to login
    return <Navigate to="/login" replace />;
  }
  // Logged in, render the protected component
  return children;
}
