import { useState } from "react";
import styled from "styled-components";
import { useContext } from "react";
import Token from "../Contexts/tokenContext.js";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { Bars } from  'react-loader-spinner';


export default function Entry(){
    const [value, setValue] = useState("")
    const [description, setDescription] = useState("")
    const { token } = useContext(Token);
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate();

    function addNewValue(event){
        event.preventDefault();
        setLoading(true)
        const config = {
            headers: {
                "Authorization": `Bearer ${token.token}`
            }
        }
        const body = {
            value,
            description
        }

        const promise = axios.post("https://projeto13mywallet-jhuzinha.herokuapp.com/entry", body, config);
        promise.then(() => {
            setLoading(false)
            navigate("/main")}).catch(() => {
            alert("Você precisa estar logado"); setLoading(false)}
        );
    }


    return ( 
        <>
        <Container> 
            <h1>
                Nova entrada
            </h1>
            <Forms onSubmit={addNewValue}>
                <input placeholder= "Valor" type="number" value={value} onChange={(e) => setValue(e.target.value)} required/>
                <input placeholder= "Descrição" type="text" value={description} onChange={(e) => setDescription(e.target.value)} required/>
                {!loading?  <button type="submit"> Salvar entrada </button> : <button> <Bars heigth="30" width="30" color="black" ariaLabel="loading-indicator" /> </button> }
                <Link to={"/main"}  style={{ textDecoration: 'none', color: "black"}}><div> Cancelar </div></Link>
            </Forms>
        </Container>
        </>
    )
}

const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;

    h1 {
        color: var(--color_word);
        font-weight: 700;
        font-size: 26px;
        margin: 20px;
    }
`

const Forms = styled.form ` 
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 20px;
    div {
        display: flex;
        align-items: center;
        margin-top: 5px;
        justify-content: center;
        font-weight: 700;
        font-size: 20px;
        text-decoration: dashed;
        height: 46px;
        background-color: #32094c4a;
        border-radius: 5px;
    }
`