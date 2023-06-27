const btnPlay = document.querySelector('[data-play]')
const btnStop = document.querySelector('[data-stop]')
const inputNumber = document.querySelector('#ducks_number')
const outputText = document.querySelector('[data-music]')

btnPlay.addEventListener('click', () => {
    outputText.innerHTML = ``;
    let initialDucks = inputNumber.value;
    if (initialDucks < 1) {
        outputText.innerHTML = `
        <p>
        <strong>Algum patinho precisa ir até a montanha!</strong>
        </p>`
    }
    else {
        let ducks = initialDucks;
        for (let i = 0; i < ducks; ducks--) {
            if (ducks > 1) {
                outputText.innerHTML += `
             <p>
             <strong>${ducks}</strong> patinhos foram passear<br/>
             Além das montanhas<br/>
             Para brincar<br/>
             A mamãe gritou: Quá, quá, quá, quá<br/>
             Mas só <strong> ${ducks - 1} </strong>patinhos voltaram de lá.
         </p`
            }
            if (ducks == 1) {
                outputText.innerHTML += `
             <p>
             <strong> ${ducks} </strong> patinho foi passear<br/>
             Além das montanhas<br/>
             Para brincar<br/>
             A mamãe gritou: Quá, quá, quá, quá<br/>
             Mas <strong>nenhum</strong> patinho voltou de lá.
         </p`
            }
            if (ducks == 1) {
                outputText.innerHTML += `
            <p>
            Puxa, a mamãe patinha ficou tão triste naquele dia<br/>
            Aonde será que estavam os seus filhotinhos?<br/>
            Mas essa história vai ter<br/>
            Um final feliz, sabe por quê?"<br/>
        
            A mamãe patinha foi procurar<br/>
        </p>
        <p>
            Além das montanhas<br/>
            Na beira do mar<br/>
            A mamãe gritou: Quá, quá, quá, quá<br/>
            E os <strong>${initialDucks}</strong> patinhos voltaram de lá.
        </p>
      `
            }
        }
    }
})
btnStop.addEventListener('click', () => {
    outputText.innerHTML = `
        <p>&#129414;
        </p> `
}
)

