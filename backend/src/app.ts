import express from 'express'
import globalErrorHandler from './middlewares/globalErrorHandler'
import noteRoute from './note/noteRoute'
import envConfig from './config/config'
import cors from 'cors'
const app = express()
//PARSE INCOMING JSON TO HANDLE UNDEFINED ERROR
app.use(express.json())

//CORS CONFIGURATION
app.use(cors({
    origin: envConfig.frontendUrl
}))


app.use("/api/notes", noteRoute) // /api/notes/





//IMAGE PUBLIC
app.use(express.static("./src/uploads/")) //node le direct access didaina, so yesari access dini va ani database bta ko file direct herna lai read op dina parcha controller lai

//ERROR HANDLER
app.use(globalErrorHandler)// app.ts ma reagister garne, error handling function chai every time call vairako huncha hai,katai pati kasai le req garyo req garda error aayo vane yo call huncha yesle everytime project watch gari rako huncna

app.use(express.urlencoded({ extended: true }));













export default app