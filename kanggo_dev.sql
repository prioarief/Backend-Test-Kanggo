/*
SQLyog Professional v12.5.1 (64 bit)
MySQL - 10.4.21-MariaDB : Database - kanggo_dev
*********************************************************************
*/

/*!40101 SET NAMES utf8 */;

/*!40101 SET SQL_MODE=''*/;

/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
CREATE DATABASE /*!32312 IF NOT EXISTS*/`kanggo_dev` /*!40100 DEFAULT CHARACTER SET utf8mb4 */;

USE `kanggo_dev`;

/*Table structure for table `orders` */

DROP TABLE IF EXISTS `orders`;

CREATE TABLE `orders` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) NOT NULL,
  `product_id` int(11) NOT NULL,
  `amount` int(11) NOT NULL,
  `status` enum('pending','paid') NOT NULL DEFAULT 'pending',
  `createdAt` datetime NOT NULL DEFAULT '2021-12-08 22:43:49',
  `updatedAt` datetime NOT NULL DEFAULT '2021-12-08 22:43:49',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4;

/*Data for the table `orders` */

insert  into `orders`(`id`,`user_id`,`product_id`,`amount`,`status`,`createdAt`,`updatedAt`) values 
(1,1,1,25000,'pending','2021-12-08 22:45:10','2021-12-08 22:45:10'),
(2,1,1,25000,'pending','2021-12-08 22:50:22','2021-12-08 22:50:22'),
(3,1,1,25000,'pending','2021-12-08 22:51:20','2021-12-08 22:51:20'),
(5,1,1,25000,'pending','2021-12-08 22:55:03','2021-12-08 22:55:03');

/*Table structure for table `payments` */

DROP TABLE IF EXISTS `payments`;

CREATE TABLE `payments` (
  `order_id` int(11) NOT NULL,
  `status` varchar(255) NOT NULL,
  `amount` int(11) NOT NULL,
  `createdAt` datetime NOT NULL DEFAULT '2021-12-08 22:43:49',
  `updatedAt` datetime NOT NULL DEFAULT '2021-12-08 22:43:49',
  PRIMARY KEY (`order_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

/*Data for the table `payments` */

/*Table structure for table `products` */

DROP TABLE IF EXISTS `products`;

CREATE TABLE `products` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `price` int(11) NOT NULL,
  `qty` int(11) NOT NULL,
  `createdAt` datetime NOT NULL DEFAULT '2021-12-08 22:43:49',
  `updatedAt` datetime NOT NULL DEFAULT '2021-12-08 22:43:49',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4;

/*Data for the table `products` */

insert  into `products`(`id`,`name`,`price`,`qty`,`createdAt`,`updatedAt`) values 
(1,'Shampoo',5000,95,'2021-12-08 22:44:53','2021-12-08 22:55:03');

/*Table structure for table `sequelizemeta` */

DROP TABLE IF EXISTS `sequelizemeta`;

CREATE TABLE `sequelizemeta` (
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`name`),
  UNIQUE KEY `name` (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

/*Data for the table `sequelizemeta` */

insert  into `sequelizemeta`(`name`) values 
('20211208154422-create-user.js'),
('20211208155107-create-order.js'),
('20211208155349-create-product.js'),
('20211208160406-create-payment.js');

/*Table structure for table `users` */

DROP TABLE IF EXISTS `users`;

CREATE TABLE `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL DEFAULT '2021-12-08 22:43:49',
  `updatedAt` datetime NOT NULL DEFAULT '2021-12-08 22:43:49',
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4;

/*Data for the table `users` */

insert  into `users`(`id`,`name`,`email`,`password`,`createdAt`,`updatedAt`) values 
(1,'John Doe','JohnDoe@gmail.com','$2b$10$RHqWf28fKcWGcB/svb0xJOjCVpfSjMEAShtXR5OmFivd3kCvjcuJW','2021-12-08 22:44:31','2021-12-08 22:44:31');

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
