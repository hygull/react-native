-- MySQL dump 10.13  Distrib 5.7.18, for macos10.12 (x86_64)
--
-- Host: localhost    Database: practice_db
-- ------------------------------------------------------
-- Server version	5.7.18

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `posts`
--

DROP TABLE IF EXISTS `posts`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `posts` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `title` text NOT NULL,
  `description` text NOT NULL,
  `posted_by` bigint(20) DEFAULT NULL,
  `created` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `posted_by` (`posted_by`),
  CONSTRAINT `posts_ibfk_1` FOREIGN KEY (`posted_by`) REFERENCES `users` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `posts`
--

LOCK TABLES `posts` WRITE;
/*!40000 ALTER TABLE `posts` DISABLE KEYS */;
INSERT INTO `posts` VALUES (1,'Getting started with MySQL','Excellent Database system',1,'2017-05-25 18:30:00'),(3,'GIT','Version Control System',3,'2017-05-21 18:30:00'),(4,'Quora','Q&A website',4,'2017-05-21 18:30:00'),(5,'C/C++ - Pointer','Pointers are variable that can hold address of another variable of same type',1,'2017-05-27 09:44:35'),(6,'Erica','A beautiful talking Robot that has been created by Hiroshi Isiguro',1,'2017-05-27 10:54:38'),(7,'Android','An OS for mobile phones',2,'2017-05-27 10:56:42'),(8,'Color Picker','We can create a nice Color picker using HTML, CSS & JS',5,'2017-05-27 10:58:29'),(9,'Enjoy Daily','We should enjoy daily by reading books, watching movie etc.',5,'2017-05-27 10:59:54'),(10,'Angular 2','Angular 2 is very nice. We can create dynamic sites using TypeScript, HTML, CSS.',3,'2017-05-27 11:01:30'),(11,'Ajax','Updating webpage without reloading(using API calls)',4,'2017-05-27 11:02:31'),(12,'.NET','Dot Net is very excellent as we can create fully featured web apps.',4,'2017-05-27 11:03:53');
/*!40000 ALTER TABLE `posts` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `users` (
  `id` bigint(20) NOT NULL,
  `fname` varchar(50) NOT NULL,
  `lname` varchar(50) NOT NULL,
  `uname` varchar(20) NOT NULL,
  `email` text NOT NULL,
  `contact` bigint(12) NOT NULL,
  `profile_pic` text NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'Rishikesh','Agrawani','hygull','rishikesh0014051992@gmail.com',917353787704,'https://cdn4.iconfinder.com/data/icons/rcons-user/32/user_group_users_accounts_contacts-512.png'),(2,'Sandeep','E','sandeep','sandeepeswar8@gmail.com',919739040038,'https://cdn4.iconfinder.com/data/icons/eldorado-user/40/user-512.png'),(3,'Darshan','Sidar','darshan','sidardarshan@gmail.com',917996917565,'https://cdn4.iconfinder.com/data/icons/rcons-user/32/child_boy-512.png'),(4,'Surendra','Prajapat','surendra','surendrakgadwal@gmail.com',918385894407,'https://cdn4.iconfinder.com/data/icons/rcons-user/32/account_male-512.png'),(5,'Mukesh','Jakhar','mukesh','mjakhar.kjakhar@gmail.com',919772254140,'https://cdn2.iconfinder.com/data/icons/rcons-user/32/male-circle-512.png');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2017-05-27 16:41:20
