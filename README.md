#REST API for http based metrics visualization dashboard 

**Get Data By ID**
----
  Returns time series data by id

* **URL**

  /data/:id 

* **Method:**

  `GET`
  
*  **URL Params**

   **Required:**
 
   `id=[integer]`
   
     **Optional:**
 
   `startDate=[Date]`
   `endDate=[Date]`

* **Data Params**

  None

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `{ id : 1, Date: "March 30 2019",tag:"happy", value: 5  }`
 
* **Error Response:**

  * **Code:** 404 NOT FOUND <br />
    **Content:** `{ error : "Data doesn't exist" }`

  OR

  * **Code:** 401 UNAUTHORIZED <br />
    **Content:** `{ error : "You are unauthorized to make this request." }`

* **Sample Call:**

  ```javascript
    $.ajax({
      url: "/data/1",
      dataType: "json",
      type : "GET",
      success : function(r) {
        console.log(r);
      }
    });
  ```
 

**Get Data By Tag**
----
  Returns time series data by tag

* **URL**

  /data/:tag

* **Method:**

  `GET`
  
*  **URL Params**

   **Required:**
 
   `tag=[string]`
   
    **Optional:**
 
   `startDate=[Date]`
   `endDate=[Date]`


* **Data Params**

  None

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `{ id : 1, Date: "March 30 2019", tag:"happy" , value: 5}`
 
* **Error Response:**

  * **Code:** 404 NOT FOUND <br />
    **Content:** `{ error : "Data doesn't exist" }`

  OR

  * **Code:** 401 UNAUTHORIZED <br />
    **Content:** `{ error : "You are unauthorized to make this request." }`

* **Sample Call:**

  ```javascript
    $.ajax({
      url: "/data/happy",
      dataType: "json",
      type : "GET",
      success : function(r) {
        console.log(r);
      }
    });
  ```
  #  Tools
 This will be a Single Page App built with React.js frontend, Node.js for server-side scripting, and Redux for state management. We'll follow Material Design practice and use Material UI Framework for the interface. For charts and visualizations, we can use the react-apexcharts package.
 
  # User Interface
  User can input id or tag filtered by date for queries.
  On query submit, dashboard will populated with visualization of the time series data, or displayed a message saying "no result found." 
  On laptop/PC, The dashboard displays up to 6 visualizations, and users can click on a visualization to full screen mode to view details. 
  If more than 6 visualizations are needed, dashboard content will shuffle every minute when no user activity is detected, with the option to switch to different pages.
  For each visualization, there will be a button to calculate average given a time range (default is the whole range).

 
 