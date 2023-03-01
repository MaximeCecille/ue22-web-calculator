// Maxime Cécille
document.addEventListener("DOMContentLoaded", () => { 
    const calculator = document.getElementsByClassName("calculator")[0]
    const keys = document.getElementsByClassName("calculator_key")
    disp = document.getElementsByClassName("calculator__display")[0]

    calculator.addEventListener('click', e => {
    if (e.target.matches('button')) {
        const key = e.target
        const action = e.target.dataset.action
        if (! action)  {
           nombre = key.dataset.columns
           let chiffre = Number(key.textContent)
           let nombre_affiche = Number(disp.textContent)
           // si on a une opération, on ne la garde pas affichée
           if (nombre_affiche == 0 || isNaN(nombre_affiche) ) 
           {
            disp.textContent = chiffre
           }

           else {
            disp.textContent = chiffre + nombre_affiche * 10

        
           }

           
        }
        if (action == 'clear' ){
            disp.textContent = 0
        }
        if ( action == "add"){
            memoire = Number(disp.textContent) // on garde le nb précédent en mémoire
            prev_action = "add" // on garde l'opération précédente en mémoire
            disp.textContent = key.textContent 
        }
        if (action == "calculate" ) {
            let nombre_affiche = Number(disp.textContent)
            if (prev_action == "add") {
                disp.textContent = nombre_affiche + memoire
            }
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
