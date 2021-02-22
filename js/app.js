'use strict';
const Seattle = {
  name: 'Seattle',
  minCus: 23,
  maxCus: 65,
  avgCookieSale: 6.3,
  cookies: [],
  customersPerHour: [],
  sum: 0,
  times: ['6am: ', '7am: ', '8am: ', '9am: ', '10am: ', '11am: ', '12pm: ', '1pm: ', '2pm: ', '3pm: ', '4pm: ', '5pm: ', '6pm: ', '7pm: '],
  random: function () {
    return generateRandomNumber(this.minCus, this.maxCus);
  },
  render: function () {
    for (let i = 0; i < 14; i++) {
      let b = this.random(this.minCus, this.maxCus);
      this.customersPerHour.push(b);
      this.cookies.push(Math.ceil(this.avgCookieSale * b));
      this.sum += this.cookies[i];
    }
    const country1 = document.getElementById('sal'); //
    const h2Element = document.createElement('h2');//
    h2Element.textContent = this.name;//
    country1.appendChild(h2Element);//
    const ulElement = document.createElement('ul');
    ulElement.setAttribute('class', 'grood');
    country1.appendChild(ulElement);
    for (let j = 0; j < this.cookies.length; j++) {
      const liElement = document.createElement('li');
      ulElement.appendChild(liElement);
      liElement.textContent = `${this.times[j]}${this.cookies[j]} cookies`;
    }
    const total = document.createElement('li');
    total.textContent = `Total: ${this.sum} cookies`;
    ulElement.appendChild(total);

  },

};
const Tokyo = {
  name: 'Tokyo',
  minCus: 3,
  maxCus: 24,
  avgCookieSale: 1.2,
  cookies: [],
  customersPerHour: [],
  sum: 0,
  times: ['6am: ', '7am: ', '8am: ', '9am: ', '10am: ', '11am: ', '12pm: ', '1pm: ', '2pm: ', '3pm: ', '4pm: ', '5pm: ', '6pm: ', '7pm: '],
  random: function () {
    return generateRandomNumber(this.minCus, this.maxCus);
  },
  render: function () {
    for (let i = 0; i < 14; i++) {
      let b = this.random(this.minCus, this.maxCus);
      this.customersPerHour.push(b);
      this.cookies.push(Math.ceil(this.avgCookieSale * b));
      this.sum += this.cookies[i];
    }
    const country1 = document.getElementById('sal');
    const h2Element = document.createElement('h2');
    h2Element.textContent = this.name;
    country1.appendChild(h2Element);
    const ulElement = document.createElement('ul');
    country1.appendChild(ulElement);
    for (let j = 0; j < this.cookies.length; j++) {
      const liElement = document.createElement('li');
      ulElement.appendChild(liElement);
      liElement.textContent = `${this.times[j]}${this.cookies[j]} cookies`;
    }
    const total = document.createElement('li');
    total.textContent = `Total: ${this.sum} cookies`;
    ulElement.appendChild(total);

  },

};
const Dubai = {
  name: 'Dubai',
  minCus: 11,
  maxCus: 38,
  avgCookieSale: 3.7,
  customersPerHour: [],
  cookies: [],
  sum: 0,
  times: ['6am: ', '7am: ', '8am: ', '9am: ', '10am: ', '11am: ', '12pm: ', '1pm: ', '2pm: ', '3pm: ', '4pm: ', '5pm: ', '6pm: ', '7pm: '],
  random: function () {
    return generateRandomNumber(this.minCus, this.maxCus);
  },
  render: function () {
    for (let i = 0; i < 14; i++) {
      let b = this.random(this.minCus, this.maxCus);
      this.customersPerHour.push(b);
      this.cookies.push(Math.ceil(this.avgCookieSale * b));
      this.sum += this.cookies[i];
    }
    const country1 = document.getElementById('sal');
    const h2Element = document.createElement('h2');
    h2Element.textContent = this.name;
    country1.appendChild(h2Element);
    const ulElement = document.createElement('ul');
    country1.appendChild(ulElement);
    for (let j = 0; j < this.cookies.length; j++) {
      const liElement = document.createElement('li');
      ulElement.appendChild(liElement);
      liElement.textContent = `${this.times[j]}${this.cookies[j]} cookies`;
    }
    const total = document.createElement('li');
    total.textContent = `Total: ${this.sum} cookies`;
    ulElement.appendChild(total);

  },

};
const Paris = {
  name: 'Paris',
  minCus: 20,
  maxCus: 38,
  avgCookieSale: 2.3,
  cookies: [],
  customersPerHour: [],
  sum: 0,
  times: ['6am: ', '7am: ', '8am: ', '9am: ', '10am: ', '11am: ', '12pm: ', '1pm: ', '2pm: ', '3pm: ', '4pm: ', '5pm: ', '6pm: ', '7pm: '],
  random: function () {
    return generateRandomNumber(this.minCus, this.maxCus);
  },
  render: function () {
    for (let i = 0; i < 14; i++) {
      let b = this.random(this.minCus, this.maxCus);
      this.customersPerHour.push(b);
      this.cookies.push(Math.ceil(this.avgCookieSale * b));
      this.sum += this.cookies[i];
    }
    const country1 = document.getElementById('sal');
    const h2Element = document.createElement('h2');
    h2Element.textContent = this.name;
    country1.appendChild(h2Element);
    const ulElement = document.createElement('ul');
    country1.appendChild(ulElement);
    for (let j = 0; j < this.cookies.length; j++) {
      const liElement = document.createElement('li');
      ulElement.appendChild(liElement);
      liElement.textContent = `${this.times[j]}${this.cookies[j]} cookies`;
    }
    const total = document.createElement('li');
    total.textContent = `Total: ${this.sum} cookies`;
    ulElement.appendChild(total);

  },

};
const Lima = {
  name: 'Lima',
  minCus: 2,
  maxCus: 16,
  avgCookieSale: 4.6,
  cookies: [],
  customersPerHour: [],
  sum: 0,
  times: ['6am: ', '7am: ', '8am: ', '9am: ', '10am: ', '11am: ', '12pm: ', '1pm: ', '2pm: ', '3pm: ', '4pm: ', '5pm: ', '6pm: ', '7pm: '],
  random: function () {
    return generateRandomNumber(this.minCus, this.maxCus);
  },
  render: function () {
    for (let i = 0; i < 14; i++) {
      let b = this.random(this.minCus, this.maxCus);
      this.customersPerHour.push(b);
      this.cookies.push(Math.ceil(this.avgCookieSale * b));
      this.sum += this.cookies[i];
    }
    const country1 = document.getElementById('sal');
    const h2Element = document.createElement('h2');
    h2Element.textContent = this.name;
    country1.appendChild(h2Element);
    const ulElement = document.createElement('ul');
    country1.appendChild(ulElement);
    for (let j = 0; j < this.cookies.length; j++) {
      const liElement = document.createElement('li');
      ulElement.appendChild(liElement);
      liElement.textContent = `${this.times[j]}${this.cookies[j]} cookies`;
    }
    const total = document.createElement('li');
    total.textContent = `Total: ${this.sum} cookies`;
    ulElement.appendChild(total);

  },

};

Seattle.render();
Tokyo.render();
Dubai.render();
Paris.render();
Lima.render();
console.log(Seattle.customersPerHour);



function generateRandomNumber(min, max) {
  return Math.ceil(Math.random() * (max - min + 1) + min);
}
