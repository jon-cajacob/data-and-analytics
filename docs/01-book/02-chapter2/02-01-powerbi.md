---
sidebar_position: 3
title: 2.1 | Power BI from Microsoft
slug: /2.1-power-bi
tags: [tag1]
---

# 2.1 | Power BI from Microsoft

## 2.1.1 | Overview

Power BI from Microsoft is worldwide leading on the market for BI & Analytics platforms.[^1] The software allows the loading, transformation, modelling, visualization as well as the analysis of data from a large selection of different kinds of data sources. When creating an analytics solution with Power BI, a dataset is created based on which various reports, containing data visualizations, are developed and are finally shared with other people within an organization.

It is important to note that Power BI is a **low-code tool**. That means almost all functions (e.g. data transformation step or formatting a visual) are operated with buttons on the software user interface. This makes the tool very accessible for non-programmers like for example finance professionals who have a good understanding of how to work with data (e.g. also with Excel). However, it is still possible to work with code if wanted or required for very complex operations. The exception is the creation of Measures (see step 4 below) which requires the use of the DAX language.

![Power BI Overview](/img/img_book_02-1.png)
<div align="center"><font size= "2">Overview of the Power BI elements and workflow</font></div>

## 2.1.2 The Power BI workflow

The workflow of creating a BI & analytics tool based on **Power BI Desktop** can be generalized as follows:

1. Connect to one or several **data sources** and extract the required data. Currently, over 130 different kinds of data sources can be connected. These can be Excel spreadsheets, text files, SQL databases, APIs, entire file folders, ODBC, Power BI dataflows, Python scripts etc. [^2]

2. Using **Power Query**, which is a data transformation tool built within Power BI (and Excel), raw data is cleansed, prepared and modelled to the desired table structure required for the dimension and fact tables of the final data model. Power Query is explained in more detail in the next chapter

3. When the dimension and fact tables are prepared, they are connected with each other to an integrated **data model** in the modeling tool of Power BI

4. In the report builder custom calculations, so called **Measures**, are created based on the functional language DAX [^3]

5. Further in the report builder, **data visualizations** are created and placed on the report page. Power BI offers a wide selection of different visualization types each with their specific options for formatting etc. What is more, filters can be placed on the report page, giving the end-user the possibility to filter the report as required

6. Finally, the dataset (containing the reports) is published to the **Power BI Online Service** in the Microsoft 365 cloud. For this, a Power BI Pro license is required for the person uploading the dataset as well as for the people consuming the reports. In Power BI Online, various different user roles can be defined and allocated to people. <br/>
Finally, datasets can be configured to refresh data based on a time schedule (e.g. overnight)

Many things that are possible in Power BI Desktop can now also be done directly in the Power BI Online Service. Data can be loaded and transformed with **Dataflows**. Datasets can be created with **Datamarts**. And visualizations and reports can be created or adjusted directly in the Online Service.

## 2.1.3 Overview of the Power BI Desktop user interface



[^1]: VERWEIS Gartner
[^2]: See here for the full list of currently supported data sources: [<ins>Supported Data Sources</ins>](https://learn.microsoft.com/en-us/power-bi/connect-data/power-bi-data-sources)
[^3]: Data Analysis Expressions; See here for the respective documentation of functions available: [<ins>DAX Reference</ins>](https://learn.microsoft.com/en-us/dax/dax-function-reference)