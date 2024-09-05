import mongoose from "mongoose";

const ContactFormSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    budget: {
      type: String,
      required: false,
    },
    timeframe: {
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

export default mongoose.models.ContactForm ||
  mongoose.model("ContactForm", ContactFormSchema);
