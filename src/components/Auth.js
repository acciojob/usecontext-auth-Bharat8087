import React, { useContext } from 'react';
import { AuthContext } from './AuthContext';

const Auth = () => {
  const { isAuthenticated, toggleAuth } = useContext(AuthContext);

  return (
    <div>
      <h1>{isAuthenticated ? 'You are authenticated!' : 'You are not authenticated'}</h1>
      <label>
        <input type="checkbox" checked={isAuthenticated} onChange={toggleAuth} />
        I am not a robot
      </label>
    </div>
  );
};

export default Auth;
