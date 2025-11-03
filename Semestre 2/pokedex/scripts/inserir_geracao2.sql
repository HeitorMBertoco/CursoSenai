USE POKEDEX;

LOCK TABLES `pokemon` WRITE;
/*!40000 ALTER TABLE `pokemon` DISABLE KEYS */;

INSERT INTO `pokemon` (`NUMERO`, `NOME`, `DESCRICAO`, `TIPO_1`, `TIPO_2`, `ARQ_IMAGEM`) VALUES
(152, 'Chikorita', 'A sweet aroma gently wafts from the leaf on its head. It is docile and loves to soak up sun.', 1, NULL, 'pokemon_152.png'),
(153, 'Bayleef', 'A spicy aroma emanates from around its neck. The aroma acts as a stimulant to restore health.', 1, NULL, 'pokemon_153.png'),
(154, 'Meganium', 'The fragrance of its flower soothes and calms emotions.', 1, NULL, 'pokemon_154.png'),
(155, 'Cyndaquil', 'It has a timid nature. If it is startled, the flames on its back burn more vigorously.', 3, NULL, 'pokemon_155.png'),
(156, 'Quilava', 'Be careful if it turns its back during battle. It means that it will attack with the fire on its back.', 3, NULL, 'pokemon_156.png'),
(157, 'Typhlosion', 'It can hide behind a shimmering heat haze that it creates using its intense flames.', 3, NULL, 'pokemon_157.png'),
(158, 'Totodile', 'It has the habit of biting anything with its developed jaws. Even its trainer needs to be careful.', 5, NULL, 'pokemon_158.png'),
(159, 'Croconaw', 'Once it bites down, it won’t let go until it loses its fangs. New fangs quickly grow into place.', 5, NULL, 'pokemon_159.png'),
(160, 'Feraligatr', 'It usually moves slowly, but it goes at blinding speed when it attacks and bites prey.', 5, NULL, 'pokemon_160.png');

/*!40000 ALTER TABLE `pokemon` ENABLE KEYS */;
UNLOCK TABLES;


