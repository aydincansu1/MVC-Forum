import { useEffect, useState } from "react";
import PopupView from "./PopupView";
import PopupModel from "./PopupModel";

const PopupController = ({ user, close }) => {
  const [userPosts, setUserPosts] = useState([]);

  // modelden ornek al
  const model = new PopupModel();
  // pencere acildiginda kullanicinin gonderilerini alir
  useEffect(() => {
    model.getUserPost(user).then((data) => setUserPosts(data));
  }, []);
  return <PopupView close={close} user={user} userPosts={userPosts} />;
};

export default PopupController;
