#REST API for http based metrics visualization dashboard 

**Get Time Series**
----
  Returns time series data by id, tag, or time range.

* **URL**

  /data

* **Method:**

  `GET`
  
*  **URL Params**

     **Optional:**
 
   `id=[integer]`
   `startDate=[Date]`
   `endDate=[Date]`
   `tag=[string]`

* **Data Params**

  None

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `{ id : 1, Date: "March 30 2019",tag:"happy", value: 5  }`
 
* **Error Response:**

  * **Code:** 404 NOT FOUND <br />
    **Content:** `{ error : "Data doesn't exist" }`


* **Sample Call:**

GET localhost:5000/data?tag=happy&startDate="1992-05-01"
GET localhost:5000/data?id=1&endDate="1992-05-01"
GET localhost:5000/data?tag=happy&startDate="1992-05-01"&endDate="1992-05-01"
 
  #  How To Run
  
  Clone or download the repo <br />
  Make sure you have Node and NPM installed both: node -v && npm -v. <br />
  Install packages: npm install <br />
  Run server: node_modules/.bin/babel-node app.js <br />

  #  Tools
 This will be a Single Page App built with React.js frontend, Node.js for server-side scripting, and Redux for state management. 
 
 We'll follow Material Design practice and use Material UI Framework for the interface. For charts and visualizations, we can use the react-apexcharts package.
 
 
   #  User Interface
  User can input ID or tag filtered by date for queries. 
  
  On query submit, dashboard will populated with visualization of the time series data, or displayed a message saying "no result found." 
  
  On laptop/PC, The dashboard displays up to 6 visualizations, and users can click on a visualization to full screen mode to view details. 
  
  If more than 6 visualizations are needed, dashboard content will shuffle every minute when no user activity is detected, with the option to switch to different pages with navigation button.
  
  For each visualization, there will be a button to calculate average given a time range (default is the whole range).

# Requirement/Limitations
 A dummy database is used in this short project. 
 
 example data:
 const data = [
	{
		id:1,
		value:5,
		tag:"happy",
		date:new Date()
	}
]

all fields are required.
 
 
 
 