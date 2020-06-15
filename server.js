var express = require("express");
var app = express();

app.set("port", process.env.PORT || 3001);
app.use(express.static(__dirname + "/build"));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "/build/index.html"));
});

app.listen(app.get("port"), function () {
  console.log("Node app is running at localhost:" + app.get("port"));
});
