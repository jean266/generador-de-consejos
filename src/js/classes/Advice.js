
import { btnDice } from "../util/selectors.js";
import UI from "./UI.js";

//* Instanciar clase
const ui = new UI();

export default class Advice {

    generateAdvice () {

        btnDice.classList.add("btn_animation");
        
        const url = `https://api.adviceslip.com/advice`;

        fetch(url)
            .then( answer => answer.json() )
            .then( data => ui.showAdvice(data.slip) )
    }
}