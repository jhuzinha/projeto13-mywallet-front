import styled from "styled-components"
import { IoExitOutline } from 'react-icons/io5';
import { AiOutlinePlusCircle } from 'react-icons/ai';
import { AiOutlineMinusCircle } from 'react-icons/ai';

export default function Main(){
    return ( 
        <>
        <Container>
            <header> 
                <h1> Olá, fulano </h1>
                <IoExitOutline/>
            </header>

            <Movements>

            </Movements>

            <Buttons>
                <div>
                    <AiOutlinePlusCircle/>
                    <p> Nova <br/> entrada </p>
            
                </div>
                <div>
                    <AiOutlineMinusCircle/>
                    <p> Nova <br/> saída </p>
                </div>

            </Buttons>

        </Container>
        </>
    )
}


const Container = styled.section `
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

const Movements = styled.div `
    background-color: var(--bg_input);
    height: 446px;
    border-radius: 5px;
    margin-top: 25px;
    margin-bottom: 25px;

`

const Buttons = styled.div `
    display: flex;
    justify-content: space-around;
    div {
        width: 48.95%;
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
         
        div {
            font-size: 17px;
        }
    }


`