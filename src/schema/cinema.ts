import * as drizzle from "drizzle-orm/pg-core";

export const cinema = drizzle.pgTable("cinema", {
    id: drizzle.integer().primaryKey().generatedAlwaysAsIdentity(),
    name: drizzle.varchar().notNull(),
    address: drizzle.varchar().notNull(),
    postalCode: drizzle.integer().notNull(),
    city: drizzle.varchar().notNull(),
    phoneNumber: drizzle.varchar().notNull(),
    openHour: drizzle.time().notNull(),
    closeHour: drizzle.time().notNull()
});