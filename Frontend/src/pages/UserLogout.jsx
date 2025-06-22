import React from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const UserLogout = () => {
    const navigate = useNavigate();
    const token = localStorage.getItem('token');
    React.useEffect(() => {
        if (!token) {
            navigate('/user-login');
        }
    }, [token, navigate]);

    const handleLogout = async () => {
        try {
            const response = await axios.post(
                `${import.meta.env.VITE_BASE_URL}/api/user/logout`,
                {},
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            );
            if (response.status === 200) {
                localStorage.removeItem('token');
                navigate('/user-login');
            }
        } catch (error) {
            console.error("Logout failed:", { error: error.message });
        }
    };


  return (
    <div>
        <button className='bg-red-500 text-white py-2 px-4 rounded-md shadow-md font-semibold text-lg' onClick={handleLogout}>
            Logout
        </button>
    </div>
  )
}

export default UserLogout