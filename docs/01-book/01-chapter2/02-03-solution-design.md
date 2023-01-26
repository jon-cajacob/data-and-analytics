---
sidebar_position: 3
title: 2.3 | Building blocks of a business intelligence solution
slug: /2.3-solution-design
tags: [tag1]
---

# 2.3 | Building blocks of a business intelligence solution

## 2.3.1 | Overview

In this chapter, I want to give a broad overview and a description of the building blocks of a business intelligence solution and how they are integrated with each other. 

To make it less theoretical, I will always give an example of how a certain element of the solution is implemented with Power BI. However please note, all these components are relevant for any BI & analytics solution, independent of the specific software used.

The following illustration shall give a concise overview of how a business intelligence solution is typically structured:

![Buildings blocks of a business intelligence solution](/img/img_book_02-5.png)
<div align="center"><font size= "3">Buildings blocks of a business intelligence solution (right-click and open in new tab for large version)</font></div>
<br/>

## 2.3.2 | Project and agile management

Designing and implementing a BI solution is a project and should be managed accordingly. How such a project should then be organized and executed in detail is specific to the given situation and framework of an organization. I will therefore not attempt to generalize it, however, I want to note down a few recommendations and guiding principles from my own practice which I know are strong instruments to increase the likelihood of the project being successful.

Given its importance, I first want to summarize my understanding and give an overview of agile project management. After that, I will list my recommendations on how to apply agile in the world of business intelligence and analytics.

### Agile management

Agile has its roots in software development and it is today the standard method for IT project management. It is also becoming increasingly popular outside the IT realm, for example in finance or marketing management. Agile is so relevant today that it is a full-time profession for some people, with job titles like "Agile Coach" or "Scrum Master". I am not an agile expert, however I believe some of its principles and methods are highly valuable and as such apply them regularly in my practice. 

In my own words, I like to explain agile as a concious effort to understand a project as a journey where learnings along the way are continuously incorporated into the process and the required solution is refined more and more over time. This method is very powerful and makes a lot of sense because in every project's beginning you have very little knowhow of how the final product should actually look like, function and be integrated in the existing organizational framework. Given that, the standard working mode in agile is to develop parts of the overall solution in an **iterative approach with continuous feedback from the customer**. The integrated sum of these iteratively developed small "packages" results then in the overall solution and product.

The following illustration summarizes important elements about agile that I want to mention here:

![Agile project management](/img/img_book_02-6.png)
<div align="center"><font size= "3">Agile project management (right-click and open in new tab for large version)</font></div>
<br/>

Besides the process of continuous delivery, I consider the **effective management of tasks** as crucial. One of the best methods in my experience is to use a simple Kanban board which structures tasks in the categories backlog, in progress and done. Such a board can quickly visualize the flow of work and progress in the current sprint. The backlog is the place to collect and prioritize requirements, ideas and other customer inputs.

The guiding principles noted in the illustration are derived (and summarized) from the agile manifesto. [^1] Clearly, customer satisfaction about project deliveries is the ultimate goal and should never get out of focus. Therefore, frequent customer feedback is important. Further, I want to emphasize simplicity, which is the core principle for designing a robust operational business intelligence solution.

What is more, not only the project deliveries are continuously improved but also the agile project process itself with frequent reviews and retrospectives. And of course, teams, people and their roles are in the center of every project.

### Recommendations for a business intelligence & analytics solution

1. When defining the vision, goals and **requirements** of a solution, always start with the **analytical questions** that shall be answered with the new tool
    1. Based on the analytical question(s), derive required key performance indicators (KPI) (e.g. sales volume) and their dimensionality (e.g. by date, by product, by customer etc.)
    2. Given the KPI definitions, design the data model
    3. Identify required data sources and derive the necessary data preparation process
