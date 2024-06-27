import React from 'react';
import { Link } from 'react-router-dom';

const SecurityDashboard = () => {
    return (
        <div>
            <h1>Security Dashboard</h1>
            <div>
                <button>
                    <Link to="/security/live-camera-feeds">Live Camera Feeds</Link>
                </button>
            </div>
            <div>
                <button>
                    <Link to="/security/access-control-override">Access Control Override</Link>
                </button>
            </div>
        </div>
    );
};

export default SecurityDashboard;
