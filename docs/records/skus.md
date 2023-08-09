# SKUs

Stock keeping units, informally known as SKUs, are codes used to keep track of individual inventory units and components. There are four main types of SKUs that Turbine uses to keep track of inventory and cut purchase orders:

**Vendor SKU**: The identifier that your supplier (or vendor) uses to identify a particular item.

**Internal/Remote SKU**: The code that a customer uses internally to identify an item.

**Channel SKU**: The code that a particular sales channel uses to identify an item (e.g. Shopify’s Variant ID)

**Turbine SKU**: The code that Turbine uses to tie all three SKUs together, allowing Vendor SKUs to map to Internal SKUs, and across sales channels. 

Turbine SKUs are created at a variant level, meaning that each Turbine SKU is mapped to a unique product. For example, an apparel company might sell a white T-shirt in sizes XS-XL. In Turbine, each of those products would have a unique Turbine SKU.
