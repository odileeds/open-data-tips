# Open data tips
Some tips for creating open data in a way that is helpful. These suggestions are from people who end up trying to use open data.

* If you have tabular data, output it as a **CSV file** rather than as a PDF or Excel file
* When outputting CSVs from, say Excel, make sure that every table gets its own CSV file. Only put **one table in each CSV file**.

## GIS data
* Shapefiles are good but it can make life easier for those without desktop GIS software if you **also provide data as GeoJSON** (plain text). Your GIS software should be able to export as GeoJSON;
* Provide **longitudes and latitudes**, not just eastings and northings;
* Think about the number of **decimal places** you provide for longitudes and latitudes. The more decimal places you provide the bigger the file size. You only need to provide as many decimal places as the precision of your measurements. One degree of latitude/longitude on Earth is, at most, about 111km. Therefore, five decimal places gives an accuracy of about 1 metre. It is highly unlikely that you’ve measured the location of a bus stop to the scale of an atomic nucleus so don’t provide the coordinates to 16 decimal places. I shaved ~700kB off one 2MB GeoJSON file just by truncating the precision to 5 decimal places.
