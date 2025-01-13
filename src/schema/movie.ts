import * as drizzle from "drizzle-orm/pg-core";

export const movie = drizzle.pgTable("movie", {
    id: drizzle.integer().primaryKey().generatedAlwaysAsIdentity(),
    title: drizzle.varchar().notNull(),
    description: drizzle.text().notNull(),
    minimumAge: drizzle.integer(),
    favorite: drizzle.boolean(),
    imageURL: drizzle.varchar().unique().notNull()
});