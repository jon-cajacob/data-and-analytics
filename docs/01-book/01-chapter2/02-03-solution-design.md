---
sidebar_position: 3
title: 2.3 | Building blocks of a business intelligence solution
slug: /2.3-solution-design
tags: [tag1]
---

# 2.3 | Building blocks of a business intelligence solution

## 2.3.1 | Overview

In this chapter, I want to give an overview and a short description of the building blocks of a typical business intelligence solution. Further, I will explain how the different elements are integrated with each other in what I call a data value chain. 

To make it less theoretical, I will always give an example of how a certain element of the solution is implemented with Power BI. However please note, all these elements are relevant for any analytics solution, independent of the specific software used.

The following illustration gives an overview of how a business intelligence solution is structured:

![Buildings blocks of a business intelligence solution](/img/img_book_02-5.png)
<div align="center"><font size= "3">Buildings blocks of a business intelligence solution (right-click and open in new tab for large version)</font></div>
<br/>

## 2.3.2 | Project and agile management

Designing and implementing a BI solution is a project and should be managed accordingly. How such a project should then be organized and executed in detail is specific to the given situation and framework of an organization. I will therefore not attempt to generalize it, however, I want to note down a few recommendations and guiding principles from my own practice which I know are strong instruments to increase the likelihood of the project being successful.

Given its importance, I first want to summarize my understanding and give an overview of agile project management. After that, I will list my recommendations on how to apply agile in the world of business intelligence and analytics.

### Agile management

Agile has its roots in software development and it today the standard method for IT project management and is becoming increasingly popular outside the IT realm, for example in finance or marketing management. Agile is to relevant that it is a full-time profession for some, like "Agile Coach" or "Scrum Master".

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
4. Interact with the **customer** regularly, collect feedback and incorporate it right away
5. Use a **Kanban board** to manage and visualize tasks and their progress
6. Strive for **simplicity** and technical excellence as the core instruments to achieve operational robustness of the solution going forward
7. Embrace **uncertainty and change** as an essential part of the overall journey
8. Do not get lost in agile project methodology (and bureaucracy): Use what is useful for your team and keep it simple and lean

## 2.3.3 | Data sources

Every business intelligence & analytics project has one or many data sources. A data source can be a source system, like for example an ERP or CRM system. It can also be a database like SQL, or text files (e.g. csv) and spreadsheets, or a web API.

For each project, the types and number of data sources used to extract required raw data is very specific. Therefore, there is not much that can be generalized about it. However, I want to toch upon two topics: data source connectors in Power BI and data architecture.

### Data source connectors in Power BI

Currently, Power BI allows to connect with over 130 different data sources. [^2] These data source connectors are natively build into Power BI and as such regularly updated by Microsoft. Further, Microsoft has a track record of continuously adding more data source connectors.

I want to note down the following bullet points which I consider relevant mentioning here:

- Data sources are connected (queried) with **Power Query**. Extracted data is then transformed, combined and **imported** to the Power BI data model (see next chapter)
- Besides the mechanism of importing data, it is also possible to use the **DirectQuery** method. [^6] With DirectQuery, there is no data imported to the dataset and data is queried each time a user interacts with a report (e.g. filters data).This mode brings certain limitations and should be applied conciously
- Power BI can read entire folders containing many files with the same structure which are then combined to a single data table. This can be highly useful in practice to quickly consolidate and aggregate for example budget data stored in many different spreadsheets (in the exact same table structure)
- Power BI can be connected directly with an operational source system (e.g. ERP) as the computational burden of the queries is fairly low and thus will - in general - not have an negative impact on the ERP's performance. Queries are only sent when a dataset is refreshed and data imported accordingly. In my practice of directly connecting dozens of ERP systesm (without intermediate layer) I have not encountered a single problem ever
- When connecting with a SQL database, Power BI will attempt to push data transformation steps as much as possible to the data source in order to unburden data processing within Power Query. This mechanism is called **Query Folding** [^3]
- An important consideration is, whether a data source resides in an on-premise network (e.g. of the organization) or in a cloud network. In case of on-premise, the **Power BI Gateway** allows the Power BI Online Service (Microsoft 365 Cloud) to connect with the on-premise data source and refresh data in a given dataset [^4]
- With Power BI **Dataflows** in data sources are connected and data is extracted directly in the Power BI Online Service. [^5] Dataflows can be a useful tool to prepare data tables which are used repeatedly in different datasets

### Data architecture: Data warehouses, data lakes, data lakehouses

