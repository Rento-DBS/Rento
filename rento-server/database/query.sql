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
--     Price [NVARCHAR](50) NOT NULL,
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
-- -- Create the table in the specified schema
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
