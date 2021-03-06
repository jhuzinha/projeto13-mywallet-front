import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useContext } from "react";
import Token from "../Contexts/tokenContext.js";
import axios from "axios";
import { Bars } from  'react-loader-spinner';



export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate();
    const { setToken } = useContext(Token);

    function loginUser(event) {
        event.preventDefault();
        setLoading(true)
        const body = {
            email,
            password
        }
        const promise = axios.post("https://projeto13mywallet-jhuzinha.herokuapp.com/login", body);
        promise.then((res) => {
            setLoading(false)
            setToken(res.data);
            navigate("/main")}).catch(() => {setLoading(false)
            alert("Email ou senha incorretos")} 
        );
    }

    return (
        <>
            <Container>
                <div>
                    <h1> MyWallet </h1>
                    <Forms onSubmit={loginUser}>
                        <input placeholder="E-mail" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                        <input placeholder="Senha" type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                        {!loading? <button type="submit"> Entrar </button> : <button> <Bars heigth="100" width="100" color="black" ariaLabel="loading-indicator" /> </button> }
                    </Forms>
                    <Link to={"/register"} style={{ textDecoration: 'none' }}>
                        <p> Primeira vez? Cadastre-se! </p>
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

const Forms = styled.form`
    display: flex;
    flex-direction: column;
    width: 90%;
`