Giving an overview of the components of a business intelligence solution would not be complete without a few words about data architecture. Therefore, I want to shortly discuss different variations of archicture which are currently relevant.

The **DWH** is an established method of storing structured data in a relational database. With an ETL process (extract, transform and load), data is prepared and loaded to the DWH. Subsequently, different datamarts are build upon the DWH with dimensional star models (we will discuss data models soon) which are then used as the base for BI applications and reporting. A DWH usually requires substantial investments and resources for the implementation, operation and change management.

With the emergence of big data (incl. unstructured data) and machine learning applications, the **data lake** architecture became relevant. In a data lake, both structured and unstructured data is stored and unlike for the DWH, there is usually no or only little effort in keeping the lake tidy. Hence, costs are lower but so is reliability compared to the DWH.

The **data lakehouse** is a new concept which tries to combine the advantages of cheap data storage in a data lake with the reliability of a data warehouse. In essence, a meta data and governance layer (which includes ETL pipelines) provides the required structure to the data stored in the data lake. Data residing in the data lake is accessed by various applications via this structural layer. Currently, it is difficult to tell if this model will succeed in corporate practice given its novelty.

The following illustration summarizes the key aspects of these architecture variations:

![Data architecture](/img/img_book_02-7.png)
<div align="center"><font size= "3">Data architecture variations (right-click and open in new tab for large version)</font></div>
<br/>

### Relevance of a data warehouse today

To conclude this chapter, I want to shortly discuss a question, which I hear often: 

>*Do I need a data warehouse for my business intelligence solution?*

On paper, having a data warehouse is certainly advantageous as well structured data is available and most probably very reliable. However, having and operating a DWH will require substantial financial investments and resources. At the same time, many modern BI & analytics tools today are capable of covering the entire data analytics value chain due to their breadth of features. This is certainly the case for Microsoft Power BI. It is therefore only logical for many small and medium sized corporations to not operate a DWH (anymore) and instead use a modern BI tool.

## 2.3.4 | Data preparation

Extracting, transforming and loading data from its source to the destination data model is an **automated multi-step process** and requires a powerful tool. A solid, automated data preparation process is important as raw data residing in a source system or database is only rarely in the structure required for the BI solution. Further, almost certainly the source data will need to be cleansed and data quality issues need to be addressed. And finally, often data from different sources shall be combined or raw data shall be enhanced with additional information (e.g. a mapping of categories) or calculated custom columns (mathematically or text based with if-then-else logic).

### Common data preparation steps

The following are the most commonly applied data transformation steps:

- **Selection** and **renaming** of columns (removal of columns not needed)
- **Filtering** (simple or by and/or logic)
- **Data type** definition (text values, decimal, integer etc.)
- Creation of calculated **custom columns**. Either containing string values (e.g. by merging text) or numerical values (by mathematical definition)
- **Joins** and **unions** of tables
- Agreggation of data rows via **group by**
- **Pivoting** and **unpivoting** of columns
- **Replacing** values or errors in a column
- **Data type transformations**, e.g. transforming a date into its end-of-month equivalent

### Power Query

Power Query has been introducted in an earlier chapter. It is built into Power BI (and Excel) and allows the definition of data preparation processes which will then result in dimension and fact tables that are loaded to the data model (see next chapter).

### Power BI Dataflows



## 2.3.5 | Data model

### Dimension tables

### Fact tables

### Table relationships

### Key performance indicators (Measures)

### Other data model meta data


## 2.3.6 | Data visualization & reporting


## 2.3.7 | Publishing & sharing


## 2.3.8 | User roles and community


## 2.3.9 | Governance

[not the focus of this book]


## 2.3.10 | Data quality management


[^1]: [<ins>Manifesto for Agile Software Development</ins>](https://agilemanifesto.org/)
[^2]: See here for the full list of currently supported data sources: [<ins>Supported Data Sources</ins>](https://learn.microsoft.com/en-us/power-bi/connect-data/power-bi-data-sources)
[^3]: [<ins>Power Query Query Folding Documentation</ins>](https://learn.microsoft.com/en-us/power-query/power-query-folding)
[^4]: [<ins>On-Premise Data Gateway Documentation</ins>](https://learn.microsoft.com/en-us/power-bi/connect-data/service-gateway-onprem)
[^5]: [<ins>Power BI Dataflow Documentation</ins>](https://learn.microsoft.com/en-us/power-bi/transform-model/dataflows/dataflows-introduction-self-service)
[^6]: [<ins>DirectQuery Documentation</ins>](https://learn.microsoft.com/en-us/power-bi/connect-data/desktop-directquery-about#directquery-limitations)