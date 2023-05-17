const express = require('express');
const router = require('./routes/mailSender');
const cors = require("cors");
const app = express();

const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({extended:true}))

app.use(cors());
app.use("/api/mail", router);

app.get("/",(req, res)=>{
    res.send("Pagina Principal");
})

app.listen(port, ()=>{
    console.log("Servidor corriendo en el puerto",port)
})