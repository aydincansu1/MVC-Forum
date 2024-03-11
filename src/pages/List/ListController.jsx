import { useEffect, useState } from "react";
import ListModel from "./ListModel";
import ListView from "./ListView";
import Header from "../../components/Header/HeaderView";

const ListController = () => {
  <Header />;
  //satet'ler
  const [posts, setPost] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);

  // class'tan bir ornek olusturduik
  const model = new ListModel();

  // useEffect ile kullanici etkilesimi izledigimizden controller
  // dosyasinda tanimlariz
  useEffect(() => {
    model.getPost().then((data) => setPost(data));
  }, []);
  return (
    <ListView
      selectedUser={selectedUser}
      setSelectedUser={setSelectedUser}
      posts={posts}
    />
  );
};

export default ListController;
