import { useState } from "react";
import styled from "styled-components";

export default function Entry(){
    const [value, setValue] = useState("")
    const [description, setDescription] = useState("")

    function addNewValue(event){
        event.preventDefault();
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
                <button type="submit"> Salvar entrada </button>
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
`