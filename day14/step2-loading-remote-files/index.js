const axios = require("axios")
const fs = require("fs")

axios.get("http://www.valtech.com/").then(res => fs.writeFileSync("temp/axtempv.html", res.data, "utf-8"))
.catch(error => console.log(error));