import { useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import {useContext} from 'react';
import { cartListContext } from "../../Components/Context.js";
import Header from "../../Components/Header.js";
import GameCard from "../HomePage/Components/GameCard.js";
import {mainColor} from "../../constants/colors.js";

export default function Cart(){
    const navigate = useNavigate();
    const {cartList,setCartList} = useContext(cartListContext);

    function sendOrder(){
        // useEffect(()=>{
        //     axios.post(`${REACT_APP_API_URL}/cart`)
        //       .then(res=>{
        //         alert("Pedido Enviado!");
        //         setCartList([]);
        //         navigate('/');
        //       })
        //       .catch(res=>console.error(res));
        //   },[]);
        alert("Pedido Enviado!");
        setCartList([]);
        navigate('/');
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
                <p>Enviar Pedido!</p>
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
  
margin: 20px auto 40px;
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