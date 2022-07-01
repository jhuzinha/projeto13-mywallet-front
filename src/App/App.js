import { Route, Routes, BrowserRouter } from "react-router-dom";
import Entry from "../Components/Entry";
import Login from "../Components/Login";
import Main from "../Components/Main";
import Output from "../Components/Output";
import Register from "../Components/Register";
import GlobalStyle from "../Assets/CSS/style";
import Token from "../Contexts/tokenContext";
import { useState } from "react";

export default function App() {
    const [token, setToken] = useState([]);
    return (
        <Token.Provider value={{ token, setToken }}>
            <BrowserRouter>
                <GlobalStyle />
                <Routes>
                    <Route path="/register" element={<Register />} />
                    <Route path="/" element={<Login />} />
                    <Route path="/main" element={< Main />} />
                    <Route path="/entry" element={<Entry />} />
                    <Route path="/output" element={<Output />} />
                </Routes>
            </BrowserRouter>
        </Token.Provider>
    )

}