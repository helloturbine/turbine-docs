# Inventory

## Inventory Snapshots 
Inventory Snapshots are the method that Turbine uses to track inventory. On a regular cadence, we track lot codes (if applicable) and the on hand, available, and reserved counts for each available SKU. 

On the Stock page, you can find the date of the most recent inventory snapshot used for the current inventory count in the “Last Reconciled At” column.

![Inventory](../../static/img/inventory.gif)




## Work Orders
Work orders in Turbine can be thought of as a special type of Purchase Order, with the main difference being that the items are not ordered from a vendor, but made directly by a customer.

For customers that perform their own manufacturing, work orders can be a useful tool to track the creation of new inventory and the consumption of components. Once a work order is run, the changes to inventory will be reflected on the Stock page. 

To create a work order, follow these steps:
1. Start at the “Procure to Pay” tab in the navigation bar, then click “Work Orders.”
2. Next, click the “New Work Order” button on the top right-hand side of your screen.
3. Fill out the relevant information, including the Requested Ready date, the Transmitted On date, and the Node where the manufacturing will take place.
4. To add line items to the Work Order, enter the quantity and Turbine SKU for each one. The SKU field is equipped with search, so you only have to remember the name of the item or your internal SKU code, and we’ll look up the Turbine SKU for you.
5. Once everything is filled out, hit the “Run Work Order” button. The proposed changes to inventory are **permanent**, so ensure that all details are correct before confirming.

Note: Work order line items must have an associated BOM before beginning this process. 


[insert gif here]

