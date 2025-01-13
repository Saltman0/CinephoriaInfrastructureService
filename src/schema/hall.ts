import * as drizzle from "drizzle-orm/pg-core";
import { cinema } from "./cinema";

export const hall = drizzle.pgTable("hall", {
    id: drizzle.integer().primaryKey().generatedAlwaysAsIdentity(),
    number: drizzle.integer().notNull(),
    projectionQuality: drizzle.varchar(),
    cinemaId: drizzle.integer().references(() => cinema.id, {onDelete: "cascade"}).notNull()
});