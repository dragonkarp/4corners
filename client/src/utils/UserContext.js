import React, { useContext, createContext } from 'react';
const UserContext = createContext({
    id: "",
    error: null,
    isAuthenticated: false,
    changeState: () => undefined
});

export default UserContext;
