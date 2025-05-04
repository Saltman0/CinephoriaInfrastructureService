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
       ('B', 2, 1),
       ('B', 2, 1),
       ('C', 3, 1),
       ('C', 3, 1),
       ('A', 1, 2),
       ('A', 2, 2),
       ('B', 2, 2),
       ('B', 2, 2),
       ('C', 3, 2),
       ('C', 3, 2),
       ('A', 1, 3),
       ('A', 2, 3),
       ('B', 2, 3),
       ('B', 2, 3),
       ('C', 3, 3),
       ('C', 3, 3),
       ('A', 1, 4),
       ('A', 2, 4),
       ('B', 2, 4),
       ('B', 2, 4),
       ('C', 3, 4),
       ('C', 3, 4),
       ('A', 1, 5),
       ('A', 2, 5),
       ('B', 2, 5),
       ('B', 2, 5),
       ('C', 3, 5),
       ('C', 3, 5),
       ('A', 1, 6),
       ('A', 2, 6),
       ('B', 2, 6),
       ('B', 2, 6),
       ('C', 3, 6),
       ('C', 3, 6);
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

-- Insert movie
INSERT INTO "movie" ("title", "description", "minimumAge", "favorite", "imageURL")
VALUES ('Mon voisin Totoro',
        'Deux petites filles, Mei et Satsuki, viennent s''installer avec leur père dans une grande maison à la campagne afin de se rapprocher de l''hôpital où séjourne leur mère. Elles vont découvrir l''existence de leurs nouveaux voisins, invisible aux yeux des autres humains, des créatures merveilleuses, mais très discrètes : Grand Totoro, Moyen Totoro (Chū-Totoro) et Petit Totoro (Chibi-Totoro). Avec son ventre rebondi, Totoro est un être rare et fascinant, un esprit de la forêt... Il se nourrit de glands et de noix. Il peut voler, se déplacer en « Chat-Bus ». Il dort le jour, mais les nuits de pleine lune, il aime jouer avec des ocarinas magiques...',
        NULL, false, 'pasEncoreLeLien0'),
       ('Avengers : Infinity War',
        'Les Avengers et leurs alliés devront être prêts à tout sacrifier pour neutraliser le redoutable Thanos avant que son attaque éclair ne conduise à la destruction complète de l’univers.',
        12, false, 'pasEncoreLeLien1'),
       ('Dune : deuxième partie',
        'Paul Atreides s’unit à Chani et aux Fremen pour mener la révolte contre ceux qui ont anéanti sa famille. Hanté par de sombres prémonitions, il se trouve confronté au plus grand des dilemmes : choisir entre l’amour de sa vie et le destin de l’univers.',
        14, false, 'pasEncoreLeLien2'),
       ('Interstellar',
        'Le film raconte les aventures d’un groupe d’explorateurs qui utilisent une faille récemment découverte dans l’espace-temps afin de repousser les limites humaines et partir à la conquête des distances astronomiques dans un voyage interstellaire.',
        NULL, true, 'pasEncoreLeLien3'),
       ('La liste de Schindler',
        'Evocation des années de guerre d''Oskar Schindler, fils d''industriel d''origine autrichienne rentré à Cracovie en 1939 avec les troupes allemandes. Il va, tout au long de la guerre, protéger des juifs en les faisant travailler dans sa fabrique et en 1944 sauver huit cents hommes et trois cents femmes du camp d''extermination de Auschwitz-Birkenau.',
        18, false, 'pasEncoreLeLien4'),
       ('Le Bon, la brute et le truand',
        'Pendant la Guerre de Sécession, trois hommes, préférant s''intéresser à leur profit personnel, se lancent à la recherche d''un coffre contenant 200 000 dollars en pièces d''or volés à l''armée sudiste. Tuco sait que le trésor se trouve dans un cimetière, tandis que Joe connaît le nom inscrit sur la pierre tombale qui sert de cache. Chacun a besoin de l''autre. Mais un troisième homme entre dans la course : Setenza, une brute qui n''hésite pas à massacrer femmes et enfants pour parvenir à ses fins.',
        16, false, 'pasEncoreLeLien5'),
       ('Le Parrain',
        'En 1945, à New York, les Corleone sont une des cinq familles de la mafia. Don Vito Corleone, parrain de cette famille, marie sa fille à un bookmaker. Sollozzo, parrain de la famille Tattaglia, propose à Don Vito une association dans le trafic de drogue, mais celui-ci refuse. Sonny, un de ses fils, y est quant à lui favorable. Afin de traiter avec Sonny, Sollozzo tente de faire tuer Don Vito, mais celui-ci en réchappe. Michael, le frère cadet de Sonny, recherche alors les commanditaires de l''attentat et tue Sollozzo et le chef de la police, en représailles. Michael part alors en Sicile, où il épouse Apollonia, mais celle-ci est assassinée à sa place. De retour à New York, Michael épouse Kay Adams et se prépare à devenir le successeur de son père...',
        18, false, 'pasEncoreLeLien6'),
       ('Le Roi Lion',
        'Sur les Hautes terres d''Afrique règne un lion tout-puissant, le roi Mufasa, que tous les hôtes de la jungle respectent et admirent pour sa sagesse et sa générosité. Son jeune fils Simba sait qu''un jour il lui succédera, conformément aux lois universelles du cycle de la vie, mais il est loin de deviner les épreuves et les sacrifices que lui imposera l''exercice du pouvoir. Espiègle, naïf et turbulent, le lionceau passe le plus clair de son temps à jouer avec sa petite copine Nala et à taquiner Zazu, son digne précepteur. Son futur royaume lui apparaît en songe comme un lieu enchanté où il fera bon vivre, s''amuser et donner des ordres. Cependant, l''univers de Simba n''est pas aussi sûr qu''il le croie. Scar, le frère de Mufasa, aspire en effet depuis toujours au trône. Maladivement jaloux de son aîné, il intrigue pour l''éliminer en même temps que son successeur...',
        NULL, false, 'pasEncoreLeLien7'),
       ('Le Seigneur des anneaux : Le retour du Roi',
        'Les armées de Sauron ont attaqué Minas Tirith, la capitale de Gondor. Jamais ce royaume autrefois puissant n''a eu autant besoin de son roi. Mais Aragorn trouvera-t-il en lui la volonté d''accomplir sa destinée ? Tandis que Gandalf s''efforce de soutenir les forces brisées de Gondor, Théoden exhorte les guerriers de Rohan à se joindre au combat...',
        12, false, 'pasEncoreLeLien8'),
       ('Moi, Moche et Méchant 4',
        'Gru, Lucy et les filles, Margo, Edith et Agnès accueillent le petit dernier de la famille, Gru Junior, qui semble n''avoir qu''une passion : faire tourner son père en bourrique. Mais Gru est confronté à un nouvel ennemi Maxime Le Mal qui, avec l''aide de sa petite amie, la fatale Valentina, va obliger toute la famille à fuir.',
        NULL, true, 'pasEncoreLeLien9'),
       ('Spider-man 3',
        'Peter Parker a enfin réussi à concilier son amour pour Mary-Jane et ses devoirs de super-héros. Mais l''horizon s''obscurcit. La brutale mutation de son costume, qui devient noir, décuple ses pouvoirs et transforme également sa personnalité...',
        NULL, true, 'pasEncoreLeLien10'),
       ('Star Wars III : La Revanche des Sith',
        'La Guerre des Clones fait rage. Une franche hostilité oppose désormais le Chancelier Palpatine au Conseil Jedi. Anakin Skywalker, jeune Chevalier Jedi pris entre deux feux, hésite sur la conduite à tenir. Séduit par la promesse d''un pouvoir sans précédent, tenté par le côté obscur de la Force...',
        10, true, 'pasEncoreLeLien11'),
       ('The Dark Knight : Le Chevalier Noir',
        'Dans ce nouveau volet, Batman augmente les mises dans sa guerre contre le crime. Avec l''appui du lieutenant de police Jim Gordon et du procureur de Gotham, Harvey Dent, Batman vise à éradiquer le crime organisé qui pullule dans la ville...',
        10, true, 'pasEncoreLeLien12'),
       ('Vice-versa',
        'Au Quartier Général, le centre de contrôle situé dans la tête de la petite Riley, 11 ans, cinq Émotions sont au travail. À leur tête, Joie, débordante d''optimisme et de bonne humeur, veille à ce que Riley soit heureuse. Peur se charge de la sécurité...',
        NULL, false, 'pasEncoreLeLien13');
