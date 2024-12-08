import React from 'react';
import AdminPanel from '../components/AdminPanel'; // Correct import path

const Admin = () => {
    useEffect(() => {
        const token = localStorage.getItem("token");
        if (!token) {
          window.location.href = "/login";
        }
      })
    return (
        <div>
            <AdminPanel />
        </div>
    );
};

export default Admin;