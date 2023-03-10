---
sidebar_position: 2
title: 2.2 | Power Query
slug: /2.2-power-query
tags: [tag1]
---

# 2.2 | Power Query

Power Query is a data transformation tool built into Power BI and Microsoft Excel. With Power Query, we can connect with various different data sources, extract required data and transform it into tables (dimensions and facts) which can be used to build the data model. This is necessary and important because data in its raw form stored in data sources is rarely in the shape required for the business intelligence solution.

Power Query is considered a very powerful tool not just because of its breadth of functionality, but also because it is **low-code** like Power BI and most features are accessible via buttons, dropdowns, guided settings windows and input fields on the user interface. When a data transformation step is applied to the data table, code is generated in the background. It is always possible to directly work with and adjust this code if required, hence giving the user maximum flexibility. Further, for each table I can always easily follow the transformation steps and see intermediate results (see bullet no. 4 below).

![Power Query Workflow](/img/img_book_02-4.png)
<div align="center"><font size= "3">Power Query workflow</font></div>
<br/>

In the following chapters, we will go through many of the most important data transformation operations available in Power Query. For now, as for Power BI Desktop, I want to give an overview of the user interface based on the following screenshot.

## 2.2.1 | Overview of the Power Query user interface

The following screenshot shows an overview of the Power Query interface. Please note, all important elements are covered later when building the model based on the demo data.

![Power Query User Interface](/img/img_book_02-3.png)
<div align="center"><font size= "3">Overview of the most important elements on the Power Query user interface (right-click and open in new tab for large version)</font></div>
<br/>

**Description**
1. Changes to the data transformation process in Power Query have to be applied to the data model in order for them to take effect
2. Connect with a new data source
3. Navigation between the different queries (i.e. tables which can be intermediate tables in the transformation process or final tables being loaded to the data model)
4. Data transformation steps of the currently selected query (from top to bottom)
5. Formula bar showing the functional code of the currently selected transformation step
6. Table headers which is the place to apply filters (as in Microsoft Excel), rename headers or apply various transformations via right-click
7. Selection and removal of columns
8. Promote the first row of a table to be the headers
9. Join (merge) and union (append) multiple queries