2. Start the project with a small, **manageable scope** (e.g. one KPI) and add more components over time
3. Build a **solid foundation** of the solution (architecture, data model) before diving into visualization and reporting details
4. Interact with the **customer** regularly, collect feedback and improve the solution accordingly
5. Use a **Kanban board** to manage and visualize tasks and their progress
6. Strive for **simplicity** and technical excellence as the core instruments to achieve operational robustness of the solution going forward
7. Embrace **uncertainty and change** as an essential part of the overall journey
8. Do not get lost in agile project methodology (and bureaucracy): Use what is useful for your team and keep it simple and lean

## 2.3.3 | Data sources

Every business intelligence & analytics project has one or many data sources. A data source can be a source system, like for example an ERP or CRM system. It can also be a database like SQL, or text files (e.g. csv) and spreadsheets, or a web API.

For each project, the types and number of data sources used to extract required raw data is very specific. Therefore, there is not much that can be generalized about it. However, I want to touch upon two topics: data source connectors in Power BI and data architecture.

### Data source connectors in Power BI

Currently, Power BI allows to connect with over 130 different data sources. [^2] These data source connectors are natively build into Power BI and as such regularly updated by Microsoft. Further, Microsoft has a track record of continuously adding more data source connectors over time.

With the following bullet points I want to note down important components and concepts regarding data connectors in Power BI:

- Data sources are connected (queried) with **Power Query**. Extracted data is then transformed, combined and **imported** to the Power BI data model (see next chapter)
- Besides the mechanism of importing data, it is also possible to use the **DirectQuery** method. [^6] With DirectQuery, there is no data imported to the dataset and data is queried each time a user interacts with a report (e.g. filters data).This mode brings quite a few limitations and should be applied conciously. In this book we will focus on the import mode which is far more relevant than DirectQuery
- Power BI can read entire folders containing many files with the same structure which are then combined to a single data table. This can be highly useful in practice to quickly consolidate and aggregate for example budget data stored in many different spreadsheets (in the exact same table structure)
- Power BI can be connected directly with an operational source system (e.g. ERP) as the computational burden of the queries is fairly low and thus will - in general - not have an negative impact on the ERP's performance. Queries are only sent when a dataset is refreshed and data imported accordingly. In my practice of directly connecting dozens of ERP systems (without intermediate layer) I have not encountered a single problem ever
- When connecting with a SQL database, Power BI will attempt to push data transformation steps as much as possible to the data source in order to unburden data processing within Power Query. This mechanism is called **Query Folding** [^3]
- An important consideration is, whether a data source resides in an on-premise network (e.g. of the organization) or in a cloud network. In case of on-premise, the **Power BI Gateway** allows the Power BI Online Service (Microsoft 365 Cloud) to connect with the on-premise data source and refresh data in a given dataset [^4]
- With Power BI **Dataflows**, data sources are connected and data is extracted directly in the Power BI Online Service. [^5] Dataflows can be a useful tool to prepare data tables which are used repeatedly in different datasets in a BI ecosystem

### Data architecture: Data warehouses, data lakes, data lakehouses

Giving an overview of the components of a business intelligence solution would not be complete without a few words about data architecture. Therefore, I want to shortly discuss different variations of archicture which are currently relevant.

The **data wahehouse** (DWH) is an established method of storing structured data in a relational database. With an ETL process (extract, transform and load), data is prepared and loaded to the DWH. Subsequently, different datamarts are build upon the DWH with dimensional star models (we will discuss data models soon) which are then used as the base for BI applications and reporting. A DWH usually requires substantial investments and resources for the implementation, operation and change management.

With the emergence of big data (incl. unstructured data) and machine learning applications, the **data lake** architecture became relevant. In a data lake, both structured and unstructured data is stored and unlike for the DWH, there is usually no or only little effort in keeping the lake tidy. Hence, costs are lower but so is reliability compared to the DWH.

