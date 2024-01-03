---
sidebar_position: 110
title: Loading data via Gen2 Dataflow to Lakehouse table
slug: /wiki/msfabric/dataload2
tags: [Data]
---

# Loading data via Gen2 Dataflow to Lakehouse table

#### 1. Create new Gen2 Dataflow and create query

#### 2. Select destination Lakehouse for newly created query

![screenshot](/img/wiki-msfabric-04.png)

Make sure to use Datetime instead of just Date formats:

![screenshot](/img/wiki-msfabric-05.png)

![screenshot](/img/wiki-msfabric-06.png)

Alternative menu to select data destination:

![screenshot](/img/wiki-msfabric-09.png)

#### 3. Create new Pipeline and add Dataflow action that references just created Gen2 Dataflow

![screenshot](/img/wiki-msfabric-07.png)

#### 4. Trigger Pipeline

#### 5. Check for data in Lakehouse

![screenshot](/img/wiki-msfabric-08.png)

#### Bonus: Add a MS Outlook activity in Pipeline that sends an e-mail in case the Pipeline was executed successfully

