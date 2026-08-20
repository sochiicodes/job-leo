// const http = require('http')
// const server = http.createServer((req, res)=>{
//     res.writeHead(200, {'Content-Type': 'application/json'})
//     res.end(JSON.stringify({message: "My name is Sochima"}))
// })

// server.listen(3000, () =>{
//     console.log("Server running on Port 3000")
// })

const express = require('express')
const cors = require('cors')

const app = express()


//middleware
app.use(cors())
app.use(express.json)

app.get('/api/jobs', (req, res) =>{
    const jobs = [
        { id: 1, title: 'Backend Engineer', company: 'Flutterwave' },
        { id: 2, title: 'Frontend Dev', company: 'Paystack' },
      ];
      res.json(jobs)
})

app,get('/api/jobs', (req, res) =>{
    const {id} = req.params
    res.json({id, message: `Fetching job ${id}`})
})


app.post('/api/jobs', (req, res) =>{
    const {title, compay} = req.body
    res.status(201).json({title, company, id: Date.now()})
})



app.listen(3000, () => console.log("Serve running on port 3000"))