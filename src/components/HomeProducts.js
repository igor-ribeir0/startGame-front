import { Header2 } from "../assets/styles";
import styled from "styled-components";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Main } from "../assets/styles";
import axios from "axios";
import { AuthContext } from "../providers/auth";

function HomeProducts() {
  const { token } = React.useContext(AuthContext);
  const { setImgGame } = React.useContext(AuthContext);
  const { setGamePrice } = React.useContext(AuthContext);
  const { setGameName } = React.useContext(AuthContext);
  const { setGameId } = React.useContext(AuthContext);
  const [gameList, setGameList] = useState([]);

  useEffect(() => {
    const gamesData = async () => {
      const url = `http://localhost:5000/product`;
      const dataGames = await axios.get(url, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setGameList(dataGames.data);
    };
    gamesData();
  }, []);

  function saveDataGame(gameImage, gamePrice, gameName, gameId) {
    setImgGame(gameImage);
    setGamePrice(gamePrice);
    setGameName(gameName);
    setGameId(gameId);
  }

  return (
    <Main width="800">
      <Header2>
        <Titulo>StartGame Store</Titulo>
      </Header2>
      <Section>
        <GamesContent>
          {gameList.map((g) => (
            <Link to={`/product/${g.id}`} key={g.id}>
              <GameBox>
                <img
                  src={g.url}
                  alt="game"
                  onClick={() => saveDataGame(g.url, g.price, g.name, g.id)}
                />
                <h3>{g.name}</h3>
                <p>R$ {g.price}</p>
              </GameBox>
            </Link>
          ))}
        </GamesContent>
      </Section>
    </Main>
  );
}

const Titulo = styled.h1`
  color: #fff;
  font-family: "lora";
  font-style: normal;
  font-weight: 400;
  font-size: 55px;
`;

const Section = styled.section`
  margin-top: 240px;
  width: 100%;
  > div {
    position: relative;
    margin-bottom: 15px;
    margin-top: 9px;
    > h2 {
      font-weight: 600;
      font-size: 16px;
      line-height: 24px;
      font-family: "Poppins";
      font-style: normal;
      color: #313131;
      height: 21px;
    }
    > span {
      font-weight: 300;
      font-size: 12px;
      line-height: 18px;
      font-family: "Poppins";
      font-style: normal;
      color: #313131;
      height: 14px;
    }
    > svg {
      width: 30px;
      height: 30px;
      position: absolute;
      top: 10px;
      right: 10px;
    }
  }
`;

const GamesContent = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 20px;
  @media (max-width: 500px) {
    gap: 9px;
  }
  a {
    text-decoration: none;
  }
`;

const GameBox = styled.div`
  width: 170px;
  padding: 5px 12px 13px;
  border-radius: 11px;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  background: #ffffff;
  box-shadow: 0px 0px 180px rgba(0, 0, 0, 0.059);
  border-radius: 11px;
  h3 {
    font-family: "Poppins";
    font-style: normal;
    font-weight: 600;
    font-size: 17px;
    line-height: 18px;
    color: #313131;
  }

  > img {
    width: 100%;
    height: 117px;
    border-radius: 11px;
  }
  > p {
    font-family: "Poppins";
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    line-height: 18px;
    color: #313131;
  }
  > span {
    font-family: "Poppins";
    font-style: normal;
    font-weight: 400;
    font-size: 10px;
    line-height: 10px;
    color: #8a8a8a;
  }

  @media (max-width: 500px) {
    width: 150px;
    box-shadow: 0px 0px 180px rgba(0, 0, 0, 0.09);
  }
`;

export default HomeProducts;
