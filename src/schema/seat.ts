import * as drizzle from "drizzle-orm/pg-core";
import { hall } from "./hall";

export const seat = drizzle.pgTable("seat", {
    id: drizzle.integer().primaryKey().generatedAlwaysAsIdentity(),
    row: drizzle.varchar().notNull(),
    number: drizzle.integer().notNull(),
    hallId: drizzle.integer().references(() => hall.id, {onDelete: "cascade"}).notNull()
});