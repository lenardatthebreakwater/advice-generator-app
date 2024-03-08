let getAdviceBtn = document.querySelector('#getAdviceBtn')
let adviceID = document.querySelector('#adviceID')
let advice = document.querySelector('#advice')
let loader = document.querySelector('#loader')

function displayAdvice(requestBody) {
    adviceID.innerText = `Advice #${requestBody.slip.id}`
    advice.innerText = `"${requestBody.slip.advice}"`
    loader.style.display = 'none'
    advice.style.display = 'block'
}

getAdviceBtn.addEventListener('click', () => {
    loader.style.display = 'block'
    advice.style.display = 'none'
    fetch('https://api.adviceslip.com/advice')
    .then((request) =>
        request.json()
    )
    .then((requestBody) => (
        displayAdvice(requestBody)
    ))
})
