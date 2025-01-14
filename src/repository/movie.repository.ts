import * as movieFactory from "../factory/movie.factory";
import { database } from "../config/database";
import { movie } from "../schema/movie";
import { eq } from "drizzle-orm/sql/expressions/conditions";

export async function insertMovie(id: number, title: string, description: string, minimumAge: number|null, favorite: boolean, imageURL: string) {
    try {
        const preparedInsertMovie = await database
            .insert(movie)
            .values(movieFactory.createMovie(id, title, description, minimumAge, favorite, imageURL))
            .returning();

        return preparedInsertMovie[0];
    } catch (error) {
        throw error;
    }
}

export async function updateMovie(id: number, title: string|null, description: string|null, minimumAge: number|null, favorite: boolean|null, imageURL: string|null) {
    try {
        const preparedUpdateMovie = await database
            .update(movie)
            .set({
                title: title ?? undefined,
                description: description ?? undefined,
                minimumAge: minimumAge ?? undefined,
                favorite: favorite ?? undefined,
                imageURL: imageURL ?? undefined
            })
            .where(eq(movie.id, id))
            .returning();

        return preparedUpdateMovie[0];
    } catch (error) {
        throw error;
    }
}

export async function deleteMovie(id: number) {
    try {
        const preparedDeleteMovie = await database
            .delete(movie)
            .where(eq(movie.id, id))
            .returning({ id: movie.id });

        return preparedDeleteMovie[0];
    } catch (error) {
        throw error;
    }
}