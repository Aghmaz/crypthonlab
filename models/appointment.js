import mongoose from "mongoose";

const AppointmentFormSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: String,
      required: true,
    },
    dateTime: {
      type: Date,
      required: false,
    },
    timeSlot: {
      section: { type: String, required: true },
      time: { type: String, required: true },
    },
    note: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.models.AppointmentForm ||
  mongoose.model("AppointmentForm", AppointmentFormSchema);
