/****************************************/
/************    TOOLS    ***************/
/****************************************/

SHOW DATABASES;

SHOW TABLES;

DESCRIBE tablename;



/****************************************/
/******     NEPTUNESCHEMA    ************/
/****************************************/

DROP SCHEMA neptuneschema;

CREATE SCHEMA neptuneschema;


/****************************************/
/******   ORDERLINE TABLE    ************/
/****************************************/
-- DROP Table
DROP TABLE IF EXISTS neptuneschema.orderline;

-- CREATE TABLE orderline
CREATE TABLE neptuneschema.orderline(orderid INT NULL, productid INT NULL, quantity INTEGER NOT NULL, unitsellingprice DECIMAL(5,2) NOT NULL, CONSTRAINT PRIMARY KEY (orderid, productid), CONSTRAINT FOREIGN KEY (productid) REFERENCES neptuneschema.products (productid));

-- Manually INSERT Table Data, one INSERT for each orderline
-- INSERT INTO neptuneschema.orderline VALUES (1, 8, 3, 45.9); 
-- OR
-- INSERT Table Data from CSV file
COPY neptuneschema.orderline 
FROM 'orderline.csv' DELIMITER ',' HEADER CSV;

-- DEVELOPMENT SQL for orderline Table - Comment out for production
-- SELECT * FROM neptuneschema.orderline ORDER BY ShopOrderID;


/****************************************/
/******    PRODUCTS TABLE    ************/
/****************************************/


DROP TABLE IF EXISTS neptuneschema.products;

CREATE TABLE neptuneschema.products ( productid INT ZEROFILL NOT NULL AUTO_INCREMENT, categoryid INT NOT NULL, sizeid INT NOT NULL, imageurl VARCHAR(50) NULL, name VARCHAR(45) NOT NULL, description VARCHAR(75) NULL, price DECIMAL(5,2) NOT NULL, showextras BOOLEAN NOT NULL, PRIMARY KEY (productid));



LOAD DATA INFILE 'bkup/products_bkup.csv' INTO TABLE neptuneschema.products FIELDS TERMINATED BY ',' LINES TERMINATED BY '\r\n';



/****************************************/
/*****    CATEGORIES TABLE    ***********/
/****************************************/

DROP TABLE neptuneschema.categories;

CREATE TABLE neptuneschema.categories (
  categoryid INT ZEROFILL NOT NULL AUTO_INCREMENT,
  name VARCHAR(45) NOT NULL,
  PRIMARY KEY (categoryid),
  UNIQUE INDEX categoryid_UNIQUE (categoryid ASC),
  UNIQUE INDEX name_UNIQUE (name ASC));

LOAD DATA INFILE 'bkup/categories_bkup.csv' 
INTO TABLE neptuneschema.categories 
FIELDS TERMINATED BY ',' 
LINES TERMINATED BY '\r\n';




/****************************************/
/*********    SIZES TABLE    ************/
/****************************************/

DROP TABLE neptuneschema.sizes;

CREATE TABLE neptuneschema.sizes (  sizeid INT ZEROFILL NOT NULL AUTO_INCREMENT,  size VARCHAR(45) NOT NULL,  PRIMARY KEY (sizeid),  UNIQUE INDEX sizeid_UNIQUE (sizeid ASC),  UNIQUE INDEX size_UNIQUE (size ASC));

LOAD DATA INFILE 'bkup/sizes_bkup.csv' 
INTO TABLE neptuneschema.sizes 
FIELDS TERMINATED BY ',' 
LINES TERMINATED BY '\r\n';



