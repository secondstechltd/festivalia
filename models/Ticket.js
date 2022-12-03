import mongoose from "mongoose";

const ticketSchema = mongoose.Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
  },
  phone: {
    type: String,
  },
  ticket: {
    type: String,
  },
  createdOn: {
    type: Date,
    default: new Date(),
  },
});

const Ticket = mongoose.model("ticket", ticketSchema);

export default Ticket;
