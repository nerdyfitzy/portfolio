import axios from "axios";

const submitData = async (email, message) => {
  if (email == null || message == null)
    return Error("Do not leave fields blank");
  try {
    const res = await axios.post("http://localhost:7777/contact", {
      email,
      message,
    });
    if (res.status === 201) return true;
  } catch (e) {
    console.error(e);
    return false;
  }
};

export default submitData;
