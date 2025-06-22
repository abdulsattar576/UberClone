 
 
import { useNavigate } from 'react-router-dom'
import React, { useEffect } from 'react';
const UserProtecterWrapper = ({children}) => {
    const navigate = useNavigate();
    useEffect(() => {
        const token = localStorage.getItem('token');
        if (!token) {
            navigate('/user-login');
            return
        }
        const fetchUserData = async () => {
            try {
                console.debug('Fetching user data...');
                const response = await fetch(`${import.meta.env.VITE_BASE_URL}/api/user/profile`, {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                });
                console.debug('Fetch response:', response);
                if (!response.ok) {
                    throw new Error('Failed to fetch user data');
                }
                const data = await response.json();
                console.debug('Fetched user data:', data);
               
                if (!data.user || !data.user._id) {
                    console.error('User data is incomplete or missing _id');
                    navigate('/user-login');
                }
            } catch (error) {
                console.error('Error fetching user data:',{error:error.message}) 
                navigate('/user-login');
            }
        };
        fetchUserData();
    }, [navigate]);
    return (
        <div>{children}</div>
    );
}

export default UserProtecterWrapper