import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { AppBar, Toolbar, Button } from '@mui/material';
import AdminDashboard from './components/admin/AdminDashboard';
import UserManagement from './components/admin/UserManagement';
import RoleManagement from './components/admin/RoleManagement';
import ReportGeneration from './components/admin/ReportGeneration';
import ResidentDashboard from './components/resident/ResidentDashboard';
import VisitorLogs from './components/resident/VisitorLogs';
import PersonalInfo from './components/resident/PersonalInfo';
import SecurityDashboard from './components/security/SecurityDashboard';
import LiveCameraFeeds from './components/security/LiveCameraFeeds';
import AccessControlOverride from './components/security/AccessControlOverride';
import VisitorRegistration from './components/visitor/VisitorRegistration';
import FaceRecognition from './components/visitor/FaceRecognition';
import TemporaryAccess from './components/visitor/TemporaryAccess';

const App = () => {
    return (
        <Router>
            <AppBar position="static">
                <Toolbar>
                    <Button component={Link} to="/" color="primary" sx={{ height: '64px' }}>Home</Button> {/* Adjust height and color */}
                    <Button component={Link} to="/admin" color="primary" sx={{ height: '64px' }}>Admin</Button> {/* Adjust height and color */}
                    <Button component={Link} to="/resident" color="primary" sx={{ height: '64px' }}>Resident</Button> {/* Adjust height and color */}
                    <Button component={Link} to="/security" color="secondary" sx={{ height: '64px' }}>Security</Button> {/* Adjust height and color */}
                    <Button component={Link} to="/visitor" color="secondary" sx={{ height: '64px' }}>Visitor</Button> {/* Adjust height and color */}
                </Toolbar>
            </AppBar>
            <Routes>
                {/* Admin Routes */}
                <Route path="/admin/user-management" element={<UserManagement />} />
                <Route path="/admin/role-management" element={<RoleManagement />} />
                <Route path="/admin/report-generation" element={<ReportGeneration />} />

                {/* Resident Routes */}
                <Route path="/resident/visitor-logs" element={<VisitorLogs />} />
                <Route path="/resident/personal-info" element={<PersonalInfo />} />

                {/* Security Routes */}
                <Route path="/security/live-camera-feeds" element={<LiveCameraFeeds />} />
                <Route path="/security/access-control-override" element={<AccessControlOverride />} />

                {/* Visitor Routes */}
                <Route path="/visitor/visitor-registration" element={<VisitorRegistration />} />
                <Route path="/visitor/face-recognition" element={<FaceRecognition />} />
                <Route path="/visitor/temporary-access" element={<TemporaryAccess />} />

                {/* Dashboard Routes */}
                <Route path="/admin" element={<AdminDashboard />} />
                <Route path="/resident" element={<ResidentDashboard />} />
                <Route path="/security" element={<SecurityDashboard />} />
                <Route path="/visitor" element={<h1>Welcome Visitor</h1>} />

                {/* Home Route */}
                <Route path="/" element={<h1>Welcome to the Application</h1>} />
            </Routes>
        </Router>
    );
};

export default App;
