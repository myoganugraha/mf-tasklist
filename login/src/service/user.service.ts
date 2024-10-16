import axios from "axios";

export const userApi = () => {
  const baseUrl = "http://localhost:8080/api";

  const getUserDetails = async (token: string) => {
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };

    const url = baseUrl + "/account";
    const { data } = await axios.get(url, config);
    return data;
  };
  return { getUserDetails };
};
