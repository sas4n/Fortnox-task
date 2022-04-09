import express from 'express';
import cors from 'cors';
import router from './routers/router.js'
import { prepareDatabase } from './model/index.js';

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended:false}))
app.use(cors())

//create database and tables
app.use(prepareDatabase)

app.use('/#', router)

const PORT = process.env.PORT || 8080

app.listen(PORT, () => console.log(`server is running on port ${PORT}`))

