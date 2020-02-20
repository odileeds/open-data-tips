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
  * Don't include commas, periods, or spaces to separate groups of thousands. These are formatting characters and will generally cause problems when interpreting numbers. [In many European countries](https://docs.oracle.com/cd/E19455-01/806-0169/overview-9/index.html) a `,` is the decimal indicator whereas the UK and US use `.`. Including thousands indicators leads to ambiguity in the interpretation of the number e.g. `1,066` could be interpreted as `one thousand and sixty six` or `one point zero six six` (`one and sixty six thousandths`). Instead use `1066` as this avoids the confusion entirely.
* **Don't include summary information, such as totals, for data that is already present**. Some data reading might treat these as a row in itself, confounding results and calculations. If you want to provide summary information (e.g. totals, averages and differences), do so using a separate dataset. The underlying data should remain in its raw form.

See [Data Organization in Spreadsheets](https://www.tandfonline.com/doi/full/10.1080/00031305.2017.1375989?scroll=top&needAccess=true&) by Browman & Woo 2017 for more.

## Dates
Dates can be ordered differently in different parts of the world. Sometimes people use two digits for the year. This can make it confusing to know what the date is. For example, what is `12.07.16`? It could be 12th July 2016, 7th December 2016, or even 2012 July 16th. There is no way to know for sure. Provide dates using an international standard such as [ISO8601](https://en.wikipedia.org/wiki/ISO_8601). That allows just dates or dates/times to be provided complete with time zones and avoids confusion over American/Rest-of-the-world date formats. ISO8601 also allows dates to be chronologically sorted very easily. Here are some examples:
   * `2017-02-24` - (i.e. yyyy-mm-dd) if you just need to provide the date
   * `2017-02-24T14:51:28+01:00` - the full date and time (to the nearest second) for the Central European Timezone (1 hour offset from GMT)
   * `2017-02-24T14:51:28Z` - the full date and time (to the nearest second) for GMT   * `2017-02-24T14:51:28Z` - the full date and time (to the nearest second) for GMT

   * `2017-02-24T14:51:28.564Z` - the full date and time (to the neareast millisecond) for GMT

Use of ISO8601 is also [recommended by the Government Digital Service](https://www.gov.uk/government/publications/open-standards-for-government/date-times-and-time-stamps-standard).


## GIS data
* Shapefiles are good but it can make life easier for those without desktop GIS software if you **also provide data as GeoJSON** (plain text). Your GIS software should be able to export as GeoJSON. There is also a [handy online tool](http://www.mapshaper.org/) for conversion to Geojson. There are online tools that will help you [validate JSON](https://jsonlint.com/) and [visualise your GeoJSON](http://geojsonlint.com/) to look for obvious mistakes.
* Provide **[longitudes and latitudes](https://en.wikipedia.org/wiki/Decimal_degrees)**, not just eastings and northings. Again, your GIS software should be able to save in this coordinate reference system (usually referred to as WGS 84).
* Include the Coordinate system used in your metadata.
* Think about the number of **decimal places** you provide for longitudes and latitudes. The more decimal places you provide the bigger the file size. You only need to provide as many decimal places as the precision of your measurements. One degree of latitude/longitude on Earth is, at most, about 111km. Therefore, five decimal places gives an accuracy of about 1 metre, which is enough for most cases. It is highly unlikely that you’ve measured the location of a bus stop to the scale of an atomic nucleus so don’t provide the coordinates to 16 decimal places. For instance, the [ONS Wards Generalised Clipped Boundaries in Great Britain](http://geoportal.statistics.gov.uk/datasets/afcc88affe5f450e9c03970b237a7999_2) has a resolution of 20m but the coordinates are given to 15 decimal places. The resulting [46.5MB GeoJSON file](http://geoportal.statistics.gov.uk/datasets/afcc88affe5f450e9c03970b237a7999_2.geojson) could be reduced to 24.8MB just by truncating the precision to 5 decimal places.
* You don't need to use a proper geographic format file if your dataset is coordinate points, this can be done using CSV. Include the latitude and longitude for each data point in *lat* and *lon* columns. Using [this website](http://geojson.io) you can also save these files as Geojson.
* If your dataset refers to geographical areas (e.g. council or parliamentary areas) include the **code**, not just the name. For the UK, the ONS maintains this definitive [list of GSS codes and names](https://www.ons.gov.uk/methodology/geography/geographicalproducts/namescodesandlookups/namesandcodeslistings).
* Avoid inheriting licence restrictions when creating data based on GIS files. If you trace parts of an Ordnance Survey map then you are creating a derivative dataset, and their licence restrictions will apply to what you have created. This would not cause difficulties if an [OS OpenData licence](https://www.ordnancesurvey.co.uk/opendata/licensing.html) was provided, but for data based on other copyrighted maps you might not be able to reuse or republish without first obtaining permission. Plotting points on a Google Map means that strictly speaking you can [only display them on a Google Map](https://developers.google.com/maps/terms#10-license-restrictions) and not use them elsewhere. OpenStreetMap are [rigorous](http://www.openstreetmap.org/copyright) about data sources and reuse through open licensing, and so makes good data to use as a base.

## Metadata
Metadata is the data that describes your data. Typically this includes information that the data user will want to know, but which doesn't form part of the actual dataset.
* Metadata includes information such as publisher and/or author, sources and methodology, publication date, licensing information and geographical coverage.
* Don't mix metadata with your data. For instance, don't add extra lines describing sources and caveats to the bottom of your dataset, and don't add a dataset title above your headers. If you feel that you really must do this, denote such comments with a character such as '#'.
* Include metadata on the webpage where your dataset is published. This has the added bonus of making your data easier to find on the Web.
* If you are publishing data for a research project or in a disciplinary area, consider applying [existing metadata standards](http://www.dcc.ac.uk/drupal/resources/metadata-standards).

## Anonymisation and data privacy
* "Personal data" is defined by the Data Protection Act (DPA) as any data which relates to a living individual who can be identified:
    * from those data; or,
    * from those data and other information likely that someone is likely to have access to
* Anonymisation is the process of transforming this data to a form which **does not identify individuals and where identification is not likely to take place.** This allows for wider use of the information, including publication and wider sharing, as the DPA no longer applies to the data, as it is now non-personal.
* Publication processes for data relating to individuals must ensure that there is no reasonable likelihood that a person can be re-identified from the anonymised data.
* Anonymisation techniques should cover:
    1. The removal or obfuscation of direct identifiers. These are single pieces of information (such as names, addresses and other highly identifiable information) that can be use to identify someone on its own.
    2. The removal or obfuscation of indirect identifiers. These are pieces of information that on their own could not identify an individual person, but lead to an increased risk of identification because it is unusual, part of a small group of individuals, or can be used in combination with other information or knowledge (e.g. acquaintance with the group).
    3. The removal or obfuscation of combinations of variables that could identify an individual by returning a single result.

# Further reading
* [ODI Guides](http://theodi.org/guides)
