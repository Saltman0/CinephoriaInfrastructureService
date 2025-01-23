import { Request, Response } from "express";
import * as seatRepository from "../repository/seat.repository";
import { publishMessage } from "../rabbitmq";

export async function getSeats(req: Request, res: Response) {
    try {
        const seats = await seatRepository.findSeats(
            parseInt(req.params.hallId)
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
            parseInt(req.params.id)
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
            parseInt(req.params.hallId)
        );

        await publishMessage("seat", JSON.stringify({ type: "seat", event: "create", body: seatToCreate }));

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
            parseInt(req.params.id),
            req.body.row,
            parseInt(req.body.number),
            parseInt(req.body.hallId)
        );

        await publishMessage("seat", JSON.stringify({ type: "seat", event: "update", body: seatToUpdate }));

        res.status(200).json(seatToUpdate);
    } catch (error) {
        if (error instanceof Error) {
            res.status(500).json({ message: error.message });
        }
    }
}

export async function deleteSeat(req: Request, res: Response) {
    try {
        const seatToDelete = await seatRepository.deleteSeat(
            parseInt(req.params.id)
        );

        await publishMessage("hall", JSON.stringify({ type: "seat", event: "delete", body: seatToDelete }));

        res.status(200).json({ message: "Seat deleted successfully." });
    } catch (error) {
        if (error instanceof Error) {
            res.status(500).json({ message: error.message });
        }
    }
}