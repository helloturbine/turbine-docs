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

## 1005: Anvyl Vendor created.

A vendor was found in Anvyl that was not found in Turbine. This vendor has been auto created. 

## 1006: Anvyl supplier part not found.
## 1007: Anvyl Node created.

A node was found in Anvyl that was not found in Turbine. This node has been auto created. 

## 1008: Anvyl SKU added to Vendor SKU.
## 1009: Anvyl SKU created.

A SKU was found in Anvyl that was not found in Turbine. This SKU has been auto created. 

## 1010: Anvyl Purchase Order cancelled or rejected.

A Purchase Order in Anvyl was cancelled or rejected. It has been removed from Turbine.
## 1011: Anvyl Vendor SKU created.

A Vendor SKU (manufacturer code) was found in Anvyl that was not found in Turbine. This Vendor SKU has been auto created. 

