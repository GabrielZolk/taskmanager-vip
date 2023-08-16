import React from 'react';
import { Navigate } from 'react-router-dom';
import { getAuth } from "firebase/auth";

interface PrivateRouteProps {
  children: React.ReactNode;
}

function PrivateRoute({ children }: PrivateRouteProps) {
  const auth = getAuth()
  const user = auth.currentUser; 

  if (user) {
    return children;
  } else {
    return <Navigate to="/login" replace />;
  }
}

export default PrivateRoute;
