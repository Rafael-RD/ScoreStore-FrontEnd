
 
import styled from "styled-components";
import { useState , useContext} from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import {IdContext} from "../../../Components/Context";

function LoginInput () {

  const { setInternalAnalysis } = useContext(IdContext)
  const navigate = useNavigate();
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  function main(parameter){
    
      const subAnalysis = {

        email: email,
        password: password,

      }

      const nextPage = axios.post(`${process.env.REACT_APP_API_URL}/SignIn`, subAnalysis);

             nextPage.then(ok => {

                  navigate("/")
                  setInternalAnalysis(ok.data)
                  console.log(ok.data)
              });

              nextPage.catch(error => {

                  alert(error.response.data)

              });

    
            parameter.preventDefault()

     }


  return (

    <Form onSubmit={main}>

      <BigBox htmlFor="email">
        <Input required placeholder="E-mail" type="text" id="email"  value={email} onChange={(parameter) => setEmail(parameter.currentTarget.value)}></Input>
      </BigBox>

      <BigBox htmlFor="password">
        <Input required placeholder="Senha" type="password" id="password" value={password} onChange={(parameter) => setPassword(parameter.currentTarget.value)} ></Input>
      </BigBox>

      <Button type="submit" id="submitbutton">
        <p>Entrar</p>
      </Button>
     
    </Form>
  );
}


export default LoginInput;


const Form = styled.form`
  
  width: 330x;
  display: flex;
  flex-direction: column;

`;

const BigBox = styled.label`

  display: flex;
  flex-direction: column;
  margin-bottom: 13px;

`;

const Input = styled.input`

width: 400px;
height: 58px;
border-radius: 5px;
border-style: none;
padding: 10px;
font-size: 20px;
font-family: 'Bungee', cursive;
background: rgba(16, 16, 16, 0.43);
border-radius: 16px;
box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
backdrop-filter: blur(5.7px);
-webkit-backdrop-filter: blur(5.7px);
border: 1px solid rgba(16, 16, 16, 0.29);
&::placeholder {
    font-size: 20px;
    color: black;
}

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


