const express = require('express')
const bcrypt = require('bcrypt')
require('./db/mongoose')
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')

const app = express()
const port = process.env.PORT || 3000

app.use(express.json())
app.use(userRouter)
app.use(taskRouter)

app.listen(port, () => {
    console.log('Server is up on port ' + port)
})

const myFunction = async () => {
    const password = 'Red12'
    const hashed  = await bcrypt.hash(password,8)
    console.log(password)
    console.log(hashed)

    const isMatch = await bcrypt.compare('Red12',hashed)
    console.log(isMatch)
}

myFunction()