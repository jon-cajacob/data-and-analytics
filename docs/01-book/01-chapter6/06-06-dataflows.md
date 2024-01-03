---
sidebar_position: 1
title: 6.6 | Dataflows
slug: /6.6
tags: [tag1]
---

# 6.6 | Dataflows

## 6.6.1 | Overview

One of the most important and valuable components of the Power BI Online Service are dataflows. Essentially, with a dataflow we can use **Power Query directly within the browser** and connect with one or many data sources and prepare the data into the desired output tables. With that, a dataflow stores one or many data tables in the Online Service, ready to be used by subsequent applications which in most cases will be a Power BI dataset.

A dataflow can be **scheduled** to automatically run at certain times and refresh the output tables accordingly.

As mentioned, the output tables of a dataflow can be accessed by Power BI datasets. Furthermore, a dataflow can also access another dataflow, which gives us the possibility to chain several flows if required in more complex setups.

Dataflows can be organized in the same workspace as the respective datasets. Alternatively, they can be separated from the datasets into individual workspaces. The illustration below shows different ways of using dataflows:

![Dataflows](/img/img_book_03-143.png)
<div align="center"><font size= "3">Dataflows (right-click and open in new tab for large version)</font></div>
<br/>

## 6.6.2 | Use-cases for dataflows

The most important use-cases for dataflows are the following:

- **Staging of data tables:** When a data source is slow with responding to queries, it can make sense to use dataflows as an intermediate data storage (i.e. called staging) for large data tables. Typical cases are large transactional tables (e.g. a general ledger from an ERP system). It not only speeds up development work in Power BI Desktop, but also it decreases computational burden on the original data source
- **Re-using data tables in multiple Power BI datasets:** For solutions with multiple datasets, it is often the case that certain data tables are used in several different datasets. Instead of connecting and preparing the same tables in each individual dataset over and over again, it makes sense to centralize these processes in dataflows and then simply connect with the already prepared tables. This more centralized approach also allows for an easier change management
- **Sharing of data tables with power users:** For large scale implementations with multiple data teams, it makes sense to re-use centrally prepared data tables by power users. Data tables can be better standardized this way and chances are higher that analytical results are identical between the teams. Please note, control of who can access a dataflow is only possible via workspace roles as of the time of writing this text (see also limitations below)

## 6.6.3 | How to create, save and run a dataflow



## 6.6.4 | Limitations