The **data lakehouse** is a new concept which tries to combine the advantages of cheap data storage in a data lake with the reliability of a data warehouse. In essence, a meta data and governance layer (which includes ETL pipelines) provides the required structure to the data stored in the data lake. Data residing in the data lake is accessed by various applications via this structural layer. Currently, it is difficult to tell if this model will succeed in corporate practice given its novelty.

The following illustration summarizes the key aspects of these architecture variations:

![Data architecture](/img/img_book_02-7.png)
<div align="center"><font size= "3">Data architecture variations (right-click and open in new tab for large version)</font></div>
<br/>

### Relevance of a data warehouse today

To conclude this chapter, I want to shortly discuss a question, which I hear often: 

>*Do I need a data warehouse for my business intelligence solution?*

In general, having a data warehouse is certainly advantageous as well structured data is available and most probably very reliable. However, having and operating a DWH will require substantial financial investments and resources. At the same time, many modern BI & analytics tools today are capable of covering the entire data analytics value chain due to their breadth of features. This is certainly the case for Microsoft Power BI. It is therefore only logical for many small and medium sized corporations to not operate a DWH (anymore) and instead use a modern BI tool.

## 2.3.4 | Data preparation

Extracting, transforming and loading data from its source to the destination data model is an **automated multi-step process** and requires a powerful and flexible tool. A solid, automated data preparation process is important as raw data residing in a source system or database is only rarely in the structure required for the BI solution. Further, almost certainly the source data will need to be cleansed and data quality issues need to be addressed. And finally, often data from different sources shall be combined or raw data shall be enhanced with additional information (e.g. a mapping of categories) or calculated custom columns (mathematically or text based with if-then-else logic).

Each time the data in a given dataset is refreshed, the raw data from the source system has to run through the transformation process. It is therefore important to make the preparation process as efficient as possible in order to ensure that the regular data refreshes are fast and reliable. I further want to note, that in a best case scenario, most data processing should be done directly or as close to the source as possible. However, in corporate reality this if often hard to achieve because in such a setup changes are rather slowly implemented and more often than not source system are not capable of data transformation features.

### Common data preparation steps

The following are the most commonly applied data transformation steps:

- **Selection** and **renaming** of columns (removal of columns not needed)
- **Filtering** (simple or by and/or logic)
- **Data type** definition (text values, decimal, integer etc.)
- Creation of calculated **custom columns**. Either containing string values (e.g. by merging text) or numerical values (by mathematical definition)
- **Joins** and **unions** of tables
- Agreggation of data rows via **group by**
- **Pivoting** (make columns from rows) and **unpivoting** (make rows from columns)
- **Replacing** values or errors in a column
- **Data type transformations**, e.g. transforming a date into its end-of-month equivalent

![Common data preparation steps](/img/img_book_02-8.png)
<div align="center"><font size= "3">Common data preparation steps (right-click and open in new tab for large version)</font></div>
<br/>

We will use the majority of these transformations in the upcoming example.

### Data preparation with Power BI: Power Query

Power Query has been introducted in an earlier chapter. It is built into Power BI (and Excel) and allows the definition of data preparation processes which will then result in dimension and fact tables that are loaded to the data model (see next chapter). Power Query is very powerful while at the same time low-code and hence very accessible for non-IT professionals.

### Power BI Dataflow

Dataflow is basically Power Query embedded directly into the Power BI Online Service. A flow is created, configured and run on the Power BI platform with the output being plain data tables (one or several per flow). These data tables can then be connected and used in Power BI Datasets.

Dataflows are highly useful to centrally prepare and manage tables which are used in several different Datasets, thus promoting reusability. This is often the case for master data tables (i.e. dimension tables).

Further, Dataflows can be useful to provide relevant tables to data analysts in the organization who have no access to underlying source systems. An important limitation to keep in mind about Dataflows is that access rights can only be controlled on workspace level.

## 2.3.5 | Data model

