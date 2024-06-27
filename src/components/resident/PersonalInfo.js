import React, { useState, useEffect } from 'react';

const PersonalInfo = () => {
    const [info, setInfo] = useState({});

    useEffect(() => {
        fetchPersonalInfo();
    }, []);

    const fetchPersonalInfo = async () => {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
            const data = await response.json();
            setInfo(data);
        } catch (error) {
            console.error('Error fetching personal info:', error);
        }
    };

    return (
        <div>
            <h1>Personal Info</h1>
            <div>
                <label>Name: </label>
                <span>{info.name}</span>
            </div>
            <div>
                <label>Username: </label>
                <span>{info.username}</span>
            </div>
            <div>
                <label>Email: </label>
                <span>{info.email}</span>
            </div>
            <div>
                <label>Phone: </label>
                <span>{info.phone}</span>
            </div>
            <div>
                <label>Website: </label>
                <span>{info.website}</span>
            </div>
            <div>
                <label>Address: </label>
                <span>{info.address?.street}, {info.address?.suite}, {info.address?.city}, {info.address?.zipcode}</span>
            </div>
            <div>
                <label>Company: </label>
                <span>{info.company?.name}</span>
            </div>
        </div>
    );
};

export default PersonalInfo;
