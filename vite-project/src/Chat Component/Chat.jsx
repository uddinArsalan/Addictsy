import Talk from "talkjs";
import { useEffect, useState, useRef } from "react";
import { contactsList } from "../Users";
import Contacts from "../Contacts/Contacts";
import logo from "../logo/png/logo-no-background.png";
import { Link } from "react-router-dom";
import { useAuthContext } from "../Context/UserContext";
// import { useMediaQuery } from "react-responsive";

export default function MyChatComponent() {
  const users = useAuthContext();
  // const [show, setShow] = useState(false);
  // const screenWidth = useMediaQuery({
  //   query: "(min-width: 768px)",
  // });
  const Contact = contactsList.map((element) => {
    return (
      <Contacts img={element.photoUrl} name={element.name} key={element.id} />
    );
  });

  // wait for TalkJS to load
  const [talkLoaded, markTalkLoaded] = useState(false);

  useEffect(() => {
    Talk.ready.then(() => markTalkLoaded(true));

    if (talkLoaded) {
      const random = Math.floor((Math.random() * 8) + 1)
      console.log(random)
      let me = new Talk.User({
        id: "0",
        name: users.name || "Arsalan",
        photoUrl: `https://talkjs.com/images/avatar-${random}.jpg`,
        role: "default",
      });

      // let me = new Talk.User({
      //   id: "0",
      //   name: "Arsalan",
      //   photoUrl: "https://talkjs.com/images/avatar-5.jpg",
      // });

      const session = new Talk.Session({
        appId: "tngwoxsK",
        me: me,
      });
      const chatbox = session.createChatbox();
      chatbox.mount(document.querySelector("#talkjs-container"));

      // Create conversationBuilder objects for each user
      const conversations = contactsList.map(function (user, index) {
        const talkUser = new Talk.User(user);

        const conversation = session.getOrCreateConversation(
          Talk.oneOnOneId(me, talkUser)
        );
        conversation.setParticipant(me);
        conversation.setParticipant(talkUser);

        return conversation;
      });

      let contactsListDivs = document.querySelectorAll(".contacts-list");
      conversations.forEach(function (conversation, index) {
        contactsListDivs[index].addEventListener("click", function () {
          chatbox.select(conversation);
        });
      });

      return () => session.destroy();
    }
  }, [talkLoaded]);

  //inbox-feed-panel and inbox-chat-panel.
  return (
    <div className="grid grid-cols-4">
      {/* {show | screenWidth ? ( */}
        <div className="flex flex-col bg-blue-400">
          <div className="flex ">
            <Link to="/">
              <img src={logo} alt="" className=" bg-blue-500 h-16 w-96" />
            </Link>
          </div>
          <h1 className="text-center font-semibold md:font-bold text-xl sm:text-2xl md:text-3xl">
            Contacts
          </h1>
          {Contact}
        </div>
      {/* ) : (
        ""
      )} */}
      {/* {(screenWidth & show) && */}
      <div
        id="talkjs-container"
        className="col-span-3 rounded-none sticky h-screen top-0 text-white"
        // onClick={() => setShow((prev) => !prev)}
      >
        <div></div>
      </div>
     {/* }  */}
    </div>
  );
}
