import React, { useState } from 'react';

export const AuthContext = React.createContext({});

export const AuthProvider = (props) => {

    const [token, setToken] = useState({
        token: ''
    });

    const [imgGame, setImgGame] = useState({
        imgGame: ''
    });

    const [gamePrice, setGamePrice] = useState({
        gamePrice: ''
    });

    const [gameName, setGameName] = useState({
        gameName: ''
    });

    const [gameId, setGameId] = useState({
        gameId: ''
    });

    return(
        <AuthContext.Provider 
            value={
                { 
                    token, setToken, 
                    imgGame, setImgGame,
                    gamePrice, setGamePrice,
                    gameName, setGameName,
                    gameId, setGameId
                }
            }
        >
            {props.children}
        </AuthContext.Provider>
    );
}