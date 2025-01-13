import * as drizzle from "drizzle-orm/pg-core";
import { hall } from "./hall";

export const incident = drizzle.pgTable("incident", {
    id: drizzle.integer().primaryKey().generatedAlwaysAsIdentity(),
    type: drizzle.varchar().notNull(),
    description: drizzle.varchar().notNull(),
    hallId: drizzle.integer().references(() => hall.id, {onDelete: "cascade"}).notNull()
});