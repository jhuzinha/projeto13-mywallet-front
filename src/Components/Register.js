import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { Bars } from  'react-loader-spinner';

export default function Register(){
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate();

    function handleSubmit(event) {
        event.preventDefault();
        setLoading(true)
        const newUser = {
            name, 
            email,
            password,
            confirmPassword
        }

        const request = axios.post("http://localhost:5000/register", newUser)
        request.then(() =>{ 
            setLoading(false)
            alert("Usuário criado com sucesso")
            navigate("/")
        }
        )
        request.catch((res)=> { alert(res.response.data.message)})
    }
    
    
    return (
        <>
            <Container>
                <div>
                    <h1> MyWallet </h1>
                    <Forms onSubmit={handleSubmit}>
                        <input placeholder="Nome" type="text" value={name} onChange={(e) => setName(e.target.value)} required/>
                        <input placeholder="E-mail" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required/>
                        <input placeholder="Senha" type="password" value={password} onChange={(e) => setPassword(e.target.value)} required/>
                        <input placeholder="Confirme a senha" type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required/>
                        {!loading? <button type="submit"> Cadastrar </button> :  <button> <Bars heigth="100" width="100" color="black" ariaLabel="loading-indicator" /> </button> } 
                    </Forms>
                    <Link to={"/"} style={{ textDecoration: 'none' }}> 
                       <p> Já tem uma conta? Entre agora! </p>  
                    </Link>
                </div>
            </Container>

        </>
    )
}


const Container = styled.div`
    width: 100%;
    height: 100vh;
    div {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
    }
    h1 {
        font-family: var(--title_font);
        color: var(--color_word);
        font-size: 32px;
        line-height: 50px;
        margin-bottom: 20px;
    }
    p {
        text-decoration: none;
        color: var(--color_word);
        font-weight: 700;
        font-size: 15px;
        margin: 15px;
    }
`

const Forms = styled.form `
    display: flex;
    flex-direction: column;
    width: 90%;
`