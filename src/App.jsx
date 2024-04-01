import "./App.css";
import SearchBar from "./components/SearchBar/SearchBar";
import { useEffect, useState } from "react";
import Loader from "./components/Loader/Loader";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import { requestImagesByQuery } from "./services/images-api";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import ImageModal from "./components/ImageModal/ImageModal";

function App() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [selectedImage, setSelectedImage] = useState(null);

  const onSearch = (searchTerm) => {
    setQuery(searchTerm);
    setPage(1);
    setImages([]); 
  };

  const onAddPage = () => {
    setPage((prevPage) => prevPage + 1);
  };


  const openModal = (imageUrl) => {
    setSelectedImage(imageUrl);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };



  useEffect(() => {
    if (!query) return;
    async function fetchImagesByQuery() {
      try {
        setLoading(true);
        const data = await requestImagesByQuery(query, page);
        setImages((prevImages) => [...prevImages, ...data]);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }

    fetchImagesByQuery();

  }, [query, page]);

  return (
    <div>
      <SearchBar onSearch={onSearch} />
      
      {error && <ErrorMessage />}
      <ImageGallery images={images} openModal={openModal}/>
      {loading && <Loader />}
      {images.length > 0 && <LoadMoreBtn onAddPage={onAddPage} />}
      <ImageModal selectedImage={selectedImage} closeModal={closeModal}/>
    </div>
  );
}

export default App;

