import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const PrivateRoutes = ({ component: Component, ...rest }) => {
  const firstLogin = JSON.parse(localStorage.getItem('user'));
  const navigate = useNavigate();

  useEffect(() => {
    if (!firstLogin) {
      navigate('/login');
    }
  }, [firstLogin, navigate]);

  if (!firstLogin) {
    return null; 
  }

  // return <Component {...rest} />;
};

export default PrivateRoutes;
