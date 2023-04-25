const mongoose=require('mongoose')

const DB="mongodb+srv://nishitha:yhu65pRQk7KnVaE3@cluster0.602gwxp.mongodb.net/?retryWrites=true&w=majority"
mongoose.set('strictQuery', true);
mongoose.connect(DB,{
    useUnifiedTopology: true,
    
    useNewUrlParser: true,}).then(()=>console.log("Connected")).catch((error)=>console.log(error));

