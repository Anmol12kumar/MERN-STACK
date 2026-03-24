const mongoose = require('mongoose');
const dns = require("node:dns/promises");
dns.setServers(["1.1.1.1", "8.8.8.8"]);

const url = 'mongodb+srv://guptaanmolkumar37:Anmol89@mern-stack-web.z0lszsx.mongodb.net/?appName=MERN-stack-web'

mongoose.connect(url)
.then((result) => {
    console.log('database connected');
})
.catch((err) => {
    console.log(err);
});

module.exports = mongoose;n 