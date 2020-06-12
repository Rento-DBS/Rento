-- -- Create a new table called 'Car' in schema 'dbo'
-- -- Drop the table if it already exists
-- IF OBJECT_ID('dbo.Car', 'U') IS NOT NULL
-- DROP TABLE dbo.Car
-- GO
-- -- Create the table in the specified schema
-- CREATE TABLE dbo.Car
-- (
--     CarId INT NOT NULL PRIMARY KEY, -- primary key column
--     Availability [NVARCHAR](50) NOT NULL,
--     Price [INT] NOT NULL,
--     ModelName [NVARCHAR](50) NOT NULL,
--     RegNo [NVARCHAR](50) NOT NULL
--     -- specify more columns here
-- );
-- GO


-- *****************************************************


-- -- Create a new table called 'CarType' in schema 'dbo'
-- -- Drop the table if it already exists
-- IF OBJECT_ID('dbo.CarType', 'U') IS NOT NULL
-- DROP TABLE dbo.CarType
-- GO
-- Create the table in the specified schema
-- CREATE TABLE dbo.CarType
-- (
--     CarId INT NOT NULL PRIMARY KEY, -- primary key column
--     Type [NVARCHAR](50) NOT NULL,
--     Seats [INT] NOT NULL,
--     ChargePerKm [INT] NOT NULL,
--     FreeDistance [INT] NOT NULL,
--     IsFuel [BIT] NOT NULL,
--     IsAutomatic [BIT] NOT NULL,
--     FOREIGN KEY (CarId) REFERENCES Car(CarId)
--     -- specify more columns here
-- );
-- GO

-- -- Add a new column 'CarImage' to table 'Car' in schema 'dbo'
-- ALTER TABLE dbo.Car
--     ADD CarImage /*new_column_name*/ image /*new_column_datatype*/
-- GO

-- Insert into table 'Car'
-- INSERT INTO Car
-- VALUES
--     ( -- first row: values for the columns in the list above
--         1, 'Manipal', 2000, 'Creta', 'KA02AP3245'
-- ),
--     ( -- first row: values for the columns in the list above
--         2, 'Udupi', 1800, 'Swift', 'KA02AP3256'
-- ),

--     ( -- first row: values for the columns in the list above
--         3, 'Mumbai', 2400, 'Innova', 'KA02AP3435'
-- ),

--     ( -- first row: values for the columns in the list above
--         4, 'Mangalore', 2100, 'Alto', 'KA02AP3264'
-- ),

--     ( -- first row: values for the columns in the list above
--         5, 'Hyderabad', 1500, 'Maruti 800', 'KA02AP3145'
-- )
-- -- add more rows here
-- GO

--insert into Car values (6, 'mangalore', 3000, 'bentley', 'KA19v2091'); 
--insert into Car values (132, 'mangalore', 3000, 'bentley', 'KA19v2091'); 

--drop TABLE CarType;
--DROP TABLE sysdiagrams;
--DROP TABLE Car;
--create table LoginInfo(
--emailId varchar(50),
--password varchar(20), 
--primary key(emailId));

--create table Customer(
--  DL varchar(30),
--firstName varchar(50),
--lastName varchar(50),
--phoneNo varchar(20),
--emailId varchar(50),
--primary key(DL),
--foreign key(emailId) references LoginInfo(emailId));

--create table Location(
--  locationId varchar(50),
--locationName varchar(50),
--state varchar(50),
-- city varchar(50),
--zip varchar(50), 
--primary key(locationId));

--create table CarType(
--  typeName varchar(50),
-- gear varchar(20),
--seats int,
--lateFeePerHr varchar(20),
--extraFuelChargePerLitre varchar(50),
--costPerHr varchar(50),
--freeDist varchar(50),
--primary key(typeName));

--create table Car(
--  registrationNumber varchar(50),
-- availability tinyint,
-- fuelType varchar(50),
--locationId varchar(50),
-- typeName varchar(50),
--primary key(registrationNumber),
-- foreign key(locationId) references Location(locationId),
--foreign key(typeName) references CarType(typeName));

--create table Booking(
--    bookingId varchar(50),
---   DL varchar(30),
--   registrationNumber varchar(50),
--  pickUpLocation varchar(50),
--  dropOffLocation varchar(50),
--  pickUpDateTime varchar(50) NOT NULL,
--dropOffDateTime varchar(50) NOT NULL,
-- bookingAmount varchar(20),
-- primary key(bookingId),
--foreign key(DL) references Customer(DL),
--foreign key(registrationNumber) references Car(registrationNumber),
--foreign key(pickUpLocation) references Location(locationId), 
--foreign key(dropOffLocation) references Location(locationId));

--create table CardDetails(
--  cardNumber varchar(50),
-- DL varchar(50),
-- cardType varchar(50),
--expiry date NOT NULL,
--cvv varchar(20) NOT NULL,
--primary key(cardNumber), 
--    foreign key(DL) references Customer(DL));

--create table OfferDetails(
--   offerId varchar(50),
--  code varchar(50),
-- discountPercent int,
--primary key(offerId));

--create table Payment(
--   paymentId varchar(50),
--   bookingId varchar(50),
--  finalAmount float,
-- offerId varchar(50),
--cardNumber varchar(50),
-- primary key(paymentId), 
-- foreign key(bookingId) references Booking(bookingId),
--foreign key(offerId) references OfferDetails(offerId), 
--foreign key(cardNumber) references CardDetails(cardNumber));

--create table AdditionalDriverDetails(
--   additionalDL varchar(50),
--  bookingId varchar(50),
--  firstName varchar(50),
---  lastName varchar(50), 
--  primary key(additionalDL),
--  foreign key(bookingId) references Booking(bookingId));

--create table Return(
--   bookingCompletionId varchar(50),
----   bookingId varchar(50),
--  extraDistanceCharge float,
--  extraFuelCharge float,
--  lateFee float,
-- totalFineAmount float,
--  primary key(bookingCompletionId),
-- foreign key(bookingId) references Booking(bookingId));
-- Insert rows into table 'login'
INSERT INTO LoginInfo
  ( -- columns to insert data into
  [emailId], [password]
  )
VALUES
  ( -- first row: values for the columns in the list above
    'vivekbhat935@gmail.com', 'xP3@rcYKm!7u'
),
  ( -- second row: values for the columns in the list above
    'rupam123@gmail.com', '43iipchkmv'
)
-- add more rows here
GO
