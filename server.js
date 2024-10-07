const express = require("express");
const cookiearser = require("cookie-parser");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const PORT = process.env.PORT || 5000;

const UserRoute = require("./Routes/user.route");
const EventRoute = require("./Routes/Event.route");

require("dotenv").config();
app.use(cookiearser());
require("./config/db");


app.use("/api/v1", UserRoute);
app.use("/api/v2/event", EventRoute);



app.get("/", (req, res) => {
  res.send(
    "<center><h1>Event Management All Apis</h1><br>Get All Api <a href=https://github.com/Devanshiballar/Event-Management.git target=_blank>Repository :- Event Management System</></center>"
  );
});

app.listen(PORT ,() => console.log(`Server is running on port ${PORT}!`));
