# Reporting 

Our reporting page is designed to provide you with a comprehensive insight into key aspects of your business operations. 
Explore detailed reports on prepaid purchase orders, inventory status, work orders, order activities, purchase order details, and dismissed/resolved exceptions, providing you with valuable data for informed decision-making and streamlined business management.

This includes the following detailed reports:

* **Prepaid POs**: Insights into prepaid purchase orders, providing a breakdown of upfront payments made to suppliers before receiving inventory. This aids in cash flow management and budget forecasting.
 * **Inventory**: A comprehensive overview of current inventory levels, encompassing raw materials, work-in-progress, and finished goods. This feature facilitates effective inventory management and optimization.
 * **Work Orders**: Details work orders for manufacturing processes, including timelines, completion status, and any deviations from planned production schedules.
 * **Orders**: Summarizes order activity, tracking both incoming and fulfilled orders. This report helps gauge sales performance, customer demand, and delivery efficiency.
 * **Purchase Orders**: Outlines the details and status of purchase orders issued to suppliers, offering insights into procurement activities, spending, and supplier performance.
 * **Dismissed/Resolved Exceptions**: Monitor exceptions within the supply chain or production process that have been dismissed or resolved in Turbine. This report provides visibility into the resolution of issues for improved operational efficiency.
 * **Inventory Forecast**: Provides insights into future inventory needs based on historical sales data and anticipated demand trends.

## Prepaid POs

Insights into prepaid purchase orders, providing a breakdown of upfront payments made to suppliers before receiving inventory. This aids in cash flow management and budget forecasting.

This report includes of the following columns:

* **Tenant ID**: Unique identifier assigned to a specific tenant within the system.
* **Tenant Name**: The name associated with a specific tenant.
* **Purchase Order ID**: The unique identifier for a purchase order.
* **Purchase Order Source ID**: The source identifier or reference for the purchase order.
* **Purchase Order Created At**: The timestamp or date and time when a purchase order was created.
* **Vendor Name**: The name of the vendor or supplier associated with the purchase order.
* **Invoice ID**: The unique identifier for an invoice related to a specific purchase order.
* **Invoice Created At**: The timestamp or date and time when an invoice was created.
* **Received Quantity**: The quantity of goods or services that have been physically received or recorded as received against a specific purchase order.
* **Ordered Quantity**: The originally requested or ordered quantity of goods or services specified in the purchase order.

## Inventory

A comprehensive overview of current inventory levels, encompassing raw materials, work-in-progress, and finished goods. This feature facilitates effective inventory management and optimization.

This report includes of the following columns:

* **Remote SKU**: The remote ID or code associated with a SKU. 
* **SKU Title**: The descriptive title or name associated with a SKU.
* **Node Code**: The code or identifier associated with a specific node within the inventory system.
* **Units Available**: The total quantity of a particular product or item that is currently available for sale or use.
* **Units On Hand**: The current physical inventory quantity of a specific product or item at a given location.
* **Units Reserved**: The quantity of units that have been set aside or reserved for specific purposes, such as pending orders or future allocations.
* **Units Sold**: The total quantity of units that have been sold or distributed to customers. 
* **Write Offs**: The quantity of units that have been declared as losses or written off from the inventory due to damage, expiration, or other reasons.
* **Incoming Inventory**: The quantity of units that are in the process of being received or added to the inventory.

## Work Orders

Details work orders for manufacturing processes, including timelines, completion status, and any deviations from planned production schedules.

This report includes of the following columns:

* **Tenant ID**: Unique identifier assigned to a specific tenant within the system.
* **Tenant Name**: The name associated with a specific tenant.
* **Created At**: The timestamp or date and time when a work order was created.
* **Work Order ID**: The unique identifier for a work order.
* **Turbine Order Number**: The order number associated with a work order in Turbine.
* **Work Order Number**: The specific identifier for a work order.
* **Vendor**: The name of the vendor or supplier associated with the work order.
* **Remote SKU**: The remote ID or code associated with a SKU. 
* **Node Name**: The name of the node associated with the work order.
* **Quantity Ordered**: The originally requested or ordered quantity of goods or services specified in the work order.

