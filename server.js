const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const bodyparser = require('body-parser');

const app = express();

dotenv.config({path :'config.env'})
const PORT = process.env.PORT||8080

//log requests
app.use(morgan('tiny'));

//parser request to body-parser
app.use(bodyparser.urlencoded({extended:true}))

//set view engine
app.set("view engine", "ejs")

//load assest
app.use('/css', express.static(path.resolve(__dirname, "assest/css")))
app.use('/img', express.static(path.resolve(__dirname, "assest/img")))
app.use('/js', express.static(path.resolve(__dirname, "assest/js")))


app.get('/',(req,res)=>{
    res.render('index');
});

app.listen(PORT,()=>{console.log(`server is running on http://loaclhost:${PORT}`)});