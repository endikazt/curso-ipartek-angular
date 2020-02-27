-- --------------------------------------------------------
-- Host:                         192.168.0.50
-- Versión del servidor:         5.7.29-log - MySQL Community Server (GPL)
-- SO del servidor:              Win32
-- HeidiSQL Versión:             10.3.0.5771
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;


-- Volcando estructura de base de datos para pokedex_endika
CREATE DATABASE IF NOT EXISTS `pokedex_endika` /*!40100 DEFAULT CHARACTER SET utf8 */;
USE `pokedex_endika`;

-- Volcando estructura para tabla pokedex_endika.habilidades
CREATE TABLE IF NOT EXISTS `habilidades` (
  `id_habilidad` int(11) NOT NULL AUTO_INCREMENT,
  `nombre_habilidad` varchar(50) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id_habilidad`),
  UNIQUE KEY `nombre_habilidad` (`nombre_habilidad`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=latin1;

-- Volcando datos para la tabla pokedex_endika.habilidades: ~7 rows (aproximadamente)
DELETE FROM `habilidades`;
/*!40000 ALTER TABLE `habilidades` DISABLE KEYS */;
INSERT INTO `habilidades` (`id_habilidad`, `nombre_habilidad`) VALUES
	(7, 'Ascua'),
	(5, 'Electricidad Estatica'),
	(2, 'Foco Interno '),
	(6, 'Hedor'),
	(1, 'Impasible'),
	(3, 'Justiciero'),
	(4, 'Pararrayos');
/*!40000 ALTER TABLE `habilidades` ENABLE KEYS */;

-- Volcando estructura para tabla pokedex_endika.pokemons
CREATE TABLE IF NOT EXISTS `pokemons` (
  `id_pokemon` int(11) NOT NULL AUTO_INCREMENT,
  `pokemon` varchar(50) NOT NULL DEFAULT '',
  `imagen` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id_pokemon`),
  UNIQUE KEY `pokemon` (`pokemon`)
) ENGINE=InnoDB AUTO_INCREMENT=115 DEFAULT CHARSET=latin1;

