import express from 'express'
import dotenv from 'dotenv'
import morgan from 'morgan'
import router from './routes/index.js'
import bodyParser from 'body-parser'
dotenv.config()

const app = express()
app.set('port', process.env.PORT)

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use(morgan('dev'))
app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(router)

app.listen(app.get('port'), () => {
  console.log(`Server en el puerto ${app.get('port')}`)
})
