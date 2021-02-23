'use strict';
let sumOfSums = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
const country1 = document.getElementById('sal');
const h1Element = document.createElement('h1');
country1.appendChild(h1Element);
h1Element.textContent = 'These are our sales for today !';
const tableElement = document.createElement('table');
tableElement.id='y';
country1.appendChild(tableElement);
let times = ['City/time','6 am', '7 am', '8 am', '9 am', '10 am', '11 am', '12 pm', '1 pm', '2 pm', '3 pm', '4 pm', '5 pm', '6 pm', '7 pm'];
const firstRow = function(){
  const tr1Element = document.createElement('tr');
  for(let i = 0; i<times.length; i++)
  {
    const thElement = document.createElement('th');
    thElement.textContent = times[i];
    tr1Element.appendChild(thElement);
  }
  const thElement = document.createElement('th');
  thElement.textContent = 'Daily Location Total';
  tr1Element.appendChild(thElement);
  tableElement.appendChild(tr1Element);
};
firstRow();
let mat = ['name'];
function Town(name, minCus, maxCus, avgCookieSale) {
  this[mat[0]] = name;
  this.minCus = minCus;
  this.maxCus = maxCus;
  this.avgCookieSale = avgCookieSale;
  this.cookies = [];
  this.customersPerHour = [];
  this.sum = 0;
}
Town.prototype.random = function() {
  return generateRandomNumber(this.minCus, this.maxCus);
};
Town.prototype.render = function() {
  for (let i = 0; i < 14; i++) {
    let b = this.random(this.minCus, this.maxCus); //random number
    this.customersPerHour.push(b); //pushing the random number
    let d = Math.ceil(this.avgCookieSale * b); //number of cookies
    this.cookies.push(d); //pushing the cookies to the array
    sumOfSums[i] += d;
    sumOfSums[14] += d;
    this.sum += this.cookies[i];
  }
  const trElement = document.createElement('tr');
  const td1Element = document.createElement('td');
  td1Element.textContent = this.name;
  trElement.appendChild(td1Element);
  for (let j = 0; j < this.cookies.length; j++) {
    const tdElement = document.createElement('td');
    trElement.appendChild(tdElement);
    tdElement.textContent = `${this.cookies[j]} cookies`;
  }
  const total = document.createElement('td');
  total.textContent = `${this.sum} cookies`;
  trElement.appendChild(total);
  tableElement.appendChild(trElement);

};

const Seattle = new Town('Seattle',23,65,6.3);
const Tokyo = new Town('Tokyo',3,24,1.3);
const Dubai = new Town('Dubai',11,38,3.7);
const Paris = new Town('Paris',20,38,2.3);
const Lima = new Town('Lima',2,16,4.6);
Seattle.render();
Tokyo.render();
Dubai.render();
Paris.render();
Lima.render();


const lastRow = function(){
  const tr1Element = document.createElement('tr');
  const th1Element = document.createElement('th');
  th1Element.textContent = 'Totals';
  tr1Element.appendChild(th1Element);
  for(let i = 0; i<sumOfSums.length; i++)
  {
    const tdElement = document.createElement('th');
    tdElement.textContent = `${sumOfSums[i]} cookies`;
    tr1Element.appendChild(tdElement);
  }
  tableElement.appendChild(tr1Element);
};
lastRow();
function generateRandomNumber(min, max) {
  return Math.ceil(Math.random() * (max - min + 1) + min);
}
