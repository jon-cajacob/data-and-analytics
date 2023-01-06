---
slug: 01-02-5-important-risks-bi-project
title: 01.02 | 5 Important Risks to Manage in Every BI-Project Project
authors: jon
tags: [Project Management, Risk Management]
---

/// In this article, 5 important risks to manage in a BI-project are summarized. These risks are about project scope & planning, people, organization and finally the evergreen data quality management. They can be successfully handled with diligence and the right tools.

<!--truncate-->
![Bild](/img/img_01.02-1.png)


---


<!-- <mark style={{backgroundColor: 'orange'}}>Text</mark> -->

There are possibly endless reasons why a specific BI-project in a specific organisation is at risk of failure. However, I believe a certain pattern can be observed which I summarize in the following.

*One note:* Knowing the risks is one thing. Actually managing them requires discipline and hard work. Take this list as a constant reminder in your BI journey and don’t fall for the various traps that might lurk around the next corner.

### 1. Too much complexity and scope in the beginning and at all times
In my experience, this is maybe the most relevant reason, why a BI-project struggles. Starting a new project is exciting and people are highly motivated, in particular in the beginning. Senior management might saw a very fancy dashboard at a conference and now also wants (exactly) that – ASAP of course. And it is just a few charts and tables, right?

As a result, huge lists with detailed requirements for e.g. KPIs or data tables with +150 fields are created and put into project backlog. Why is that problematic?

- The **team will be overwhelmed** by the backlog: Where to even start? What is important and what not?
- Also **customer will be overwhelmed** by the complexity (which is often self-inflicted). How to prioritize and schedule / plan a backlog with ~100 tasks?
- Work gets more and more **uncoordinated** as there is **no focus** on a particular topic. Many things are started, nothing is actually usable, validated or reviewed (and improved accordingly)
- **Only very late in the project, real and ready-to-test results will be available**. The uncertainty of the project outcome is very high accordingly
- Because testing and collecting user feedback is postponed, there is a high risk your **BI journey goes into the wrong direction**. Things have to be changed again. More time (and money) is lost
- **Frustration** both in the project team and on the customer side increases … and so on …

<ins>What can I do to manage this risk?</ins>

I usually like to give hands-on advice, so here it goes:

- Start with **one or two KPIs** (e.g. sales volume and sales margin) → See my article about structuring KPI requirements with a simple template
- Start with **3 – 4 dimensions** (e.g. date calendar, product, customer and account)
- Start with only **one report page** with 1 – 3 very basic visualizations (ideally tables only) and some filters
- **Validate** the data output (e.g. total sales)
- Let the **customer test** the single page so they can provide **feedback**
*… plan and execute the next **sprint** and **iteratively** develop and deliver additional elements of the solution*

*Example:* Your first report page might look just like the following, and that is totally fine:

![Bild](/img/img_01.02-2.png)
<div align="center"><font size= "2">A simple first report page as a result of your first project sprint
</font></div>


### 2. Know how and experience is lacking in the team
This one is not easy to manage. Building up analytics knowledge (often called “data literacy”) requires significant investments of money and time. You need to have the right people in terms of both **hard and soft skills** to make BI a success in your company. Hard skills are needed to technically build the solution. Soft skills are crucial to manage the process (or project) around development and successfully implement (including marketing) and operationalize the new BI tool.

In addition, experience is needed in order to make sure the solution is robust in daily operations, i.e. follows certain best practices which are often not written down in textbooks.

The good news is that modern analytics tools do not require extensive programming knowledge anymore (so called “low-code”) and are more and more intuitively to work with. This allows any motivated individual to self-teach herself how to work with such a tool and build a BI solution without dependency on experts.

<ins>What can I do to manage this risk?</ins>

