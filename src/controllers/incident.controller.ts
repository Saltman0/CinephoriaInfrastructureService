import { Request, Response } from "express";
import * as incidentRepository from "../repository/incident.repository";

export async function getIncidents(req: Request, res: Response) {
    try {
        let hallId: string|null = <string>req.query.hallId ?? null;

        const incidents = await incidentRepository.findIncidents(
            hallId !== null ? parseInt(hallId) : null
        );

        res.status(200).json(incidents);
    } catch (error) {
        if (error instanceof Error) {
            res.status(500).json({ message: error.message });
        }
    }
}

export async function getIncidentById(req: Request, res: Response) {
    try {
        const incident = await incidentRepository.findIncidentById(
            parseInt(req.params.incidentId)
        );

        res.status(200).json(incident);
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
            new Date(req.body.date),
            req.body.solved,
            parseInt(req.body.hallId)
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
            parseInt(req.params.incidentId),
            req.body.type,
            req.body.description,
            req.body.date,
            req.body.solved,
            parseInt(req.body.hallId)
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
        await incidentRepository.deleteIncident(parseInt(req.params.incidentId));

        res.status(200).json({ message: "Incident deleted successfully." });
    } catch (error) {
        if (error instanceof Error) {
            res.status(500).json({ message: error.message });
        }
    }
}