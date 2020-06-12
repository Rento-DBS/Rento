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

-- insert into Car values (6, 'mangalore', 3000, 'bentley', 'KA19v2091'); 
-- insert into Car values (132, 'mangalore', 3000, 'bentley', 'KA19v2091'); 

