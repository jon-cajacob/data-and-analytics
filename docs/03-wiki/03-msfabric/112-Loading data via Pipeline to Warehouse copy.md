---
sidebar_position: 112
title: Loading data via Pipeline to Warehouse
slug: /wiki/msfabric/dataload3
tags: [Data]
---

# Loading data via Pipeline to Warehouse

#### 1. Create a new Pipeline and use a copy action

#### 2. In the destination settings, define the schema and table where data shall be written to

![screenshot](/img/wiki-msfabric-10.png)

#### 3. Creating tables with SQL

```jsx title="Creating tables with SQL"
/*
1. Drop the dimension_city table if it already exists.
2. Create the dimension_city table.
3. Drop the fact_sale table if it already exists.
4. Create the fact_sale table.
*/

--dimension_city
DROP TABLE IF EXISTS [dbo].[dimension_city];
CREATE TABLE [dbo].[dimension_city]
    (
        [CityKey] [int] NULL,
        [WWICityID] [int] NULL,
        [City] [varchar](8000) NULL,
        [StateProvince] [varchar](8000) NULL,
        [Country] [varchar](8000) NULL,
        [Continent] [varchar](8000) NULL,
        [SalesTerritory] [varchar](8000) NULL,
        [Region] [varchar](8000) NULL,
        [Subregion] [varchar](8000) NULL,
        [Location] [varchar](8000) NULL,
        [LatestRecordedPopulation] [bigint] NULL,
        [ValidFrom] [datetime2](6) NULL,
        [ValidTo] [datetime2](6) NULL,
        [LineageKey] [int] NULL
    );

--fact_sale

DROP TABLE IF EXISTS [dbo].[fact_sale];

CREATE TABLE [dbo].[fact_sale]
(
    [SaleKey] [bigint] NULL,
    [CityKey] [int] NULL,
    [CustomerKey] [int] NULL,
    [BillToCustomerKey] [int] NULL,
    [StockItemKey] [int] NULL,
    [InvoiceDateKey] [datetime2](6) NULL,
    [DeliveryDateKey] [datetime2](6) NULL,
    [SalespersonKey] [int] NULL,
    [WWIInvoiceID] [int] NULL,
    [Description] [varchar](8000) NULL,
    [Package] [varchar](8000) NULL,
    [Quantity] [int] NULL,
    [UnitPrice] [decimal](18, 2) NULL,
    [TaxRate] [decimal](18, 3) NULL,
    [TotalExcludingTax] [decimal](29, 2) NULL,
    [TaxAmount] [decimal](38, 6) NULL,
    [Profit] [decimal](18, 2) NULL,
    [TotalIncludingTax] [decimal](38, 6) NULL,
    [TotalDryItems] [int] NULL,
    [TotalChillerItems] [int] NULL,
    [LineageKey] [int] NULL,
    [Month] [int] NULL,
    [Year] [int] NULL,
    [Quarter] [int] NULL
);
```
#### 4. Copying data into newly created tables

```jsx title="Copying data into newly created tables"
--Copy data from the public Azure storage account to the dbo.dimension_city table.
COPY INTO [dbo].[dimension_city]
FROM 'https://azuresynapsestorage.blob.core.windows.net/sampledata/WideWorldImportersDW/tables/dimension_city.parquet'
WITH (FILE_TYPE = 'PARQUET');

--Copy data from the public Azure storage account to the dbo.fact_sale table.
COPY INTO [dbo].[fact_sale]
FROM 'https://azuresynapsestorage.blob.core.windows.net/sampledata/WideWorldImportersDW/tables/fact_sale.parquet'
WITH (FILE_TYPE = 'PARQUET');
```

## Other useful SQL code snippets

#### Cloning tables into another schema

```jsx title="Cloning tables into another schema"
CREATE SCHEMA dbo1;

--Create a clone of the dbo.dimension_city table in the dbo1 schema.    
CREATE TABLE [dbo1].[dimension_city1] AS CLONE OF [dbo].[dimension_city];

--Create a clone of the dbo.fact_sale table in the dbo1 schema.    
CREATE TABLE [dbo1].[fact_sale1] AS CLONE OF [dbo].[fact_sale];
```

#### Transforming data using a stored procedure

First we create a stored procedure:

```jsx title="Creating the stored procedure"
--Drop the stored procedure if it already exists.
DROP PROCEDURE IF EXISTS [dbo].[populate_aggregate_sale_by_city]
GO

--Create the populate_aggregate_sale_by_city stored procedure.
CREATE PROCEDURE [dbo].[populate_aggregate_sale_by_city]
AS
BEGIN
    --If the aggregate table already exists, drop it. Then create the table.
    DROP TABLE IF EXISTS [dbo].[aggregate_sale_by_date_city];
    CREATE TABLE [dbo].[aggregate_sale_by_date_city]
        (
            [Date] [DATETIME2](6),
            [City] [VARCHAR](8000),
            [StateProvince] [VARCHAR](8000),
            [SalesTerritory] [VARCHAR](8000),
            [SumOfTotalExcludingTax] [DECIMAL](38,2),
            [SumOfTaxAmount] [DECIMAL](38,6),
            [SumOfTotalIncludingTax] [DECIMAL](38,6),
            [SumOfProfit] [DECIMAL](38,2)
        );
--Reload the aggregated dataset to the table.
INSERT INTO [dbo].[aggregate_sale_by_date_city]
SELECT
    FS.[InvoiceDateKey] AS [Date], 
    DC.[City], 
    DC.[StateProvince], 
    DC.[SalesTerritory], 
    SUM(FS.[TotalExcludingTax]) AS [SumOfTotalExcludingTax], 
    SUM(FS.[TaxAmount]) AS [SumOfTaxAmount], 
    SUM(FS.[TotalIncludingTax]) AS [SumOfTotalIncludingTax], 
    SUM(FS.[Profit]) AS [SumOfProfit]
FROM [dbo].[fact_sale] AS FS
INNER JOIN [dbo].[dimension_city] AS DC
    ON FS.[CityKey] = DC.[CityKey]
GROUP BY
    FS.[InvoiceDateKey],
    DC.[City], 
    DC.[StateProvince], 
    DC.[SalesTerritory]
ORDER BY 
    FS.[InvoiceDateKey], 
    DC.[StateProvince], 
    DC.[City];
END
```
Then we execute it:

```jsx title="Executing the stored procedure"
--Execute the stored procedure to create the aggregate table.
EXEC [dbo].[populate_aggregate_sale_by_city];
```

## Using the visual query editor in a Warehouse

We can use the Power Query functionalities to query and transform data:

![screenshot](/img/wiki-msfabric-11.png)

## Using Shortcuts to link to tables from another OneLake entity (Warehouse, Lakehouse etc.)

![screenshot](/img/wiki-msfabric-12.png)

## Linking a Lakehouse into a Warehouse to execute cross-warehouse queries

![screenshot](/img/wiki-msfabric-13.png)