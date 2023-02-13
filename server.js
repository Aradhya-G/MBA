const express = require('express')
const bodyParser = require('body-parser');
const mongoose = require('mongoose')
const bcrypt = require("bcrypt");
const User = require("./models/user.model");

const serverConfig = require('./configs/server.config')
const dbConfig = require('./configs/db.config')
const constants = require("./utils/constants");

const app = express()
app.use(bodyParser.json());

mongoose.connect(dbConfig.DB_URL , ()=>{
    console.log("Connected to db")
    init();
}, err =>{
    console.log("Error connection dc",err.message)
})

app.get('/', (req,res) =>{
    res.send("successfully hitting the api")
})

require("./routes/movie.routes")(app)
require("./routes/theatre.routes")(app)
require("./routes/auth.routes")(app);
require("./routes/user.routes")(app);
require("./routes/booking.routes")(app);
require("./routes/payment.routes")(app);

app.listen(serverConfig.PORT, ()=> {
    console.log(`Application started on port ${serverConfig.PORT}`)
})

async function init(){

    try{
        const user = await User.create({
            name:"admin",
            userId:"admin",
            email:"admin@gmail.com",
            password:bcrypt.hashSync("admin",10),
            userStatus:constants.userStatus.approved,
            userTypes:constants.userTypes.admin
        });
   console.log(user)
        console.log("Admin user created successfully");
    }catch(e){
        console.log(e.message);
    }

}