-- Volcando datos para la tabla pokedex_endika.pokemons: ~10 rows (aproximadamente)
DELETE FROM `pokemons`;
/*!40000 ALTER TABLE `pokemons` DISABLE KEYS */;
INSERT INTO `pokemons` (`id_pokemon`, `pokemon`, `imagen`) VALUES
	(1, 'Lucario', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/448.png'),
	(2, 'Pikachu ', 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png'),
	(3, 'Charmander', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png'),
	(4, 'Bulbasaur', 'https://www.alfabetajuega.com/wp-content/uploads/2019/11/Bulbasaur.jpg'),
	(5, 'Chorizord', 'https://pbs.twimg.com/media/Co5J7laW8AAJvTy.jpg'),
	(7, 'Mew', 'https://pm1.narvii.com/7046/42308c8380cae1f23d1e1c875edf2c2c648dc9d8r1-592-603v2_hq.jpg'),
	(68, 'Venusaur', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png'),
	(100, 'Ditto', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png'),
	(114, 'Kirito', 'https://66.media.tumblr.com/b62613e7730b82750e29d28cf4195173/tumblr_o8n8cbBrOA1vxtap1o1_540.jpg');
/*!40000 ALTER TABLE `pokemons` ENABLE KEYS */;

-- Volcando estructura para tabla pokedex_endika.po_ha
CREATE TABLE IF NOT EXISTS `po_ha` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `id_pokemon` int(11) NOT NULL,
  `id_habilidad` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `FK__habilidades` (`id_habilidad`),
  KEY `FK__pokemons` (`id_pokemon`),
  CONSTRAINT `FK__habilidades` FOREIGN KEY (`id_habilidad`) REFERENCES `habilidades` (`id_habilidad`),
  CONSTRAINT `FK__pokemons` FOREIGN KEY (`id_pokemon`) REFERENCES `pokemons` (`id_pokemon`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=46 DEFAULT CHARSET=latin1;

-- Volcando datos para la tabla pokedex_endika.po_ha: ~18 rows (aproximadamente)
DELETE FROM `po_ha`;
/*!40000 ALTER TABLE `po_ha` DISABLE KEYS */;
INSERT INTO `po_ha` (`id`, `id_pokemon`, `id_habilidad`) VALUES
	(1, 1, 1),
	(2, 1, 2),
	(4, 2, 4),
	(6, 3, 7),
	(7, 3, 1),
	(8, 3, 3),
	(9, 4, 6),
	(10, 4, 1),
	(11, 68, 1),
	(12, 68, 3),
	(17, 2, 6),
	(18, 2, 5),
	(19, 100, 3),
	(42, 1, 3),
	(43, 114, 1),
	(44, 114, 3),
	(45, 114, 6);
/*!40000 ALTER TABLE `po_ha` ENABLE KEYS */;

-- Volcando estructura para tabla pokedex_endika.usuarios
CREATE TABLE IF NOT EXISTS `usuarios` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(50) NOT NULL,
  `password` varchar(50) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `nombre` (`nombre`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;

-- Volcando datos para la tabla pokedex_endika.usuarios: ~0 rows (aproximadamente)
DELETE FROM `usuarios`;
/*!40000 ALTER TABLE `usuarios` DISABLE KEYS */;
INSERT INTO `usuarios` (`id`, `nombre`, `password`) VALUES
	(1, 'endika', '123456');
/*!40000 ALTER TABLE `usuarios` ENABLE KEYS */;

-- Volcando estructura para procedimiento pokedex_endika.pa_habilidades_getall
DELIMITER //
CREATE PROCEDURE `pa_habilidades_getall`()
BEGIN

SELECT id_habilidad, nombre_habilidad FROM habilidades ORDER BY id_habilidad ASC;

END//
DELIMITER ;

-- Volcando estructura para procedimiento pokedex_endika.pa_pokemons_create
DELIMITER //
CREATE PROCEDURE `pa_pokemons_create`(
	IN `p_nombre` VARCHAR(150),
	IN `p_imagen` VARCHAR(255),
	OUT `p_id` INT
)
BEGIN

	-- Crear nuevo registro
	
	INSERT INTO pokemons (pokemon, imagen) VALUES (p_nombre, p_imagen);
	
	-- Obtener el ID generado
	
	SET p_id = LAST_INSERT_ID();

END//
DELIMITER ;

-- Volcando estructura para procedimiento pokedex_endika.pa_pokemons_delete
DELIMITER //
CREATE PROCEDURE `pa_pokemons_delete`(
	IN `p_id` INT
)
BEGIN

DELETE FROM pokemons WHERE id_pokemon = p_id;

END//
DELIMITER ;

-- Volcando estructura para procedimiento pokedex_endika.pa_pokemons_getallwithhabilidades
DELIMITER //
CREATE PROCEDURE `pa_pokemons_getallwithhabilidades`()
BEGIN

SELECT p.id_pokemon, pokemon, imagen, h.id_habilidad, nombre_habilidad 
FROM pokemons p LEFT JOIN po_ha ph ON p.id_pokemon = ph.id_pokemon
LEFT JOIN habilidades h ON ph.id_habilidad = h.id_habilidad
ORDER BY p.id_pokemon ASC LIMIT 100;

END//
DELIMITER ;

-- Volcando estructura para procedimiento pokedex_endika.pa_pokemons_getbyid
DELIMITER //
CREATE PROCEDURE `pa_pokemons_getbyid`(
	IN `p_id` INT
)
BEGIN

SELECT p.id_pokemon, pokemon, imagen, h.id_habilidad, nombre_habilidad 
FROM pokemons p LEFT JOIN po_ha ph ON p.id_pokemon = ph.id_pokemon
LEFT JOIN habilidades h ON ph.id_habilidad = h.id_habilidad
WHERE p.id_pokemon = p_id;

END//
DELIMITER ;

-- Volcando estructura para procedimiento pokedex_endika.pa_pokemons_getbysearchparam
DELIMITER //
CREATE PROCEDURE `pa_pokemons_getbysearchparam`(
	IN `pSearhParam` VARCHAR(100)
)
BEGIN

SELECT p.id_pokemon, pokemon, imagen, h.id_habilidad, nombre_habilidad 
FROM pokemons p,  habilidades h, po_ha ph
WHERE
	p.id_pokemon = ph.id_pokemon AND
	h.id_habilidad = ph.id_habilidad AND
	pokemon LIKE CONCAT("%",pSearhParam,"%")
ORDER BY id_pokemon ASC;

END//
DELIMITER ;

-- Volcando estructura para procedimiento pokedex_endika.pa_pokemons_update
DELIMITER //
CREATE PROCEDURE `pa_pokemons_update`(
	IN `p_nombre` VARCHAR(150),
	IN `p_imagen` VARCHAR(255),
	IN `p_id` INT
)
BEGIN

	UPDATE pokemons SET pokemon= p_nombre, imagen= p_imagen WHERE id_pokemon = p_id;

END//
DELIMITER ;

-- Volcando estructura para procedimiento pokedex_endika.pa_pokemon_habilidad_insert
DELIMITER //
CREATE PROCEDURE `pa_pokemon_habilidad_insert`(
	IN `p_id_habilidad` INT,
	IN `p_id_pokemon` INT
)
BEGIN

INSERT INTO po_ha (id_pokemon,id_habilidad) VALUES (p_id_pokemon, p_id_habilidad);

END//
DELIMITER ;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
