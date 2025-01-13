import { Request, Response } from "express";
import * as hallRepository from "../repository/hall.repository";

export async function getHalls(req: Request, res: Response) {
    try {
        const halls = await hallRepository.findHalls(
            parseInt(req.params.cinemaId)
        );

        if (halls !== null) {
            res.status(200).json(halls);
        } else {
            res.status(404).json({ message : `Halls not found.` });
        }
    } catch (error) {
        if (error instanceof Error) {
            res.status(500).json({ message: error.message });
        }
    }
}

export async function getHallById(req: Request, res: Response) {
    try {
        const hall = await hallRepository.findHallById(
            parseInt(req.params.id)
        );

        if (hall !== null) {
            res.status(200).json(hall);
        } else {
            res.status(404).json({ message : `Hall ${req.params.id} not found.` });
        }
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
            parseInt(req.params.cinemaId)
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
            parseInt(req.params.id),
            parseInt(req.body.number),
            req.body.projectionQuality,
            parseInt(req.params.cinemaId)
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
        const hallToDelete = await hallRepository.deleteHall(
            parseInt(req.params.id)
        );

        res.status(200).json({ message: "Hall deleted successfully." });
    } catch (error) {
        if (error instanceof Error) {
            res.status(500).json({ message: error.message });
        }
    }
}