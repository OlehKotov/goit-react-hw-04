import "./App.css";
import SearchBar from "./components/SearchBar/SearchBar";
import { useEffect, useState } from "react";
import { MutatingDots } from "react-loader-spinner";
import { requestImages } from "./services/api";
import Loader from "./components/Loader/Loader";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import ImageGallery from "./components/ImageGallery/ImageGallery";

function App() {
  const [images, setImages] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [query, setQuery] = useState("");


  const onSetSearchQuery = (searchImage) => {
    setQuery(searchImage);
  };



  useEffect(() => {
    async function fetchImages() {
      try {
        setLoading(true);
        const data = await requestImages();
        setImages(data);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    fetchImages();
  }, []);

  return (
    <div>
      <SearchBar onSetSearchQuery={onSetSearchQuery}/>
      {loading && <Loader />}
      {error && <ErrorMessage />}
      <ImageGallery images={images}/>
    </div>
  );
}

export default App;
