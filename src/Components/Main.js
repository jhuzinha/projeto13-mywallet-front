import styled from "styled-components"
import { IoExitOutline } from 'react-icons/io5';
import { AiOutlinePlusCircle } from 'react-icons/ai';
import { AiOutlineMinusCircle } from 'react-icons/ai';
import { Link } from "react-router-dom";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import Token from "../Contexts/tokenContext.js";
import Transitions from "./Movements.js";

export default function Main() {
    const [transitions, setTransitions] = useState([]);
    const [total, setTotal] = useState("");
    const { token, setToken } = useContext(Token);

    useEffect(() => {
        const config = {
            headers: {
                "Authorization": `Bearer ${token.token}`
            }
        }
        const promise = axios.get("https://projeto13mywallet-jhuzinha.herokuapp.com/main", config);
        promise.then((res) => { setTransitions(res.data.transitionUser); setTotal(res.data.total.toFixed(2).replace(",", ".")); }
        ).catch(() => {
            alert("Você precisa estar logado") }
        );
    }, [])

    return (
        <>
            <Container>
                <Header token={token} setToken={setToken} />
                <Movements>
                    {transitions.length === 0 ?
                        <NoneRegister>
                            <p>Não há registros de entrada ou saída</p>
                        </NoneRegister>
                        :
                        <Transitions transitions={transitions} />
                    }
                </Movements>
                {transitions.length === 0 ?
                    <Total color="white">
                    </Total>
                    :
                    <Total color={Number(total) <= 0 ? "red" : "green"}>
                        <h1> SALDO </h1>
                        <p> {Number(total).toFixed(2).toString().replace(".", ",")} </p>
                    </Total>
                }
                <ButtonsCreateMovements />
            </Container>
        </>
    )
}

function Header({ token , setToken }) {
    return (
        <header>
            <h1> Olá, {token.name} </h1>
            <Link onClick={() => setToken('')} to={"/"} style={{ textDecoration: 'none', color: 'white' }}><IoExitOutline /></Link>
        </header>
    )
}


function ButtonsCreateMovements() {
    return (
        <Buttons>
            <Link to={"/entry"} style={{ textDecoration: 'none', width: '90%', marginRight: '10px' }}>
                <Button>
                    <AiOutlinePlusCircle />
                    <p> Nova <br /> entrada </p>
                </Button>
            </Link>
            <Link to={"/output"} style={{ textDecoration: 'none', width: '90%' }}>
                <Button>
                    <AiOutlineMinusCircle />
                    <p> Nova <br /> saída </p>
                </Button>
            </Link>
        </Buttons>
    )
}





const Container = styled.section`
    width: 100%;
    height: 100%;
    padding: 25px;
    overflow: none;

    header {
        display: flex;
        color: var(--color_word);
        justify-content: space-between;
        font-size: 26px;
        font-weight: 700;
    
    }
`

const Buttons = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
`

const Button = styled.div`
    min-width: 130px;
    width: 100%;
    background-color: var(--bg_button);
    color: var(--color_word);
    border-radius: 5px;
    font-weight: 700;
    font-size: 17px;
    height: 114px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 10px;
    

`
const Movements = styled.div`
    background-color: var(--bg_input);
    height: 500px;
    border-radius: 5px 5px 0 0;
    margin-top: 25px;
    overflow-y: scroll;

`

const NoneRegister = styled.div`
    display:flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    color: var(--date_color);
    width: 100%;
    height: 100%;
    padding: 20px;
`

const Total = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 10px;
    width: 100%;
    font-size: 17px;
    background-color:  var(--bg_input);
    border-radius:0 0 5px 5px;
    margin-bottom:  15px;
    h1 {
        font-weight: bold;
    }
    p{
        color: ${(props) => props.color};
    }
`
