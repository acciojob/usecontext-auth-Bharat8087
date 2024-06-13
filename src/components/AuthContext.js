import React from 'react';
import { AuthContext } from './path-to-auth-context';

const YourComponent = () => {
  const { isAuthenticated, toggleAuthentication } = React.useContext(AuthContext);

  return (
    <div>
      <p>{isAuthenticated ? 'You are now authenticated' : 'You are not authenticated'}</p>
      <input type="checkbox" onChange={toggleAuthentication} />
    </div>
  );
}

export default YourComponent;
