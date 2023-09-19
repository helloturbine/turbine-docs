# SKUs

Stock keeping units, informally known as SKUs, are codes used to keep track of individual inventory units and components. There are four main types of SKUs that Turbine uses to keep track of inventory and cut purchase orders:

**Vendor SKU**: The identifier that your supplier (or vendor) uses to identify a particular item.

**Internal/Remote SKU**: The identifier that you use internally to identify an item.

**Channel SKU**: The identifier that a particular sales channel uses to identify an item (e.g. Shopify’s Variant ID)

**Turbine SKU**: The ID that Turbine uses to tie all the different channels and vendor identifiers together. 

Turbine SKUs are created at a variant level, meaning that each Turbine SKU is mapped to a unique product. For example, an apparel company might sell a white T-shirt in sizes XS-XL. In Turbine, each of those products would have a unique Turbine SKU.

## SKU Details

On our SKU details screen you can see a number of key pieces of information about a SKU, including: 
* BOM
* Internal/Remote SKU
* Price (What you sell it for)
* Landed Cost (What you buy it and get it to your warehouse for)
* Barcode, if you're tracking one
* Channels where you're buying an item
* Vendors where you're sourcing an item
* Landed costs over time
* Related POs (both opened and closed)

## Editing a Remote SKU

A remote SKU can only be edited on the SKU details page. After navigating to the SKU details page, select "Edit". A modal will pop up with a text box that can be edited. You change will permeate through the app upon saving. 
