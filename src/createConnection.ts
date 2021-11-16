import mongoose from "mongoose";

async function createConnection(uri: string) {
  try{
  await mongoose
    .connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    autoIndex: true,
    })
  console.log('Connected to database')
  }catch(err: any){
    console.log(err)
  }
}

export default createConnection
