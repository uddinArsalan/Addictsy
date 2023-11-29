import React from "react";
import axios from "axios";

const Request = ({ name, email, id }) => {
  const userData = {
    name: name,
    email: [email],
    photoUrl: "https://yoursite.com/userpictures/12081.png",
    welcomeMessage: "Hey there! :-)",
    role: "buyer",
  };
  const conversation = {
    participants: ["12081", "8029"],
    subject: "What a lovely day!",
    custom: { category: "order_inquiry" },
  };
  const createUserOnServer = async () => {
    try {
      const response = await axios.put(
        `http://localhost:3000/create-user/${id}`,
        { userData }
      );
      console.log("User creation response:", response.data);
      // Handle the response data if needed
    } catch (error) {
      console.error("Error creating user:", error);
      // Handle errors
    }
  };
  const createConversation = async () => {
    try {
      const response = await axios.put(
        "http://localhost:3000/create-conversation",
        { conversation }
      );
      console.log("Users conversation response:", response.data);
      // Handle the response data if needed
    } catch (error) {
      console.error("Error creating user:", error);
      // Handle errors
    }
  };

  return (
    <>
      <div onClick={createUserOnServer}>Request</div>
      <div onClick={createConversation}>Conversation</div>
    </>
  );
};

export default Request;
