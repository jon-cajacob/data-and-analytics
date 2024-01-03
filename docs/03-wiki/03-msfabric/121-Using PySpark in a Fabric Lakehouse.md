---
sidebar_position: 121
title: Using PySpark in a Fabric Lakehouse
slug: /wiki/msfabric/pyspark
tags: [Data]
---

# Using PySpark in a Fabric Lakehouse

#### Loading data to a dataframe from the files root

```jsx title="Reading data from files to a dataframe"
from pyspark.sql.functions import col, year, month, quarter

table_name = 'fact_sale'

df = spark.read.format("parquet").load('Files/wwi-raw-data1/full/fact_sale_1y_full')
df = df.withColumn('Year', year(col("InvoiceDateKey")))
df = df.withColumn('Quarter', quarter(col("InvoiceDateKey")))
df = df.withColumn('Month', month(col("InvoiceDateKey")))

df.write.mode("overwrite").format("delta").partitionBy("Year","Quarter").save("Tables/" + table_name)
```