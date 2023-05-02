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
        <Page>
            <Header />
            <CartContainer>
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
            </CartContainer>
            {/* Mostrar Preço Total do Pedido */}
            <Button onClick={sendOrder}>
                <p>Enviar Pedido</p>
            </Button>
        </Page>
    )
}

const Page=styled.div`
  background-color: ${mainColor};
  padding-top: 90px;
`;

const CartContainer=styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Button = styled.button`
  
margin: 0px auto 0px;
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