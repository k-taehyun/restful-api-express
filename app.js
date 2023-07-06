const express = require('express')
const app = express()
const mysql = require('mysql')
const db_config = require('./config/db_config')
const api = require('./api/index')
const port = 8080
const db = mysql.createConnection(db_config)


app.use('/api',api)

db.connect((err)=>{
    if(!err)
        console.log('db conn')
})

app.listen(port, ()=>{
    console.log(`server start ${port}`)
})