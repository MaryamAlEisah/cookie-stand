"use strict";
console.log("hello");
let hours = [
  "6am",
  "7am",
  "8am",
  "9am",
  "10am",
  "11am",
  "12pm",
  "1pm",
  "2pm",
  "3pm",
  "4pm",
  "5pm",
  "6pm",
  "7pm",
];
let list = document.getElementById("lists1");
function avgCust(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
// global array
let locations = [];

//Constructor function

function SalmonCookies(
  locationName,
  minCustPerHour,
  maxCustPerHour,
  avgCookiesPerCust
) {
  this.locationName = locationName;
  this.minCustPerHour = minCustPerHour;
  this.maxCustPerHour = maxCustPerHour;
  this.avgCookiesPerCust = avgCookiesPerCust;

  this.custPerHour = [];
  this.cookiesPerHour = [];
  this.totalCookiesPerDay = 0;

  // pushing the created objects

  locations.push(this);
}

SalmonCookies.prototype.calcustPerHour = function () {
  for (let i = 0; i < hours.length; i++) {
    this.custPerHour.push(
      Math.floor(
        Math.random() * (this.maxCustPerHour - this.minCustPerHour + 1)
      ) + this.minCustPerHour
    );
  }

  console.log(this.custPerHour);
};

SalmonCookies.prototype.calcookiesPerHour = function () {
  this.calcustPerHour();
  for (let i = 0; i < hours.length; i++) {
    this.cookiesPerHour.push(
      Math.floor(this.avgCookiesPerCust * this.custPerHour[i])
    );

    this.totalCookiesPerDay += this.cookiesPerHour[i];
  }

  // cal total cookies
}

//Salmon cookies prototype fun

SalmonCookies.prototype.Locations = function () {
  console.log(
    this.locationName +
      this.minCustPerHour +
      this.minCustPerHour +
      this.maxCustPerHour +
      this.avgCookiesPerCust
  );
};
let seattle = new SalmonCookies("Seattle", 23, 65, 6.3);
seattle.Locations();

let tokyo = new SalmonCookies("Tokyo", 3, 24, 1.2);

tokyo.Locations();
let dubai = new SalmonCookies("Dubai", 11, 38, 3.7);
dubai.Locations();

let paris = new SalmonCookies("Paris", 3, 24, 1.2);
paris.Locations();

let lima = new SalmonCookies("Lima", 3, 24, 1.2);
lima.Locations();

console.log(locations);
// for loop , array locations

//Dom

let table = document.getElementById("table");
//         console.log(parent);

// let table = document.createElement('table');
//      parent.appendChild('table');

// header fun

function makeHeader() {
  let headerRow = document.createElement("tr");
  table.appendChild(headerRow);

  let firstTh = document.createElement("th");
  headerRow.appendChild(firstTh);
  firstTh.textContent = "Name";

  // print hours
  for (let i = 0; i < hours.length; i++) {
    let thElement = document.createElement("th");
    headerRow.appendChild(thElement);
    thElement.textContent = hours[i];
  }
  let lastTh = document.createElement("th");
  headerRow.appendChild(lastTh);
  lastTh.textContent = "Daily Location Total";
}

makeHeader();

// table data

SalmonCookies.prototype.render = function () {
  this.calcookiesPerHour();

  console.log(this.custPerHour);

  let dataRow = document.createElement("tr");
  table.appendChild(dataRow);

  let nameData = document.createElement("td");
  dataRow.appendChild(nameData);
  nameData.textContent = this.locationName;

  for (let i = 0; i < hours.length; i++) {
    let tdElement = document.createElement("td");
    dataRow.appendChild(tdElement);

    tdElement.textContent = this.cookiesPerHour[i];
  }

  let totalDataforeachlocation = document.createElement("td");
  dataRow.appendChild(totalDataforeachlocation);

  totalDataforeachlocation.textContent = this.totalCookiesPerDay;
};

for (let i = 0; i < locations.length; i++) {
  locations[i].render();
}

console.log(locations);

// create fun for table footer

function makeFooter() {
  let footerRow = document.createElement("tr");
  table.appendChild(footerRow);

  let firstTh = document.createElement("th");
  footerRow.appendChild(firstTh);
  firstTh.textContent = "Totals";

  let tot = 0;

  for (let i = 0; i < hours.length; i++) {
    let totalCookiesPerHour = 0;

  for (let j = 0; j < locations.length; ++j) {
        totalCookiesPerHour += locations[j].cookiesPerHour[i];


  }

let footerThtotal = document.createElement('th');
footerRow.appendChild(footerThtotal);
footerThtotal.textContent=totalCookiesPerHour;
tot += totalCookiesPerHour;



}

console.log(tot);
}

// print hours


makeFooter();

