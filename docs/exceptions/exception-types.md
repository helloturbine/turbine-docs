# Exception Types 

We surface exceptions via the Exceptions page, which captures all types of exceptions in one place.

## 1005: Anvyl Vendor created.

A vendor was found in Anvyl that was not found in Turbine. This vendor has been auto created. 

## 1006: Anvyl supplier part not found.

The supplier part from Anvyl was not found in Turbine.

## 1007: Anvyl Node created.

A node was found in Anvyl that was not found in Turbine. This node has been auto created. 

## 1008: Anvyl SKU added to Vendor SKU.

A SKU that was found in Anvyl has been added to a Vendor SKU (manufacturer code).

## 1009: Anvyl SKU created.

A SKU was found in Anvyl that was not found in Turbine. This SKU has been auto created. 

## 1010: Anvyl Purchase Order cancelled or rejected.

A Purchase Order in Anvyl was cancelled or rejected. It has been removed from Turbine.

## 1011: Anvyl Vendor SKU created.

A Vendor SKU (manufacturer code) was found in Anvyl that was not found in Turbine. This Vendor SKU has been auto created. 

## 1105: WMS created Vendor from Receipt.

A Vendor was found in WMS from a Receipt. This Vendor has been auto created.

## 1106: SKU created from WMS.

A SKU was found in WMS that was not found in Turbine. This SKU has been auto created. 

## 1107: Vendor SKU created from WMS Receipt.

A Vendor SKU was found in WMS from a Receipt. This Vendor SKU has been auto created. 

## 1108: Node created from WMS.

A node was found in WMS that was not found in Turbine. This node has been auto created. 

## 1109: Purchase Order created from Receipt in WMS.

A Purchase Order has been auto created in Turbine from a Receipt in WMS. 

## 1110: SKU created by WMS.

## 1111: SKU not found in WMS.

A SKU found in Turbine that was not found in WMS. 

## 1112: New Order Channel created by WMS.

A New Order Channel has been auto created in Turbine by WMS.

## 1113: No transferable inventory available.

The SKU/line item of an inventory transfer request has no inventory available at the source location.

## 1114: Insufficient transferable inventory available.

The SKU/line item of an inventory transfer request has insufficient inventory at the source location and was only partially allocated.

## 1115: Turbine found a Receipt in WMS with no Vendor SKU.

Turbine found a receipt in WMS with no vendor SKU.

## 1116: Found a receipt in WMS but missing Purchase Order in Turbine.

A receipt was found in WMS without an associated Purchase Order in Turbine. A Purchase Order was automatically generated to rectify this.

## 1117: Node in WMS not found in Turbine.

A Node in WMS was not found in Turbine.

## 1118: Found a receipt in Trackstar with no vendor.

A receipt for a purchase order was found in WMS but no vendor was associated with it. A vendor was automatically generated to rectify this

## 1202: Sku in WMS not found in Turbine.

A SKU that was in WMS was not found in Turbine.

## 1205: Invoice Item without matching Vendor SKU.

An invoice item was created for a purchase order without a matching vendor SKU.

## 1206: Outbound order has failed payments.

An outbound order was successfully placed, but the payment has failed.

## 1207: A fully received PO has a line item with no landed costs.

A fully received purchase order has a line item with no landed costs.

## 1208: Line item cost on PO does not match cost on Object.

In a purchase order, the line item cost does not match the component cost. 

## 1209: Orders without Payments.

Orders placed that have no payment information tied to them. Amazon orders are not considered for this exception.

## 1210: Order Payments without Payouts.

These are payments that have been collected via Shopify payments but that we can't tie to a payout. 

## 1211: Line item price does not match SKU cost.

In a Purchase Order, the line item Price does not match the SKU cost.

## 1212: Node Merge.

A Super user has merged nodes. 
