import mongoose from "mongoose";

const conn =() => {
    mongoose.connect(process.env.DB_URI,{
        dbName : "Ebag_db",
        useNewUrlParser:true,
        useUnifiedTopology:true,
    }).then(()=> {
        console.log('Connected to the DB succ');
    })
    .catch((err)=> {
        console.log(`DB connection err:, ${err}`)
    });
};

export default conn