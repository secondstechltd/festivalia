import { Router } from "express";
import {
  reservation_create_post,
  ticket_create_post,
} from "../controller/controller.js";
const router = Router();

// router.post("/accounts/signup", signup_post);
router.post("/reservation/post", reservation_create_post);
router.post("/ticket/create/post", ticket_create_post);

export default router;
