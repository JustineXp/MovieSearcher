const express = require("express");
const app = express();
const request = require("request");

app.set("view engine", "ejs");

app.get("/search", (req, res) => {
  res.render("search");
});

app.get("/result", (req, res) => {
  var query = req.query.search;
  var url = "http://www.omdbapi.com/?s=" + query + "&apikey=b42bf348";
  console.log(query);
  request(url, (error, response, body) => {
    if (!error && response.statusCode == 200) {
      let data = JSON.parse(body);
      console.log(data);
      console.log(data["search"]);
      res.render("result", { data: data });
    } else {
      console.log(error);
    }
  });
});

app.listen(3000, (req, res) => {
  console.log("Server Running on Port 3000");
});
