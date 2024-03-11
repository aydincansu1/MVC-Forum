import axios from "axios";
import { toast } from "react-toastify";

export default class CreateModel {
  async createPost(newPost) {
    try {
      await axios.post("http://localhost:3040/post", newPost);
      toast.success("Gonderi Basariyla Kaydedildi");
    } catch (err) {
      toast.error("Gonderi Kaydedilirken bir hata olustu");
      console.log(err);
    }
  }
}
