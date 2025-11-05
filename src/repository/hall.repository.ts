import {eq} from "drizzle-orm/sql/expressions/conditions";
import {asc} from "drizzle-orm/sql/expressions/select";
import {sql} from "drizzle-orm";
import * as hallFactory from "../factory/hall.factory";
import {database} from "../config/database";
import {hall} from "../schema/hall";

export async function findHalls(cinemaId: number|null) {
    try {
        if (cinemaId !== null) {
            return await database
                .select()
                .from(hall)
                .where(eq(hall.cinemaId, cinemaId))
                .orderBy(asc(hall.id));
        }

        return await database
            .select()
            .from(hall)
            .orderBy(asc(hall.id));
    } catch (error) {
        throw error;
    }
}

export async function findHallById(id: number, cinemaId: number|null) {
    try {
        let request: string = `SELECT * FROM "hall" WHERE "hall"."id" = ${id}`;

        if (cinemaId !== null) {
            request += ` AND "hall"."cinemaId" = ${cinemaId}`;
        }

        return await database.execute(sql.raw(request));
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