import mongoose from "mongoose";

const connectToDatabase = async () => {
  if (mongoose.connections[0].readyState) {
    console.log("Already connected");
    return;
  }
  await mongoose
    .connect(
      "mongodb+srv://zaurezlodhi74:RaHFXFYlxsYqXcWE@cluster0.cir4y.mongodb.net/?retryWrites=true&w=majority"
    )
    .then(() => console.log("connected to mongodb"))
    .catch((error) => console.log("couldn't connected to mongodb"));
};

export default connectToDatabase;
