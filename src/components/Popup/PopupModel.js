import axios from "axios";
import { toast } from "react-toastify";

export default class PopupModel {
  // parametre olarak aldigi kullanicinin gonderilerini api'dan alir
  async getUserPost(username) {
    try {
      const res = await axios.get(
        `http://localhost:3040/post?user=${username}`
      );

      return res.data;
    } catch (err) {
      toast.error("Gönderilere Erişilemedi");
      console.log(err);
    }
  }
}
