import React, { createContext, useContext, useState } from 'react';

// Creating a context with a default value
const UserContext = createContext({
  username: 'Guest',
  updateUser: () => {},
});

// Custom hook for consuming the context
const useUserContext = () => {
  return useContext(UserContext);
};

// Provider component that will wrap the entire application
const UserProvider = ({ children }) => {
  const [username, setUsername] = useState('Guest');

  const updateUser = (newUsername) => {
    setUsername(newUsername);
  };

  return (
    <UserContext.Provider value={{ username, updateUser }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserProvider, useUserContext, UserContext };
