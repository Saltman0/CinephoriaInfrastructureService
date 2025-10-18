-- Start the SQL transaction
BEGIN;

    -- Cinemas
    INSERT INTO "cinema" ("name", "address", "postalCode", "city", "phoneNumber", "openHour", "closeHour")
    VALUES ('Cinéphoria Nantes', '25, avenue du Breton', 44000, 'Nantes', '06 45 89 53 21', '08:00:00', '23:30:00')
    ;

    -- Halls
    INSERT INTO "hall" ("number", "projectionQuality", "cinemaId")
    VALUES (1, 'IMAX', 1),
           (2, '4DX', 1),
           (3, 'Standard', 1),
           (4, 'IMAX', 1),
           (5, 'Dolby Atmos', 1),
           (6, 'Standard', 1)
    ;

    -- Seats
    INSERT INTO "seat" ("row", "number", "hallId")
    VALUES
    -- Hall 1
    ('A', 1, 1),
    ('A', 2, 1),
    ('B', 1, 1),
    ('B', 2, 1),
    ('C', 1, 1),
    ('C', 2, 1),
    ('D', 1, 1),
    ('D', 2, 1),
    ('E', 1, 1),
    ('E', 2, 1),
    -- Hall 2
    ('A', 1, 2),
    ('A', 2, 2),
    ('B', 1, 2),
    ('B', 2, 2),
    ('C', 1, 2),
    ('C', 2, 2),
    ('D', 1, 2),
    ('D', 2, 2),
    ('E', 1, 2),
    ('E', 2, 2),
    -- Hall 3
    ('A', 1, 3),
    ('A', 2, 3),
    ('B', 1, 3),
    ('B', 2, 3),
    ('C', 1, 3),
    ('C', 2, 3),
    ('D', 1, 3),
    ('D', 2, 3),
    ('E', 1, 3),
    ('E', 2, 3),
    -- Hall 4
    ('A', 1, 4),
    ('A', 2, 4),
    ('B', 1, 4),
    ('B', 2, 4),
    ('C', 1, 4),
    ('C', 2, 4),
    ('D', 1, 4),
    ('D', 2, 4),
    ('E', 1, 4),
    ('E', 2, 4),
    -- Hall 5
    ('A', 1, 5),
    ('A', 2, 5),
    ('B', 1, 5),
    ('B', 2, 5),
    ('C', 1, 5),
    ('C', 2, 5),
    ('D', 1, 5),
    ('D', 2, 5),
    ('E', 1, 5),
    ('E', 2, 5),
    -- Hall 6
    ('A', 1, 6),
    ('A', 2, 6),
    ('B', 1, 6),
    ('B', 2, 6),
    ('C', 1, 6),
    ('C', 2, 6),
    ('D', 1, 6),
    ('D', 2, 6),
    ('E', 1, 6),
    ('E', 2, 6)
    ;

    -- Incidents
    INSERT INTO "incident" ("type", "description", "date", "solved", "hallId")
    VALUES ('Technique', 'Problème de projection du film', '2025-09-20 18:30:00', false, 1),
           ('Nettoyage', 'Sièges sales au rang A', '2025-09-19 21:00:00', false, 2),
           ('Sécurité', 'Spectateur perturbant', '2025-09-18 20:00:00', true, 3),
           ('Maintenance', 'Siège A2 cassé', '2025-09-17 19:00:00', false, 4),
           ('Incendie', 'Feu déclaré au rang B', '2025-09-15 10:00:00', true, 5),
           ('Technique', 'Problème de son dans la salle', '2025-09-14 18:00:00', false, 6)
    ;

-- Commit if successful
COMMIT;

-- If something fails instead
ROLLBACK;