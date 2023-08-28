
import { btnDice } from "../util/selectors.js";
import Advice from "../classes/Advice.js"

//* Instanciar classes
const advice = new Advice();

export default class App {

    constructor () {
        document.addEventListener('DOMContentLoaded', () => {
            advice.generateAdvice();
            this.initApp();
        })
    }

    initApp() {
        // Eventos
        btnDice.addEventListener('click', advice.generateAdvice)
    }
}