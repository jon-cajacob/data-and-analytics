---
sidebar_position: 6
title: 5.6 | Summary and takeaways for working with measures and DAX
slug: /5.6
tags: [DAX, Measures]
---

# 5.6 | Summary and takeaways for working with measures and DAX

Measures are very important for every BI solution and the DAX language to define them is very powerful and capable of implementing even the most complex requirements.

- Measures are **dynamic calculations** which means they are immediately re-calculated when a user interacts with a dashboard, for example changes a filter setting
- Measure names (labels) have to be **unique**
- Each measure has a **home table**. It is good practice to store all measures in a separate table
- Measures can and should always be **formatted** (e.g. whole numbers, decimals numbers, percentages etc.). The formatting of a measure (and multiple measures at once holding the CTRL-key) can be changed in the *Model view* as well
- We can **reference** other measures inside a new measure. This is important to follow the DRY-principle (don't-repeat-yourself)
- We can work with **variables** inside a measure for more complex calculations and a better readability
- We can organize measures in **display folders** for a better overview (see in the *Model view* the option *Display folder*)
- A measure is always evaluated given a certain **filter context** (e.g. from slicers). We use the DAX function CALCULATE() to manipulate this filter context

## 5.6.1 | Helpful DAX references

Working with DAX means you will need to look up how a function works and is applied from time to time. The following are highly useful resources that I use myself on a regular basis:

| URL | Content |
|---|---|
| https://learn.microsoft.com/en-us/dax/dax-function-reference | Official DAX documentation |
| https://www.daxpatterns.com/ | Highly useful collection of DAX measure patterns |
| https://dax.guide/ | Documentation and explanation (with examples) of each DAX   function |
| https://www.daxformatter.com/ | Simple and efficient DAX formatting tool |
| https://www.sqlbi.com/articles/ | Popular and highly useful blog with articles about DAX   functions |
