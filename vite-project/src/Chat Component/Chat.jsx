import Talk from "talkjs";
import { useEffect, useState,useRef,useLayoutEffect } from "react";
import { ContactsList } from "../Users";
import Contacts from "../Contacts/Contacts";
import { useUsersDataContext } from "../Context/UserContext";

export default function MyChatComponent() {
  const {db,ref,auth,onValue} = useUsersDataContext();
  const dataCheckRef = useRef(false)
  const [userObjectData,setUserObjectData] = useState({
    id: auth.currentUser.uid,
    name: 'User Not Found',
    photoUrl: `https://source.unsplash.com/random/50x50/?profile`,
    role: "default"
  });

  console.log(auth.currentUser)

  useLayoutEffect(() => {
    const readRef = ref(db, `users/${auth.currentUser.uid}`);
    onValue(readRef, (snapshot) => {
      const dataValue = snapshot.val();
      setUserObjectData((prev) => {
        return{
          ...prev,
          id : dataValue.id,
          name : dataValue.name,
          photoUrl : dataValue.photoUrl,
          role : dataValue.role
        }
      });
    })
  },[]);

  console.log(userObjectData)

  if(!dataCheckRef.current){
    ContactsList.push(userObjectData);
    dataCheckRef.current = true;
  };

  const Contact = ContactsList.map((element, index) => {
    return <Contacts img={element.photoUrl} name={element.name} key={index} />;
  });


  // wait for TalkJS to load
  const [talkLoaded, markTalkLoaded] = useState(false);

  useEffect(() => {
    Talk.ready.then(() => markTalkLoaded(true));

    if (talkLoaded) {
      let me = new Talk.User(userObjectData);

      const session = new Talk.Session({
        appId: "tngwoxsK",
        me: me,
      });
      const chatbox = session.createChatbox();
      chatbox.mount(document.querySelector("#talkjs-container"));

      // Create conversationBuilder objects for each user
      const conversations = ContactsList.map(function (user, index) {
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
      <div className="flex flex-col bg-blue-400">
        <h1 className="text-center mt-4 font-semibold md:font-bold text-xl sm:text-2xl md:text-3xl">
          Contacts
        </h1>
        {Contact}
      </div>
      <div
        id="talkjs-container"
        className="col-span-3 rounded-none sticky h-screen top-0 text-white"
      >
        <div></div>
      </div>
    </div>
  );
}