-- Insert movie

SAVEPOINT movie_savepoint;

-- Insert showtime
INSERT INTO "showtime" ("startTime", "endTime", "price", "movieId", "hallId")
VALUES
-- 2025-01-10
('2025-01-10 10:00:00', '2025-01-10 12:00:00', 15, 1, 1),
('2025-01-10 14:00:00', '2025-01-10 16:00:00', 15, 2, 2),
('2025-01-10 18:00:00', '2025-01-10 20:00:00', 15, 3, 3),
('2025-01-10 20:30:00', '2025-01-10 22:30:00', 15, 4, 4),

-- 2025-01-11
('2025-01-11 10:00:00', '2025-01-11 12:00:00', 15, 5, 5),
('2025-01-11 14:00:00', '2025-01-11 16:00:00', 15, 6, 6),
('2025-01-11 18:00:00', '2025-01-11 20:00:00', 15, 7, 1),
('2025-01-11 20:30:00', '2025-01-11 22:30:00', 15, 8, 2),

-- 2025-01-12
('2025-01-12 10:00:00', '2025-01-12 12:00:00', 15, 9, 3),
('2025-01-12 14:00:00', '2025-01-12 16:00:00', 15, 10, 4),
('2025-01-12 18:00:00', '2025-01-12 20:00:00', 15, 11, 5),
('2025-01-12 20:30:00', '2025-01-12 22:30:00', 15, 12, 6),

