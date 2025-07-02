import express from 'express'
import globalErrorHandler from './middlewares/globalErrorHandler'
const app = express()



app.use(globalErrorHandler)// app.ts ma reagister garne, error handling function chai every time call vairako huncha hai,katai pati kasai le req garyo req garda error aayo vane yo call huncha yesle everytime project watch gari rako huncna
















export default app