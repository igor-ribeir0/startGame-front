import React, { useState } from 'react';

export const AuthContext = React.createContext({});

export const AuthProvider = (props) => {

    const [token, setToken] = useState({
        token: ''
    });

    return(
        <AuthContext.Provider 
            value={
                { 
                    token, setToken, 
                }
            }
        >
            {props.children}
        </AuthContext.Provider>
    );
}