# Exceptions

Exceptions are issues that Turbine thinks are worth further attention. Exceptions can be operational (a late order that hasn't shipped), financial (an invoice that doesn't match what was ordered), or data-related (a SKU that doesn't exist in Turbine yet).

We surface exceptions via the Exceptions page, which captures all types of exceptions in one place.

## Orders with Failed Payments

These are orders that were succesfully placed where the payment failed. You may want to flag these as not being eligible for fulfillment. Turbine will not.

## Orders without Payments

Orders placed that have no payment information tied to them. 
Amazon orders are not considered for this exception.

## Shopify Payments without Payouts

These are payments that have been collected via Shopify payments but that we can't tie to a payout. 
