import styled from "styled-components"
import { IoExitOutline } from 'react-icons/io5';
import { AiOutlinePlusCircle } from 'react-icons/ai';
import { AiOutlineMinusCircle } from 'react-icons/ai';
import { Link } from "react-router-dom";

export default function Main() {
    return (
        <>
            <Container>
                <Header />

                <Movements>
                    

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
    height: 446px;
    border-radius: 5px;
    margin-top: 25px;
    margin-bottom: 25px;

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