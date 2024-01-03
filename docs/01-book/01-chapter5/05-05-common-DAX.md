---
sidebar_position: 5
title: 5.5 | Commonly used DAX measure patterns using CALCULATE()
slug: /5.5
tags: [DAX, Measures, CALCULATE, Filter context]
---

# 5.5 | Commonly used DAX measure patterns using CALCULATE()

Learning, understanding and applying the DAX language to create complex calculations is not easy. Although some functions seem familiar to the formulas used in Excel, the language is much more abstract, especially in the context of a data model with many table relations and of course a given filter context based on which a measure is evaluated.

The good news is that for the majority of use-cases we can cover or fullfil the majority of requirements with a limited set of **DAX measure patterns**. These patterns mostly revolve around the previously introduced function **CALCULATE()**. Accordingly, I want to introduce this function in this chapter and give you a toolbox consisting of DAX patterns which you can apply in many situations.

The goal of this chapter is to explain CALCULATE() in the most intuitive way with showing a variety of examples. I believe this is easier for you than trying to read through theoretical explanations of the underlying mechanics of this function using technical terms. Though if this is something you are interested in, just search for CALCULATE() on Google and you will find many articles about this function that go into the details accordingly.

## 5.5.1 | Using CALCULATE()

There are many ways with which we can manipulate the filter context with CALCULATE(). Let's go through the most widely used techniques in practice.

#### 1. Overriding the filter context

We can **fixate** and **override** the filter context for a specific dimension using CALCULATE() with a simple logical statement as following:

```jsx title="New measure: Sales ProductType Fixed"
Sales ProductType Fixed =
CALCULATE ( [Sales in USD], dimProduct[ProductType] = "Trade Product" )
```

Placing this measure in a matrix visual with the field *ProductType* as rows returns the following picture:

![03-89](/img/img_book_03-89.png)

Note how the measure ignores the filter context given by the rows in the matrix and always returns the sum of sales for "Trade Products" in all cells (including the total row).

#### 2. Combining the filter contexts

We can also **combine** the filter context from the visualization (or slicers etc.) with the one defined inside the measure with simply wrapping the logical filter statement with **KEEPFILTERS()**.

```jsx title="New measure: Sales ProductType using KEEPFILTERS"
Sales ProductType using KEEPFILTERS = 
CALCULATE (
    [Sales in USD],
    KEEPFILTERS ( dimProduct[ProductType] = "Trade Product" )
)
```

![03-90](/img/img_book_03-90.png)

This already makes more sense because nothing is returned for "Manufactured Product". Therefore, it is in general advisable and good practice to use KEEPFILTERS() inside CALCULATE().

#### 3. Using FILTER() with multiple filter statements

We can combine multiple filter statements with the function FILTER(). FILTER() returns a filtered table based on which the calculation is performed.

```jsx title="New measure: Sales using FILTER"
Sales using FILTER =
CALCULATE (
    [Sales in USD],
    FILTER (
        dimProduct,
        dimProduct[ProductType] = "Trade Product" && 
        dimProduct[Subcategory] = "Subcategory 1"
    )
)
```

The screenshot showing the result in Power BI is further below to save some space here.

:::tip
Multiple filter statements are chained with "&&" for *AND* and "||" for *OR*.
:::

#### 4. Using variables inside a DAX statement

As with many programming languages, we can use **variables** inside a DAX measure statement.

Let's re-write the previous measure using variables:

```jsx title="New measure: Sales using FILTER and variables"
Sales using FILTER and variables =
VAR vTableFilter =
    FILTER (
        dimProduct,
        dimProduct[ProductType] = "Trade Product" && 
        dimProduct[Subcategory] = "Subcategory 1"
    )
VAR vResult =
    CALCULATE ( [Sales in USD], KEEPFILTERS ( vTableFilter ) )
RETURN
    vResult
```

When working with variables, we use *VAR* to define them. Finally, we use *RESULT* to specify what the measure shall finally return as a calculation result. In this example, the calculation returns the variable *vResult*.

#### 5. Removing a specified filter context

We can use REMOVEFILTERS() or ALL() to remove (ignore) a specified filter from the context.

Let's ignore the field *Subcategory* from *dimProduct* in the next measure:

```jsx title="New Measure: Sales using REMOVEFILTERS"
Sales using REMOVEFILTERS =
CALCULATE ( [Sales in USD], REMOVEFILTERS ( dimProduct[Subcategory] ) )
```

As you can see, the sum for "Trade Product" is correct, however it is not filtered anymore by *Subcategory*.

Let's have a look at the results in Power BI for the measures created in steps 3 to 5:

![03-91](/img/img_book_03-91.png)

- [*Sales using FILTER*] only returns a value for "Subcategory 1" and "Trade Product"
- [*Sales using FILTER and variables*] does the exact same thing as [*Sales FILTER()*]
- [*Sales using REMOVEFILTERS*] specifically ignores the *Subcategory* filter context 

## 5.5.2 | Chapter conclusion

The function CALCULATE() is widely regarded as the most important function of the language DAX. It is very versatile and the basis for most filter manipulations in measures. Many real-world BI requirements involve applying a specific filter context to be used for custom calculations. Often time it is a straightforward filter on one or multiple columns of a table to make sure the right scope of data is used in the calculation. Sometimes we need to combine the filter context coming from slicers or dimensions with the filtering inside the measure (using KEEPFILTERS), and at times, it may be necessary to ignore certain filters altogether (using ALL or REMOVEFILTERS).