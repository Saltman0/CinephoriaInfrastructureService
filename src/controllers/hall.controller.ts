import { Request, Response } from "express";
import * as hallRepository from "../repository/hall.repository";
import { publishMessage } from "../rabbitmq";

export async function getHalls(req: Request, res: Response) {
    try {
        const halls = await hallRepository.findHalls(
            parseInt(req.params.cinemaId)
        );

        res.status(200).json(halls);
    } catch (error) {
        if (error instanceof Error) {
            res.status(500).json({ message: error.message });
        }
    }
}

export async function getHallById(req: Request, res: Response) {
    try {
        const hall = await hallRepository.findHallById(
            parseInt(req.params.hallId)
        );

        res.status(200).json(hall);
    } catch (error) {
        if (error instanceof Error) {
            res.status(500).json({ message: error.message });
        }
    }
}

export async function createHall(req: Request, res: Response) {
    try {
        const hallToCreate = await hallRepository.insertHall(
            parseInt(req.body.number),
            req.body.projectionQuality,
            parseInt(req.body.cinemaId)
        );

        await publishMessage("hall", JSON.stringify({ type: "hall", event: "create", body: hallToCreate }));

        res.status(201).json(hallToCreate);
    } catch (error) {
        if (error instanceof Error) {
            res.status(500).json({ message: error.message });
        }
    }
}

export async function updateHall(req: Request, res: Response) {
    try {
        const hallToUpdate = await hallRepository.updateHall(
            parseInt(req.params.hallId),
            parseInt(req.body.number),
            req.body.projectionQuality,
            parseInt(req.body.cinemaId)
        );

        await publishMessage("hall", JSON.stringify({ type: "hall", event: "update", body: hallToUpdate }));

        res.status(200).json(hallToUpdate);
    } catch (error) {
        if (error instanceof Error) {
            res.status(500).json({ message: error.message });
        }
    }
}

export async function deleteHall(req: Request, res: Response) {
    try {
        const hallToDelete = await hallRepository.deleteHall(
            parseInt(req.params.hallId)
        );

        await publishMessage("hall", JSON.stringify({ type: "hall", event: "delete", body: hallToDelete }));

        res.status(200).json({ message: "Hall deleted successfully." });
    } catch (error) {
        if (error instanceof Error) {
            res.status(500).json({ message: error.message });
        }
    }
}