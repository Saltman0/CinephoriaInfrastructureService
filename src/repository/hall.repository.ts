import * as hallFactory from "../factory/hall.factory";
import { database } from "../config/database";
import { eq } from "drizzle-orm/sql/expressions/conditions";
import { hall } from "../schema/hall";
import { asc } from "drizzle-orm/sql/expressions/select";

export async function findHalls(cinemaId: number) {
    try {
        return await database
            .select()
            .from(hall)
            .where(eq(hall.cinemaId, cinemaId))
            .orderBy(asc(hall.id));
    } catch (error) {
        throw error;
    }
}

export async function findHallById(id: number) {
    try {
        const result = await database
            .select()
            .from(hall)
            .where(eq(hall.id, id));

        if (result.length === 0) {
            return null;
        }

        return result[0];
    } catch (error) {
        throw error;
    }
}

export async function insertHall(number: number, projectionQuality: string, cinemaId: number) {
    try {
        const preparedInsertHall = await database
            .insert(hall)
            .values(hallFactory.createHall(number, projectionQuality, cinemaId))
            .returning();

        return preparedInsertHall[0];
    } catch (error) {
        throw error;
    }
}

export async function updateHall(id: number, number: number|null, projectionQuality: string|null, cinemaId: number|null) {
    try {
        const preparedUpdateHall = await database
            .update(hall)
            .set({
                number: number ?? undefined,
                projectionQuality: projectionQuality ?? undefined,
                cinemaId: cinemaId ?? undefined
            })
            .where(eq(hall.id, id))
            .returning();

        return preparedUpdateHall[0];
    } catch (error) {
        throw error;
    }
}

export async function deleteHall(id: number) {
    try {
        const preparedDeleteHall = await database
            .delete(hall)
            .where(eq(hall.id, id))
            .returning({ id: hall.id });

        return preparedDeleteHall[0];
    } catch (error) {
        throw error;
    }
}