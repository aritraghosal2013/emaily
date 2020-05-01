import express from 'express'

const app = express()

app.get('/', (req, res) => {
  res.status(200).send({ name: 'Aritra' })
})

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
  console.log('Node server running at port ', PORT)
})
