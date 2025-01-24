import { Request, Response } from "express";
import * as incidentRepository from "../repository/incident.repository";
import {publishMessage} from "../rabbitmq";

export async function getIncidents(req: Request, res: Response) {
    try {
        const incidents = await incidentRepository.findIncidents(
            parseInt(req.params.hallId)
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
            parseInt(req.body.hallId)
        );

        await publishMessage("incident", JSON.stringify({ type: "incident", event: "create", body: incidentToCreate }));

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
            parseInt(req.body.hallId)
        );

        await publishMessage("incident", JSON.stringify({ type: "incident", event: "update", body: incidentToUpdate }));

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
            parseInt(req.params.incidentId)
        );

        await publishMessage("incident", JSON.stringify({ type: "incident", event: "delete", body: incidentToDelete }));

        res.status(200).json({ message: "Incident deleted successfully." });
    } catch (error) {
        if (error instanceof Error) {
            res.status(500).json({ message: error.message });
        }
    }
}