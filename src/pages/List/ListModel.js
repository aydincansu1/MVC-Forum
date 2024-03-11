import axios from "axios";
// veriyle alakali her turlu yapoiyi modelde tanimlanir
// model olustururken genelde class'lari tercih ederiz

export default class ListModel {
  async getPost() {
    try {
      const res = await axios.get("http://localhost:3040/post");

      return res.data;
    } catch (err) {
      alert("uzgunuz hata olustu");
      console.log(err);
    }
  }
}
