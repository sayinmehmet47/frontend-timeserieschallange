# Frontend Time Series Challenge

## Intro

Axpo's Hydro Division is integrating IoT data to their internal data platform. Our goal is to analyze different time
series which represent various signals of different assets
(e.g. power of a transformer, etc.)

To do that, we decided to engage you to develop a tool that will help us visualize and analyze our time series.

**Please invest no more than 5 to 8 hours.**
If you cannot complete the task in this time frame, document where you got stuck, so we can use this as a basis for
discussion for your next interview.

## Your mission, should you choose to accept it:

### Initial position

- Data dumps contained in this repository:
  assets <-> signals <-> time series
- Our backend programming language is Python (fastapi) and frontend framework is nextjs. But you are free to choose whatever languages, packages and tools
  you need for this challenge.

### Step 1

Use the data dumps and the tools of your choice to create an HTML report that shows the following:

- Selection(s) for Assets and Signals
- Time series visualization of selected time serie(s) with the possibility to zoom, to add and remove different
  signals
- Option to export the visualized data

### Step 2

- Create a Dockerfile that allows other developers to run the application. The idea behind this is that all we need to
  verify the application is a Dockerfile and your assets. It is up to you whether you host the project directly from the
  running Docker container or create a folder with the assets that can be used without a web server.

## Evaluation criteria

What we're looking for:

- Clean project setup
- The ability to determine the actual problem area and find a suitable solution
- Relevant tests for your code
- Scratch features when necessary, time is short!
- Document your approach, your decisions, and your general notes

## Preparations for interview

- open your IDE
- have a running version of your app ready
- prepare to present your approach for 5-10 min
- be prepared to answer a few questions after your presentation

//

- When you try to test a component which uses CSV import handled by csv-loader plugin you will find out that this is not as straight forward as you expect. While Jest is a very well documented I didn't find any example of a simple custom transformer which is necessary to handle CSV imports in tested code.
