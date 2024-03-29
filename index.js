let getAdviceBtn = document.querySelector('#getAdviceBtn')
let adviceID = document.querySelector('#adviceID')
let advice = document.querySelector('#advice')
let loader = document.querySelector('#loader')

function displayAdvice(responseBody) {
    adviceID.innerText = `Advice #${responseBody.slip.id}`
    advice.innerText = `"${responseBody.slip.advice}"`
    loader.style.display = 'none'
    advice.style.display = 'block'
}

getAdviceBtn.addEventListener('click', () => {
    loader.style.display = 'block'
    advice.style.display = 'none'
    fetch('https://api.adviceslip.com/advice')
    .then((response) =>
        response.json()
    )
    .then((responseBody) => (
        displayAdvice(responseBody)
    ))
})
