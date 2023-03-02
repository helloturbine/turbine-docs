# Order to Cash

The Order-to-Cash process tracks orders from the moment they're created to when cash lands in your bank account. Turbine will check that all orders go through the following stages:

1. Placed
2. Payment captured
3. Fulfilled
4. Shipped
5. Picked Up
6. Delivered
7. Paid out

If an order gets stuck between any of these stages, we'll raise an exception for you based on SLAs you set in Turbine.

To resolve an Exception, click into the order and take action with the appropriate partner:
1. Payment capture failed --> View the order in Shopify to reprocess Payment
2. Placed but not Fulfilled -> View the order in Shopify to complete Fulfillment
3. Fulfilled but not Shipped -> Flag the order to your warehouse
4. Shipped but not Picked Up -> Flag the shipment to your warehouse and shipping carrier
5. Picked Up but not Delivered -> Flag the order to your carrier and the customer
6. Not Paid out --> View the related Payment in the Payment provider