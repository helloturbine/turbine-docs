<img width="1440" alt="image" src="https://github.com/helloturbine/turbine-docs/assets/151541890/81f2c1ec-e995-492e-be75-224e97a25894"># Reporting 

Our reporting page is designed to provide you with a comprehensive insight into key aspects of your business operations. 
Explore detailed reports on prepaid purchase orders, inventory status, work orders, order activities, purchase order details, and dismissed/resolved exceptions, providing you with valuable data for informed decision-making and streamlined business management.

This includes the following detailed reports:

## Reporting around Prepaid POs

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

## Reporting around Inventory

A comprehensive overview of current inventory levels, encompassing raw materials, work-in-progress, and finished goods. This feature facilitates effective inventory management and optimization.

This report includes of the following columns:

* **Remote SKU**: The remote ID associated with a SKU. 
* **SKU Title**: The descriptive title or name associated with a SKU.
* **Node Code**: The code or identifier associated with a specific node within the inventory system.
* **Units Available**: The total quantity of a particular product or item that is currently available for sale or use.
* **Units On Hand**: The current physical inventory quantity of a specific product or item at a given location.
* **Units Reserved**: The quantity of units that have been set aside or reserved for specific purposes, such as pending orders or future allocations.
* **Units Sold**: The total quantity of units that have been sold or distributed to customers. 
* **Write Offs**: The quantity of units that have been declared as losses or written off from the inventory due to damage, expiration, or other reasons.
* **Incoming Inventory**: The quantity of units that are in the process of being received or added to the inventory.

## Reporting around Work Orders

Details work orders for manufacturing processes, including timelines, completion status, and any deviations from planned production schedules.

This report includes of the following columns:

* **Tenant ID**: Unique identifier assigned to a specific tenant within the system.
* **Tenant Name**: The name associated with a specific tenant.
* **Created At**: The timestamp or date and time when a work order was created.
* **Work Order ID**: The unique identifier for a work order.
* **Turbine Order Number**: The order number associated with a work order in Turbine.
* **Work Order Number**: The specific identifier for a work order.
* **Vendor**: The name of the vendor or supplier associated with the work order.
* **Remote SKU**: The remote ID associated with a SKU. 
* **Node Name**: The name of the node associated with the work order.
* **Quantity Ordered**: The originally requested or ordered quantity of goods or services specified in the work order.

## Reporting around Orders

Summarizes order activity, tracking both incoming and fulfilled orders. This report helps gauge sales performance, customer demand, and delivery efficiency.

This report includes of the following columns:

* **Created At**: The timestamp or date and time indicating when the order was created.
* **Order ID**: A unique identifier assigned to each order for reference and tracking purposes.
* **Order Number**: The specific number associated with a particular order for easy identification.
* **Channel**: The channel through which the order was received.
* **Payment Status**: Indicates the current status of payment for the order, whether it is sent, completed, or any other relevant status.
* **Total Price**: The overall cost of the entire order.
* **Payment Amount**: The amount paid by the customer for the order, providing insight into the financial transaction.
* **Remote SKU**: The remote ID associated with a SKU. 
* **Unit Price**: The cost or price assigned to a single unit of the product in the order.
* **Quantity**: The total number of units or items ordered in the specified transaction.
  
## Reporting around Purchase Orders

Outlines the details and status of purchase orders issued to suppliers, offering insights into procurement activities, spending, and supplier performance.

This report includes of the following columns:

* **Tenant ID**: Unique identifier assigned to a specific tenant within the system.
* **Tenant Name**: The name associated with a specific tenant.
* **Created At**: The timestamp or date and time when a purchase order was created.
* **Source ID**: The source identifier or reference for the purchase order.
* **Purchase Order ID**: The unique identifier for a purchase order.
* **Vendor**: The name of the vendor or supplier associated with the purchase order.
* **Node Name**: The name of the node associated with the purchase order.
* **Remote SKU**: The remote ID associated with a SKU.
* **Quantity Ordered**: The originally requested or ordered quantity of goods or services specified in the purchase order.
* **Price**: The cost or price assigned to a single unit of the product in the purchase order.
* **Landed Cost**: The cost of the product, including additional expenses like shipping.
* **Total Cost**: The overall cost of the entire purchase order, encompassing all items and associated costs.
* **Quantity Recieved**: The quantity of goods or services that have been physically received or recorded as received against a specific purchase order.
