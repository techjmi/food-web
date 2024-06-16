
import React, { useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import Login from '../popup/Login';

const PrivateRoutes = () => {
    const [currentUser] = useState(true);
    const [showLogin, setShowLogin] = useState(!currentUser);
    const navigate= useNavigate()

    const handleCancel = () => {
        setShowLogin(false);
        navigate('/')
    };

    return (
        currentUser ? <Outlet /> : showLogin ? <Login onCancel={handleCancel} /> : null
    );
};

export default PrivateRoutes;
