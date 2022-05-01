const API_BASE = "http://jsonplaceholder.typicode.com";

export const getData = async (url) => {
  const response = await fetch(`${API_BASE}${url}`);
  return await response.json();
};
