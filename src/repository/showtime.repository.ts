import * as showtimeFactory from "../factory/showtime.factory";
import { database } from "../config/database";
import { showtime } from "../schema/showtime";
import { eq } from "drizzle-orm/sql/expressions/conditions";

export async function insertShowtime(id: number, startTime: Date, endTime: Date, price: number, movieId: number,
                                     hallId: number) {
    try {
        const prepareInsertShowtime = await database
            .insert(showtime)
            .values(showtimeFactory.createShowtime(id, startTime, endTime, price, movieId, hallId))
            .returning();

        return prepareInsertShowtime[0];
    } catch (error) {
        throw error;
    }
}

export async function updateShowtime(id: number, startTime: Date|null, endTime: Date|null, price: number|null,
                                     movieId: number|null, hallId: number|null) {
    try {
        const preparedUpdateShowtime = await database
            .update(showtime)
            .set({
                startTime: startTime ?? undefined,
                endTime: endTime ?? undefined,
                price: price ?? undefined,
                movieId: movieId ?? undefined,
                hallId: hallId ?? undefined
            })
            .where(eq(showtime.id, id))
            .returning();

        return preparedUpdateShowtime[0];
    } catch (error) {
        throw error;
    }
}

export async function deleteShowtime(id: number) {
    const prepareDeleteShowtime = await database
        .delete(showtime)
        .where(eq(showtime.id, id))
        .returning({ id: showtime.id });

    try {
        return prepareDeleteShowtime[0];
    } catch (error) {
        throw error;
    }
}