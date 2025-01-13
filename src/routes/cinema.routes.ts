import { Router } from "express";
import passport from "../middleware/passport";
import * as cinemaController from "../controllers/cinema.controller";

const router: Router = Router();

router.get("/cinema", passport.authenticate("jwt", { session: false }), cinemaController.getCinemas);
router.get("/cinema/:id", passport.authenticate("jwt", { session: false }), cinemaController.getCinemaById);
router.post("/cinema", passport.authenticate("jwt", { session: false }), cinemaController.createCinema);
router.put("/cinema/:id", passport.authenticate("jwt", { session: false }), cinemaController.updateCinema);
router.delete("/cinema/:id", passport.authenticate("jwt", { session: false }), cinemaController.deleteCinema);

export default router;