-- 2025-01-13
('2025-01-13 10:00:00', '2025-01-13 12:00:00', 15, 13, 1),
('2025-01-13 14:00:00', '2025-01-13 16:00:00', 15, 14, 2),
('2025-01-13 18:00:00', '2025-01-13 20:00:00', 15, 1, 3),
('2025-01-13 20:30:00', '2025-01-13 22:30:00', 15, 2, 4),

-- 2025-01-14
('2025-01-14 10:00:00', '2025-01-14 12:00:00', 15, 3, 5),
('2025-01-14 14:00:00', '2025-01-14 16:00:00', 15, 4, 6),
('2025-01-14 18:00:00', '2025-01-14 20:00:00', 15, 5, 1),
('2025-01-14 20:30:00', '2025-01-14 22:30:00', 15, 6, 2),

-- 2025-01-15
('2025-01-15 10:00:00', '2025-01-15 12:00:00', 15, 7, 3),
('2025-01-15 14:00:00', '2025-01-15 16:00:00', 15, 8, 4),
('2025-01-15 18:00:00', '2025-01-15 20:00:00', 15, 9, 5),
('2025-01-15 20:30:00', '2025-01-15 22:30:00', 15, 10, 6),

-- 2025-01-16
('2025-01-16 10:00:00', '2025-01-16 12:00:00', 15, 11, 1),
('2025-01-16 14:00:00', '2025-01-16 16:00:00', 15, 12, 2),
('2025-01-16 18:00:00', '2025-01-16 20:00:00', 15, 13, 3),
('2025-01-16 20:30:00', '2025-01-16 22:30:00', 15, 14, 4),

-- 2025-01-17
('2025-01-17 10:00:00', '2025-01-17 12:00:00', 15, 1, 5),
('2025-01-17 14:00:00', '2025-01-17 16:00:00', 15, 2, 6),
('2025-01-17 18:00:00', '2025-01-17 20:00:00', 15, 3, 1),
('2025-01-17 20:30:00', '2025-01-17 22:30:00', 15, 4, 2),

-- 2025-01-18
('2025-01-18 10:00:00', '2025-01-18 12:00:00', 15, 5, 3),
('2025-01-18 14:00:00', '2025-01-18 16:00:00', 15, 6, 4),
('2025-01-18 18:00:00', '2025-01-18 20:00:00', 15, 7, 5),
('2025-01-18 20:30:00', '2025-01-18 22:30:00', 15, 8, 6),

-- 2025-01-17
('2025-01-17 10:00:00', '2025-01-17 12:00:00', 15, 1, 5),
('2025-01-17 14:00:00', '2025-01-17 16:00:00', 15, 2, 6),
('2025-01-17 18:00:00', '2025-01-17 20:00:00', 15, 3, 1),
('2025-01-17 20:30:00', '2025-01-17 22:30:00', 15, 4, 2),

-- 2025-01-18
('2025-01-18 10:00:00', '2025-01-18 12:00:00', 15, 1, 1),
('2025-01-18 14:00:00', '2025-01-18 16:00:00', 15, 2, 2),
('2025-01-18 18:00:00', '2025-01-18 20:00:00', 15, 3, 3),
('2025-01-18 20:30:00', '2025-01-18 22:30:00', 15, 4, 4),

