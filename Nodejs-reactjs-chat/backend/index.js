const express = require("express"); //import express to run the http server
const cors = require("cors"); //allows us to run from any origin
const { default: axios } = require("axios");
const { response } = require("express");

const app = express();
app.use(express.json());
app.use(cors({ origin: true }));

app.post("/authenticate", async (req, res) => { //takes a username and returns a fake user with username and password
  const { username } = req.body; //getting username
  try {
    const r = await axios.put(  
        "https://api.chatengine.io/users/", // if they already exist we get if not we create
        {username: username, secret: username,first_name : username},
        {headers: {"private-key": "e6aa517d-ea0d-4bec-9af7-a9f4a9afbca5"}}//getting/creating a user object when authenticate is used

    );
    return res.status(r.status).json(r.data);
  } catch (e) {
    return res.status(e.response.status).json(e.response.data);
  }  
});


app.listen(3001); //running on port 3001