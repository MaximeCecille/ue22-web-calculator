// Maxime Cécille
document.addEventListener("DOMContentLoaded", () => { 
    const calculator = document.getElementsByClassName("calculator")[0]
    const keys = document.getElementsByClassName("calculator_key")
    disp = document.getElementsByClassName("calculator__display")[0]

    calculator.addEventListener('click', e => {
    if (e.target.matches('button')) {
        const key = e.target
        const action = e.target.action
        if (!action)  {
           nombre = key.dataset.columns
           let chiffre = key.textContent
           disp.textContent = chiffre
        }
        // Do something
    }
    })


































}
)
// NOTE: 
// This is the starter file for a blog post "How to build a calculator". You can follow the lesson at https://zellwk.com/blog/calculator-part-1

// # START EDITING YOUR JAVASCRIPT HERE
// ===============
