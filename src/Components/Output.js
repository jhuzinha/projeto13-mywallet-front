import { useState } from "react";
import styled from "styled-components";


export default function Output() {
    const [value, setValue] = useState("")
    const [description, setDescription] = useState("")

    function minusNewValue(event) {
        event.preventDefault();
    }


    return (
        <>
            <Container>
                <h1> Nova saída </h1>
                <div>           
                   
                    <Forms onSubmit={minusNewValue}>
                        <input placeholder="Valor" type="number" value={value} onChange={(e) => setValue(e.target.value)} required />
                        <input placeholder="Descrição" type="text" value={description} onChange={(e) => setDescription(e.target.value)} required />
                        <button type="submit"> Salvar saída </button>
                    </Forms>
                </div>

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