import mongoose from "mongoose";

const connectMongo = async () => {
  if (mongoose.connections[0].readyState) {
    console.log("Already connected");
    return;
  }
  await mongoose
    .connect("mongodb://0.0.0.0:27017/crypthonLabDatabase")
    .then(() => console.log("connected to mongodb"))
    .catch((error) => console.log("couldn't connected to mongodb"));
};

export default connectMongo;
