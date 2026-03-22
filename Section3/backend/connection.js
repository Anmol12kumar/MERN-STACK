const mongoose = require('mongoose');
const dns = require("node:dns/promises");

const url = ''

mongoose.connect(url)
    .then((result) => console.log('connected to database'))
    .catch((err) => console.log(err));