- Identify highly motivated individuals in your organization and give them the capacity and tools to get started with BI and analytics
- Choose a modern and market leading BI & analytics tool with a large worldwide community to use in your organization. Please note, this is not primarily a decision made by IT but by the business users in your organization who actually have to work with the tool
- Acquire external experts to coach your internal BI people in order to significantly increase the speed of building data literacy within the organization and to make sure you are following best practice with the solution
- If you do not have the capacity or knowledge within the organization, acquire external experts to build a BI solution. However, make sure this is done with a low-code self-service tool which can be handled by your internal BI people in order to not be dependent on external experts

### 3. There are not enough people doing actual work
For this risk, I like to think about a analogy of building a house. No matter how many people are involved in planning and building a house, in the end there needs to be a team of individuals which actually builds the house.

The very same goes for a BI-project. No matter how many **managers, product owners or agile coaches** you have on the team, someone at some point has to sit down and do the actual work. The actual hard work of connecting with the data source, transforming the data step by step, building KPI calculations, data visualizations and fixing problems.

It is my personal opinion, that the former type of individual usually gets a little too much attention in an organization. It is important to note and to know at all times that how “good” a BI solution performs (in terms of many aspects) is very much dependent on the person actually building it. **You can have the most beautiful project plan and list of requirements, if it is not executed well, the project will fail with high probability.**

<ins>What can I do to manage this risk?</ins>

- Be mindful about the ratio of people “managing” or “coaching” versus the people actually developing and operationalizing a solution and structure the team accordingly

### 4. The BI-project is considered *purely* an IT project
If a BI-project is organizationally placed and driven purely out of the IT department without at least comprehensive involvement of the business department(s), such project will unlikely be successful.

In the past, business intelligence was a topic owned almost solely by IT simply because building content with tools back in the days required deep technical expert knowledge (e.g. coding with SQL). It was also very common for example to have a data warehouse in place where data was extracted from source systems and transformed to be used in some front end tool. Such data warehouses were administrated solely by IT experts. That means in the past **the majority or even the whole data analytics value chain from data source to data presentation was owned by IT experts.**

In my experience, today’s framework conditions look different. **Modern analytics tools** do almost not require any coding anymore and can be self-taught by any motivated person. This means analytics content can be produced and owned where it is ultimately needed: directly within in the business department. This allows for **more flexibility, less dependency and most importantly fast implementation of requirements, changes and fixes.**

<ins>What can I do to manage this risk?</ins>

- Clearly define the **scope of responsibilities** between the business and IT department: Who owns which topic in the analytics value chain?
- Same as in 2. above, identify motivated individuals and give them the means and capacity to owning analytics topics, e.g. report creation
- In a very progressive state of **data literacy** in your organization designated people in the business departments own the full analytics value chain from data extraction to data visualization

### 5. Bad data quality

This is an evergreen and **very critical for the success of your BI solution**. Why?

Imagine a business user opens a newly implemented dashboard to understand and analyze some data relevant for that person. The user sees the relevant data but quickly realizes that it is **erroneous, incomplete and not up-to-date**. How many more times do you think that particular business user will log into this dashboard again? **Zero** times to be exact. And it is at this point where the new BI tool slowly becomes irrelevant in the organization because “.. it anyway shows the wrong data ..“.

I believe some of the **main reasons why data quality remains such a significant problem are**:

- Data quality is not really a “cool” topic like for example machine learning and thus does not get the attention it needs in an organization
- It is often not transparent where the most pressing data quality issues are
- There is no strategy in place to manage data quality with clear responsibilities

<ins>What can I do to manage this risk?</ins>

- Basically work on the reasons I just listed above: 1) give it more attention, 2) make it transparent (via the BI tool) and 3) put a strategy with clear responsibilities in place to manage the relevant data quality

I have written a separate article about the topic of data quality. [See here](2022-11-05-reporting-dataquality-1.md)

*Please note:* Not all data has to have the same level of quality. Therefore, first identify the most relevant data and its issues and work on that one first.

### Conclusions
There are many more potentially important risks to manage in a BI-project but I believe if you are aware of the ones listed above and you actively monitor and manage them, you are on a good path to success.