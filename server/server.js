const express = require('express');
const mongoose= require('mongoose');
const dotenv = require('dotenv');
const router = require('./routes/ToDorouter')
const cors = require('cors')
dotenv.config();

const app = express();
const PORT= process.env.PORT || 5000
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({}))
const mongooDb= async ()=>{
    try {
        await mongoose.connect(process.env.MONGODB_URI,{
            // useNewUrlParser: true,
            // // useUnifiedTopology: true,
            // // useCreateIndex: true,
        })
        console.log("connected to mongoDB")
        
    } catch (error) {
        console.log("an error",error)
        
    }
}
app.use(router);

app.listen(PORT,()=>{
    mongooDb();
    console.log(`Server is running on port ${PORT}`)
})