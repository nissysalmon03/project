import React, { useState } from 'react';

const RoleManagement = () => {
    const [roles, setRoles] = useState([
        { id: 1, name: 'Admin' },
        { id: 2, name: 'Editor' },
        { id: 3, name: 'Viewer' },
    ]);

    const [newRoleName, setNewRoleName] = useState('');
    const [editRoleId, setEditRoleId] = useState(null);
    const [editRoleName, setEditRoleName] = useState('');

    const handleAddRole = () => {
        if (newRoleName.trim()) {
            const newRole = { id: roles.length + 1, name: newRoleName };
            setRoles([...roles, newRole]);
            setNewRoleName('');
        }
    };

    const handleEditRole = (id) => {
        const role = roles.find((role) => role.id === id);
        setEditRoleId(id);
        setEditRoleName(role.name);
    };

    const handleUpdateRole = () => {
        const updatedRoles = roles.map((role) =>
            role.id === editRoleId ? { ...role, name: editRoleName } : role
        );
        setRoles(updatedRoles);
        setEditRoleId(null);
        setEditRoleName('');
    };

    const handleDeleteRole = (id) => {
        const updatedRoles = roles.filter((role) => role.id !== id);
        setRoles(updatedRoles);
    };

    return (
        <div>
            <h1>Role Management</h1>
            <div>
                <input
                    type="text"
                    placeholder="New Role Name"
                    value={newRoleName}
                    onChange={(e) => setNewRoleName(e.target.value)}
                />
                <button onClick={handleAddRole}>Add Role</button>
            </div>
            {editRoleId !== null && (
                <div>
                    <input
                        type="text"
                        value={editRoleName}
                        onChange={(e) => setEditRoleName(e.target.value)}
                    />
                    <button onClick={handleUpdateRole}>Update Role</button>
                </div>
            )}
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {roles.map((role) => (
                        <tr key={role.id}>
                            <td>{role.id}</td>
                            <td>{role.name}</td>
                            <td>
                                <button onClick={() => handleEditRole(role.id)}>Edit</button>
                                <button onClick={() => handleDeleteRole(role.id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default RoleManagement;
