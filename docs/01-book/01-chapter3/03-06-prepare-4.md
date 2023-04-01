---
sidebar_position: 999
title: 3.6 | Preparing the date dimension (dimDate)
slug: /3.6
tags: [3 | Preparing the data]
---

# 3.6 | Preparing the date dimension (*dimDate*)

The final dimension table to be prepared is one that is likely shared among nearly all existing business intelligence solutions worldwide: the date dimension.

The date dimension *dimDate* is basically a calendar table with which we can filter, slice and aggregate fact data over the time dimension. In our use-case we will work with dates only as timestamps are not relevant for us.

There are different ways to create a date dimension Power BI. We will use a **template script** with which we can create a date dimension with just a few clicks.

#### 1. Create a new *Blank Query*

To use the template script, first we have to create an empty query as follows:

![03-35](/img/img_book_03-35.png)

#### 2. Open the *Advanced Editor* for the newly created *Blank Query*

Make sure you have selected the newly created query *Query1* and then click on *Advanced Editor* under *Home*:

![03-36](/img/img_book_03-36.png)

#### 3. Copy and paste the template script into the Advanced Editor window

In the appearing window, first delete everything and the copy and paste the code below and confirm with *Done*.

```jsx title="Template script: dimDate"
let GenerateDateTable = (vStart as date, vEnd as date, vFiscalYearEnd as text, optional vLanguage as nullable text) as table =>
let
    DayCount = Duration.Days(Duration.From(vEnd - vStart))+1,
    Source = List.Dates(vStart,DayCount,#duration(1,0,0,0)),
    TableFromList = Table.FromList(Source, Splitter.SplitByNothing()),
    ChangedType = Table.TransformColumnTypes(TableFromList,{{"Column1", type date}}),
    RenamedColumns = Table.RenameColumns(ChangedType,{{"Column1", "Date"}}),
    InsertYear = Table.AddColumn(RenamedColumns, "Year", each Date.Year([Date]), Int64.Type),
    InsertQuarterNo = Table.AddColumn(InsertYear, "QuarterNo", each Date.QuarterOfYear([Date]), Int64.Type),
    InsertQuarterDesc = Table.AddColumn(InsertQuarterNo, "QuarterDesc", each "Q"&Text.From([QuarterNo]), type text),
    InsertMonthNo = Table.AddColumn(InsertQuarterDesc, "MonthNo", each Date.Month([Date]), Int64.Type),
    InsertDayNo = Table.AddColumn(InsertMonthNo, "DayNo", each Date.Day([Date]), Int64.Type),
    InsertDayDesc = Table.AddColumn(InsertDayNo, "DayDesc", each Date.ToText([Date], "dddd", vLanguage), type text),
    InsertDayInt = Table.AddColumn(InsertDayDesc, "DateInt", each [Year] * 10000 + [MonthNo] * 100 + [DayNo], Int64.Type),
    InsertMonthDesc = Table.AddColumn(InsertDayInt, "MonthDesc", each Date.ToText([Date], "MMMM", vLanguage), type text),
    InsertMonthDescShort = Table.AddColumn(InsertMonthDesc, "MonthDescShort", each Text.Start([MonthDesc], 3), type text),
    InsertMonthAndYear = Table.AddColumn(InsertMonthDescShort, "MonthAndYear", each (try(Text.Range([MonthDesc],0,3)) otherwise [MonthDesc]) & " " & Number.ToText([Year]), type text),
    InsertQuarterAndYear = Table.AddColumn(InsertMonthAndYear, "QuarterAndYear", each "Q" & Number.ToText([QuarterNo]) & " " & Number.ToText([Year]), type text),
    InsertDayInWeekNo = Table.AddColumn(InsertQuarterAndYear, "DayInWeekNo", each Date.DayOfWeek([Date]), Int64.Type),
    InsertWeekEnding = Table.AddColumn(InsertDayInWeekNo, "WeekEnding", each Date.EndOfWeek([Date]), type date),
    InsertEndOfFiscalYear = Table.AddColumn(InsertWeekEnding, "EndOfFiscalYear", each Date.From(vFiscalYearEnd&Text.From([Year])), type date),
    InsertHelper = Table.AddColumn(InsertEndOfFiscalYear, "helper", each if [Date]<=[EndOfFiscalYear] then 1 else 0, Int64.Type),
    InsertFiscalYearDesc = Table.AddColumn(InsertHelper, "FiscalYearDesc", each if [helper] = 1 then Text.From([Year]-1)&"/"&Text.End (Text.From([Year]),2) else Text.From([Year])&"/"&Text.End (Text.From([Year]+1),2), type text),
    InsertMonthOfFiscalYear = Table.AddColumn(InsertFiscalYearDesc, "MonthOfFiscalYear", each if [helper] = 1 then 12+[MonthNo]-Date.Month([EndOfFiscalYear]) else [MonthNo]-Date.Month([EndOfFiscalYear]), type number),
    InsertQuarterOfFiscalYear = Table.AddColumn(InsertMonthOfFiscalYear, "QuarterOfFiscalYear", each if [MonthOfFiscalYear] >=1 and [MonthOfFiscalYear] <=3 then 1 else (if [MonthOfFiscalYear] >=4 and [MonthOfFiscalYear] <=6 then 2 else (if [MonthOfFiscalYear] >=7 and [MonthOfFiscalYear] <=9 then 3 else (if [MonthOfFiscalYear] >=10 and [MonthOfFiscalYear] <=12 then 4 else 0))), type number),
    InsertFiscalQuarterDesc = Table.AddColumn(InsertQuarterOfFiscalYear, "FiscalQuarterDesc", each "Q"&Text.From([QuarterOfFiscalYear]), type text),
    InsertEndOfMonth = Table.AddColumn(InsertFiscalQuarterDesc, "EndOfMonthDate", each Date.EndOfMonth([Date]), type date),
    InsertDayOfYear = Table.AddColumn(InsertEndOfMonth, "DayOfYear", each Date.DayOfYear([Date]), Int64.Type),
    #"Removed Columns" = Table.RemoveColumns(InsertDayOfYear,{"helper"}), Deletunneeded = if vFiscalYearEnd = "31.12." then Table.RemoveColumns(#"Removed Columns",{"FiscalYearDesc", "MonthOfFiscalYear", "QuarterOfFiscalYear", "FiscalQuarterDesc"}) else #"Removed Columns"
in
    #"Removed Columns"
in
    GenerateDateTable
```

