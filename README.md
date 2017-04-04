# Open data tips
Some tips for creating open data in a way that is helpful. The aim is to make your open data [machine-readable](http://opendatahandbook.org/glossary/en/terms/machine-readable/). These suggestions are from people who end up trying to use open data.

## Tabular data
* If you have tabular data, output it as a **CSV file** rather than as a PDF or Excel file.
* When outputting CSVs from, say Excel, make sure that every table gets its own CSV file. Only put **one table in each CSV file**.
* Try to keep the tables **as simple as possible**. If you need to add explanations of the data to improve understanding, it is good to include this in accompanying notes on a webpage or a separate text file, rather than trying to include it in data file itself.
* For CSV column headings, try to use **short, self-explanatory titles**. If this is too difficult, explain column headings in accompanying notes.
* **Numbers should be numbers**. Steer away from using prefixes and suffixes within cells.
  * Instead of using '1.40 ltrs' in each cell of a column, just use 1.40, and denote the column as being measured in litres. The same applys to currency, in fact, try to avoid using symbols as far as possible.
  * If there are a number of measures for each cell (e.g. litres, millilitres, grammes), create a new column and denote the measure in that column:
  
    | Amount | Measure    |
    |--------|------------|
    | 1.40   | litres     |
    | 200    | mililitres |
    | 50     | kg         |

## Dates
Dates can be ordered differently in different parts of the world. Sometimes people use two digits for the year. This can make it confusing to know what the date is. For example, what is `12.07.16`? It could be 12th July 2016, 7th December 2016, or even 2012 July 16th. There is no way to know for sure. Provide dates using an international standard such as [ISO8601](https://en.wikipedia.org/wiki/ISO_8601). That allows just dates or dates/times to be provided complete with time zones and avoids confusion over American/Rest-of-the-world date formats. ISO8601 also allows dates to be chronologically sorted very easily. Here are some examples:
   * `2017-02-24` - if you just need to provide the date
   * `2017-02-24T14:51:28+01:00` - the full date and time (to the nearest second) for the Central European Timezone (1 hour offset from GMT)
   * `2017-02-24T14:51:28Z` - the full date and time (to the nearest second) for GMT
   * `2017-02-24T14:51:28.564Z` - the full date and time (to the neareast millisecond) for GMT


## GIS data
* You don't need to use a proper geographic format file if your dataset is coordinate points, this can be done using CSV. Include the latitude and longitude for each data point (the X and Y) in separate columns.
* If your dataset refers to geographical areas (e.g. council or parliamentary areas) include the **code**, not just the name. For the UK, the ONS maintains this definitive [list of GSS codes and names](https://www.ons.gov.uk/methodology/geography/geographicalproducts/namescodesandlookups/namesandcodeslistings).
* Shapefiles are good but it can make life easier for those without desktop GIS software if you **also provide data as GeoJSON** (plain text). Your GIS software should be able to export as GeoJSON.
* Provide **[longitudes and latitudes](https://en.wikipedia.org/wiki/Decimal_degrees)**, not just eastings and northings.
* Think about the number of **decimal places** you provide for longitudes and latitudes. The more decimal places you provide the bigger the file size. You only need to provide as many decimal places as the precision of your measurements. One degree of latitude/longitude on Earth is, at most, about 111km. Therefore, five decimal places gives an accuracy of about 1 metre, which is enough for most cases. It is highly unlikely that you’ve measured the location of a bus stop to the scale of an atomic nucleus so don’t provide the coordinates to 16 decimal places. I shaved ~700kB off one 2MB GeoJSON file just by truncating the precision to 5 decimal places.

## Metadata
Metadata is the data that describes your data. Typically this includes information that the data user will want to know, but which doesn't form part of the actual dataset.

* Metadata includes information such as publisher and/or author, sources and methodology, publication date, licensing information and geographical coverage.
* Don't mix metadata with your data. For instance, don't add extra lines describing sources and caveats to the bottom of your dataset, and don't add a dataset title above your headers. If you feel that you really must do this, denote such comments with a character such as '#'.
* Include metadata on the webpage where your dataset is published. This has the added bonus of making your data easier to find on the Web.
* If you are publishing data for a research project or in a disciplinary area, consider applying [existing metadata standards](http://www.dcc.ac.uk/drupal/resources/metadata-standards).

# Further reading
* [ODI Guides](http://theodi.org/guides)
