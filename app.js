const path = require('path')
const express = require('express')
const app = express()
const port = 3000
const root = path.join(__dirname,'public')
const jokes = [
        {
            id: 1,
            joke: "Why did the scarecrow win an award?",
            punchline: "Because he was outstanding in his field."
        },
        {
            id: 2,
            joke: "Why did the bicycle fall over?",
            punchline: "Because it was two-tired."
        },
        {
            id: 3,
            joke: "How did the first program die?",
            punchline: "It was executed."
        },
        {
            id: 4,
            joke: "How do robots eat pizza?",
            punchline: "One byte at a time."
        },
        {
            id: 5,
            joke: "How do you make holy water?",
            punchline: "You boil the hell out of it."
        }
]
app.use(express.json())
app.use(express.static('public'))
app.get('/',(request,response)=>{
    response.sendFile('index.html',{root})
})
app.get('/api/v1/random-joke',(request,response)=>{
    const r = Math.floor(Math.random()*jokes.length)
    response.send(jokes[r])
})

app.listen(port,()=>{console.log(`Listening on port: ${port}`)})