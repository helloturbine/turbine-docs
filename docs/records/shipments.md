# Shipments
Shipments capture the movement of items between your vendors, and your nodes.

For inbound shipments, we link purchase orders with incoming deliveries. Sometimes POs get spread out over multiple shipments, or multiple POs are included in one shipment. This makes it difficult to determine when a purchase order has been fulfilled. With Turbine, you can keep track of what you have on hand and what's on the way. We also integrate with carriers such as UPS, C.H. Robinson, and others.

## Linking Shipments to Purchase Orders

Once tracking information is received from a carrier, you can link the shipment to a Purchase Order and calculate your landed costs.

1. Start by navigating to the Purchase Order you would like to add a shipment to. Click on the "Procure to Pay" tab in the navigation bar, then select "Purchase Orders," and choose the specific Purchase Order.

2. Scroll to the "Freight Shipment Details" section and click on the "Add Freight Shipment" button.

3. Enter the details of the shipment, including the carrier, tracking number, allocation method, and cost. Then, click "Save." The landed cost of each item will automatically populate. Landed costs can be calculated in three ways -- by value, by number of items, or by weight.

![Adding a freight shipment](../../static/img/adding-a-freight-shipment.gif)

Saved shipments will also appear on the Freight Shipments page. If it is a supported carrier, we will verify the entered information with the carrier's systems to ensure the price and tracking information is accurate. If so, information such as the shipped date and expected delivery date will be populated on the Freight Shipments page.

## Matching, Verifying, and Deleting Tracking Numbers on Shipments

Freight shipments that have been linked to a Purchase Order show up on the Freight Shipments page. Each entry shows the carrier, tracking number, shipped date, expected delivery date, and actual delivery date. 

![Freight shipments (1)](https://github.com/helloturbine/turbine-docs/assets/131547338/0f37b551-73f9-48fc-bd37-020d14bfb455)


For supported carriers, Turbine verifies the tracking number as it is entered on the Purchase Order screen. Incorrect pricing or tracking numbers will not be saved. Instead, you will get a warning to check the entered info and try again.

For other carriers, the tracking number is turned into an external link that will bring you to the carrier's website, if applicable. If the tracking number is incorrect, the link will not work. To fix this, simply click the red trashcan icon to delete the freight shipment from the purchase order. Then, re-enter the information.

<img width="1512" alt="trashcan pointer" src="https://github.com/helloturbine/turbine-docs/assets/131547338/fe70abef-2821-4e58-bd54-eef10c93197b">