-- 2025-01-19
('2025-01-19 10:00:00', '2025-01-19 12:00:00', 15, 5, 5),
('2025-01-19 14:00:00', '2025-01-19 16:00:00', 15, 6, 6),
('2025-01-19 18:00:00', '2025-01-19 20:00:00', 15, 7, 1),
('2025-01-19 20:30:00', '2025-01-19 22:30:00', 15, 8, 2),

-- 2025-01-20
('2025-01-20 10:00:00', '2025-01-20 12:00:00', 15, 9, 3),
('2025-01-20 14:00:00', '2025-01-20 16:00:00', 15, 10, 4),
('2025-01-20 18:00:00', '2025-01-20 20:00:00', 15, 11, 5),
('2025-01-20 20:30:00', '2025-01-20 22:30:00', 15, 12, 6),

-- 2025-01-21
('2025-01-21 10:00:00', '2025-01-21 12:00:00', 15, 13, 1),
('2025-01-21 14:00:00', '2025-01-21 16:00:00', 15, 14, 2),
('2025-01-21 18:00:00', '2025-01-21 20:00:00', 15, 1, 3),
('2025-01-21 20:30:00', '2025-01-21 22:30:00', 15, 2, 4),

-- 2025-01-22
('2025-01-22 10:00:00', '2025-01-22 12:00:00', 15, 3, 5),
('2025-01-22 14:00:00', '2025-01-22 16:00:00', 15, 4, 6),
('2025-01-22 18:00:00', '2025-01-22 20:00:00', 15, 5, 1),
('2025-01-22 20:30:00', '2025-01-22 22:30:00', 15, 6, 2),

-- 2025-01-23
('2025-01-23 10:00:00', '2025-01-23 12:00:00', 15, 7, 3),
('2025-01-23 14:00:00', '2025-01-23 16:00:00', 15, 8, 4),
('2025-01-23 18:00:00', '2025-01-23 20:00:00', 15, 9, 5),
('2025-01-23 20:30:00', '2025-01-23 22:30:00', 15, 10, 6),

-- 2025-01-24
('2025-01-24 10:00:00', '2025-01-24 12:00:00', 15, 11, 1),
('2025-01-24 14:00:00', '2025-01-24 16:00:00', 15, 12, 2),
('2025-01-24 18:00:00', '2025-01-24 20:00:00', 15, 13, 3),
('2025-01-24 20:30:00', '2025-01-24 22:30:00', 15, 14, 4),

-- 2025-01-25
('2025-01-25 10:00:00', '2025-01-25 12:00:00', 15, 1, 5),
('2025-01-25 14:00:00', '2025-01-25 16:00:00', 15, 2, 6),
('2025-01-25 18:00:00', '2025-01-25 20:00:00', 15, 3, 1),
('2025-01-25 20:30:00', '2025-01-25 22:30:00', 15, 4, 2),

-- 2025-01-26
('2025-01-26 10:00:00', '2025-01-26 12:00:00', 15, 5, 3),
('2025-01-26 14:00:00', '2025-01-26 16:00:00', 15, 6, 4),
('2025-01-26 18:00:00', '2025-01-26 20:00:00', 15, 7, 5),
('2025-01-26 20:30:00', '2025-01-26 22:30:00', 15, 8, 6),

-- 2025-01-27
('2025-01-27 10:00:00', '2025-01-27 12:00:00', 15, 9, 1),
('2025-01-27 14:00:00', '2025-01-27 16:00:00', 15, 10, 2),
('2025-01-27 18:00:00', '2025-01-27 20:00:00', 15, 11, 3),
('2025-01-27 20:30:00', '2025-01-27 22:30:00', 15, 12, 4),

-- 2025-01-28
('2025-01-28 10:00:00', '2025-01-28 12:00:00', 15, 13, 5),
('2025-01-28 14:00:00', '2025-01-28 16:00:00', 15, 14, 6),
('2025-01-28 18:00:00', '2025-01-28 20:00:00', 15, 1, 1),
('2025-01-28 20:30:00', '2025-01-28 22:30:00', 15, 2, 2),

-- 2025-01-29
('2025-01-29 10:00:00', '2025-01-29 12:00:00', 15, 3, 3),
('2025-01-29 14:00:00', '2025-01-29 16:00:00', 15, 4, 4),
('2025-01-29 18:00:00', '2025-01-29 20:00:00', 15, 5, 5),
('2025-01-29 20:30:00', '2025-01-29 22:30:00', 15, 6, 6),

