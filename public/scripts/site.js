const p = document.querySelector("p")
const getJoke =async()=>{
    const result = await fetch("/api/v1/random-joke")
    const {joke,punchline} = await result.json()
    p.innerHTML = `${joke}<br>${punchline}`
}
getJoke()
document.querySelector("button").addEventListener("click",()=>{
    getJoke()
})