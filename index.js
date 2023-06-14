const express = require("express");
const app = express();
const port=3030;


app.use("/", require("./routes/index"));


app.listen(port, () => {
    console.log(`Server started on port ${port}`);
  });




