import mongoose from "mongoose";

const reservationSchema = mongoose.Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
  },
  phone: {
    type: String,
  },
  createdOn: {
    type: Date,
    default: new Date(),
  },
});

const Reservation = mongoose.model("reservation", reservationSchema);

export default Reservation;
