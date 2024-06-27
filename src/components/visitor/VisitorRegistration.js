import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const VisitorRegistration = () => {
    const [visitor, setVisitor] = useState({ name: '', email: '' });

    const registerVisitor = async () => {
        try {
            // Simulate API call
            console.log('Visitor registered:', visitor);
            setVisitor({ name: '', email: '' });
        } catch (error) {
            console.error('Error registering visitor:', error);
        }
    };

    return (
        <div>
            <h1>Visitor Registration</h1>
            <div>
                <label>Name:</label>
                <input
                    type="text"
                    value={visitor.name}
                    onChange={(e) => setVisitor({ ...visitor, name: e.target.value })}
                />
            </div>
            <div>
                <label>Email:</label>
                <input
                    type="email"
                    value={visitor.email}
                    onChange={(e) => setVisitor({ ...visitor, email: e.target.value })}
                />
            </div>
            <button onClick={registerVisitor}>Register</button>
            <div>
                <Link to="/resident-dashboard">Back to Resident Dashboard</Link>
            </div>
        </div>
    );
};

export default VisitorRegistration;
