use foodorder;

DROP TABLE IF EXISTS user;
CREATE TABLE user (
  id INT(4) NOT NULL AUTO_INCREMENT,
  name varchar(25) NOT NULL,
  mail varchar(255),
  password varchar(20),
  createdDate DATETIME NOT NULL,
  lastUpdate DATETIME NOT NULL,
  organization_id INT(4) NOT NULL,
  PRIMARY KEY (id)
);

DROP TABLE IF EXISTS organization;
CREATE TABLE organization (
  id INT(4) NOT NULL AUTO_INCREMENT,
  name varchar(25) NOT NULL,
  code varchar(6) NOT NULL,
  createdDate DATETIME NOT NULL,
  PRIMARY KEY (id)
);

DROP TABLE IF EXISTS user_organization;
CREATE TABLE user_organization (
  id INT(4) NOT NULL AUTO_INCREMENT,
  name varchar(25) NOT NULL,
  mail varchar(255),
  password varchar(20),
  createdDate DATETIME NOT NULL,
  lastUpdate DATETIME NOT NULL,
  PRIMARY KEY (id)
);

DROP TABLE IF EXISTS restaurant;
CREATE TABLE restaurant (
  id INT(4) NOT NULL AUTO_INCREMENT,
  name varchar(25) NOT NULL,
  description varchar(255),
  telephone varchar(12),
  lat DECIMAL(10, 8) NOT NULL,
  lng DECIMAL(11, 8) NOT NULL,
  photo_url varchar(255),
  menu_url varchar(255),
  private tinyint default 0,
  createdBy INT(4) NOT NULL,
  createdDate DATETIME NOT NULL,
  lastUpdate DATETIME NOT NULL,
  PRIMARY KEY (id)
);


DROP TABLE IF EXISTS restaurant_group;
CREATE TABLE restaurant_group (
  id INT(5) NOT NULL AUTO_INCREMENT,
  restaurant_id INT(4) NOT NULL,
  organizationId INT(4) NOT NULL,
  date DATETIME NOT NULL,
  price float(5,2),
  request varchar(255),
  groupModified INT(5),
  createdBy INT(4) NOT NULL,
  createdDate DATETIME NOT NULL,
  PRIMARY KEY (id)
);

DROP TABLE IF EXISTS user_order;
CREATE TABLE user_order (
  id INT(5) NOT NULL AUTO_INCREMENT,
  restaurant_id INT(4) NOT NULL,
  user_id INT(4) NOT NULL,
  price float(5,2),
  orderModified INT(5),
  request varchar(255),
  createdDate DATETIME NOT NULL,
  PRIMARY KEY (id)
);
