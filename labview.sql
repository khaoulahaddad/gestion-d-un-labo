-- phpMyAdmin SQL Dump
-- version 4.8.4
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1:3306
-- Généré le :  jeu. 28 mars 2019 à 14:01
-- Version du serveur :  5.7.24
-- Version de PHP :  7.2.14

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données :  `labview`
--

-- --------------------------------------------------------

--
-- Structure de la table `admin`
--

DROP TABLE IF EXISTS `admin`;
CREATE TABLE IF NOT EXISTS `admin` (
  `username` varchar(20) NOT NULL,
  `password` varchar(20) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `admin`
--

INSERT INTO `admin` (`username`, `password`) VALUES
('admin', '123456789');

-- --------------------------------------------------------

--
-- Structure de la table `docteur`
--

DROP TABLE IF EXISTS `docteur`;
CREATE TABLE IF NOT EXISTS `docteur` (
  `code` int(15) NOT NULL,
  `Id` varchar(20) NOT NULL,
  `nom` varchar(20) NOT NULL,
  `prenom` varchar(50) NOT NULL,
  `genre` varchar(1) NOT NULL,
  `password` varchar(20) NOT NULL,
  PRIMARY KEY (`code`,`Id`) USING BTREE
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `docteur`
--

INSERT INTO `docteur` (`code`, `Id`, `nom`, `prenom`, `genre`, `password`) VALUES
(11, '12345', 'khaoula', 'haddad', 'F', '123456789'),
(98995, '123456', 'baha', 'ayadi', 'M', 'insat'),
(144489, '11111', 'ahmed', 'moslah', 'M', '1111111');

-- --------------------------------------------------------

--
-- Structure de la table `historique`
--

DROP TABLE IF EXISTS `historique`;
CREATE TABLE IF NOT EXISTS `historique` (
  `num` int(11) NOT NULL AUTO_INCREMENT,
  `nom` varchar(20) NOT NULL,
  `prenom` varchar(50) NOT NULL,
  `date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`num`)
) ENGINE=MyISAM AUTO_INCREMENT=15 DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `historique`
--

INSERT INTO `historique` (`num`, `nom`, `prenom`, `date`) VALUES
(1, 'Kula', 'Haddad', '1991-11-30 23:00:00'),
(2, 'Kummmla', 'Haddad', '1991-11-30 23:00:00'),
(3, 'Kummmla', 'Haddad', '2019-03-26 23:15:08'),
(4, 'mmmla', 'Haddad', '2019-03-26 23:17:03'),
(5, 'mmmla', 'Haddad', '2019-03-26 23:18:03'),
(6, 'khaoula', 'Haddad', '2019-03-27 20:23:30'),
(7, 'khaoula', 'Haddad', '2019-03-27 17:26:12'),
(8, 'khaoula', 'Haddad', '2019-03-27 20:51:36'),
(9, 'khaoula', 'Haddad', '2019-03-27 20:59:28'),
(10, 'khaoula', 'Haddad', '2019-03-27 21:11:50'),
(11, 'khaoula', 'Haddad', '2019-03-27 21:13:03'),
(12, 'khaoula', 'Haddad', '2019-03-27 21:21:52'),
(13, 'khaoula', 'Haddad', '2019-03-27 21:23:20'),
(14, 'ahmed', 'moslah', '2019-03-28 09:32:12');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