-- 2025-01-30
('2025-01-30 10:00:00', '2025-01-30 12:00:00', 15, 7, 1),
('2025-01-30 14:00:00', '2025-01-30 16:00:00', 15, 8, 2),
('2025-01-30 18:00:00', '2025-01-30 20:00:00', 15, 9, 3),
('2025-01-30 20:30:00', '2025-01-30 22:30:00', 15, 10, 4),

-- 2025-01-31
('2025-01-31 10:00:00', '2025-01-31 12:00:00', 15, 11, 5),
('2025-01-31 14:00:00', '2025-01-31 16:00:00', 15, 12, 6),
('2025-01-31 18:00:00', '2025-01-31 20:00:00', 15, 13, 1),
('2025-01-31 20:30:00', '2025-01-31 22:30:00', 15, 14, 2),

-- 2025-02-01
('2025-02-01 10:00:00', '2025-02-01 12:00:00', 15, 1, 3),
('2025-02-01 14:00:00', '2025-02-01 16:00:00', 15, 2, 4),
('2025-02-01 18:00:00', '2025-02-01 20:00:00', 15, 3, 5),
('2025-02-01 20:30:00', '2025-02-01 22:30:00', 15, 4, 6),

-- 2025-02-02
('2025-02-02 10:00:00', '2025-02-02 12:00:00', 15, 5, 1),
('2025-02-02 14:00:00', '2025-02-02 16:00:00', 15, 6, 2),
('2025-02-02 18:00:00', '2025-02-02 20:00:00', 15, 7, 3),
('2025-02-02 20:30:00', '2025-02-02 22:30:00', 15, 8, 4),

-- 2025-02-03
('2025-02-03 10:00:00', '2025-02-03 12:00:00', 15, 9, 5),
('2025-02-03 14:00:00', '2025-02-03 16:00:00', 15, 10, 6),
('2025-02-03 18:00:00', '2025-02-03 20:00:00', 15, 11, 1),
('2025-02-03 20:30:00', '2025-02-03 22:30:00', 15, 12, 2),

-- 2025-02-04
('2025-02-04 10:00:00', '2025-02-04 12:00:00', 15, 13, 3),
('2025-02-04 14:00:00', '2025-02-04 16:00:00', 15, 14, 4),
('2025-02-04 18:00:00', '2025-02-04 20:00:00', 15, 1, 5),
('2025-02-04 20:30:00', '2025-02-04 22:30:00', 15, 2, 6),

-- 2025-02-05
('2025-02-05 10:00:00', '2025-02-05 12:00:00', 15, 3, 1),
('2025-02-05 14:00:00', '2025-02-05 16:00:00', 15, 4, 2),
('2025-02-05 18:00:00', '2025-02-05 20:00:00', 15, 5, 3),
('2025-02-05 20:30:00', '2025-02-05 22:30:00', 15, 6, 4),

-- 2025-02-06
('2025-02-06 10:00:00', '2025-02-06 12:00:00', 15, 7, 5),
('2025-02-06 14:00:00', '2025-02-06 16:00:00', 15, 8, 6),
('2025-02-06 18:00:00', '2025-02-06 20:00:00', 15, 9, 1),
('2025-02-06 20:30:00', '2025-02-06 22:30:00', 15, 10, 2),

-- 2025-02-07
('2025-02-07 10:00:00', '2025-02-07 12:00:00', 15, 11, 3),
('2025-02-07 14:00:00', '2025-02-07 16:00:00', 15, 12, 4),
('2025-02-07 18:00:00', '2025-02-07 20:00:00', 15, 13, 5),
('2025-02-07 20:30:00', '2025-02-07 22:30:00', 15, 14, 6),

-- 2025-02-08
('2025-02-08 10:00:00', '2025-02-08 12:00:00', 15, 1, 1),
('2025-02-08 14:00:00', '2025-02-08 16:00:00', 15, 2, 2),
('2025-02-08 18:00:00', '2025-02-08 20:00:00', 15, 3, 3),
('2025-02-08 20:30:00', '2025-02-08 22:30:00', 15, 4, 4),

-- 2025-02-09
('2025-02-09 10:00:00', '2025-02-09 12:00:00', 15, 5, 5),
('2025-02-09 14:00:00', '2025-02-09 16:00:00', 15, 6, 6),
('2025-02-09 18:00:00', '2025-02-09 20:00:00', 15, 7, 1),
('2025-02-09 20:30:00', '2025-02-09 22:30:00', 15, 8, 2),

