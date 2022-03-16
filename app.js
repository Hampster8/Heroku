const express = require('express');
const app = express();
const PORT = process.env.PORT || 4321
app.use(express.json());

app.use(express.static('public'));


app.listen(PORT, () =>{
    console.log(`Listening on Port ${PORT}`)
})