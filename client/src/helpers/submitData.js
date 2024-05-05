import axios from "axios";

const submitData = async (email, message) => {
  if (email == null || message == null)
    return Error("Do not leave fields blank");
  try {
    const res = await axios.post("/v1/contact", {
      email,
      message,
    });
    if (res.status === 201) return { valid: true, message: "" };
    else if (res.status === 429)
      return { valid: false, message: res.data.message };
    else return { valid: false, message: `Error ${res.status}` };
  } catch (e) {
    console.error(e);
    if (e.response.status === 429)
      return { valid: false, message: e.response.data };
    else return { valid: false, message: "Internal Server Error" };
  }
};

export default submitData;