-- 2025-02-10
('2025-02-10 10:00:00', '2025-02-10 12:00:00', 15, 9, 3),
('2025-02-10 14:00:00', '2025-02-10 16:00:00', 15, 10, 4),
('2025-02-10 18:00:00', '2025-02-10 20:00:00', 15, 11, 5),
('2025-02-10 20:30:00', '2025-02-10 22:30:00', 15, 12, 6),

-- 2025-02-11
('2025-02-11 10:00:00', '2025-02-11 12:00:00', 15, 13, 1),
('2025-02-11 14:00:00', '2025-02-11 16:00:00', 15, 14, 2),
('2025-02-11 18:00:00', '2025-02-11 20:00:00', 15, 1, 3),
('2025-02-11 20:30:00', '2025-02-11 22:30:00', 15, 2, 4),

-- 2025-02-12
('2025-02-12 10:00:00', '2025-02-12 12:00:00', 15, 3, 5),
('2025-02-12 14:00:00', '2025-02-12 16:00:00', 15, 4, 6),
('2025-02-12 18:00:00', '2025-02-12 20:00:00', 15, 5, 1),
('2025-02-12 20:30:00', '2025-02-12 22:30:00', 15, 6, 2),

-- 2025-02-13
('2025-02-13 10:00:00', '2025-02-13 12:00:00', 15, 7, 3),
('2025-02-13 14:00:00', '2025-02-13 16:00:00', 15, 8, 4),
('2025-02-13 18:00:00', '2025-02-13 20:00:00', 15, 9, 5),
('2025-02-13 20:30:00', '2025-02-13 22:30:00', 15, 10, 6),

-- 2025-02-14
('2025-02-14 10:00:00', '2025-02-14 12:00:00', 15, 11, 1),
('2025-02-14 14:00:00', '2025-02-14 16:00:00', 15, 12, 2),
('2025-02-14 18:00:00', '2025-02-14 20:00:00', 15, 13, 3),
('2025-02-14 20:30:00', '2025-02-14 22:30:00', 15, 14, 4),

-- 2025-02-15
('2025-02-15 10:00:00', '2025-02-15 12:00:00', 15, 1, 5),
('2025-02-15 14:00:00', '2025-02-15 16:00:00', 15, 2, 6),
('2025-02-15 18:00:00', '2025-02-15 20:00:00', 15, 3, 1),
('2025-02-15 20:30:00', '2025-02-15 22:30:00', 15, 4, 2),

-- 2025-02-16
('2025-02-16 10:00:00', '2025-02-16 12:00:00', 15, 5, 3),
('2025-02-16 14:00:00', '2025-02-16 16:00:00', 15, 6, 4),
('2025-02-16 18:00:00', '2025-02-16 20:00:00', 15, 7, 5),
('2025-02-16 20:30:00', '2025-02-16 22:30:00', 15, 8, 6),

-- 2025-02-17
('2025-02-17 10:00:00', '2025-02-17 12:00:00', 15, 9, 1),
('2025-02-17 14:00:00', '2025-02-17 16:00:00', 15, 10, 2),
('2025-02-17 18:00:00', '2025-02-17 20:00:00', 15, 11, 3),
('2025-02-17 20:30:00', '2025-02-17 22:30:00', 15, 12, 4),

-- 2025-02-18
('2025-02-18 10:00:00', '2025-02-18 12:00:00', 15, 13, 5),
('2025-02-18 14:00:00', '2025-02-18 16:00:00', 15, 14, 6),
('2025-02-18 18:00:00', '2025-02-18 20:00:00', 15, 1, 1),
('2025-02-18 20:30:00', '2025-02-18 22:30:00', 15, 2, 2),

-- 2025-02-19
('2025-02-19 10:00:00', '2025-02-19 12:00:00', 15, 3, 3),
('2025-02-19 14:00:00', '2025-02-19 16:00:00', 15, 4, 4),
('2025-02-19 18:00:00', '2025-02-19 20:00:00', 15, 5, 5),
('2025-02-19 20:30:00', '2025-02-19 22:30:00', 15, 6, 6),

-- 2025-02-20
('2025-02-20 10:00:00', '2025-02-20 12:00:00', 15, 7, 1),
('2025-02-20 14:00:00', '2025-02-20 16:00:00', 15, 8, 2),
('2025-02-20 18:00:00', '2025-02-20 20:00:00', 15, 9, 3),
('2025-02-20 20:30:00', '2025-02-20 22:30:00', 15, 10, 4);
-- Insert showtime

SAVEPOINT showtime_savepoint;

-- Commit if successful
COMMIT;