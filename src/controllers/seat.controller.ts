import { Request, Response } from "express";
import * as seatRepository from "../repository/seat.repository";

export async function getSeats(req: Request, res: Response) {
    try {
        let hallId: string|null = <string>req.query.hallId ?? null;

        const seats = await seatRepository.findSeats(
            hallId !== null ? parseInt(hallId) : null
        );

        res.status(200).json(seats);
    } catch (error) {
        if (error instanceof Error) {
            res.status(500).json({ message: error.message });
        }
    }
}

export async function getSeatById(req: Request, res: Response) {
    try {
        const hall = await seatRepository.findSeatById(
            parseInt(req.params.seatId)
        );

        res.status(200).json(hall);
    } catch (error) {
        if (error instanceof Error) {
            res.status(500).json({ message: error.message });
        }
    }
}

export async function createSeat(req: Request, res: Response) {
    try {
        const seatToCreate = await seatRepository.insertSeat(
            req.body.row,
            parseInt(req.body.number),
            parseInt(req.body.hallId)
        );

        res.status(201).json(seatToCreate);
    } catch (error) {
        if (error instanceof Error) {
            res.status(500).json({ message: error.message });
        }
    }
}

export async function updateSeat(req: Request, res: Response) {
    try {
        const seatToUpdate = await seatRepository.updateSeat(
            parseInt(req.params.seatId),
            req.body.row,
            parseInt(req.body.number),
            parseInt(req.body.hallId)
        );

        res.status(200).json(seatToUpdate);
    } catch (error) {
        if (error instanceof Error) {
            res.status(500).json({ message: error.message });
        }
    }
}

export async function deleteSeat(req: Request, res: Response) {
    try {
        await seatRepository.deleteSeat(parseInt(req.params.seatId));

        res.status(200).json({ message: "Seat deleted successfully." });
    } catch (error) {
        if (error instanceof Error) {
            res.status(500).json({ message: error.message });
        }
    }
}