# Open data tips
Some tips for making open data created by people who end up using the open data.

* If you have tabular data, output it as a CSV file rather than as a PDF or Excel file
* When outputting CSVs, only have one table in each CSV file.

## GIS data
* Shapefiles are good but it can make life easier for those without desktop GIS software if you also provide data as GeoJSON (plain text). Your GIS software should be able to export as GeoJSON;
* Provide longitudes and latitudes, not just eastings and northings;
* Think about the number of decimal places you provide for longitudes and latitudes. The more decimal places you provide the bigger the file size. You only need to provide as many decimal places as the precision of your measurements. One degree of latitude/longitude on Earth is, at most, about 110km. Therefore, five decimal places gives an accuracy of about 1 metre. It is highly unlikely that you’ve measured the location of a bus stop to the scale of an atomic nucleus so don’t provide the coordinates to 16 decimal places. I shaved ~700kB off one 2MB GeoJSON file just by truncating the precision to 5 decimal places.
