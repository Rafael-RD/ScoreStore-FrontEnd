import styled from "styled-components";
import GameCard from "./Components/GameCard.js";
import { useEffect, useState } from "react";
import axios from "axios";
import { mainColor } from "../../constants/colors.js";
import Header from "../../Components/Header.js";

export default function HomePage(){
  const {REACT_APP_API_URL}=process.env;
  const [gameList,setGameList]=useState([]);

  useEffect(()=>{
    axios.get(`${REACT_APP_API_URL}/products`)
      .then(res=>{
        // console.log(res.data);
        setGameList(res.data);
      })
      .catch(res=>console.error(res));
  },[]) // eslint-disable-line

<<<<<<< HEAD
=======
  useEffect(()=>{
    // console.log(cartList);
  },[cartList])

  function addToCart(id, name, price, img){
    if(cartList.some(e=>e.id===id)) setCartList([cartList.filter(e=>e.id!==id)]);
    else setCartList([...cartList, {id, name, price, img}]);
  }

>>>>>>> c729d8887792ba6e356477c983032d5e7956d612
    return(
        <Page>
          <Header />
          <GameCardContainer>
            {gameList.map(e=>
              <GameCard
                key={e._id}
                _id={e._id}
                name={e.name}
                price={e.price}
                header_img={e.header_img}
                release={e.release}
                genres={e.genres}
              />)}
          </GameCardContainer>
        </Page>
    )
}

const Page=styled.div`
  background-color: ${mainColor};
  padding-top: 90px;
`;

const GameCardContainer=styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;