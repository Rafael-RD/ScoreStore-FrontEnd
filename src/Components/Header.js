
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { BsHandbag } from 'react-icons/bs';
import { FaGamepad } from 'react-icons/fa'

export default function Header() {

  const navigate = useNavigate();

  return (

    <HeaderContainer>



      <MainTitle onClick={() => {
        navigate('/');
      }}> <FaGamepad /> ScoreStore</MainTitle>

      <OptionsBox>

        <ToForward>

          <p
            onClick={() => {
              navigate('/SignIn');
            }}>Login</p>

        </ToForward>

        <ToForward>

          <p
            onClick={() => {
              navigate('/Signup');
            }}>Cadastro</p>

        </ToForward>

        <ToForward onClick={() => {navigate('/Cart')}}>
          <p>Carrinho</p>
          <BsHandbag size="1.6em" />
        </ToForward>

      </OptionsBox>


    </HeaderContainer>
  )
}


const HeaderContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 90px;
    background: rgba(16, 16, 16, 0.43);
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(5.7px);
    -webkit-backdrop-filter: blur(5.7px);
    border: 1px solid rgba(16, 16, 16, 0.43);
    width: 100%;    
    border-bottom: 1px solid #dfdddd;
    padding-left: 60px;
    padding-bottom: 30px;
    padding-right:30px;
    position: fixed;
    top: 0;
    z-index: 1;
`

const MainTitle = styled.h1`

color: white;
font-family: 'Rubik Wet Paint', cursive;
font-weight: 400;
font-size: 60px;
line-height: 50px;
margin-top:100px;
margin-bottom:80px;
display: flex;
justify-content: space-between;
align-items: center;
cursor: pointer;

`

const ToForward = styled.p`
display: flex;
align-items: center;
color: white;
font-size: 15px;
line-height: 18px;
margin-top:36px;
font-family: 'Bungee', cursive;
cursor: pointer;
&:hover {
    color: #800000;
}
p {
  padding-right: 8px;
}
`

const OptionsBox = styled.div`

display: flex;
justify-content: space-around;
align-items: center;
width:25%;

`