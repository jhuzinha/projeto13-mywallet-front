import { createGlobalStyle } from 'styled-components'


const GlobalStyle = createGlobalStyle ` 
:root {
    --bg_color: rgba(140, 17, 190, 1);
    --principal_color: rgba(255, 255, 255, 1);
    --input_color: rgba(0, 0, 0, 1);
    --bg_button: rgba(163, 40, 214, 1);
    --bg_input: rgba(255, 255, 255, 1);
    --date_color: rgba(198, 198, 198, 1);
    --entry_color: rgba(3, 172, 0, 1);
    --output_color: rgba(199, 0, 0, 1);
    --title_font : 'Saira Stencil One';
    --color_word: #ffffff;
}

* {
	box-sizing: border-box;
}

body {
    font-family: 'Raleway', sans-serif;
    background-color: var(--bg_color);
    width: 100%;
    height: 100%;
}

input { 
    border: none;
    padding: 10px;
    margin-bottom: 10px;
    border-radius: 5px;
    height: 58px;
    background-color: var(--bg_input);
}
input::placeholder {
    color: var( --input_color);
    font-size: 17px;
}


button {
    border: none;
    margin-bottom: 10px;
    height: 46px;
    border-radius: 5px;
    background-color: var(--bg_button);
    color: var(--color_word);
    font-weight: 700;
    font-size: 20px;
}


`

export default GlobalStyle;