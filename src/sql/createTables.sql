-- Cinema table
DROP TABLE IF EXISTS "cinema";
CREATE TABLE IF NOT EXISTS "cinema"
(
    "id" SERIAL PRIMARY KEY,
    "name" VARCHAR NOT NULL,
    "address" VARCHAR NOT NULL,
    "postalCode" INTEGER NOT NULL,
    "city" VARCHAR NOT NULL,
    "phoneNumber" VARCHAR NOT NULL,
    "openHour" TIME WITHOUT TIME ZONE NOT NULL,
    "closeHour" TIME WITHOUT TIME ZONE NOT NULL
);
-- Cinema table

-- Hall table
DROP TABLE IF EXISTS "hall";
CREATE TABLE IF NOT EXISTS "hall"
(
    "id" SERIAL PRIMARY KEY,
    "number" INTEGER NOT NULL,
    "projectionQuality" VARCHAR,
    "cinemaId" INTEGER NOT NULL
);
-- Hall table

-- Incident table
DROP TABLE IF EXISTS "incident";
CREATE TABLE IF NOT EXISTS "incident" (
    "id" SERIAL PRIMARY KEY,
    "type" VARCHAR NOT NULL,
    "description" VARCHAR NOT NULL,
    "date" TIMESTAMP NOT NULL,
    "solved" BOOLEAN NOT NULL,
    "hallId" INTEGER NOT NULL
);
-- Incident table

-- Seat table
DROP TABLE IF EXISTS "seat";
CREATE TABLE IF NOT EXISTS "seat"
(
    "id" SERIAL PRIMARY KEY,
    "row" VARCHAR NOT NULL,
    "number" INTEGER NOT NULL,
    "hallId" INTEGER NOT NULL
    );
-- Seat table