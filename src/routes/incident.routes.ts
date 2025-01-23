import { Router } from "express";
import passport from "../middleware/passport";
import * as incidentController from "../controllers/incident.controller";

const router: Router = Router();

router.get("/hall/:hallId/incident", passport.authenticate("jwt", { session: false }), incidentController.getIncidents);
router.get("/incident/:incidentId", passport.authenticate("jwt", { session: false }), incidentController.getIncidentById);
router.post("/hall/:hallId/incident", passport.authenticate("jwt", { session: false }), incidentController.createIncident);
router.put("/incident/:incidentId", passport.authenticate("jwt", { session: false }), incidentController.updateIncident);
router.delete("/incident/:incidentId", passport.authenticate("jwt", { session: false }), incidentController.deleteIncident);

export default router;