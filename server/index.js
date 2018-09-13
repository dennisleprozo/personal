require("dotenv").config();
const express = require("express"),
  bodyParser = require("body-parser"),
  session = require("express-session"),
  axios = require("axios"),
  ctrlr = require("./controller/auth_controller"),
  schedule = require("./controller/sched_controller"),
  massive = require("massive");

const app = express();




app.use( express.static( `${__dirname}/../build` ) );




let {
  SERVER_PORT,
  SECRET,
  REACT_APP_DOMAIN,
  REACT_APP_CLIENT_ID,
  CLIENT_SECRET,
  CONNECTION_STRING
} = process.env;

massive(CONNECTION_STRING).then(db => {
  app.set("db", db);
});

//middleware
app.use(express.json());
app.use(
  session({
    secret: SECRET,
    resave: false,
    saveUninitialized: true
  })
);

//endpoints
app.get("/auth/callback", async (req, res) => {
  //req.query.code
  const payload = {
    client_id: REACT_APP_CLIENT_ID,
    client_secret: CLIENT_SECRET,
    code: req.query.code,
    grant_type: "authorization_code",
    redirect_uri: process.env.AUTH0
  };

  let resWithToken = await axios.post(
    `https://${REACT_APP_DOMAIN}/oauth/token`,
    payload
  );

  let resWithUserData = await axios.get(
    `https://${REACT_APP_DOMAIN}/userinfo?access_token=${
      resWithToken.data.access_token
    }`
  );

  req.session.user = resWithUserData.data;
  res.redirect("/#/Login");
});

//another endpoint
app.get("/api/user-data", (req, res) => {
  if (req.session.user) {
    res.status(200).send(req.session.user);
  } else {
    res.status(401).send("nice try brotha!");
  }
});

//destroys session at restart
app.get("/logout", (req, res) => {
  req.session.destroy();
  res.redirect(process.env.REACT_APP_REDIRECT);
});

//READ classes from dB
app.get("/api/classes", ctrlr.getAll);
app.get("/api/time", ctrlr.getAllTime);

//CREATE schedule and add times to table:schedule
app.post("/api/schedule", schedule.add);
app.get("/api/schedule", schedule.get);

//UPDATE schedule and add times to table:schedule
app.put("/api/classes", schedule.update);


//DELETE times from table:schedule
app.delete("/api/schedule/:id", schedule.delete);

// const SERVER_PORT = 4000;
app.listen(SERVER_PORT, () => {
  console.log(`Listening at SERVER PORT ${SERVER_PORT}`);
});
