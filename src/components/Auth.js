import React, { useContext } from 'react';
import { AuthContext } from './AuthContext';

const Auth = () => {
  const { isAuthenticated, toggleAuth } = useContext(AuthContext);

  return (
    <div>
      <p className="authText">
        {isAuthenticated ? 'You are now authenticated, you can proceed' : 'You are not authenticated'}
      </p>
      <label>
        <input type="checkbox" checked={isAuthenticated} onChange={toggleAuth} />
        I am not a robot
      </label>
    </div>
  );
};

export default Auth;
