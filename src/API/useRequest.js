import { baseURL } from "../Constrant";

export const FireAPI = async (
  endPoint,
  method = "GET",
  body = null,
  customHeaders = {},
) => {
  const url = `${baseURL}/${endPoint}`;

  const headers = {
    "Content-Type": "application/json",
    ...customHeaders, 
  };

  const options = {
    method: method.toUpperCase(),
    headers,
  };

  if (body && method.toUpperCase() !== "GET") {
    options.body = JSON.stringify(body);
  }

  try {
    const response = await fetch(url, options);

    const isNoContent = response.status === 204;
    const data = isNoContent ? null : await response.json();

    if (response.ok) {
      return data;
    } else {
      return Promise.reject(data || { message: "Something went wrong" });
    }
  } catch (error) {
    console.error("API Fetch Error:", error);
    throw error;
  }
};
