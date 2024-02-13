const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
require('dotenv').config();


const app = express()
app.use(express.json());
mongoose.connect(process.env.MONGODB_URI).then(
    console.log("COngratulation! Database is connected"))
    .catch((err) => { console.log(err) }
    )


app.use(cors())

app.get("/", (req, res) => {
    res.send("BLINKIT SDE INTERN ");
});
app.use('/api/auth', require('./routes/auth.route'))
app.use('/api/image', require('./routes/image.route'))



const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`App is running on port : ${PORT}`)
})

