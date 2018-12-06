// Getting a reference to the table body in the html doc
var tbody = d3.select("tbody");
// Steps below from class to get first answer of Homework
// // console data the from data.js
// console.log(data);

// // Loop Through `data` and console.log each object
// data.forEach(function(ufoReport){
//   console.log(ufoReport);
//   });

// se d3 to append one table row `tr` for each weather report object
// data.forEach(function(ufoReport){
//   console.log(ufoReport);
//   var row = tbody.append("tr");
// });

 
// // Step 3:  Use `Object.entries` to console.log each weather report value
// data.forEach(function(ufoReport){
//   console.log(ufoReport);
//   var row = tbody.append("tr");

//   Object.entries(ufoReport).forEach(function([key, value]){
//     console.log(key,value);
//   });
// });

// // Step 4: Use d3 to append 1 cell per weather report value (weekday, date, high, low)
// data.forEach(function(ufoReport){
//   console.log(ufoReport);
//   var row = tbody.append("tr");

//   Object.entries(ufoReport).forEach(function([key, value]){
//     console.log(key, value);
//     var cell = row.append("td");
//   });
// });

// Step 5: Use d3 to update each cell's text
// Answer to first part of part1 Homework
data.forEach(function(ufoReport){
  console.log(ufoReport);
  var row = tbody.append("tr");
  Object.entries(ufoReport).forEach(function([key, value]){
    console.log(key,value);

    var cell = row.append("td");
    cell.text(value);
  });
});





var ufoData = data;

var submit = d3.select("#filter-btn");

submit.on("click",function(){
	d3.event.preventDefault();

	var inputElement = d3.select("#datetime");

	var inputValue = inputElement.property("value");

	// console.log(inputValue);
	// console.log(ufoData);

	var filterData = ufoData.filter(search => search.datetime === inputValue);

	console.log(filterData);


});






















