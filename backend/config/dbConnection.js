const mongoose = require('mongoose')
import { URI } from './config'

mongoose
  .connect(URI, { useNewUrlParser: true })
  .then(() => {
    console.log("Database conected");
  })
  .catch((e) => {
    console.log(e)
  });

module.exports = mongoose;
