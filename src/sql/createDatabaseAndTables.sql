-- Cinéphoria movie service database
DROP DATABASE IF EXISTS "cinephoriaInfrastructureServiceDatabase";
CREATE DATABASE "cinephoriaInfrastructureServiceDatabase";
-- Cinéphoria movie service database

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
    "cinemaId" INTEGER REFERENCES "cinema"(id) ON UPDATE NO ACTION ON DELETE CASCADE
);
-- Hall table

-- Seat table
DROP TABLE IF EXISTS "seat";
CREATE TABLE IF NOT EXISTS "seat"
(
    "id" SERIAL PRIMARY KEY,
    "row" VARCHAR NOT NULL,
    "number" INTEGER NOT NULL,
    "hallId" INTEGER REFERENCES "hall"(id) ON UPDATE NO ACTION ON DELETE CASCADE
    );
-- Seat table

-- Incident table
DROP TABLE IF EXISTS "incident";
CREATE TABLE IF NOT EXISTS "incident" (
    "id" SERIAL PRIMARY KEY,
    "type" VARCHAR NOT NULL,
    "description" VARCHAR NOT NULL,
    "hallId" INTEGER NOT NULL
    );
-- Incident table

-- Movie table
DROP TABLE IF EXISTS "movie";
CREATE TABLE IF NOT EXISTS "movie"
(
    "id" SERIAL PRIMARY KEY,
    "title" VARCHAR NOT NULL,
    "description" TEXT NOT NULL,
    "minimumAge" INTEGER,
    "favorite" BOOLEAN,
    "imageURL" VARCHAR UNIQUE NOT NULL
);
-- Movie table

-- Showtime table
DROP TABLE IF EXISTS "showtime";
CREATE TABLE IF NOT EXISTS "showtime"
(
    "id" SERIAL PRIMARY KEY,
    "startTime" TIMESTAMP NOT NULL,
    "endTime" TIMESTAMP NOT NULL,
    "price" INTEGER NOT NULL,
    "movieId" INTEGER REFERENCES "movie"(id) ON UPDATE NO ACTION ON DELETE CASCADE,
    "hallId" INTEGER REFERENCES "hall"(id) ON UPDATE NO ACTION ON DELETE CASCADE
);
-- Showtime table