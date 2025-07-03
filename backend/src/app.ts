import express from 'express'
import globalErrorHandler from './middlewares/globalErrorHandler'
import noteRoute from './note/noteRoute'
const app = express()


app.use("/api/notes",noteRoute) // /api/notes/
app.use(globalErrorHandler)// app.ts ma reagister garne, error handling function chai every time call vairako huncha hai,katai pati kasai le req garyo req garda error aayo vane yo call huncha yesle everytime project watch gari rako huncna
















export default app