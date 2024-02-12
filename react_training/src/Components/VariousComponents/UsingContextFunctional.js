import React from 'react';
import { useUserContext } from '../../Context';


const FunctionalComponentWithContext = () => {
  const { username, updateUser } = useUserContext();

  return (
    <div>
      <h2>Functional Component</h2>
      <p>Username: {username}</p>
      <button onClick={() => updateUser('NewUser')}>Update User</button>
    </div>
  );
};

export default FunctionalComponentWithContext;
