import styled from "styled-components"
import { IoExitOutline } from 'react-icons/io5';
import { AiOutlinePlusCircle } from 'react-icons/ai';
import { AiOutlineMinusCircle } from 'react-icons/ai';
import { Link } from "react-router-dom";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import Token from "../Contexts/tokenContext.js";

export default function Main() {
    const [transitions, setTransitions] = useState([]);
    const [total, setTotal] = useState("");
    const { token } = useContext(Token);

    useEffect(() => {
        const config = {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        }

        console.log(config)
        const promise = axios.get("http://localhost:5000/main", config );
        promise.then((res) => { setTransitions(res.data.transitionUser); setTotal(res.data.total); console.log(res.data)}
        ).catch(() =>
            alert("Você precisa estar logado")
        );
    }, [])

    return (
        <>
            <Container>
                <Header />

                <Movements>
                    {
                        transitions.map( (transitions) => { return transitions.status === 'plus'? 
                        <Transition>
                            <div>
                                <spam>{transitions.day + "  " }</spam> {transitions.description}
                            </div>
                            <Type color="green">
                                { transitions.value }
                            </Type>
                            
                        </Transition>
            
                        : 
                            
                        <Transition>
                            <div>
                                <spam>{transitions.day + "  "}</spam> {transitions.description}
                            </div>
                            <Type color="red">
                                { transitions.value }
                            </Type>
                            
                        </Transition>
                         })
                    }

                </Movements>

                <ButtonsCreateMovements />

            </Container>
        </>
    )
}

function Header() {
    return (
        <header>
            <h1> Olá, fulano </h1>
            <IoExitOutline />
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

    header {
        display: flex;
        color: var(--color_word);
        justify-content: space-between;
        font-size: 26px;
        font-weight: 700;
    
    }

`

const Movements = styled.div`
    background-color: var(--bg_input);
    height: 500px;
    border-radius: 5px;
    margin-top: 25px;
    margin-bottom: 25px;
    overflow-y: scroll;

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

const Transition = styled.ul `
    display: flex;
    justify-content: space-between;
    padding: 10px;
    div {
        spam {
            color: gray;
        }    
    }

`

const Type = styled.li `
    color: ${(props) => props.color};

`