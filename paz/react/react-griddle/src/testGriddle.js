var React = require('react');
var Griddle = require('griddle-react');

var fakeData = [
  {
    "id": 0,
    "name": "Bob Weir Test",
    "city": "Kapowsin",
    "state": "Hawaii",
    "country": "United Kingdom",
    "company": "Ovolo",
    "favoriteNumber": 7
  },
  {
    "id": 1,
    "name": "Jerry Garcia",
    "city": "Johnsonburg",
    "state": "New Jersey",
    "country": "Madagascar",
    "company": "Eventage",
    "favoriteNumber": 2
  },
  {
    "id": 2,
    "name": "Lowery Hopkins",
    "city": "Blanco",
    "state": "Arizona",
    "country": "Ukraine",
    "company": "Comtext",
    "favoriteNumber": 3
  },
  {
    "id": 3,
    "name": "Walters Mays",
    "city": "Glendale",
    "state": "Illinois",
    "country": "New Zealand",
    "company": "Corporana",
    "favoriteNumber": 6
  },
  {
    "id": 4,
    "name": "Shaw Lowe",
    "city": "Coultervillle",
    "state": "Wyoming",
    "country": "Ecuador",
    "company": "Isologica",
    "favoriteNumber": 2
  }
];

React.render(<Griddle results={fakeData} />, document.getElementById('main'));
