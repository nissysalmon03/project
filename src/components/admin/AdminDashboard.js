import React from 'react';
import { Link } from 'react-router-dom';

const AdminDashboard = () => {
    return (
        <div>
            <h1>Admin Dashboard</h1>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'start' }}>
                <Link to="/admin/user-management" style={{ margin: '5px' }}>
                    <button>User Management</button>
                </Link>
                <Link to="/admin/role-management" style={{ margin: '5px' }}>
                    <button>Role Management</button>
                </Link>
                <Link to="/admin/report-generation" style={{ margin: '5px' }}>
                    <button>Report Generation</button>
                </Link>
            </div>
        </div>
    );
};

export default AdminDashboard;
