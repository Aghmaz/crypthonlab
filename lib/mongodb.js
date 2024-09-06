import mongoose from "mongoose";

const connectToDatabase = async () => {
  if (mongoose.connections[0].readyState) {
    console.log("Already connected");
    return;
  }
  await mongoose
    .connect(
      "mongodb+srv://crypthonlab:crypthonLab$3344@crypthonlabdatabase.vvwij.mongodb.net/?retryWrites=true&w=majority&appName=crypthonlabDatabase"
    )
    .then(() => console.log("connected to mongodb"))
    .catch((error) => console.log("couldn't connected to mongodb"));
};

export default connectToDatabase;
