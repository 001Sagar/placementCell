const mongoose = require('mongoose');
async function main(){
    await mongoose.connect('mongodb+srv://Sagar:Sagar@9760@cluster0.ozi7tg0.mongodb.net/');
    console.log("connection Successfull !! ");
}
main().catch(error =>console.log("connection not successfull !!"));