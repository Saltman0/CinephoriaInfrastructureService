import * as seatFactory from "../factory/seat.factory";
import { database } from "../config/database";
import { eq } from "drizzle-orm/sql/expressions/conditions";
import { seat } from "../schema/seat";

export async function findSeats(hallId: number|null) {
    let findSeatsQuery = 'SELECT * FROM seat';
    if (hallId !== null) {
        findSeatsQuery += ` WHERE seat."hallId" = ${hallId}`;
    }
    findSeatsQuery += ' ORDER BY seat."id" ASC';

    try {
        let result = await database.execute(findSeatsQuery);

        if (result.rows.length === 0) {
            return null;
        }

        return result.rows;
    } catch (error) {
        throw error;
    }
}

export async function findSeatById(id: number) {
    try {
        const result = await database
            .select()
            .from(seat)
            .where(eq(seat.id, id));

        if (result.length === 0) {
            return null;
        }

        return result[0];
    } catch (error) {
        throw error;
    }
}

export async function insertSeat(row: string, number: number, hallId: number) {
    try {
        const preparedInsertSeat = await database
            .insert(seat)
            .values(seatFactory.createSeat(row, number, hallId))
            .returning();

        return preparedInsertSeat[0];
    } catch (error) {
        throw error;
    }
}

export async function updateSeat(id: number, row: string|null, number: number|null, hallId: number|null) {
    try {
        const preparedUpdateSeat = await database
            .update(seat)
            .set({
                row: row ?? undefined,
                number: number ?? undefined,
                hallId: hallId ?? undefined
            })
            .where(eq(seat.id, id))
            .returning();

        return preparedUpdateSeat[0];
    } catch (error) {
        throw error;
    }
}

export async function deleteSeat(id: number) {
    try {
        const preparedDeleteSeat = await database
            .delete(seat)
            .where(eq(seat.id, id))
            .returning({ id: seat.id });

        return preparedDeleteSeat[0];
    } catch (error) {
        throw error;
    }
}