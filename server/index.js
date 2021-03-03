import express from 'express'

const app = express()

app.use(express.static('.', { maxAge: 100000000 }))

app.listen(process.env.PORT || 8080)