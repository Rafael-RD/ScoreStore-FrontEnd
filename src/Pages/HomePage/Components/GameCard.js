import styled from "styled-components"
import { gameCardColor } from "../../../constants/colors.js";
import {useContext} from 'react';
import { cartListContext } from "../../../Components/Context.js";

export default function GameCard({_id, name, price, header_img, release, genres}){
    const {cartList, setCartList} = useContext(cartListContext);
    function addToCart(){
        if(cartList.some(e=>e._id===_id)) setCartList([...cartList.filter(e=>e._id!==_id)]);
        else setCartList([...cartList, {_id, name, price, header_img, release, genres}]);
      }

    return(
        <Card onClick={()=>addToCart()} >
            <img src={header_img} alt={name} />
            <GameInfo>
                <span>{name}</span>
                <span>{genres.filter((x,i) => i<3).join(', ')}</span>
                <span>{release}</span>
                <span>{`R$ ${price.toFixed(2).replace('.',',')}`}</span>
            </GameInfo>
        </Card>
    )
};

const Card=styled.div`
    background: ${gameCardColor};
    margin: 10px;
    padding: 5px;
    width: 95%;
    max-width: max-content;
    height: max-content;
    cursor: pointer;

    img{
        width: 100%;
        height: 100%;
        max-width: auto;
        max-height: auto;
    }
`;

const GameInfo=styled.div`
    display: grid;
    grid-template-areas: 
        'name name'
        'genres genres'
        'release price';
    row-gap: 8px;

    span{
        text-align: center;
    }

    span:nth-child(1){
        color: white;
        grid-area: name;
    }
    span:nth-child(2){
        color: white;
        grid-area: genres;
    }
    span:nth-child(3){
        color: white;
        grid-area: release;
    }
    span:nth-child(4){
        color: white;
        grid-area: price;
    }


`