# Three-Way Match

## What is Three-Way Match, and why is it important?
The Three-Way Match is the process of matching three documents:
1. Purchase Order
2. Receipt
3. Invoice

All of these documents should agree across SKU, price, and quantity. Otherwise, a mismatch can indicate that you did not get what you ordered, the goods never arrived, or you paid for something you shouldn't have.

By reconciling these documents, you can verify that the goods or services were ordered, received in the correct quantity and quality, and billed accurately. This process helps prevent errors, fraud, and overpayments, and improves operational efficiency.

## 3WM Exceptions
If the documents do not match each other, or another problem arises, we will raise an exception in Turbine. 

Some common issues include:
- Receipt does not match the shipment packing list
- Invoice does not match purchase order tolerance (price or quantity)
- Receipt includes a new SKU that was not originally placed on the purchase order
- Purchase order becomes delayed past the Requested Ready Date
- Delivery of goods is delayed

## Tolerances
There are often errors between what is requested on a purchase order and what is actually delivered. Sometimes a vendor can deliver too much or too little of a particular product.

In Turbine, the tolerance for differences between purchase orders and receipts is set to the industry standard of 5% variance. If this is not the case for your organization, please contact your account manager.
