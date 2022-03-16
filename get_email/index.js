import { getEmail } from "./form.js";

const inputEmail = document.querySelector("#input-email");
const output = document.querySelector("#output");

inputEmail.addEventListener("input", event => {
    let result = getEmail(inputEmail.value)
    output.textContent = result + " is your email.";
    console.log(result);
});
