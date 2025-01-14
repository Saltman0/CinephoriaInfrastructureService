import { Request, Response } from "express";
import * as incidentRepository from "../repository/incident.repository";

export async function getIncidents(req: Request, res: Response) {
    try {
        const incidents = await incidentRepository.findIncidents(
            parseInt(req.params.hallId)
        );

        if (incidents !== null) {
            res.status(200).json(incidents);
        } else {
            res.status(404).json({ message : `Incidents not found.` });
        }
    } catch (error) {
        if (error instanceof Error) {
            res.status(500).json({ message: error.message });
        }
    }
}

export async function getIncidentById(req: Request, res: Response) {
    try {
        const incident = await incidentRepository.findIncidentById(
            parseInt(req.params.id)
        );

        if (incident !== null) {
            res.status(200).json(incident);
        } else {
            res.status(404).json({ message : `Incident ${req.params.id} not found.` });
        }
    } catch (error) {
        if (error instanceof Error) {
            res.status(500).json({ message: error.message });
        }
    }
}

export async function createIncident(req: Request, res: Response) {
    try {
        const incidentToCreate = await incidentRepository.insertIncident(
            req.body.type,
            req.body.description,
            parseInt(req.params.hallId)
        );

        res.status(201).json(incidentToCreate);
    } catch (error) {
        if (error instanceof Error) {
            res.status(500).json({ message: error.message });
        }
    }
}

export async function updateIncident(req: Request, res: Response) {
    try {
        const incidentToUpdate = await incidentRepository.updateIncident(
            parseInt(req.params.id),
            req.body.type,
            req.body.description,
            parseInt(req.params.hallId)
        );

        res.status(200).json(incidentToUpdate);
    } catch (error) {
        if (error instanceof Error) {
            res.status(500).json({ message: error.message });
        }
    }
}

export async function deleteIncident(req: Request, res: Response) {
    try {
        const incidentToDelete = await incidentRepository.deleteIncident(
            parseInt(req.params.id)
        );

        res.status(200).json({ message: "Incident deleted successfully." });
    } catch (error) {
        if (error instanceof Error) {
            res.status(500).json({ message: error.message });
        }
    }
}