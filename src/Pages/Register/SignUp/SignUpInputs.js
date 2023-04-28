

import styled from "styled-components";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function SignUpInputs() {

  const navigate = useNavigate();
  const [personalUser, setPersonalUser] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [parole, setParole] = useState("")

   function signup(parameter){
    
    const subAnalysis = {

      name: personalUser,
      email: email,
      password: password,
      confirmPassword: parole

    }

    const nextPage = axios.post(`${process.env.REACT_APP_API_URL}/SignUp`, subAnalysis);

           nextPage.then(ok => {

                navigate("/SignIn")
                alert(ok.data)

            });

            nextPage.catch(error => {

                alert(error.message)

            });

        parameter.preventDefault()

   }


    return (

      <Form onSubmit={signup}>

        <BigBox htmlFor="name">
          <Input placeholder="Nome" type="text" id="name" value={personalUser} onChange={(parameter) => setPersonalUser(parameter.currentTarget.value)}></Input>
        </BigBox>

        <BigBox htmlFor="email">
          <Input placeholder="E-mail" type="text" id="email" value={email} onChange={(parameter) => setEmail(parameter.currentTarget.value)}></Input>
        </BigBox>

        <BigBox htmlFor="password">
          <Input placeholder="Senha" type="text" id="password"  value={password} onChange={(parameter) => setPassword(parameter.currentTarget.value)}></Input>
        </BigBox>

        <BigBox htmlFor="confirm-password">
          <Input placeholder="Confirme a senha" type="text" id="password"  value={parole} onChange={(parameter) => setParole(parameter.currentTarget.value)} ></Input>
        </BigBox>

        <Button type="submit" id="submitbutton">
          <p>Cadastrar</p>
        </Button>
      </Form>
    );
  }
  
  export default SignUpInputs;
  
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
  color: black;
  cursor: pointer;
  font-size: 20px;
  transition: 0.4s;
  &:hover {
      background-color:  	#008B8B;
  }
  `;