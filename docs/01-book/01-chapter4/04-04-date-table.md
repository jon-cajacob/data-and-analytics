---
sidebar_position: 999
title: 4.4 | Date table settings
slug: /4.4
tags: [tag1]
---

# 4.4 | Date table settings

The date dimension table is a crucial component of our data model and there are certain configurations necessary for it.

#### 1. Mark *dimDate* as a date table

Power BI has to know that *dimDate* is our date table. This is necessary for the time intelligence functionalities which we will use later to create Measures with DAX.

To mark *dimDate* as the date table, simply navigate to the *Data view*, select the table *dimDate* in the table navigation and under *Table tools* select *Mark as date table*. In the appearing window, select the Date column and confirm with OK.

![03-67](/img/img_book_03-67.png)

#### 2. Create a date hierarchy

In the *Model view*, use the technique demonstrated in the previous chapter to create a date hierarchy consisting of the fields *Date*, *MonthDescShort*, *QuarterDesc* and *Year*.

![03-68](/img/img_book_03-68.png)

#### 3. Apply custom sorting for the field *MonthDescShort*

Later when creating the visuals and dashboards, we will use the field *MonthDescShort*. By default, Power BI will sort this field alphabetically which is not useful.

To sort this field by the correct order to calendar months, we can apply a custom sorting based on another field in the same table, *MonthNo*.

To do that, navigate to the *Data view* and select the field *MonthDescShort* in *dimDate*. Under *Column tools*, click on *Sort by column* and select *MonthNo*:

![03-69](/img/img_book_03-69.png)

Now we are done with building and configuring the data model. In the next chapter, we will create measures, visuals and dashboards.