The data model is the core of each business intelligence tool. All visualizations, reports and KPIs are based on the data model. It is an abstraction of the reality we aim to explore with data. Dimension and fact tables and their relationships are the basis of the model. Other components like custom calculations or hierarchies are further relevant elements of the model meta data.

The most common data model schema by far is the **star model**. If you look at the illustration below, you will recognize a star-like formation of the dimension and fact tables. A variation of the star model is the **snowflake model** which further splits a dimension table (e.g. the field Category in dimProduct is outsourced to another dimension table, dimCategory which is connected with dimProduct). The focus of this book is the common star model.

Please note, a star schema can have multiple fact tables. In that case, multiple fact tables share the same dimensions (e.g. dimDate) which is highly useful in the BI tool.

![Data model components](/img/img_book_02-9.png)
<div align="center"><font size= "3">Data model components (right-click and open in new tab for large version)</font></div>
<br/>

In the following subchapters, I will introduce the components of a data model.

### Dimension tables

A dimension table essentially contains master data to describe what happened (in the fact data) with attributes. To make the concept more tangible, the following are common examples of dimension tables:

- Customer master data (customer ID, customer name, region, industry etc.)
- Product master data (product ID, product name, product description, subcategory, brand, type etc.)
- Countries and regions (country name, ISO code, continent, regional allocation etc.)
- Sales stores (store ID, store name, store location, store type etc.)
- Financial account structure (account ID, account name, account hierarchy level 1, hierarchy level 2 etc.)
- Cost and profit center structure (cost center ID, cost center name, cost center hierarchy level 1, hierarchy level 2 etc.)
- Employee master data (employee ID, employee name, birthday, cost center ID, entry date etc,)
- Date calendar (dates, month, year, quarter, calendar week etc.)

Essentially, a dimension table contains the **master data** which is relevant to analyze the fact data, i.e. to aggregate, slice and filter the data. Each dimension table has a **key column**, containing an unique identifier (ID) which allows to connect the table with the fact table. The **attributes** are the columns containing information relevant for the analysis, e.g. categorization, short and long names or even entire hierarchies.

Dimension data (master data) changes over time, e.g. the address of a customer or the category of a product. There are multiple methods to address this time dependency, usually with a concept referred to as **Slowly Changing Dimensions** (SCD). I will not go into detail here about SCD. But I want to note, that in my practice of implementing BI solutions, the most commonly applied method of SCD is **Type 1: Overwrite**. With this method, existing rows of master data are simply overwritten with the updated information. In business intelligence, this simple and robust method is commonly used as only rarely someone wants to analyze current data from the perspective of outdated master data (exceptions exist of course).

### Fact tables

A fact table contains the data about what has happened when. Common examples of fact tables are:

- Sales (of product or services)
- Financial accounting bookings
- Inventory movements
- Clicks on a homepage
- Production line data
- Planning data (e.g. financial, production output etc.)
- Customer reviews
- Credit card transactions

Taking the example of sales, the fact table records sales transactions of <ins>products</ins> to <ins>customers</ins> by <ins>date</ins>. As you can see, we need three dimension tables (dimProduct, dimCustomer and dimDate) to analyze the sales transactions in this short example.

The important concept to understand about fact tables is that any dimensional data, i.e. attributes to describe the facts, should be stored outside the fact table in the dimension tables. In essence, a fact table only contains keys (usually IDs) with which it can be referred to a dimension table. In the example from before, factSales only contains the customer ID (and not other customer related information) and links to dimCustomer using this key column.

### Table relationships

To build a data model, we need to connect dimension and fact tables with table relationships. Before we go into detail of how such relationships are defined, let's quickly clear the question: *what is the purpose of a table relationship*?

In the previous chapters, I explained how data is stored in dimension and fact tables and that we need the former to describe the latter. And describing means analyzing, and analyzing means: **filtering, aggregating and slicing** of fact data using dimension data. 

