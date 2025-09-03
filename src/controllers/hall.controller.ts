import { Request, Response } from "express";
import * as hallRepository from "../repository/hall.repository";

export async function getHalls(req: Request, res: Response) {
    try {
        let cinemaId: string|null = <string>req.query.cinemaId ?? null;

        const halls = await hallRepository.findHalls(
            cinemaId !== null ? parseInt(cinemaId) : null
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

        res.status(200).json(hallToUpdate);
    } catch (error) {
        if (error instanceof Error) {
            res.status(500).json({ message: error.message });
        }
    }
}

export async function deleteHall(req: Request, res: Response) {
    try {
        await hallRepository.deleteHall(parseInt(req.params.hallId));

        res.status(200).json({ message: "Hall deleted successfully." });
    } catch (error) {
        if (error instanceof Error) {
            res.status(500).json({ message: error.message });
        }
    }
}