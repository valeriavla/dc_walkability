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

## Website

These visualizations as well as a more detailed write-up of the problem statement can be found at: https://valeriavl.georgetown.domains/503/

### Repository structure
This repository has the following structure:

```.
├── README.md
├── code/
├── data/
├──── /cleaned_data/
├── img/
└── website/
```

## Code

## Files

## Datasets
All data used for this project can be found within the `/data` directory. Unmodified raw data can be found within `/data/raw_data`, and any data that was manipulated and cleaned for the purpose of visualizations can be found within `data/cleaned_data`. Since majority of the raw data files were so large, they have been compressed in order to make it easier for hosting online. Descriptions of each dataset and its associated files:

* Dataset name: [EPA's Walkability Index](https://catalog.data.gov/dataset/walkability-index)
  * `data/raw_data/EPA_SmartLocationDatabase_V3_Jan_2021_Final.csv`
    * Large datafile has been compressed. This contains all of the walkability index scores for every Census Block in the United States. 
* Dataset Name: [U.S. Census Bureau Community Resilience Estimates](https://www.census.gov/programs-surveys/community-resilience-estimates.html)
  * `data/raw_data/cre_equity_census_tract_data.csv`
    * Large datafile has been compressed. This contains socioeconomic outcomes for every Census Block in the United States.

