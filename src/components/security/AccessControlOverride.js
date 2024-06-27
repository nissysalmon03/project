import React, { useState, useEffect } from 'react';

const AccessControlOverride = () => {
    const [overrides, setOverrides] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchOverrides();
    }, []);

    const fetchOverrides = async () => {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/albums');
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            setOverrides(data);
        } catch (error) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div>
            <h1>Access Control Overrides</h1>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Override Status</th>
                    </tr>
                </thead>
                <tbody>
                    {overrides.map((override) => (
                        <tr key={override.id}>
                            <td>{override.id}</td>
                            <td>{override.title}</td>
                            <td>{override.id % 2 === 0 ? 'Active' : 'Inactive'}</td> {/* Placeholder status */}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default AccessControlOverride;
