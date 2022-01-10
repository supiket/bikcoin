const contract = require('./contract.js')
const express = require('express')
const app = express()
const port = 3000

verificationcontract = contract.verificationcontract;
productprovenancecontract = contract.productprovenancecontract;

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})