import {useUsersDataContext} from "../Context/UserContext"
import { useState,useEffect } from "react";

export const useUserData = () => {
    const { db, ref, auth, onValue } = useUsersDataContext();
    const [userObjectData, setUserObjectData] = useState({
    id: auth.currentUser.uid,
    name: "User Not Found",
    photoUrl: `https://source.unsplash.com/random/?profile`,
    role: "default",
  });

  
  useEffect(() => {
    const readRef = ref(db, `users/${auth.currentUser.uid}`);
    onValue(readRef, (snapshot) => {
      const dataValue = snapshot.val();
      // console.log(dataValue)
      setUserObjectData((prev) => {
        return {
          ...prev,
          id: dataValue.id,
          name: dataValue.name,
          photoUrl: dataValue.photoUrl,
          role: dataValue.role,
        };
      });
    });
  }, []);

return userObjectData
}