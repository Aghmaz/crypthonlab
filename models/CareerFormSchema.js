import mongoose from "mongoose";

const CareerFormSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    education: {
      type: String,
      required: false,
    },
    experience: {
      type: String,
      required: false,
    },
    projectDetails: {
      type: String,
      required: true,
    },
    emailStatus: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.models.CareerForm ||
  mongoose.model("CareerForm", CareerFormSchema);
