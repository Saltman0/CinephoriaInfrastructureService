-- Start the SQL transaction
BEGIN;

-- Insert cinema
INSERT INTO "cinema" ("name", "address", "postalCode", "city", "phoneNumber", "openHour", "closeHour")
VALUES ('Cinéphoria Nantes', '25, avenue du Breton', 44000, 'Nantes', '06 45 89 53 21', '08:00:00', '23:30:00');
-- Insert cinema

SAVEPOINT cinema_savepoint;

-- Insert hall
INSERT INTO "hall" ("number", "projectionQuality", "cinemaId")
VALUES (1, 'HD', 1),
       (2, '4K', 1),
       (3, 'SD', 1),
       (4, 'HD', 1),
       (5, 'HD', 1),
       (6, '4K', 1);
-- Insert hall

SAVEPOINT hall_savepoint;

-- Insert seat
INSERT INTO "seat" ("row", "number", "hallId")
VALUES ('A', 1, 1),
       ('A', 2, 1),
       ('B', 1, 1),
       ('B', 2, 1),
       ('C', 1, 1),
       ('C', 2, 1),
       ('A', 1, 2),
       ('A', 2, 2),
       ('B', 1, 2),
       ('B', 2, 2),
       ('C', 1, 2),
       ('C', 2, 2),
       ('A', 1, 3),
       ('A', 2, 3),
       ('B', 1, 3),
       ('B', 2, 3),
       ('C', 1, 3),
       ('C', 2, 3),
       ('A', 1, 4),
       ('A', 2, 4),
       ('B', 1, 4),
       ('B', 2, 4),
       ('C', 1, 4),
       ('C', 2, 4),
       ('A', 1, 5),
       ('A', 2, 5),
       ('B', 1, 5),
       ('B', 2, 5),
       ('C', 1, 5),
       ('C', 2, 5),
       ('A', 1, 6),
       ('A', 2, 6),
       ('B', 1, 6),
       ('B', 2, 6),
       ('C', 1, 6),
       ('C', 2, 6);
-- Insert seat

SAVEPOINT seat_savepoint;

-- Insert incident
INSERT INTO "incident" ("type", "description", "date", "solved", "hallId")
VALUES ('Endommagement', 'Quelque chose est cassé dans cette salle.', '2025-05-04 12:15:00', false, 1),
       ('Technique', 'Le film ne démarre pas.', '2025-05-02 14:30:00', true, 2),
       ('Propreté', 'La rangée 1 est sale.', '2025-05-03 10:10:00', true, 4),
       ('Humain', 'Une bagarre a éclaté dans la salle.', '2025-05-04 16:20:00', false, 5);
-- Insert incident

SAVEPOINT incident_savepoint;

-- Commit if successful
COMMIT;