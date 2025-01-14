import * as incidentFactory from "../factory/incident.factory";
import { database } from "../config/database";
import { eq } from "drizzle-orm/sql/expressions/conditions";
import { incident } from "../schema/incident";

export async function findIncidents(hallId: number) {
    let findIncidentsQuery = 'SELECT * FROM "incident"';

    findIncidentsQuery += ` WHERE "hallId" = ${hallId}`;

    findIncidentsQuery += ' ORDER BY "incident"."id" ASC';

    try {
        let result = await database.execute(findIncidentsQuery);

        if (result.rows.length === 0) {
            return null;
        }

        return result.rows;
    } catch (error) {
        throw error;
    }
}

export async function findIncidentById(id: number) {
    try {
        const result = await database
            .select()
            .from(incident)
            .where(eq(incident.id, id));

        if (result.length === 0) {
            return null;
        }

        return result[0];
    } catch (error) {
        throw error;
    }
}

export async function insertIncident(type: string, description: string, hallId: number) {
    try {
        const preparedInsertIncident = await database
            .insert(incident)
            .values(incidentFactory.createIncident(type, description, hallId))
            .returning();

        return preparedInsertIncident[0];
    } catch (error) {
        throw error;
    }
}

export async function updateIncident(id: number, type: string|null, description: string|null, hallId: number|null) {
    try {
        const preparedUpdateIncident = await database
            .update(incident)
            .set({
                type: type ?? undefined,
                description: description ?? undefined,
                hallId: hallId ?? undefined
            })
            .where(eq(incident.id, id))
            .returning();

        return preparedUpdateIncident[0];
    } catch (error) {
        throw error;
    }
}

export async function deleteIncident(id: number) {
    try {
        const preparedDeleteIncident = await database
            .delete(incident)
            .where(eq(incident.id, id))
            .returning({ id: incident.id });

        return preparedDeleteIncident[0];
    } catch (error) {
        throw error;
    }
}