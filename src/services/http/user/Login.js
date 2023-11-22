import axios from "axios";

const url = "http://localhost:8080/login";

export const loginUser = async (email, password) => {
  console.log(url, email, password);
  const response = await axios.post(url, {
    email: email,
    password: password,
  });
  return response;
};
