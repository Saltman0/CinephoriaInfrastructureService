import { Router } from "express";
import passport from "../middleware/passport";
import * as hallController from "../controllers/hall.controller";

const router: Router = Router();

router.get("/cinema/:cinemaId/hall", passport.authenticate("jwt", { session: false }), hallController.getHalls);
router.get("/hall/:id", passport.authenticate("jwt", { session: false }), hallController.getHallById);
router.post("/cinema/:cinemaId/hall", passport.authenticate("jwt", { session: false }), hallController.createHall);
router.put("/hall/:id", passport.authenticate("jwt", { session: false }), hallController.updateHall);
router.delete("/hall/:id", passport.authenticate("jwt", { session: false }), hallController.deleteHall);

export default router;