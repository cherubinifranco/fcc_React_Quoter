require("dotenv").config();
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require('cors')
import { PORT } from './config/config'

app.use(cors())
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

require("./routes/indexRouter.js")(app);

const listener = app.listen(PORT, () => {
  console.log("App is listening in port " + listener.address().port);
});
