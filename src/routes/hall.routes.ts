import { Router } from "express";
import passport from "../middleware/passport";
import * as hallController from "../controllers/hall.controller";

const router: Router = Router();

router.get("hall", hallController.getHalls);
router.get("/hall/:hallId", hallController.getHallById);
router.post("/hall", passport.authenticate("jwt", { session: false }), hallController.createHall);
router.put("/hall/:hallId", passport.authenticate("jwt", { session: false }), hallController.updateHall);
router.delete("/hall/:hallId", passport.authenticate("jwt", { session: false }), hallController.deleteHall);

export default router;