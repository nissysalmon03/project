import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const TemporaryAccess = () => {
    const [access, setAccess] = useState({ visitorId: '', accessDuration: '' });

    const grantAccess = async () => {
        try {
            // Simulate API call
            console.log('Temporary access granted:', access);
            setAccess({ visitorId: '', accessDuration: '' });
        } catch (error) {
            console.error('Error granting temporary access:', error);
        }
    };

    return (
        <div>
            <h1>Temporary Access</h1>
            <div>
                <label>Visitor ID:</label>
                <input
                    type="text"
                    value={access.visitorId}
                    onChange={(e) => setAccess({ ...access, visitorId: e.target.value })}
                />
            </div>
            <div>
                <label>Access Duration:</label>
                <input
                    type="text"
                    value={access.accessDuration}
                    onChange={(e) => setAccess({ ...access, accessDuration: e.target.value })}
                />
            </div>
            <button onClick={grantAccess}>Grant Access</button>
            <Link to="/security-dashboard">Back to Security Dashboard</Link>
        </div>
    );
};

export default TemporaryAccess;
