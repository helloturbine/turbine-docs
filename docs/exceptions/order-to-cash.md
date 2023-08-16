# Order to Cash

The Order-to-Cash process tracks orders from the moment they're created to when cash lands in your bank account. Turbine will check that all orders go through the following stages:

1. Order placement
2. Payment captured
3. Order fulfilled
4. Order shipped
5. Order accepted by carrier
6. Delivered
7. Paid out

If an order gets stuck at any of these points, we'll raise an exception for you based on paramaters you set in Turbine.

However, it's important to note that Turbine finds issues and flags them to you via exceptions, and we don't undertake the task of resolution itself. Instead, we empower you with the information needed to work with partners such as payment providers and shipping carriers to ensure a resolution.

Here are common exceptions and steps you can take to resolve them:
- **Payment capture failed**: View the order in Shopify to reprocess payment.
- **Order placed but not fulfilled**: View the order in Shopify to complete fulfillment.
- **Order fulfilled but not shipped**: Flag the order to your warehouse.
- **Order shipped but not accepted by the carrier**: Flag the shipment to your warehouse and shipping carrier.
- **Order not delivered**: Flag the order to your carrier and the customer.
- **Payout not received**: View the payout and its related payments in the payment provider.
