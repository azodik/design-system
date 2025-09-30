import React from "react";
import { useLocation } from "react-router-dom";
import ComponentContent from "../components/ComponentContent";

export default function ComponentPage() {
  const location = useLocation();
  
  // Determine if we should show all components or specific component
  // If path is exactly '/components', show all; otherwise show specific component
  const showAll = location.pathname === '/components';
  
  return <ComponentContent showAll={showAll} />;
}
