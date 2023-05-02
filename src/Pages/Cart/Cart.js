import {useContext} from 'react';
import { cartListContext } from "../../Components/Context.js";
import Header from "../../Components/Header.js";
import GameCard from "../HomePage/Components/GameCard.js";

export default function Cart(){
    const {cartList, setCartList} = useContext(cartListContext);
    return (
        <>
            <Header />
            {cartList.map( c =>
                <GameCard  
                    key={c._id}
                    _id={c._id}
                    name={c.name}
                    price={c.price}
                    header_img={c.header_img}
                    release={c.release}
                    genres={c.genres}
                />)}
        </>
    )
}