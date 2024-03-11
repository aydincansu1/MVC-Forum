import { useNavigate } from "react-router-dom";
import CreateModel from "./CreateModel";
import CreateView from "./CreateView";
import { v4 } from "uuid";
const CreateController = () => {
  // modelden ornek al
  const model = new CreateModel();

  // navigate kurulumu yaptik
  const navigate = useNavigate();

  // form gonderildiginde calisacak olan fonksiyon
  const handleSubmit = (e) => {
    e.preventDefault();

    // 1) inputlardaki verileri alip bir post nesnesi olustur
    const form = new FormData(e.target);
    const newPost = Object.fromEntries(form.entries());

    // 2) post nesnesine id degeri ekle
    newPost.id = v4();

    // 3) apiye veriyi kaydet ve anasayfaya yonlendir
    model.createPost(newPost).then(() => navigate("/"));
  };

  // controller sadece view bilesenini dondurur
  return <CreateView handleSubmit={handleSubmit} />;
};

export default CreateController;
