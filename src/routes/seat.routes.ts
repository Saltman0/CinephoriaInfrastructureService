import { Router } from "express";
import passport from "../middleware/passport";
import * as seatController from "../controllers/seat.controller";

const router: Router = Router();

router.get("/hall/:hallId/seat", passport.authenticate("jwt", { session: false }), seatController.getSeats);
router.get("/seat/:id", passport.authenticate("jwt", { session: false }), seatController.getSeatById);
router.post("/hall/:hallId/seat", passport.authenticate("jwt", { session: false }), seatController.createSeat);
router.put("/seat/:id", passport.authenticate("jwt", { session: false }), seatController.updateSeat);
router.delete("/seat/:id", passport.authenticate("jwt", { session: false }), seatController.deleteHall);

export default router;