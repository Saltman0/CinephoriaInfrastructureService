import { Router } from "express";
import passport from "../middleware/passport";
import * as seatController from "../controllers/seat.controller";

const router: Router = Router();

router.get("/seat", seatController.getSeats);
router.get("/seat/:seatId", seatController.getSeatById);
router.post("/seat", passport.authenticate("jwt", { session: false }), seatController.createSeat);
router.put("/seat/:seatId", passport.authenticate("jwt", { session: false }), seatController.updateSeat);
router.delete("/seat/:seatId", passport.authenticate("jwt", { session: false }), seatController.deleteSeat);

export default router;