#### 4. Enter the parameters and generate the calendar table

After confirming with Done enter the following values as the parameters to create the calendar table:

![03-37](/img/img_book_03-37.png)

The parameters *vStart* and *vEnd* are the dates from when the calendar should start and end respectively. The parameter *vFiscalYearEnd* defines as of when the fiscal year ends. With *vLanguage* (which can also be left empty) we can define the language used to generate some of the fields, for example month names.

After entering the values as in the screenshot, confirm with *Invoke* to generate the calendar table.

:::caution
Depending on the current language settings in your Power BI file, you might need to enter the date parameters in another format. Navigate to the Power BI options via *File* → *Options* → *CURRENT FILE* → *Regional Settings* to see your current settings. In the example here, the settings are on "German (Switzerland)".
:::

#### 5. Inspect and rename the newly created calendar table

Power Query has no created a new table *Invoked Function*. Navigate to that table and have a look at it. As you can see there is a column *Date* that contains one row for each date between *vStart* and *vEnd*. Further, there are many additional columns that are useful for the analysis and report building later.

Please note, we do not need to do any transformations to the created calendar table as the script takes care of that for us. However, it is always possible to add additional transformation steps if needed. So you can always combine the template script with some additional columns etc. as needed.

Rename the table to *dimDate* via double-clicking on the table in the *Queries* navigation (alternatively, do a right-click and select Rename).

For better clarity, also rename the function we used to *Generate date table*.

![03-38](/img/img_book_03-38.png)