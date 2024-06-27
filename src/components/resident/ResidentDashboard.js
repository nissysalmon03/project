import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button'; // Ensure you have MUI library installed

const ResidentDashboard = () => {
    return (
        <div>
            <h1>Resident Dashboard</h1>
            <div style={{ display: 'flex', gap: '10px', marginTop: '20px' }}>
                <Button 
                    variant="contained" 
                    color="primary" 
                    component={Link} 
                    to="/resident/visitor-logs"
                >
                    Visitor Logs
                </Button>
                <Button 
                    variant="contained" 
                    color="secondary" 
                    component={Link} 
                    to="/resident/personal-info"
                >
                    Personal Info
                </Button>
            </div>
        </div>
    );
};

export default ResidentDashboard;