Taking the filtering operation as an example, it means that in the BI tool I want to filter the dimension table, e.g. filtering dimCustomer by the attribute *Industry* in a dropdown selection and only fact data qualifying for this selection should be returned. Now for the BI tool to "know" that dimCustomer and factSales are related and that we want to filter factSales by the attribute *Industry* in dimCustomer, we need to define a relationship between the two tables - otherwise filtering dimCustomer has no effect on factSales. The same goes for aggregation and slicing: If there is no relationship, we cannot use dimCustomer to aggregate or slice factSales.

To discuss how a table relationship is technically defined, let's look at the following example:

![Table relationships](/img/img_book_02-10.png)
<div align="center"><font size= "3">Table relationship example (right-click and open in new tab for large version)</font></div>
<br/>

In the example above, the dimension table dimCustomer is connected with the fact table factSales via the Customer ID column. The **cardinality** of this relationship is 1:n, that means in dimCustomer, each entity (customer) is unique while in factSales a customer can appear n-times. This type of relationship is by far the most common and it is considered best practice to build a data model using only such relationships. There are other types of relationship cardinality like n:m, however they are only relevant in rare cases and should be avoided in star models as they can lead to unexpected results in calculations etc. Hence, I will not discuss them here further.

Tables are connected via key columns, commonly referred to **primary key** (in the dimension table) and **foreign key** (in the fact table).

### Data modelling in Power BI

The data modelling tool in Power BI Desktop is access via the navigation pane on the left window border (see red frame below). Tables are then connected by simply dragging-and-dropping fields between tables. Each relationship has three main properties:

![Data modelling in Power BI](/img/img_book_02-11.png)
<div align="center"><font size= "3">Data modelling in Power BI (right-click and open in new tab for large version)</font></div>
<br/>

- Key fields (primary and foreign) by which the tables are connected
- Relationship cardinality
- Cross filter direction

With cross-filter direction we can control the filtering direction (single or both), illustrated by an arrow icon on the relationship line. It should be noted though, that it is best practice to only use single-filter directions (i.e. the dimension table filters the fact table), as otherwise unexpected results in visualizations etc. can occur.

### Calculations (KPI, Measures)

### Row level security (RLS)

### Other important model meta data

The following are additional properties which are set in the data model:

- Descriptions of tables and fields
- Field formats (e.g. date format, number format with thousand separators and number of decimals etc.)
- Definition date table (for time intelligence functions)
- Definition of key fields
- Visibility of fields
- Custom sorting of fields
- Hierarchies
- Standard aggregation method per field (sum, average, min / max, no aggregation etc.)
- Storage mode per table (import, DirectQuery etc.)
- etc.

## 2.3.6 | Data visualization & reporting

### Visualization types and their application

### Principles of good visualization and reporting design

### Filtering and context


## 2.3.7 | Publishing & sharing

### Platform solution

### Power BI Online Service


## 2.3.8 | User roles and community

### Typical user roles


## 2.3.9 | Governance

[not the focus of this book]


## 2.3.10 | Data quality management


[^1]: [<ins>Manifesto for Agile Software Development</ins>](https://agilemanifesto.org/)
[^2]: See here for the full list of currently supported data sources: [<ins>Supported Data Sources</ins>](https://learn.microsoft.com/en-us/power-bi/connect-data/power-bi-data-sources)
[^3]: [<ins>Power Query Query Folding Documentation</ins>](https://learn.microsoft.com/en-us/power-query/power-query-folding)
[^4]: [<ins>On-Premise Data Gateway Documentation</ins>](https://learn.microsoft.com/en-us/power-bi/connect-data/service-gateway-onprem)
[^5]: [<ins>Power BI Dataflow Documentation</ins>](https://learn.microsoft.com/en-us/power-bi/transform-model/dataflows/dataflows-introduction-self-service)
[^6]: [<ins>DirectQuery Documentation</ins>](https://learn.microsoft.com/en-us/power-bi/connect-data/desktop-directquery-about#directquery-limitations)