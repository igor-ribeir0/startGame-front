import styled from 'styled-components';
import { Button, Main } from '../assets/styles';
import { useNavigate } from 'react-router-dom';
import React from 'react';
import { AuthContext } from '../providers/auth';

function ConfirmGame(){
    const navigate = useNavigate();
    const { imgGame } = React.useContext(AuthContext);
    const { gamePrice } = React.useContext(AuthContext);
    const { gameName } = React.useContext(AuthContext);

    function purchase(){
        navigate("/home")
    };

    return(
        <Main>
            <Header>
                <GameImg src = { imgGame } />
            </Header>

            <InfoBox>
                <div>
                    <h3>{ gameName }</h3>
                    <h3>US$ { gamePrice }</h3>
                    <h3>Thank you for your purchase on the StartGame Store. Your game will soon be at your home!</h3>
                </div>
            </InfoBox>

            <Button onClick={() => purchase()}>Home</Button>
        </Main>
    );
}

const Header = styled.header`
    width: 100%;
    height: 300px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 40px;
`;

const GameImg = styled.img`
    height: 100%;
    border-radius: 10px;
`;

const InfoBox = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    > div {
        > h3 {
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 600;
        font-size: 18px;
        line-height: 27px;
        color: #313131;
        margin: 0;
        height: 21px;
        margin-top: 5px;
        > span {
            font-family: 'Poppins';
            font-style: normal;
            font-weight: 400;
            font-size: 14px;
            line-height: 21px;
            color: #313131;
        }
    }
    > span {
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 300;
        font-size: 12px;
        line-height: 18px;
        color: #313131;
    }
    }
`;

export default ConfirmGame;