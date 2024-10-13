import axios from "axios";

export const tasklistApi = () => {
  const tasklistBaseUrl = "http://localhost:8080/api";

  const token = ""; // TEMPORARY put token here

  const config = {
    headers: { Authorization: `Bearer ${token}`}
  }

  const getAllTaskList = async (sortBy: string | null = "asc") => {
    const url = `${tasklistBaseUrl}/task-lists?sort=id,${sortBy}`;
    const { data } = await axios.get(url, config);
    return data;
  };

  const getFormDetails = async (
    formId: string,
    processDefinitionKey: string,
    version: string | null = "2"
  ) => {
    const url = `${tasklistBaseUrl}/task-lists/form/${formId}?processDefinitionKey=${processDefinitionKey}&version=${version}`;
    const { data } = await axios.get(url);
    return data;
  };

  
  return {
    getAllTaskList,
    getFormDetails,
  }
};
