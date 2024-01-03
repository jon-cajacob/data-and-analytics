---
sidebar_position: 1
title: 6.5 | Data security - How access permissions are implemented
slug: /6.5
tags: [tag1]
---

# 6.5 | Data security - How access permissions are implemented

## 6.5.1 | Introduction

When implementing a BI solution, we want to make sure that the data and the dashboards are distributed only to people who should have access to them, given by the specific company policy in place. Power BI allows to control user access in the Power BI Service on various different levels which makes it possible to reflect the different roles users can have.

The following illustration summarizes the different levels of user access controls in the Power BI Service. I have already shown in in chapter VERWEIS to introduce the topic in general.

![02-19](/img/img_book_02-19.png)

According to that, access permissions are controlled on the following levels:

- **Power BI tenant**: A user can be a Power BI administrator which allows her for example to change the tenant settings. Please note, this role is given to a user in the Microsoft 365 admin center
- **Workspace**: For each workspace, we can give roles to users which define the permissions on all content that is inside that workspace. With that, certain permissions on datasets and reports are automatically acquired via the workspace roles
- **Dataset / Report**: If we want to control access permissions for the individual datasets and reports, we can give roles to users on either. These roles define what a user can do with a specific dataset and report
- **Row level security (RLS)**: With the RLS, we control which user can see which scope of data in a given dataset. This security mechanism is configured in a specific dataset. It can be simple, like for example the head of business unit A can only see sales for business unit A. But it can also be more complex and for example reflect a matrix organization (e.g. of a business and regional structure)

## 6.5.2 | Roles and their permissions

**Workspace**

The roles we can give a user on workspace level can be summarized as following: A **Viewer** can see and access all content within the workspace. Both a **Contributor** and **Member** can create or edit content, while the **Member** can also manage access permissions. The **Admin** can do everything, including deleting the workspace.

For more details, I recommend the official Microsoft documentation:

<ins>https://learn.microsoft.com/en-us/power-bi/collaborate-share/service-roles-new-workspaces</ins>

**Datasets and Reports**

For a report, a user can either have **Read** or *Reshare* (self-explaining). On the dataset, roles are more nuanced: **Read** is required to actually view data in an associated report. With **Build**, a user can create a report based on the dataset and also use the Analyze in Excel feature. **Write** allows to overwrite (republish) the dataset.

As for the workspaces, there is a good documentation on dataset permissions available as well:

<ins>https://learn.microsoft.com/en-us/power-bi/connect-data/service-datasets-permissions</ins>

## 6.5.3 | Recommendation for a simple and robust implementation

The multi-level access permission settings in Power BI can be confusing at first as there are possibly endless combinations of which roles can be given to users. I would therefore like to introduce a simple access permission model which I used many times in my projects for customers. The following table summarizes the model:

![03-142](/img/img_book_03-142.png)

Essentially, **end users** do not have a role on the workspace level but permissions are controlled on the individual dataset / report level. This allows for more flexibility in who can access which content inside the workspace. The end user will access reports via the "Shared with me" navigation accordingly. If an end user shall also work with the Analyze in Excel feature, i.e. connecting with Excel directly with a published dataset, that user needs Build permissions on the respective dataset.

A **power user** should be able to create new reports and datasets inside a workspace and also use existing datasets to create new content (see composite models in chapter VERWEIS). If a power user from another team needs to use an existing dataset, it is sufficient if that user has Build permissions on that dataset. Please note, a power user can also be an admin on the workspace if that is feasible and makes things simpler.