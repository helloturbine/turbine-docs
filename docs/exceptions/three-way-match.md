# Three-Way Match

Three-Way Match is the process of matching three documents:
1. Purchase Order
2. Receipt
3. Invoice

All of these documents should agree across SKU, price, and quantity.

If they don't, we'll raise an exception in Turbine:
- Receipt does not match shipment packing list
- Invoice does not match purchase order tolerance (price or quantity)
- Receipt includes a new SKU
- Purchase order delayed past Requested Ready Date
- Delivery delayed
