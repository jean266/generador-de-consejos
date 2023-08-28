import { adviceContent, adviceId, btnDice } from "../util/selectors.js";

export default class UI {

    showAdvice (adviceObj) {
        const {id, advice} = adviceObj;
        
        if(btnDice.classList.contains("btn_animation")) {
            btnDice.classList.remove("btn_animation")
        }

        adviceId.innerHTML = `Advice #${id}`;
        adviceContent.innerHTML = `"${advice}"`;

        if(adviceId.classList.contains('animation') && adviceContent.classList.contains("animation")) {
            adviceId.classList.remove("animation");
            adviceContent.classList.remove("animation");
        } 
        
        setTimeout(() => {
            adviceId.classList.add("animation");
            adviceContent.classList.add("animation");
        }, 10);
    }
}