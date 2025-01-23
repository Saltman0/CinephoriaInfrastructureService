import * as cinemaFactory from "../factory/cinema.factory";
import { database } from "../config/database";
import { eq } from "drizzle-orm/sql/expressions/conditions";
import { cinema } from "../schema/cinema";
import { asc } from "drizzle-orm/sql/expressions/select";

export async function findCinemas() {
    try {
        return await database
            .select()
            .from(cinema)
            .orderBy(asc(cinema.id));
    } catch (error) {
        throw error;
    }
}

export async function findCinemaById(id: number) {
    try {
        const result = await database
            .select()
            .from(cinema)
            .where(eq(cinema.id, id));

        if (result.length === 0) {
            return null;
        }

        return result[0];
    } catch (error) {
        throw error;
    }
}

export async function insertCinema(name: string, address: string, postalCode: number, city: string, phoneNumber: string, openHour: string, closeHour: string) {
    try {
        const preparedInsertCinema = await database
            .insert(cinema)
            .values(cinemaFactory.createCinema(name, address, postalCode, city, phoneNumber, openHour, closeHour))
            .returning();

        return preparedInsertCinema[0];
    } catch (error) {
        throw error;
    }
}

export async function updateCinema(id: number, name: string|null, address: string|null, postalCode: number|null, city: string|null, phoneNumber: string|null, openHour: string|null, closeHour: string|null) {
    try {
        const preparedUpdateCinema = await database
            .update(cinema)
            .set({
                name: name ?? undefined,
                address: address ?? undefined,
                postalCode: postalCode ?? undefined,
                city: city ?? undefined,
                phoneNumber: phoneNumber ?? undefined,
                openHour: openHour ?? undefined,
                closeHour: closeHour ?? undefined
            })
            .where(eq(cinema.id, id))
            .returning();

        return preparedUpdateCinema[0];
    } catch (error) {
        throw error;
    }
}

export async function deleteCinema(id: number) {
    try {
        const preparedDeleteCinema = await database
            .delete(cinema)
            .where(eq(cinema.id, id))
            .returning({ id: cinema.id });

        return preparedDeleteCinema[0];
    } catch (error) {
        throw error;
    }
}