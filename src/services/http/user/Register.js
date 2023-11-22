import axios from "axios";

const url = "http://localhost:8080/register";

export const registerUser = async (email, password) => {
  console.log(url, email, password);
  const response = await axios.post(url, {
    email: email,
    password: password,
  });
  return response;
};
