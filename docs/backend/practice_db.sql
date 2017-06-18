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
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `posts`
--

LOCK TABLES `posts` WRITE;
/*!40000 ALTER TABLE `posts` DISABLE KEYS */;
INSERT INTO `posts` VALUES (1,'Getting started with MySQL','Excellent Database system',1,'2017-05-25 18:30:00'),(3,'GIT','Version Control System',3,'2017-05-21 18:30:00'),(4,'Quora','Q&A website',4,'2017-05-21 18:30:00'),(5,'C/C++ - Pointer','Pointers are variable that can hold address of another variable of same type',1,'2017-05-27 09:44:35'),(6,'Erica','A beautiful talking Robot that has been created by Hiroshi Isiguro',1,'2017-05-27 10:54:38'),(7,'Android','An OS for mobile phones',2,'2017-05-27 10:56:42'),(8,'Color Picker','We can create a nice Color picker using HTML, CSS & JS',5,'2017-05-27 10:58:29'),(9,'Enjoy Daily','We should enjoy daily by reading books, watching movie etc.',5,'2017-05-27 10:59:54'),(10,'Angular 2','Angular 2 is very nice. We can create dynamic sites using TypeScript, HTML, CSS.',3,'2017-05-27 11:01:30'),(11,'Ajax','Updating webpage without reloading(using API calls)',4,'2017-05-27 11:02:31'),(12,'.NET','Dot Net is very excellent as we can create fully featured web apps.',4,'2017-05-27 11:03:53'),(13,'map() method','map() method is very useful for operating on list of data',3,'2017-05-27 11:16:50'),(14,'TypeScript','TypeScript is very nice.A typed superset of JavaScript',3,'2017-05-27 11:27:54'),(15,'Java8','A great object oriented programming language. Most popular mow a days.',5,'2017-05-27 11:28:49'),(16,'Java8 - String','Strings are sequence of characters. In java, it is an object that denotes sequence of characters.',4,'2017-05-27 11:30:54');
/*!40000 ALTER TABLE `posts` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `products` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `title` text NOT NULL,
  `image` text NOT NULL,
  `price` float NOT NULL,
  `stock_status` tinyint(1) NOT NULL,
  `target_url` text NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (1,'Nutty Gritties Pumpkin Seeds(120 g Pack of 1)','http://i.huffpost.com/gadgets/slideshows/366038/slide_366038_4163042_free.jpg',321,1,'https://www.flipkart.com/nutty-gritties-pumpkin-seeds/p/itmesrcareugjsvj?pid=EDSE9XHRGZEKNNV6&affid=xaneemgmai'),(2,'Muscletech Platinum Iso-Zero Whey Protein  (680 g, Unflavored)','https://rukminim1.flixcart.com/image/832/832/protein-supplement/e/h/v/platinum-iso-zero-unflavored-muscletech-680-original-imaeatuxmewgjfbk.jpeg',4235,1,'https://www.flipkart.com/muscletech-platinum-iso-zero-whey-protein/p/itmeavz3rggzuzxz?pid=PSLEAVZ3XF3QAEHV&affid=xaneemgmai'),(3,'Chhattisgari Pumpkin Seeds(130g Pack of 1)','http://i.huffpost.com/gadgets/slideshows/366038/slide_366038_4163114_free.jpg',555,1,'https://www.flipkart.com/nutty-gritties-pumpkin-seeds/p/itmesrcareugjsvj?pid=EDSE9XHRGZEKNNV6&affid=xaneemgmai'),(4,'Samsung Galaxy J3 Pro (Gold, 16 GB)  (2 GB RAM)','https://rukminim1.flixcart.com/image/832/832/j2ur3ww0-1/mobile/r/p/v/samsung-galaxy-j3-sm-j320fzdgins-original-imaeu4a9mctqur2s.jpeg',7990,0,'https://www.flipkart.com/samsung-galaxy-j3-pro-gold-16-gb/p/itmeu35jfryetgew?pid=MOBEU35JAZKVWRPV&srno=b_1_1&otracker=clp_banner_1_4.bannerX3.BANNER_mobiles_870f91e7-bdde-4d26-9b08-137d53a543a4_DesktopSite_wp3&lid=LSTMOBEU35JAZKVWRPVUXDI0L'),(5,'Samsung Galaxy J3 Pro (Black, 16 GB)  (2 GB RAM)','https://rukminim1.flixcart.com/image/832/832/j2ur3ww0-1/mobile/h/w/k/samsung-galaxy-j3-sm-j320fzdgins-original-imaeu4a9gpq9qjrm.jpeg',7990,1,'https://www.flipkart.com/samsung-galaxy-j3-pro-black-16-gb/p/itmeu8gy94ghhnxq?pid=MOBEU35JUQMQQHWK&srno=b_1_3&otracker=clp_banner_1_4.bannerX3.BANNER_mobiles_870f91e7-bdde-4d26-9b08-137d53a543a4_DesktopSite_wp3&lid=LSTMOBEU35JUQMQQHWK1HGEPZ'),(6,'Amir Enterprises SS-45 Seed  (20 Per Packet)','https://rukminim1.flixcart.com/image/832/832/plant-seed/v/b/e/amir-enterprises-20-ss-45-original-imae7sfrrdnccrdt.jpeg',79,0,'https://www.flipkart.com/amir-enterprises-ss-45-seed/p/itmeafdbc4m77gng?pid=PAEEAFDBKDNVMVBE&srno=s_1_3&otracker=search&lid=LSTPAEEAFDBKDNVMVBEYUSZKC&qH=b3188adab3f07e66'),(7,'Omaxe Brinjal Hybrid Makrikotta MK 24 50seeds*4pkts Seed  (1 per packet)','https://rukminim1.flixcart.com/image/832/832/plant-seed/x/3/u/omaxe-1-brinjal-hybrid-makrikotta-mk-24-50seeds-4pkts-original-imaefburzt7hxvhe.jpeg',250.5,1,'https://www.flipkart.com/omaxe-brinjal-hybrid-makrikotta-mk-24-50seeds-4pkts-seed/p/itmefbz3zqewbbgg?pid=PAEEFBZ3S9KVZX3U&srno=s_1_17&otracker=search&lid=LSTPAEEFBZ3S9KVZX3U45G9TJ&qH=9a394f2ed261cf83'),(8,'Chilli Z111 Smartwatch  (Black Strap Regular)','https://rukminim1.flixcart.com/image/832/832/smartwatch/5/f/j/sw104b-chilli-original-imaejtfvn3pfzhrd.jpeg',1697.4,0,'https://www.flipkart.com/chilli-z111-smartwatch/p/itmekzfzagegua3m?pid=SMWEKZFZM9CHZTWM&srno=s_1_26&otracker=search&lid=LSTSMWEKZFZM9CHZTWMTDNVGV&qH=ce64d4f0d6f71ff1'),(9,'Red Chilli 15.6 inch Laptop Backpack  (Blue, Black)','https://rukminim1.flixcart.com/image/832/832/laptop-bag/d/c/h/red-chilli-refueller-backpack-backpack020-laptop-backpack-red-original-imaerzemkj6ybqby.jpeg',699,1,'https://www.flipkart.com/red-chilli-15-6-inch-laptop-backpack/p/itmesf3xgghk3cgq?pid=LTBESF3X47YNHDCH&srno=s_1_46&otracker=search&lid=LSTLTBESF3X47YNHDCHMAADUJ&qH=ce64d4f0d6f71ff1'),(10,'Farm Seeds Hybrid Lady Finger Seed  (70 per packet)','https://rukminim1.flixcart.com/image/832/832/plant-seed/z/m/b/farm-seeds-70-hybrid-lady-finger-2-packet-seeds-original-imaefec5yvhgcmay.jpeg',109,1,'https://www.flipkart.com/farm-seeds-hybrid-lady-finger-seed/p/itmefegwff5sbfts?pid=PAEEFEGWXQMDDQJP&srno=s_1_6&otracker=search&lid=LSTPAEEFEGWXQMDDQJPHJ1H9F&qH=c8ff2f58e1b44f22'),(11,'The Rise of Sivagami : Bahubali : Before The Beginning  (English, Paperback, Anand Neelakantan)','https://rukminim1.flixcart.com/image/832/832/book/4/4/6/the-rise-of-sivagami-original-imaesazzthcgmmfh.jpeg',150,0,'https://www.flipkart.com/rise-sivagami-bahubali-before-beginning/p/itmeryjfuy2gdsdx?pid=9789386224446&srno=s_1_2&otracker=search&lid=LSTBOK97893862244469J2GCG&qH=7d8949bcbf85067f');
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
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

-- Dump completed on 2017-06-03  2:19:00
