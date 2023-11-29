require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require('body-parser');
const axios = require("axios");
const PORT = process.env.PORT || 3000;
const APP_ID = process.env.APP_ID;
const SECRET_KEY = process.env.SECRET_KEY;

app.use(cors());
app.use(bodyParser.json());

app.put("/create-user/:userId", async (req, res) => {
  try {
    const {userData} = req.body
    console.log(userData)
    const userId = req.params.userId
    const response = await axios.put(
      `https://api.talkjs.com/v1/${APP_ID}/users/${userId}`,
      userData,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${SECRET_KEY}`,
        },
      }
    );
    console.log(response.data); // Access response data
    res.status(200).json({ success: true, data: response.data }); // Send response to the client
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, error: "Internal server error" });
  }
});

app.put("/create-conversation", async (req, res) => {
  try {
    const {conversation} = req.body
    console.log(conversation)
    const response = await axios.put(
      `https://api.talkjs.com/v1/${APP_ID}/conversations/order_391_fc`,
      conversation,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${SECRET_KEY}`,
        },
      }
    );
    console.log(response.data); // Access response data
    res.status(200).json({ success: true, data: response.data }); // Send response to the client
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, error: "Internal server error" });
  }
});



app.listen(PORT, () => {
  console.log("Server is listening at port " + PORT);
});
