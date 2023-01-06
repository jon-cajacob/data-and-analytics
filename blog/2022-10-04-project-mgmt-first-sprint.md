---
slug: 01-03-first-sprint-bi-project
title: 01.03 | Getting Started - How to Plan and Execute the First Sprint in Your BI & Analytics Project
authors: jon
tags: [Project Management, Agile]
---

/// The first sprint in a BI & analytics project is foundational for both the analytics solution as well as how the project is organized going forward. Structuring and managing a BI project in sprints is not mandatory, but can help to organize work in an effective way. In this article I summarize based on my experience how a first sprint could look like in order to have the best possible start in your BI & analytics journey.

<!--truncate-->
![Bild](/img/img_01.03-1.png)


---


<!-- <mark style={{backgroundColor: 'orange'}}>Text</mark> -->

### Introduction
It is decided: You want to embark on a journey to develop, implement and apply a business intelligence solution in your organization. But where and how to start exactly? In the beginning of any BI-project it is important to have a clearly defined **scope and focus** for the first project deliverables. Further, the first sprint will likely lay some of the foundation of many elements of the full solution (e.g. ETL process, data model definition etc.). Finally, in some organizations it can be critical to “proof” the value of the project with the first sprint, e.g. with a proof-of-concept (PoC).

Therefore, the first sprint is important. In this article, I want to give you the tools and ideas to have the best possible start in your project.

### What is a Sprint?
In agile **project management**, a project is broken down into sprints on the timeline. One sprint can last 2, 3 or 4 weeks etc.. Each sprint is **planned** and then executed in order to achieve the **sprint goal** which is to deliver a working element of a bigger solution. After the sprint, the progress and outcome is **reviewed** together with the customer.

The sprint goal is important and tells us which tasks have to be prioritized and executed in the sprint. Generally, it is recommended to derive the sprint goal from the **user’s view**, using the following template:

> As a **[user]**, I want to **[goal]**, so that **[reason]**.

*Example:*

> *As a Controller, I want to analyze Total Third Party Revenue by Product Category, Customer Branche and Region, and Date, so that I can understand and identify trends, important segments and patterns and report findings to the CEO and CFO.*

As you can see, we are basically formulating an **analytical question** from the user’s point of view. Based on this analytical question, we can immediately derive the required **KPIs** and **dimensionality** of the BI solution:

KPI: Total Third Party Revenue
Dimensions: Product, Customer, Date
The **reasoning** in the goal statement, tells us how the data should be presented (visualized). I recommend doing this as one of the last steps in the sprint though.

Please note: There are quite a bit more details which could be told about agile project management and sprints. However, it is not the goal of this article to do such a deep dive. If you want to learn more details, I can recommend the wiki from [<ins>Atlassian</ins>](https://www.atlassian.com/agile/scrum/sprints).

### Sprint Planning for BI-Projects - Step by Step
*One note before we start:* Don’t try to plan and anticipate everything and every detail with planning. It will not be possible as many things are yet unknown. You will embark on a learning path with the project. Take these learnings and incorporate them in the process along the way. After all, this is the agile way of doing a project.

Here is my recommendation for effective sprint planning for a BI-Project:

1. Define the **analytical question(s)** (sprint goal), which need to be answered with the BI solution
2. Derive **KPI definitions** and the required dimensionality from the analytical question(s)
    - I recommend using a simple template: See my separate article about an effective KPI template
3. Derive and draft the **data model(s)** from the KPIs and their dimensionality
4. Identify required data sources and necessary data transformation process(es) (ETL)
5. Build the **backlog of tasks** which need to be done in order to reach the sprint goal
6. *If required:* Discuss and define **details about how** the solution shall be developed (e.g. define if there will be a direct connection to a source system or if the BI will access only data exports from that system)

Next to the analytical questions, you will need to define and implement the **technical framework** for the solution in the first sprint. This includes usually the following elements:

- Setting up **user credentials** to access source systems
- **Installing** and **licensing** of the **BI & analytics software** (e.g. Power BI)
- Setting up the **cloud environment** in which the solution shall be hosted, e.g. the Power BI Tenant
- Installing and setting up a **data gateway** (e.g. Power BI Gateway) in order to allow data transports between on-premise systems and the cloud environment for the BI tool

Also, I recommend identifying and actively managing **dependencies**. Often times you have critical dependencies regarding organizational sign-offs on e.g. user credentials or data protection. Such dependencies can put your project quickly on-hold.

Finally, you obviously have to define the **sprint length in weeks**. Because the first sprint is foundational, I would recommend at least four weeks of time for it. After that, you could reduce to two or three weeks per sprint.

### Sprint Execution
Executing the sprint means working through the backlog of tasks to reach the sprint goal. I would recommend to track the progress with a simple **Kanban board**:

![Simple Kanban Board](/img/img_01.03-2.png)
<div align="center"><font size= "2">A simple but effective Kanban board to manage and visualize the progress of work</font></div>
<br/>

Tasks move from the backlog to “in progress” to finally “done”. The board helps to keep track of and visual the progress of the sprint execution. There are plenty of tools available to use such a board. If your organization uses Microsoft Teams, check out the Planner application.

Please note, in case you do not want to use the sprint method in your project (and that would be totally acceptable) you could still use the Kanban board (independent from sprints) as the key tool to manage the project progress.

Here is a more sophisticated board with more statuses and grouping of tasks:

![More Elaborate Kanban Board](/img/img_01.03-3.png)
<div align="center"><font size= "2">A more elaborate Kanban board with grouping of tasks (swimlines) and an additional status column</font></div>
<br/>

### Sprint Review
At the end of a sprint, the progress of work and the results / deliverables are reviewed together with the customers. Based on the deliverables, it is measured if the **sprint goals** have been achieved. This usually requires the **customer to test** the new elements of the solution (and the current state of the solution overall) and provide **feedback** accordingly, which is then incorporated in the backlog for the next sprint to follow the principle of **continuous improvement**.

Please note, this means the customer has to have capacity to review things and respond within due time accordingly. You may want to consider in your planning, that this takes more time than initially anticipated.

Further, if deemed useful, a sprint **retrospective** can be organized in which the team reflects on how the work was organized and done, and improve accordingly.

### Warning: Don’t Get Lost in Agile Project Management Methodology
:::caution
When planning, executing and reviewing a sprint, make sure the focus is on the **delivery of working solutions** at all times and don’t get lost in planning and managing the project.
:::

A BI & analytics projects has a lot of uncertainties involved and it will not be possible to remove all of them with planning or agile methods. Instead, consider the project as a learning journey for your people and the organization. As already noted, embrace the uncertainty and take these learnings and incorporate them into the process right away.

There is a ocean of books, software and online content available on agile project management. There are manifestos, sophisticated tools and a lexicon of fancy words used. There are people that have “agile coaching” as their full time occupation. It is understandable that agile project management can become a jungle where one gets lost and looses the focus in the project which should be the delivery of usable pieces of an analytics solution.

Therefore, choose and use the methods which really help you and the team. Keep it simple and focus on the project outcome.

### Conclusions
Starting a new BI & analytics project is exciting, yet can also be daunting in particular if an organization lacks prior experience with such endeavors. However, if you actively manage the scope and progress of work with simple and effective tools, and focus on the delivery of usable solutions, you are on a good path to success with your project.