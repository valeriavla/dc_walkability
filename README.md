# A Visual Exploration of Walkability in Washington, D.C.

## Team

Team 14 is comprised of: 
* Corrina Calanoc
* Cynthia Ng
* Katherine Mead
* Madelyne Ventura
* Valeria Vera Lagos

## Executive Summary 

Walkability is the ease with which people can access amenities in a place without the use of cars. It is associated with positive outcomes in health, community, sustainability, and the economy. A report by the Institute for Transportation and Development Policy evaluated the walkability of major global cities and the only city to make the top 25 in any category was Washington, D.C. This project aims to provide a visual narrative that overviews the *walks through* the following research questions:

Research Questions:

1. How is walkability associated with socioeconomic and health outcomes?
2. How accessible are neighborhoods by bike?
3. What is public sentiment around walkability and driving

## Description of all your code files, datasets, etc.

Code Files:
* Within `/code` are separate jupyter notebooks written in Python that were used to conduct separate analyses on:
  * Bike rides and bike lanes
  * WMTA rides per station
  * Walkability scores and socioeconomic outcomes data
  * Walkability scores and health outcomes data
  * Sentiment analysis of Walkability and transportation methods
  
These jupyter notebooks were each rendered into a .qmd file and those were compiled into one .qmd file to be later converted into an HTML. 

Datasets:
* U.S. Environmental Protection Agency Walkability: A GeoPandas dataframe was created from a GeoJSON file of D.C. and joined with the Walkability Index and Community Resilience data using Census Tract IDs. All outcome columns were rescaled to 0-100 to ensure consistent scales for visualizations.
* PLACES Census: The PLACES Census dataset was filtered to only include D.C. data. The columns were also renamed for more interpretability.
* Bikeshare & Bike Lane Analysis: In the Capital Bikeshare dataset, the latitude and longitude values were standardized for each bike station and stations outside of the D.C. boundary were removed. Rows with incomplete trip values were removed as well. A map of the bike lanes in the city was brought in by a GeoJSON file.
* Reddit Webscraped data: Used a webscraper to scrape Reddit posts within the /washingtondc thread. In this analysis, the text was preprocessed using the NLTK library to fine-tune a BERT sentiment analyzer and obtain sentiment scores. These scores were then analyzed by topic (Car, Walk, Bike). 


## Website

These visualizations as well as a more detailed write-up of the problem statement can be found at: https://valeriavl.georgetown.domains/503/

### Repository structure
This repository has the following structure:

```.
├── README.md
├── code/
├── data/
├──── /cleaned_data/
├──── /raw_data/
├── img/
└── website/
```
