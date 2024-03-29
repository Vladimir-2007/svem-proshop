import mongoose from 'mongoose'


const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URL, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useCreateIndex: true
    })
    console.log(`MongoDB Connected: ${conn.connection.host}`)
  } catch ( err ) {
    console.log(`Error: ${err.methods}`)
    process.exit(1)
  }
}

export default connectDB