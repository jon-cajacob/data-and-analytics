---
sidebar_position: 999
title: 2.5 | Overview and files for the example use-case in this book
slug: /2.5
tags: [tag1]
---

# 2.4 | Overview and files for the example use-case in this book

The focus of this book is the step-by-step development of a close-to-practice use-case with a demo dataset consisting of multiple dimension and fact tables.

The use-case is the preparation and visualization of a **sales dataset**. We will work with typical dimensions like customer, product or the date dimension to analyze sales transactions. Further, we will integrate actual (historical sales transactions) with forecasted sales in one data model.

The following provides a glimpse of what we finally want to achieve:

[placeholder screenshot dashboard]

The dataset consists of the following individual tables which we will connect, transform and use for a star schema data model:

- factSales: Sales transactions
- dimCustomer: Customer master data
- dimProduct: Product master data
- helperProductCategories: Small lookup table to be joined with dimProduct
- dimSalesChannel: Sales channel master data
- factForecast: Sales forecast data by product and month

Each of these tables has typical issues which we need to address in the ETL process to make them fit for purpose in the data model. The goal is to touch upon nearly all important transformation operations available in Power Query.

After building the data model, we will create various different Measures using the DAX language. Using the Measures, we can then build visualizations and dashboards.

## 2.4.1 | Demo files

With the following links you can access the file repository to download the demo data as well as the Power BI file containing the solution. I recommend you to follow along the steps first and only then looking at the solution file.

[table with links]

