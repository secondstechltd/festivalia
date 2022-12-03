import jwt from "jsonwebtoken";
import { Mongoose } from "mongoose";
import Reservation from "../models/Reservation.js";
import Ticket from "../models/Ticket.js";

// import uuid from "uuid";

import User from "../models/User.js";

const handleErrors = (err) => {
  let errors = {
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    password: "",
    search: "",
  };

  if (err.message === "Incorrect email") {
    errors.email = "User not found";
  }

  if (err.message === "Incorrect password") {
    errors.password = "Password is incorrect";
  }

  if (err.message === "search cannot be empty") {
    errors.search = "Please enter music name or artist name";
  }

  if (err.code === 11000) {
    errors.email = "Email already exists";
    return errors;
  }

  // validating user errors
  if (err.message.includes("user validation failed")) {
    Object.values(err.errors).forEach(({ properties }) => {
      errors[properties.path] = properties.message;
    });
  }

  return errors;
};

// create tokens
const maxAge = 2 * 24 * 60 * 60;

const createToken = (id) => {
  return jwt.sign({ id }, "music stream token", { expiresIn: maxAge });
};

export const reservation_create_post = async (req, res) => {
  try {
    const { name, email, phone } = req.body;

    const reservationArr = await Reservation.create({
      name,
      email,
      phone,
    });

    res.status(200).json({ response: "SUCCESS" });
  } catch (err) {
    const errors = handleErrors(err);
    res.status(400).json({ errors });
  }
};

export const ticket_create_post = async (req, res) => {
  try {
    const { name, email, phone, ticket } = req.body;

    const ticketArr = await Ticket.create({
      name,
      email,
      phone,
      ticket,
    });

    res.status(200).json({ response: "SUCCESS" });
  } catch (err) {
    const errors = handleErrors(err);
    res.status(400).json({ errors });
  }
};

// export const signup_post = async (req, res) => {
//   try {
//     const { firstname, lastname, email, phone, password } = req.body;

//     const user = await User.create({
//       firstname,
//       lastname,
//       email,
//       phone,
//       password,
//     });

//     if (user) {
//       res.status(200).json({ response: "SUCCESS" });
//     }
//   } catch (err) {
//     const errors = handleErrors(err);
//     res.status(400).json({ errors });
//   }
// };

// export const logout_get = async (req, res) => {
//   try {
//     res.cookie("musicStream_JWT", "", { maxAge: 1 });
//     res.redirect("/");
//   } catch (err) {
//     const errors = handleErrors(err);
//     res.status(400).json({ errors });
//   }
// };
