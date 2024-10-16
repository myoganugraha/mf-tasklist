import axios from "axios";

export const loginApi = () => {
  const baseUrl = "http://localhost:8080/api";

  const postLogin = async (username: string, password: string) => {
    const url = baseUrl + `/generate-jwt`;
    const { data } = await axios.post(url, {
      username,
      password,
      rememberMe: false,
    });
    return data.access_token;
  };

  return {
    postLogin,
  };
};
