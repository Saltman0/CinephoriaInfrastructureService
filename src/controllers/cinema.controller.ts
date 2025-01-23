import { Request, Response } from "express";
import * as cinemaRepository from "../repository/cinema.repository";
import { publishMessage } from "../rabbitmq";

export async function getCinemas(req: Request, res: Response) {
    try {
        const cinemas = await cinemaRepository.findCinemas();

        if (cinemas !== null) {
            res.status(200).json(cinemas);
        } else {
            res.status(404).json({ message : `Cinemas not found.` });
        }
    } catch (error) {
        if (error instanceof Error) {
            res.status(500).json({ message: error.message });
        }
    }
}

export async function getCinemaById(req: Request, res: Response) {
    try {
        const cinema = await cinemaRepository.findCinemaById(
            parseInt(req.params.cinemaId)
        );

        if (cinema !== null) {
            res.status(200).json(cinema);
        } else {
            res.status(404).json({ message : `Cinema ${req.params.id} not found.` });
        }
    } catch (error) {
        if (error instanceof Error) {
            res.status(500).json({ message: error.message });
        }
    }
}

export async function createCinema(req: Request, res: Response) {
    try {
        const cinemaToCreate = await cinemaRepository.insertCinema(
            req.body.name,
            req.body.address,
            parseInt(req.body.postalCode),
            req.body.city,
            req.body.phoneNumber,
            req.body.openHour,
            req.body.closeHour
        );

        await publishMessage("cinema", JSON.stringify({ type: "cinema", event: "create", body: cinemaToCreate }));

        res.status(201).json(cinemaToCreate);
    } catch (error) {
        if (error instanceof Error) {
            res.status(500).json({ message: error.message });
        }
    }
}

export async function updateCinema(req: Request, res: Response) {
    try {
        const cinemaToUpdate = await cinemaRepository.updateCinema(
            parseInt(req.params.cinemaId),
            req.body.name,
            req.body.address,
            parseInt(req.body.postalCode),
            req.body.city,
            req.body.phoneNumber,
            req.body.openHour,
            req.body.closeHour
        );

        await publishMessage("cinema", JSON.stringify({ type: "cinema", event: "update", body: cinemaToUpdate }));

        res.status(200).json(cinemaToUpdate);
    } catch (error) {
        if (error instanceof Error) {
            res.status(500).json({ message: error.message });
        }
    }
}

export async function deleteCinema(req: Request, res: Response) {
    try {
        const cinemaToDelete = await cinemaRepository.deleteCinema(
            parseInt(req.params.cinemaId)
        );

        await publishMessage("cinema", JSON.stringify({ type: "cinema", event: "delete", body: cinemaToDelete }));

        res.status(200).json({ message: "Cinema deleted successfully." });
    } catch (error) {
        if (error instanceof Error) {
            res.status(500).json({ message: error.message });
        }
    }
}