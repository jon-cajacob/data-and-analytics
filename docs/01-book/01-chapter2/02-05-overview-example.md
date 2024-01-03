---
sidebar_position: 999
title: 2.5 | Sales demo use-case used in this book (download data)
slug: /2.5
tags: [Sales Use-Case, Download Files]
---

# 2.5 | Sales demo use-case used in this book (download data)

The focus of this book is the step-by-step development of a close-to-practice use-case with a demo dataset consisting of multiple dimension and fact tables.

The use-case is the preparation and visualization of a **sales dataset**. We will work with typical dimensions like customer, product or the date dimension to analyze sales transactions. Further, we will integrate actual (historical sales transactions) with forecasted sales in one data model.

The dataset consists of the following individual tables which we will connect, transform and use for a star schema data model:

- factSales: Sales transactions
- dimCustomer: Customer master data
- dimProduct: Product master data
- helperProductCategories: Small lookup table to be joined with dimProduct
- dimSalesChannel: Sales channel master data
- factForecast: Sales forecast data by product and month

Each of these tables has typical issues which we need to address in the data preparation (ETL) process in **chapter 3** to make them fit for purpose in the data model. The goal is to touch upon nearly all important transformation operations available in Power Query.

In **chapter 4** we will build the data model, i.e. connect the dimension and fact tables with table relationships and perform some configurations on the model meta data. Continuiung in **chapter 5**, we will create visualizations, work with filters and use DAX to create measures. In **chapter 6**, we will explore the Power BI Service in the MS365 cloud and discuss how to publish and share a dashboard within an organization.

## 2.5.1 | Downloading the sales data

Use the following link to access the file repository to download the sales data in Excel:

[<ins>File repository on GitHub</ins>](https://github.com/jon-cajacob/bi-with-power-bi)

Then navigate to *1_Download data for the demo use-case* and then to *BI-with-PowerBI Demo Data.xlsx*. Then click on *Download*:

![03-140](/img/img_book_03-140.png)

## 2.5.2 | Downloading the Power BI solution file

You can also download the Power BI solution file in the same repository via *2_Download Power BI solution file*.

Please make sure you have a current version of Power BI Desktop installed (see below).

## 2.5.3 | Installing Power BI Desktop

To install Power BI Desktop you have two possibilities:

#### 1. Installation via the Microsoft Store (recommended)

In the Microsoft Store, search for "power bi" and then select and install Power BI Desktop:

![03-141](/img/img_book_03-141.png)

I recommend this way of the installation as Power BI will be automatically updated in the future without you having to do something.

#### 2. Manual installation

Alternatively, you can download Power BI Desktop here: [<ins>Power BI Desktop download page</ins>](https://powerbi.microsoft.com/en-us/downloads/)

