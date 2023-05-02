import styled from "styled-components";
import {useContext} from 'react';
import { cartListContext } from "../../Components/Context.js";
import Header from "../../Components/Header.js";
import GameCard from "../HomePage/Components/GameCard.js";

export default function Cart(){
    const {cartList, setCartList} = useContext(cartListContext);

    function sendOrder(){
        alert("Pedido Enviado!");
    }
    return (
        <>
            <Header />
            <GameCardContainer>
                {cartList.map( c =>
                    <GameCard  
                        key={c._id}
                        _id={c._id}
                        name={c.name}
                        price={c.price}
                        header_img={c.header_img}
                        release={c.release}
                        genres={c.genres}
                    />)
                }
            </GameCardContainer>
            {/* Mostrar Preço Total do Pedido */}
            <Button onClick={sendOrder}>
                <p>Entrar</p>
            </Button>
        </>
    )
}

const GameCardContainer=styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Button = styled.button`
  
width: 400px;
height: 46px;
font-family: 'Bungee', cursive;
background: rgba(16, 16, 16, 0.43);
backdrop-filter: blur(5.7px);
border: 1px solid rgba(16, 16, 16, 0.29);
border-radius: 5px;
display: flex;
justify-content: center;
align-items: center;
color: white;
cursor: pointer;
font-size: 20px;
transition: 0.4s;
&:hover {
    background-color:  	#008B8B;
}
`;