## Orders

Summarizes order activity, tracking both incoming and fulfilled orders. This report helps gauge sales performance, customer demand, and delivery efficiency.

This report includes of the following columns:

* **Created At**: The timestamp or date and time indicating when the order was created.
* **Turbine Order ID**: A unique identifier assigned within Turbine to each order for reference and tracking purposes.
* **Channel Order Number**: The specific number associated with a particular order for easy identification.
* **Channel**: The channel through which the order was received.
* **Payment Status**: Indicates the current status of payment for the order, whether it is sent, completed, or any other relevant status.
* **Total Price**: The overall cost of the entire order.
* **Payment Amount**: The amount paid by the customer for the order, providing insight into the financial transaction.
* **Remote SKU**: The remote ID or code associated with a SKU. 
* **Unit Price**: The cost or price assigned to a single unit of the product in the order.
* **Quantity**: The total number of units or items ordered in the specified transaction.

## Sales Order Summary

Overview of Sales Orders at the Orders level

This report includes of the following columns:

* **Created At**: The timestamp or date and time indicating when the order was created.
* **Turbine Order ID**: A unique identifier assigned within Turbine to each order for reference and tracking purposes.
* **Channel Order Number**: The specific number associated with a particular order for easy identification.
* **Channel**: The channel through which the order was received.
* **Payment Status**: Indicates the current status of payment for the order, whether it is sent, completed, or any other relevant status.
* **Fulfillment Status**: Indicates whether the order has been processed and fulfilled.
* **Remote SKU**: The remote ID or code associated with a SKU. 
* **Total Price**: The overall cost of the entire order.
* **Payment Amount**: The amount paid by the customer for the order, providing insight into the financial transaction.
  
## Purchase Orders

Outlines the details and status of purchase orders issued to suppliers, offering insights into procurement activities, spending, and supplier performance.

This report includes of the following columns:

* **Tenant ID**: Unique identifier assigned to a specific tenant within the system.
* **Tenant Name**: The name associated with a specific tenant.
* **Created At**: The timestamp or date and time when a purchase order was created.
* **Source ID**: The source identifier or reference for the purchase order.
* **Turbine Purchase Order ID**: The unique identifier for a purchase order within Turbine.
* **Vendor**: The name of the vendor or supplier associated with the purchase order.
* **Node Name**: The name of the node associated with the purchase order.
* **Remote SKU**: The remote ID associated with a SKU.
* **Quantity Ordered**: The originally requested or ordered quantity of goods or services specified in the purchase order.
* **Price**: The cost or price assigned to a single unit of the product in the purchase order.
* **Landed Cost**: The cost of the product, including additional expenses like shipping.
* **Total Cost**: The overall cost of the entire purchase order, encompassing all items and associated costs.
* **Quantity Recieved**: The quantity of goods or services that have been physically received or recorded as received against a specific purchase order.

## PO Summary

Overview of Purchase Orders at the PO Level.

This report includes of the following columns:

* **Created At**: The timestamp or date and time when a purchase order was created.
* **PO Number**: The source identifier or reference for the purchase order.
* **Turbine Purchase Order ID**: The unique identifier for a purchase order within Turbine.
* **Vendor**: The name of the vendor or supplier associated with the purchase order.
* **Total Price**: The total price of the purchase order.
* **Total Units**: Total quantity of units ordered in the purchase order.
* **Total Units Recieved**: Total quantity of units received against the purchase order.
* **Status**: Current status of the purchase order.
* **Source**: Source or origin of the purchase order, can be Turbine or Anvyl

## Inventory Forecast

Provides insights into future inventory needs based on historical sales data and anticipated demand trends.

