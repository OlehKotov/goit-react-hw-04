import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.unsplash.com/search/photos"
});


export const requestImagesByQuery = async (query = "", page = 1) => {
  const { data } = await instance.get(
    `?client_id=1JiscWumc7hyT3HnHO9G5joNOUGyAs6VivZWQD9gP6c&page=${page}&query=${query}`
  );
  return data.results;
};
