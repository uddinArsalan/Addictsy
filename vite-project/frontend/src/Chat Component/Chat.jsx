import Talk from "talkjs";
import { useEffect, useState, useRef, forwardRef } from "react";
import { ContactsList } from "../Users";
import Contacts from "../Contacts/Contacts";
import { useUserData } from "./useUserData";
console.log(import.meta.env.VITE_APP_ID);

export default function MyChatComponent() {
  const userObjectData = useUserData();
  const talkjsRef = useRef();
  const contactsListRefs = useRef([]);
  const [updatedContactList, setContactsList] = useState(ContactsList);
  

  useEffect(() => {
    // check if userObjectData has been updated or not 
    if (userObjectData.name !== "User Not Found") {
      setContactsList((prevContacts) => [userObjectData, ...prevContacts]);
    }
  }, [userObjectData]);

  // wait for TalkJS to load
  const [talkLoaded, markTalkLoaded] = useState(false);

  useEffect(() => {
    Talk.ready.then(() => markTalkLoaded(true));

    if (talkLoaded) {
      let me = new Talk.User(userObjectData);

      const session = new Talk.Session({
        appId: import.meta.env.VITE_APP_ID,
        me: me,
      });
      const chatbox = session.createChatbox();
      chatbox.mount(talkjsRef.current);

      const handleContactClick = (index) => {
        chatbox.select(conversations[index]);
      };
      // Create conversationBuilder objects for each user
      const conversations = updatedContactList.map(function (user, index) {
        const talkUser = new Talk.User(user);

        const conversation = session.getOrCreateConversation(
          Talk.oneOnOneId(me, talkUser)
        );
        conversation.setParticipant(me);
        conversation.setParticipant(talkUser);

        return conversation;
      });
      updatedContactList.forEach((user, index) => {
        // Attach click handlers using the element's ref
        contactsListRefs.current[index]?.addEventListener("click", () => {
         handleContactClick(index)
        });
      });

      return () => session.destroy();
    }
  }, [talkLoaded,updatedContactList,userObjectData]);

  //inbox-feed-panel and inbox-chat-panel.
  return (
    <div className="grid grid-cols-4">
      <div className="flex flex-col gap-4 bg-blue-400">
        <h1 className="text-center font-semibold mt-4 md:font-bold text-xl sm:text-2xl md:text-3xl">
          Contacts
        </h1>
        {updatedContactList.map((element, index) => {
          return (
            <Contacts ref={(el) => (contactsListRefs.current[index] = el)} img={element.photoUrl} isMe={element.role} name={element.name} key={index} />
          );
        })}
      </div>
      <div
        id="talkjs-container"
        ref={talkjsRef}
        className="col-span-3 rounded-none sticky h-screen top-0"
      >
        <div></div>
      </div>
    </div>
  );
}
