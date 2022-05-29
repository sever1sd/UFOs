// import data from data.js
const tableData = data;

// reference the html table using d3
var tbody = d3.select("tbody");

function buildTable(data){
    //first clears out existing data
    tbody.html("");

    // loopss through each ojbect in the data
    // appends a row and clel for each value in the row
    data.forEach((dataRow) => {
        let row = tbody.append("tr");

        //loop through each field in the dataRow
        //add each value as a table cell(td)
        Object.values(dataRow).forEach((val) => {
          let cell = row.append("td");
          cell.text(val);
          }
        );
      });
};

function handleClick() {
    //grab the date time value from the filter
    let date = d3.select("#datetime").property("value");
    let filteredData = tableData;

    //check if a date was entered and filter 
    //data using that date
    if (date) {
        filteredData = filteredData.filter(row => row.datetime === date);
    };
    
    //rebuilt table using filtered data
    //@note: if no date was entered, then filteredData
    // will just be original tableData
    buildTable(filteredData);
};

//attach an event to listen for the form button
d3.selectAll("#filter-btn").on("click", handleClick);

//build the table when the page loads
buildTable(tableData);