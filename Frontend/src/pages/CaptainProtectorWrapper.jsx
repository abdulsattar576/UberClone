import React, { useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CaptainDataContext } from "../context/CaptainContext";
import axios from "axios";

const CaptainProtectorWrapper = ({ children }) => {
  const navigate = useNavigate();
  const { setCaptain, isLoading, setisLoading, setError } = useContext(CaptainDataContext);
  const token = localStorage.getItem("token");

  useEffect(() => {
    if (!token) {
      navigate("/captain-login");
      return;
    }
    const fetchCaptainData = async () => {
      try {
        setisLoading(true);
        const response = await axios.get(
          `${import.meta.env.VITE_BASE_URL}/api/captain/profile`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        if (response.status === 200) {
          // response.data should be { captain: {...} }
          setCaptain(response.data.captain);
          if (!response.data.captain || !response.data.captain._id) {
            console.error("Captain data is incomplete or missing _id");
            navigate("/captain-login");
          }
        }
      } catch (error) {
        console.error("Error fetching captain data:", error);
        setError(error);
        navigate("/captain-login");
      } finally {
        setisLoading(false);
      }
    };
    fetchCaptainData();
    // eslint-disable-next-line
  }, [navigate, token, setCaptain, setisLoading, setError]);

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return <div>{children}</div>;
};

export default CaptainProtectorWrapper;