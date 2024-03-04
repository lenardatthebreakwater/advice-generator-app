let getAdviceBtn = document.querySelector('#getAdviceBtn')
let adviceID = document.querySelector('#adviceID')
let advice = document.querySelector('#advice')

getAdviceBtn.addEventListener("click", async () => {
    request = await fetch('https://api.adviceslip.com/advice')
    requestBody = await request.json()
    adviceID.innerText = `Advice #${requestBody.slip.id}`
    advice.innerText = `${requestBody.slip.advice}` 
})