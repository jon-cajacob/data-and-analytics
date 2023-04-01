---
sidebar_position: 999
title: 3.5 | Preparing the sales channel dimension (dimSalesChannel)
slug: /3.5
tags: [3 | Preparing the data]
---

# 3.5 | Preparing the sales channel dimension (*dimSalesChannel*)

The sales channel dimension *dimSalesChannel* is only a small table and there are not many transformation steps required to prepare it for the data model. All the operations used have been shown before and thus I will keep this chapter short.

#### 1. Remove the automatically gegnerate step *Changed Type*

#### 2. Select only the columns *Channel ID*, *Channel Desc*, *Channel Group* and *Region*

#### 3. Change all column data types to *text*

#### 4. Remove duplicates in column *Channel ID* (safety measure)

The table should finally look like the following:

![03-33](/img/img_book_03-33.png)

