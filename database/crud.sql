-- phpMyAdmin SQL Dump
-- version 4.9.0.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Sep 04, 2020 at 02:34 PM
-- Server version: 10.4.6-MariaDB
-- PHP Version: 7.3.9

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `ajaxcrud`
--

-- --------------------------------------------------------

--
-- Table structure for table `crud`
--

CREATE TABLE `crud` (
  `id` int(11) NOT NULL,
  `fname` varchar(255) NOT NULL,
  `lname` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `crud`
--

INSERT INTO `crud` (`id`, `fname`, `lname`) VALUES
(3, 'Akash', 'Sharma'),
(4, 'Shivani', 'Sharma'),
(5, 'Aman', 'Agarwal'),
(17, 'Lisa lisa', 'Sharma'),
(18, 'Ashish kr', 'singh'),
(19, 'akash', 'singh'),
(21, 'Mahima', 'singh'),
(25, 'Aman', 'agarwal'),
(42, 'akash2', ''),
(43, 'Navjot', 'Sidhu'),
(44, 'Rajat', 'Sharma'),
(45, 'Rajat', 'Kumar'),
(47, 'laxman', 'negi'),
(118, 'aman', 'good'),
(119, 'fresh', 'king'),
(129, 'sd', 'df'),
(130, 'ds', 'df'),
(131, 'df', 'df'),
(132, 'g', 'g'),
(133, 'am', 'df'),
(139, 'frodo', 'beggins'),
(140, 'Lisa ggh', 'singh rathode'),
(141, 'ds', 'df'),
(142, 'ds', 'df'),
(143, 'aman', 'sharma'),
(144, 'Lisa', 'Sharma'),
(155, 's', 's'),
(156, 'ds', 'd'),
(157, 'fvvvvv', 'fvvvvv'),
(158, 'fvvvvv', 'fvvvvv'),
(159, 'gta', 'v'),
(160, 'dd', 'des'),
(161, 'dcd', 'dcd'),
(191, 'aman', 'rawat'),
(192, 'new', 'record');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `crud`
--
ALTER TABLE `crud`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `crud`
--
ALTER TABLE `crud`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=193;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
