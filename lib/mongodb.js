import mongoose from "mongoose";

const connectToDatabase = async () => {
  if (mongoose.connections[0].readyState) {
    console.log("Already connected to MongoDB");
    return;
  }

  try {
    await mongoose.connect(
      "mongodb+srv://crypthonlab:crypthonLab$3344@crypthonlabdatabase.vvwij.mongodb.net/crypthonlabDatabase?retryWrites=true&w=majority",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        connectTimeoutMS: 20000,
        socketTimeoutMS: 45000,
      }
    );
    console.log("Successfully connected to MongoDB");
  } catch (error) {
    console.error("Couldn't connect to MongoDB:", error.message);
  }
};

export default connectToDatabase;