This report includes of the following columns:

* **Remote SKU**: The remote ID associated with a SKU.
* The projected demand for each week.

## Revenue Recognition

Details the process of recognizing revenue from sales transactions, aligning with US accounting standards to accurately reflect the company's financial performance over a specific period.

This report includes of the following columns:

* **Turbine Order Id**: Unique identifier assigned to each order within Turbine.
* **Channel Order number**: Sequential number assigned to orders for tracking and reference purposes.
* **Order date**: The date when the order was placed by the customer.
* **Channel**: The sales channel or platform through which the order was received.
* **Fulfillment Status**: Indicates whether the order has been processed and fulfilled.
* **Fulfilled date**: The date and time when the order was successfully fulfilled.
* **Remote SKU**: The remote ID or code associated with a SKU.
* **COGS amount**: Cost of Goods Sold (COGS) associated with fulfilling the order, including manufacturing or procurement costs.
* **Revenue**: Total income generated from the corresponding order.
* **Quantity**: The number of units included in the order.

## Dismissed Exceptions

Exceptions within the supply chain or production process that have been dismissed or resolved in Turbine

This report includes of the following columns:

* **Exception ID**: Unique identifier assigned to each dismissed or resolved exception in Turbine's supply chain or production process.
* **Name**: Title identifying the dismissed exception.
* **Description**: Detailed explanation of the dismissed or resolved exception encountered within the supply chain or production process.
* **Resolved**: Boolean indicating whether the exception has been resolved or not.
* **Ignored**: Boolean indicating whether the exception has been ignored or not.
* **Ignored or Resolved note**: Additional notes or comments regarding the resolution or dismissal of the exception.
* **User email**: Email address associated with the user who dismissed or resolved the exception.

## Inventory Aging

Overview of age of inventory, based on receiving information and current stock available

This report includes of the following columns:

* **Remote SKU**: The remote ID or code associated with a SKU.
* **Node**: Location where the inventory is stored.
* **Node Code**: Code representing the node location.
* **0-30**: Quantity of inventory aged between 0 to 30 days.
* **31-60**: Quantity of inventory aged between 31 to 60 days.
* **61-90**: Quantity of inventory aged between 61 to 90 days.
* **91-120**: Quantity of inventory aged between 91 to 120 days.
* **Over 120 days**: Quantity of inventory aged over 120 days.

## Inventory Aging by Batch/Lot

Overview of age of inventory, based on receiving information and current available stock for each batch/lot.

This report includes of the following columns:

* **Remote SKU**: The remote ID or code associated with a SKU.
* **Node**: Location where the inventory is stored.
* **Node Code**: Code representing the node location.
* **Lot Code**: Identifier for the batch or lot of inventory.
* **0-30**: Quantity of inventory aged between 0 to 30 days.
* **31-60**: Quantity of inventory aged between 31 to 60 days.
* **61-90**: Quantity of inventory aged between 61 to 90 days.
* **91-120**: Quantity of inventory aged between 91 to 120 days.
* **121-150**: Quantity of inventory aged between 121 to 150 days.
* **151-180**: Quantity of inventory aged between 151 to 180 days.
* **Over 180 days**: Quantity of inventory aged over 180 days.

## SKUs + Components 

A complete list of SKUs and Components.

This report includes of the following columns:

* **SKU or Component ID**: Unique identifier assigned to each SKU or Component within Turbine. For SKUs or Components created after 2024-02-02, this will look like `clri0ju3s02ejs60e4a7qtirz`. 
* **Remote SKU of SKU or Component**: The remote ID or code associated with a SKU or Component.
* **Product**: The product associated with the SKU or Component.
* **Variant**: The variant of the product. 
* **Title**: Title of the SKU or Component.
* **Description**: Description of the SKU or Component.
* **Style**: Style of the SKU or Component. 
* **Is Archived**: Boolean indicating whether the SKU or Component has been archived or not.
