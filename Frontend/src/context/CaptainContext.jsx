import React, { createContext,useState } from "react";

// Create the context
export const CaptainDataContext = createContext();

// Provider component
  const CaptainContext = ({ children }) => {
  const [captain, setCaptain] = useState(null);
const [isLoading, setisLoading] = useState(true);
    const [error, setError] = useState(null);

  return (
    <CaptainDataContext.Provider value={{ captain, setCaptain, isLoading, setisLoading, error, setError }}>
      {children}
    </CaptainDataContext.Provider>
  );
};
export default CaptainContext;