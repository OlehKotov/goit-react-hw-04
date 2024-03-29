import axios from "axios";

axios.defaults.baseURL = "<https://hn.algolia.com/api/v1>";

export const requestImagesWithTopic = async () => {
    const { data } = await axios.get(
        "https://api.unsplash.com/photos/?client_id=1JiscWumc7hyT3HnHO9G5joNOUGyAs6VivZWQD9gP6c"
      );
      return data;
}