import 'dotenv/config'
import 'reflect-metadata'
import { app } from "./app";
import { AppDataSource } from './database';

AppDataSource.initialize()
.then(() => {
    console.log("Data Source has been initialized!")
})
.catch((err) => {
    console.error("Error during Data Source initialization", err)
})

app.listen(process.env.PORT || 2022, () => {
    console.log(`Server is running in ${process.env.BASE_URL}:${process.env.PORT}`)
})