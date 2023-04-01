---
sidebar_position: 1
title: 6.1 | Power BI Online platform - An overview
slug: /6.1
tags: [tag1]
---

# 6.1 | Power BI Online platform - An overview

The Power BI Online Service is the cloud platform where we publish datasets and reports to be shared with colleagues in the organization. The platform is part of the Microsoft 365 (MS365) cloud and it can either be directly accessed via *powerbi.com* or via *office.com* (as an app).

Hosting and sharing datasets and reports is surely the main purpose of the platform. However, there are also other helpful features and tools like for example dataflows. In chapter VERWEIS, I gave an overview of the different components of the platform:

![Power BI Online Service overview](/img/img_book_02-17.png)
<div align="center"><font size= "3">Power BI Online Service overview (right-click and open in new tab for large version)</font></div>
<br/>

All content on the platform is organized in **workspaces** which act like folders that contains different files like datasets, reports, dataflows, datamarts etc. For each workspace, access permissions can be configured individually with different roles.

Publishing, sharing, consuming and editing content on the Power BI Online Service requires the user to have a **Power BI Pro license**. [^1] In chapter VERWEIS, we will look at some of the features available as part of the Power BI Premium license.

Who has access to which content on the platform is controlled via different levels of **access permissions** on (1) tenant level, (2) workspace level and (3) individual content level (e.g. dataset or report).

## 6.1.2 | Publishing a dataset

In order to explore the platform better, let's publish our demo dataset to a workspace. Make sure you are logged with your MS365 credentials in Power BI Desktop, then click the button *Publish* under the *Home* ribbon. 

In the appearing window, you are asked where you want to publish the dataset. If you do not have a workspace created yet, simply use the *My Workspace* option.

![03-96](/img/img_book_03-96.png)

Please note the following:

- The name of the published dataset and report will be equal to the filename of the Power BI Desktop file (.pbix) as of the time of publishing
- If you are publishing a dataset to a workpsace where a dataset with the exact same name already exists, Power BI will ask you if you want to overwrite the existing dataset. This is the standard way of publishing a new version of a dataset and its reports

## 6.1.3 | Navigating the Power BI Online Service

The following screenshot highlights the most relevant navigational elements of the Power BI Service and in particular of a single workspace:

![03-97](/img/img_book_03-97.png)

**Legend**
1. Main navigation pane of the Power BI Service including navigating the workspaces
2. Content inside the workspace; Here the just uploaded dataset and associated report
3. Timestamp when the dataset has been refreshed the last time
4. Workspace settings and access permissions
5. Creating a new report, dataflow etc. inside the workspace
6. Creating a new workspace app
7. Accessing the Power BI Service settings and helpful links

## 6.1.4 | Creating and configuring workspaces

To create a new workspace, click on *Workspaces* in the main navigation pane and the use the button *+ New Workspace*:

![03-98](/img/img_book_03-98.png)

The most important settings for a workspace are the **workspace name** and the **license mode** which is either Pro or Premium (per user or capacity). All settings can be changed later.

Regarding the workspace naming I recommend to use descriptive names without abbreviations or code words as users might browse workspaces later and it is as such easier for them to identify content. The same goes for dataset and report namings.

## 6.1.5 | Dataset and report settings

Among the most important things we configure in the Power BI Service pertains the dataset (and report) settings. We can access them via the three dots when hovering over a dataset:

![03-99](/img/img_book_03-99.png)

The most relevant settings are:

- *Delete*: Deleting the dataset and associated reports
- *Security*: Managing row level security groups (see chapter VERWEIS)
- *Settings*: In particular the automated data refresh settings (see below)
- *Download this file*: Downloading the pbix
- *Manage permissions*: Sharing the dataset with colleagues in the organization
- *View lineage*: See the data lineage and dependencies (i.e. what sources does the dataset use)

The most important settings for a dataset pertain the configuration of the automated (scheduled) data refresh and if applicable the parameter settings:

![03-100](/img/img_book_03-100.png)

Note, in order for the automated data refresh to be available for a given dataset, the following requirements have to be met:

- If one or many data sources are hosted on an **on-premise network**, a **Power BI Gateway** has to be installed and kept running. The gateway acts as an agent that allows the data transfer between the on-premise network and the Microsoft 365 cloud platform (Azure)
- For data sources that are hosted on a **public cloud network**, the appropriate data source credentials have to be configured on the dataset. For example, an Excel spreadsheet that is saved on a Sharepoint part of the MS365 cloud

We will walk through the configuration of the automated data refresh in the next chapter (see VERWEIS).

## 6.1.6 | Sharing a report with another colleague (manage permissions)



## 6.1.7 | Power BI tenant settings

[^1] See here for a comparison of licenses: https://powerbi.microsoft.com/en-us/pricing/





